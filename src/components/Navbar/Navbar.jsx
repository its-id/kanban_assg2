import {
  // Fragment,
  useContext,
} from "react";
// import { Menu, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";

import profilePic from "../../assets/profilePic.svg";
import { CardContext } from "../../context/CardContext";
import { TOGGLE_SIDEBAR } from "../../context/actionTypes";
import OptionsMenu from "../OptionsMenu/OptionsMenu";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ isShowing, setIsShowing }) => {
  const [state, dispatch] = useContext(CardContext);
  const { toggleSidebar } = state;

  return (
    <header
      className={`border-b border-b-[#DBDBDB] h-auto md:h-[88px] flex flex-wrap md:flex-nowrap items-center gap-4 p-4 md:px-4 md:py-0 lg:px-12`}
    >
      <section className={classNames(toggleSidebar ? "block transition-all" : "hidden")}>
        <div
          className="cursor-pointer"
          onClick={() => {
            setIsShowing(!isShowing);
            dispatch({ type: TOGGLE_SIDEBAR, payload: toggleSidebar });
          }}
        >
          <Icon icon="heroicons-outline:menu-alt-2" className="h-6 w-6 text-[#787486]" aria-hidden="true" />
        </div>
      </section>
      <section className="max-w-full basis-full order-1 md:order-none ml-4 m-0 lg:mr-4 h-[44px] md:max-w-[418px] relative grow">
        <Icon icon="circum:search" className="absolute top-2.5 left-4 w-6 h-6 text-[#787486]" aria-hidden="true" />
        <input className="rounded-md border-none outline-none w-full h-full pl-[56px] bg-[#F5F5F5] text-xs" placeholder="Search" type="search" />
      </section>
      <section className="flex gap-4 md:gap-7 ml-auto">
        <Icon icon="uil:calender" className="w-6 h-6 cursor-pointer text-[#787486]" />
        <Icon icon="akar-icons:chat-question" className="w-6 h-6 cursor-pointer text-[#787486]" />
        <span className="relative w-6 h-6 inline-block before:content-[''] before:absolute before:w-[6px] before:h-[6px] before:rounded before:bg-[#D8727D] before:right-1 before:top-px">
          <Icon icon="bi:bell" className="w-6 h-6 text-[#787486] cursor-pointer" />
        </span>
      </section>

      <OptionsMenu
        userMenu={true}
        right={true}
        content={
          <div className="flex items-center gap-4 cursor-pointer ml-4 md:ml-0">
            <div className="hidden lg:block text-center ml-8 md:ml-0">
              <div className="text-[#0D062D] text-base">Anima Agrawal</div>
              <div className="text-[#787486] text-sm">U.P, India</div>
            </div>
            <img src={profilePic} alt="profilePic" className="rounded-full" />
            <Icon icon="fluent:chevron-down-20-regular" className="w-5 h-5 text-[#292D32]" />
          </div>
        }
      />
    </header>
  );
};

export default Navbar;
