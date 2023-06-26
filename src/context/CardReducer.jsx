import { produce } from "immer";

import { TOGGLE_SIDEBAR, CHANGE_PROJECT, DRAG_AND_DROP_CARD } from "./actionTypes";

export default function reducer(state, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, toggleSidebar: !action.payload };
      
    case CHANGE_PROJECT: {
      const nextState = produce(state, (draft) => {
        draft.projects.map((i) => (action.payload === i.id ? (i.active = true) : (i.active = false)));
      });
      return { ...nextState };
    }

    case DRAG_AND_DROP_CARD: {
      const { source, destination, draggableId } = action.payload;

      const nextState = produce(state, (draft) => {
        const currProject = draft.projects.find((i) => i.active);
        let currSection = currProject.todosTab.find((i) => i.id === source.droppableId);
        let currSectionTodos = currSection.todos;
        let currTodo = currSectionTodos.find((i) => i.id === draggableId);

        let endSection = currProject.todosTab.find((i) => i.id === destination.droppableId);
        let endTodos = endSection.todos;

        if (source.droppableId === destination.droppableId) {
          currSectionTodos.splice(source.index, 1);
          currSectionTodos.splice(destination.index, 0, currTodo);
        } else {
          currSectionTodos.splice(source.index, 1);
          endTodos.splice(destination.index, 0, currTodo);
        }
      });
      return { ...nextState };
    }

    default:
      throw new Error();
  }
}
