import React from "react";
import { ThemedButton, ITheme } from "./ThemedButton";

interface IProps extends ITheme {}

export const Toolbar: React.FC<IProps> = (props) => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
};
