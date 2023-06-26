import { Icon } from "@iconify/react";
import { Draggable } from "react-beautiful-dnd";

import OptionsMenu from "../../../OptionsMenu/OptionsMenu";

const TodoCard = ({ id, title, text, users, comments, files, priority, image, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          className="bg-white rounded-lg p-5 gap-6 flex flex-col cursor-grab"
          id={id}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className={`${snapshot.isDraggingOver ? "placeholder" : ""}`}>
            <div className="mb-2 flex items-center justify-between">
              <span
                className={`bg-[#dfa874]/20 rounded-md py-1 px-1.5 text-xs text-[#D58D49] ${
                  priority === "Low"
                    ? "bg-[#dfa874]/20 text-[#D58D49]"
                    : priority === "High"
                    ? "bg-[#d8727d]/10 text-[#D8727D]"
                    : priority === "Completed" && "bg-[#83c29d]/20 text-[#7ac555]"
                }`}
              >
                {priority}
              </span>

              <OptionsMenu
                right={true}
                classes="ml-auto"
                content={<span className="text-lg text-[#0D062D] cursor-pointer flex items-center">. . .</span>}
              />
            </div>
            <h2 className="mb-2">{title}</h2>
            {text && <p className="text-xs">{text}</p>}
            {image && <img src={image} alt={title} />}
          </div>
          <div className="flex items-center justify-between">
            {users && (
              <div className="flex items-center">
                {users.map((i, ind) => (
                  <img key={ind} className="w-6 h-6 -ml-1.5" src={i} alt="User Name" />
                ))}
              </div>
            )}
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-2">
                <Icon icon="tabler:message-2" className="w-4 h-4 text-[#787486]" /> {comments} comments
              </span>
              <span className="flex items-center gap-2">
                <Icon icon="fluent-emoji-high-contrast:file-folder" className="w-4 h-4 text-[#787486]" />
                {files} files
              </span>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TodoCard;
