import { Fragment, useState, useContext, useEffect } from "react";
import { Transition } from "@headlessui/react";

import { Navbar, Sidebar, Main } from "./components";
import { CardContext } from "./context/CardContext";

const App = () => {
  const [state, dispatch] = useContext(CardContext);
  const { toggleSidebar } = state;

  const [isShowing, setIsShowing] = useState(!toggleSidebar);

  useState(() => {
    if (window.innerWidth < 1024) {
      dispatch({ type: TOGGLE_SIDEBAR, payload: toggleSidebar });
    }
  }, []);

  return (
    <div className={"w-full bg-white flex"}>
      <Sidebar isShowing={isShowing} setIsShowing={setIsShowing} />
      <section className="w-full overflow-hidden transition-all">
        <Navbar setIsShowing={setIsShowing} isShowing={isShowing} />
        <main className="flex grow flex-col gap-9 sm:m-4 lg:my-10 lg:mx-12 overflow-hidden">
          <Main />
        </main>
      </section>
    </div>
  );
};

export default App;
