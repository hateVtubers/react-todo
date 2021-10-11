import { useContext } from "react";
import { ViewContext } from "../context/viewContext";
import { Trash, CheckA, CheckB } from "../svg/icons";

export const Task = ({ text, id, done }) => {
  const { stateColor, stateTask:{ tasks }, remove, doneTask } = useContext(ViewContext);
  return (
    <div className="py-4 px-3 bg-aquamarine-500 rounded-lg w-80 mx-auto flex justify-between flex-wrap lg:hover:shadow-xl dark:bg-cloud-burst-200 transition-all sm:w-96 xl:w-6/12">
      <div className="flex gap-2 items-center justify-center">
        <button
          onClick={() => {
            doneTask(tasks.filter((r) => r.id === id));
          }}
        >
          {done ? <CheckA color={stateColor} /> : <CheckB color={stateColor} />}
        </button>
        <span
          className={`${
            done ? "line-through" : ""
          } text-cloud-burst-200 break-words dark:text-aquamarine-600 transition-all text-sm`}
        >
          {text}
        </span>
      </div>
      <button
        onClick={() => {
          remove(tasks.filter((r) => r.id === id));
        }}
      >
        <Trash color={stateColor} />
      </button>
    </div>
  );
};
