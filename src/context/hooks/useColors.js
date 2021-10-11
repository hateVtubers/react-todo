import { useState } from "react";

export const useColors = (primary="rgb(74, 98, 172)", secondary="rgb(111, 255, 233)") => {
  const [stateColor, setStateColor] = useState(primary);
  const PrimaryColor = () => setStateColor(primary);
  const SecondaryColor = () => setStateColor(secondary);

  return {
    stateColor,
    PrimaryColor,
    SecondaryColor,
  };
};
