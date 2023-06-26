import { useContext, Fragment, useState, useEffect } from "react";
import { Transition } from "@headlessui/react";

import { Navbar, Sidebar, Main } from "./components";
import { CardContext } from "./context/CardContext";
import { TOGGLE_SIDEBAR } from "./context/actionTypes";

const App = () => {
  const [state, dispatch] = useContext(CardContext);
  const { toggleSidebar } = state;

  const [isShowing, setIsShowing] = useState(!toggleSidebar);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      dispatch({ type: TOGGLE_SIDEBAR, payload: toggleSidebar });
    }
  }, []);

  return (
    <div className={"w-full bg-white flex"}>
      <Sidebar isShowing={isShowing} setIsShowing={setIsShowing} />
      <section className={`${toggleSidebar ? "w-full" : "w-[calc(100%_-_250px)]"} ml-auto duration-200 ease-in-out overflow-hidden`}>
        <Navbar setIsShowing={setIsShowing} isShowing={isShowing} />
        <Main />
      </section>
    </div>
  );
};

export default App;
