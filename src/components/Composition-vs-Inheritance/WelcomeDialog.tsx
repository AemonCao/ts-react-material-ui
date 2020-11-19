import React from "react";
import { Dialog } from "./Dialog";

interface IProps {}

export const WelcomeDialog: React.FC<IProps> = (props) => {
  return (
    <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />
  );
};
