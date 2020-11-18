import React from "react";
import { FancyBorder } from "./FancyBorder";

interface IState {}

interface IProps {}

export const WelcomeDialog: React.FC<IProps> = (props) => {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Welcome</h1>
      <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
};
