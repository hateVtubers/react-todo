import { useContext } from "react";
import { Task } from "./Task";
import { ViewContext } from "../context/viewContext";
import { v4 } from "uuid";

export const Container = () => {
  const {
    stateTask: { tasks },
  } = useContext(ViewContext);
  localStorage.setItem("TAKS", JSON.stringify(tasks));
  return (
    <div className="flex flex-col py-3 gap-4 mt-8 mx-auto container">
      {tasks.map((s) => (
        <Task text={s.text} key={v4()} id={s.id} done={s.done}></Task>
      ))}
    </div>
  );
};
