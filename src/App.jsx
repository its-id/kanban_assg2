import { useState, useContext } from "react";

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
        <Main />
      </section>
    </div>
  );
};

export default App;
