import { produce } from "immer";

import { TOGGLE_SIDEBAR, CHANGE_ACTIVE_PROJECT, DRAG_AND_DROP_CARD } from "./actionTypes";

export default function reducer(state, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, toggleSidebar: !action.payload };

    case CHANGE_ACTIVE_PROJECT: {
      const nextState = produce(state, (draft) => {
        draft.projects.map((i) => (action.payload === i.id ? (i.active = true) : (i.active = false)));
      });
      return { ...nextState };
    }
    case DRAG_AND_DROP_CARD: {
      //console.log(state);
      console.log(action.payload);
      const { source, destination, draggableId } = action.payload;
      const nextState = produce(state, (draft) => {
        const activeProject = draft.projects.find((i) => i.active);
        let sourceCol = activeProject.tasksCol.find((i) => i.id === source.droppableId);
        let sourceColTasks = sourceCol.tasks;
        let draggedTask = sourceColTasks.find((i) => i.id === draggableId);

        let destinationCol = activeProject.tasksCol.find((i) => i.id === destination.droppableId);
        let destinationColTasks = destinationCol.tasks;

        if (source.droppableId === destination.droppableId) {
          sourceColTasks.splice(source.index, 1);
          sourceColTasks.splice(destination.index, 0, draggedTask);
        } else {
          sourceColTasks.splice(source.index, 1);
          destinationColTasks.splice(destination.index, 0, draggedTask);
        }
      });
      return { ...nextState };
    }

    default:
      throw new Error();
  }
}
