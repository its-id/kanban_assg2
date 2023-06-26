import { useContext, Fragment, useState } from "react";
import { Transition } from "@headlessui/react";

import { Icon } from "@iconify/react";
import { CardContext } from "../../context/CardContext";
import { TOGGLE_SIDEBAR, CHANGE_PROJECT } from "../../context/actionTypes";

import logo from "../../assets/companyLogo.svg";
import OptionsMenu from "../OptionsMenu/OptionsMenu";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = ({ isShowing, setIsShowing }) => {
  const [state, dispatch] = useContext(CardContext);
  const { menu, projects, toggleSidebar } = state;

  return (
    <Transition
      as={Fragment}
      show={isShowing}
      enter="transition ease-in-out duration-300 transform"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-in-out duration-300 transform"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <aside
        className={classNames(
          toggleSidebar ? "hidden" : "absolute bg-white md:static z-40 md:z-0",
          "grow-0 shrink-0 w-[250px] border-r border-r-[#DBDBDB]"
        )}
      >
        <section className="flex items-center justify-between grow-0 shrink-0 w-[250px] h-[88px] border-b border-b-[#DBDBDB] px-[24px]">
          <div className="flex gap-[8px] font-semibold text-xl text-[#0D062D]">
            <img src={logo} alt="Project M." />
            Project M.
          </div>
          <div
            className="w-[26px] h-[20px] relative cursor-pointer"
            onClick={() => {
              setIsShowing(!isShowing);
              dispatch({ type: TOGGLE_SIDEBAR, payload: toggleSidebar });
            }}
          >
            <Icon icon="bi:chevron-double-left" className="w-6 h-6 text-[#787486]" alt="Arrow Left" />
          </div>
        </section>
        <nav className="border-b border-b-[#DBDBDB] pt-3.5 pb-[16px] mx-3 mt-[3px] mb-4">
          {menu.map((i) => {
            return (
              <a
                key={i.id}
                className="flex items-center gap-3 py-[13px] px-3 font-medium rounded-md cursor-pointer hover:bg-[#f1eefd]"
                title={i.title}
              >
                <Icon icon={i.icon} className="w-6 h-6 text-[#787486]" /> {i.title}
              </a>
            );
          })}
        </nav>
        <section>
          <div className="flex justify-between items-center uppercase font-semibold text-xs p-3">
            my projects
            <OptionsMenu content={<Icon icon="fluent:add-square-24-regular" className="w-4 h-4 text-[#787486]" />} />
          </div>
        </section>
        <section className="my-2 mx-3">
          {projects.map((i) => {
            return (
              <div
                key={i.id}
                className={classNames(
                  i.active ? "text-[#0D062D] bg-[#f1eefd]" : "text-[#787486]",
                  `hover:text-[#0D062D] hover:bg-[#f1eefd] flex items-center gap-4 py-2 px-3 font-semibold rounded-md mb-2.5 cursor-pointer before:content-[''] before:w-2 before:h-2 before:rounded ${
                    i.color === "orange"
                      ? "before:bg-[#ffa500]"
                      : i.color === "purple"
                      ? "before:bg-[#5030E5]"
                      : i.color === "blue"
                      ? "before:bg-[#76a5ea]"
                      : "before:bg-[#7ac555]"
                  }`
                )}
                title={i.title}
                onClick={() => {
                  dispatch({ type: CHANGE_PROJECT, payload: i.id });
                }}
              >
                {i.title}
                <OptionsMenu
                  classes="ml-auto -top-[2px]"
                  content={<span className={classNames(i.active ? "inline-block" : "hidden", "tracking-tighter hover:visible")}>. . .</span>}
                />
              </div>
            );
          })}
        </section>
        <section className="bg-[#f5f5f5] rounded-2xl mt-[78px] mb-3 mx-5 text-center pt-[43px] px-5 pb-5 flex flex-col gap-2.5 relative">
          <div className="bg-[#f6f1e0] w-[66px] h-[66px] m-auto rounded-full flex items-center justify-center -top-[33px] left-[calc(50%_-_33px)] absolute">
            <Icon icon="ant-design:bulb-filled" className="w-6 h-6" color="#fbcb18" />
          </div>
          <div className="font-medium text-[#0D062D] text-sm">Thoughts Time</div>
          <p className="text-xs text-[#787486]">We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
          <button className="bg-gray-50 rounded text-black text-sm font-semibold p-3 border-none cursor-pointer hover:bg-[#f1eefd]">
            Write a message
          </button>
        </section>
      </aside>
    </Transition>
  );
};

export default Sidebar;
