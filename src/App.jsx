import { useState, useContext, useEffect } from "react";
import { Navbar, Sidebar, Main } from "./components";
import { CardContext } from "./context/CardContext";

const App = () => {
  const [state, dispatch] = useContext(CardContext);
  const { toggleSidebar } = state;

  useEffect(() => {
    if (window.innerWidth < 1024) {
      dispatch({ type: TOGGLE_SIDEBAR, payload: toggleSidebar });
    }
  }, []);

  return (
    <div className={`app ${toggleSidebar ? "close-sidebar" : ""}`}>
      <Sidebar />
      <section className="md:pl-64 flex flex-col flex-1">
        <Navbar />
        <main className="content-section">
          <Main />
        </main>
      </section>
    </div>
  );
};

export default App;
