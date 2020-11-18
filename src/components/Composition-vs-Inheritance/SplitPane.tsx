import React from "react";

interface IProps {
  left: any;
  right: any;
}

export const SplitPane: React.FC<IProps> = (props) => {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
};
