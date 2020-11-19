import React from "react";
import { FancyBorder } from "./FancyBorder";

interface IProps {
  title: string;
  message: string;
}

export const Dialog: React.FC<IProps> = (props) => {
  const { title, message } = props;
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{title}</h1>
      <p className="Dialog-message">{message}</p>
    </FancyBorder>
  );
};
