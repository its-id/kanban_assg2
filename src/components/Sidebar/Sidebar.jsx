import { Fragment, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { Icon } from "@iconify/react";
import { CardContext } from "../../context/CardContext";
import { TOGGLE_SIDEBAR, CHANGE_ACTIVE_PROJECT } from "../../context/actionTypes";
import logo from "../../assets/companyLogo.svg";

// const navigation = [
//   { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
//   { name: "Team", href: "#", icon: UsersIcon, current: false },
//   { name: "Projects", href: "#", icon: FolderIcon, current: false },
//   { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
//   { name: "Documents", href: "#", icon: InboxIcon, current: false },
//   { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
// ];

const Sidebar = () => {
  const [state, dispatch] = useContext(CardContext);
  const { menu, projects, toggleSidebar } = state;

  return (
    <>
      <Transition.Root show={!toggleSidebar} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40"
          onClose={() => {
            dispatch({ type: TOGGLE_SIDEBAR, payload: toggleSidebar });
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-700">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 pt-2">
                  <button
                    type="button"
                    className="flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => dispatch({ type: TOGGLE_SIDEBAR, payload: toggleSidebar })}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <Icon icon="solar:double-alt-arrow-left-outline" className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4">
                <img className="h-8 w-auto" src={logo} alt="Project M." /> Project M.
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {menu.map((item, idx) => (
                    <a
                      key={idx}
                      to="#"
                      className="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    >
                      <Icon icon={item.icon} className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true" />
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      {/* <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0"> */}
      {/* Sidebar component, swap this element with another sidebar if you like */}
      {/* <div className="flex flex-col flex-grow pt-5 bg-indigo-700 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img className="h-8 w-auto" src={logo} alt="Project M." /> Project M.
          </div>
          <div className="mt-5 flex-1 flex flex-col">
            <nav className="flex-1 px-2 pb-4 space-y-1">
              {menu.map((item, idx) => (
                <a key={idx} to="#" className="text-indigo-100 hover:bg-indigo-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  <Icon icon={item.icon} className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true" />
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Sidebar;
