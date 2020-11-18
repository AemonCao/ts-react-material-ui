import React from "react";

interface IState {}

interface IProps {
  color: string;
}

export const FancyBorder: React.FC<IProps> = (props) => {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
};
