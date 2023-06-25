import { createContext, useReducer } from "react";
import { appData } from "../utils/data";
import reducer from "../context/CardReducer";

export const CardContext = createContext();

const initialState = appData;

const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <CardContext.Provider value={[state, dispatch]}>{props.children}</CardContext.Provider>;
};
export default Provider;
