import { Icon } from "@iconify/react";
import OptionsMenu from "../../OptionsMenu/OptionsMenu";

const Options = () => {
  return (
    <section className="flex px-6 md:px-0 justify-between">
      <div className="flex items-center gap-3">
        <OptionsMenu
          content={
            <div className="flex gap-2 items-center border border-[#787486] rounded-md py-2 px-2 font-medium cursor-pointer hover:bg-[#f1eefd] text-[#787486]">
              <Icon icon="tabler:filter" className="w-4 h-4" />
              <span className="hidden md:inline">Filter</span>
              <Icon icon="heroicons:chevron-down-solid" className="w-4 h-4" />
            </div>
          }
        />
        <OptionsMenu
          content={
            <div className="flex gap-2 items-center border border-[#787486] rounded-md py-2 px-2 font-medium cursor-pointer hover:bg-[#f1eefd] text-[#787486]">
              <Icon icon="solar:calendar-date-linear" className="w-4 h-4" />
              <span className="hidden md:inline">Today</span>
              <Icon icon="heroicons:chevron-down-solid" className="w-4 h-4" />
            </div>
          }
        />
      </div>
      <div className="flex items-center gap-4 md:gap-3">
        <OptionsMenu
          right={true}
          content={
            <div className="flex gap-2 items-center border border-[#787486] rounded-md py-2 px-4 font-medium cursor-pointer hover:bg-[#f1eefd] text-[#787486]">
              <Icon icon="fluent:people-16-regular" className="w-4 h-4" />
              <span className="hidden md:inline">Share</span>
            </div>
          }
        />
        <span className="border-r border-[#787486] h-7" />
        <div className="w-10 h-10 rounded-md flex items-center justify-center cursor-pointer text-white hover:bg-[#5030E5] bg-[#5030E5]">
          <Icon icon="ph:rectangles-two-fill" className="w-4 h-4" />
        </div>
        <div className="w-10 h-10 rounded-md flex items-center justify-center cursor-pointer text-[#787486] hover:bg-[#5030E5] hover:text-white">
          <Icon icon="ph:circles-four" className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
};

export default Options;
