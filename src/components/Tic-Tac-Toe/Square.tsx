import * as React from "react";

export interface IProps {
  value: string;
  onClick: (i: string) => {};
}

const Square: React.FC<IProps> = ({ value, onClick }) => {
  return (
    <button className="square" onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

export default Square;
