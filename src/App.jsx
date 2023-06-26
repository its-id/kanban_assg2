import { useContext, Fragment, useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

import { Navbar, Sidebar, Main } from "./components";
import { CardContext } from "./context/CardContext";
import { TOGGLE_SIDEBAR } from "./context/actionTypes";

const App = () => {
  const [state, dispatch] = useContext(CardContext);
  const { toggleSidebar } = state;

  const [isShowing, setIsShowing] = useState(!toggleSidebar);
  // const [showMain, setShowMain] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      dispatch({ type: TOGGLE_SIDEBAR, payload: toggleSidebar });
    }
  }, []);

  return (
    <div className={"w-full bg-white flex"}>
      <Sidebar isShowing={isShowing} setIsShowing={setIsShowing} />
      <Transition
        as={Fragment}
        show={true}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-[250px]"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-[250px]"
      >
      <section className={`${toggleSidebar ? "w-full" : "w-[calc(100%_-_250px)]"} overflow-hidden`}>
        <Navbar setIsShowing={setIsShowing} isShowing={isShowing} />
        <Main />
      </section>
      </Transition>
    </div>
  );
};

export default App;
