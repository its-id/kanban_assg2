import { useContext, useState } from "react";

import { Navbar, Sidebar, Main } from "./components";
import { CardContext } from "./context/CardContext";

const App = () => {
  const [state] = useContext(CardContext);
  const { toggleSidebar } = state;

  const [isShowing, setIsShowing] = useState(!toggleSidebar);

  return (
    <div className={"w-full bg-white flex relative md:static"}>
      <Sidebar isShowing={isShowing} setIsShowing={setIsShowing} />
      <section
        className={`${
          toggleSidebar ? "w-full" : "w-full absolute md:static -z-40 md:z-0 md:w-[calc(100%_-_250px)]"
        } ml-auto duration-200 ease-in-out overflow-hidden`}
      >
        <Navbar setIsShowing={setIsShowing} isShowing={isShowing} />
        <Main />
      </section>
    </div>
  );
};

export default App;
