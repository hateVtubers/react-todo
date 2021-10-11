import { useContext, useState } from "react";
import { Send } from "../svg/icons";
import { ViewContext } from "../context/viewContext";

export const AddInput = () => {
  const { stateColor, add } = useContext(ViewContext);
  const [text, setText] = useState("");
  return (
    <div className="py-4 px-3 bg-aquamarine-500 rounded-lg w-72 mx-auto mt-10 flex items-center justify-between hover:shadow-xl dark:bg-cloud-burst-200 sm:w-80 xl:w-4/12">
      <input
        type="text"
        placeholder="Enter title"
        className="placeholder-cloud-burst-300 text-cloud-burst-300 ml-2 py-1 px-1 rounded bg-aquamarine-500 focus:outline-none focus:ring focus:ring-cloud-burst-200 dark:focus:ring-aquamarine-500 dark:bg-cloud-burst-200 dark:text-aquamarine-600 dark:placeholder-aquamarine-600 sm:w-60 xl:w-10/12"
        onChange={(t) => {
          setText(t.target.value);
        }}
        onKeyPress={(k) => {
          if (k.code === "Enter") {
            setText(k.target.value);
            add(text);
            setText("");
          }
        }}
        value={text}
      />
      <button
        className="mr-2"
        onClick={() => {
          add(text);
          setText("");
        }}
      >
        <Send color={stateColor}></Send>
      </button>
    </div>
  );
};
