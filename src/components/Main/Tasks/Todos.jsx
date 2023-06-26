import { useContext } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { CardContext } from "../../../context/CardContext";
import { DRAG_AND_DROP_CARD } from "../../../context/actionTypes";
import TodosBox from "./TodosBox/TodosBox";

const Todos = () => {
  const [state, dispatch] = useContext(CardContext);
  const { projects } = state;

  const currProject = projects.filter((i) => i.active);
  const { todosTab } = currProject[0];

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    dispatch({ type: DRAG_AND_DROP_CARD, payload: result });
  };

  console.log("todosTab", todosTab);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-col md:flex-row gap-4 overflow-hidden overflow-x-auto">
        {todosTab.map((todos, index) => (
          <TodosBox key={todos.id} {...todos} addBtn={index === 0} />
        ))}
      </div>
    </DragDropContext>
  );
};

export default Todos;
