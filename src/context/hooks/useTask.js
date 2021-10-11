import { useReducer } from "react";
import reducer from "./reducerTask";
import { v4 } from "uuid";

export const useTask = () => {
  const initialState = {
    tasks:
      (JSON.parse(localStorage.getItem("TAKS")) ?? []).length === 0
        ? []
        : JSON.parse(localStorage.getItem("TAKS")),
  };
  const [stateTask, dispatch] = useReducer(reducer, initialState);
  const add = (t) => {
    dispatch({
      type: "ADD_TASK",
      payload: { text: t, id: v4(), done: false },
    });
  };

  const remove = (id) => {
    dispatch({
      type: "REMOVE_TASK",
      payload: id[0],
    });
  };

  const doneTask = (id) => {
    dispatch({
      type: "DONE_TASK",
      payload: id[0],
    });
  };

  return {
    stateTask,
    add,
    remove,
    doneTask,
  };
};
