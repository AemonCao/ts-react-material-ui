import * as React from "react";

export interface IProps {
  value: string;
  onClick: Function;
}

const Square: React.FC<IProps> = (props) => {
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

export default Square;
