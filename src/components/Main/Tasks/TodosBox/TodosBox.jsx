import { Icon } from "@iconify/react";
import { Droppable } from "react-beautiful-dnd";
import TodoCard from "../TodoCard/TodoCard";
import OptionsMenu from "../../../OptionsMenu/OptionsMenu";

const TodosBox = ({ id, color, title, todos, addBtn }) => {

  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          className={"sm:w-full sm:min-h-auto bg-[#F5F5F5] rounded-lg p-5 gap-6 md:w-[354px] flex flex-col shrink-0 md:min-h-[500px]"}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div
            className={`border-b-3 flex items-center gap-2 pb-5 ${
              color === "orange"
                ? "border-b-[#7ac555]"
                : color === "orange"
                ? "border-b-[#ffa500]"
                : color === "purple"
                ? "border-b-[#5030E5]"
                : color === "blue" && "border-b-[#76a5ea]"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-lg ${
                color === "orange"
                  ? "bg-[#7ac555]"
                  : color === "orange"
                  ? "bg-[#ffa500]"
                  : color === "purple"
                  ? "bg-[#5030E5]"
                  : color === "blue" && "bg-[#76a5ea]"
              }`}
            />
            <div className="font-semibold text-[#0D062D] text-base">{title}</div>
            <div className="bg-[#E0E0E0] rounded-full h-5 w-5 flex items-center justify-center text-[#625F6D] text-xs">{todos?.length}</div>
            {addBtn && (
              <OptionsMenu
                right={true}
                classes="ml-auto"
                content={
                  <div className="flex items-center gap-2 font-medium text-[#5030E5]">
                    <span className="inline-flex items-center p-1 border border-transparent font-semibold rounded bg-[#5030E5]/20 hover:bg-[#5030E5]/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <Icon icon="ic:round-plus" className="w-4 h-4" alt="Invite" />
                    </span>
                    Invite
                  </div>
                }
              />
            )}
          </div>
          {todos?.map((todo, index) => (
            <TodoCard key={todo.id} index={index} {...todo} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TodosBox;
