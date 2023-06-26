import Header from "./Header/Header";
import Options from "./Options/Options";
import Tasks from "./Tasks/Todos";

const Main = () => {
  return (
    <main className={"flex grow flex-col gap-9 sm:m-4 lg:my-10 lg:mx-12 overflow-hidden"}>
      <Header />
      <Options />
      <Tasks />
    </main>
  );
};

export default Main;
