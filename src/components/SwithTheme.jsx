import { useContext, useState } from "react";
import { Sun, Moon } from "../svg/icons";
import { ViewContext } from "../context/viewContext";

export const SwithTheme = () => {
  const [theme, setTheme] = useState(false);
  const { PrimaryColor, SecondaryColor } = useContext(ViewContext);
  return (
    <>
      <button
        onClick={() => {
          setTheme(!theme);
          theme ? PrimaryColor() : SecondaryColor();
          document.documentElement.classList.toggle("dark");
        }}
        className="transition-all absolute right-0 mr-3"
      >
        {theme ? <Sun></Sun> : <Moon></Moon>}
      </button>
    </>
  );
};
