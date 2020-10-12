import * as React from "react";

export interface IProps {
  value: string;
  onClick: Function;
}

export const Square: React.FC<IProps> = (props) => {
  const { value, onClick } = props;
  return (
    <button
      className="square"
      onClick={() => {
        onClick();
      }}
    >
      {value}
    </button>
  );
};
