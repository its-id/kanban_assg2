import { useContext } from "react";
import { Icon } from "@iconify/react";

import { CardContext } from "../../../context/CardContext";
import OptionsMenu from "../../OptionsMenu/OptionsMenu";
import p1 from "../../../assets/people/person1.svg";
import p2 from "../../../assets/people/person2.svg";
import p3 from "../../../assets/people/person3.svg";
import p4 from "../../../assets/people/person4.svg";

const Header = () => {
  const [state] = useContext(CardContext);
  const { projects } = state;

  const currProject = projects.filter((i) => i.active);

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-start md:items-baseline p-6 md:p-0 justify-between">
      <div className="flex items-baseline gap-2 md:gap-5">
        <h1 className="font-semibold leading-5 text-gray-900 text-3xl md:text-5xl">{currProject[0].title}</h1>
        <span className="inline-flex items-center p-1 border border-transparent font-semibold rounded bg-[#5030E5]/20 hover:bg-[#5030E5]/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-[#5030E5]">
          <Icon icon="tabler:pencil" className="w-4 h-4 cursor-pointer" alt="Edit" />
        </span>
        <span className="inline-flex items-center p-1 border border-transparent font-semibold rounded bg-[#5030E5]/20 hover:bg-[#5030E5]/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-[#5030E5]">
          <Icon icon="material-symbols:link" className="w-4 h-4 cursor-pointer" alt="Link" />
        </span>
      </div>
      <div className="flex items-center gap-3 mr-2.5">
        <OptionsMenu
          content={
            <div className="flex items-center gap-2 font-medium text-[#5030E5]">
              <span className="inline-flex items-center p-1 border border-transparent font-semibold rounded bg-[#5030E5]/20 hover:bg-[#5030E5]/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <Icon icon="ic:round-plus" className="w-4 h-4" alt="Invite" />
              </span>
              Invite
            </div>
          }
        />
        <div className="flex">
          <img className="-mr-2" src={p1} alt="User Name" />
          <img className="-mr-2" src={p2} alt="User Name" />
          <img className="-mr-2" src={p3} alt="User Name" />
          <img className="-mr-2" src={p4} alt="User Name" />
          <span className="-mr-2 w-10 h-10 border-2 border-white rounded-full bg-[#F4D7DA] text-[#D25B68] flex items-center justify-center text-semibold">
            +2
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
