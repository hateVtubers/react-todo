import { createContext } from "react";
import { useColors } from "./hooks/useColors";
import { useTask } from "./hooks/useTask";

export const ViewContext = createContext();

export const ViewContextProvider = ({ children }) => {
  const { stateColor, PrimaryColor, SecondaryColor } = useColors();
  const { stateTask, add, remove, doneTask } = useTask();
  return (
    <ViewContext.Provider
      value={{
        stateColor,
        PrimaryColor,
        SecondaryColor,
        stateTask,
        add,
        remove,
        doneTask,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};
