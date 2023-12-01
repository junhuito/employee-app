import { useState } from "react";

export const useToggle = (initialState = false) => {
  const [visible, setVisibility] = useState(initialState);

  const toggle = () => setVisibility((prev) => !prev);

  const setToggleStatus = (value: boolean) => setVisibility(value);

  return { visible, toggle, setToggleStatus };
};
