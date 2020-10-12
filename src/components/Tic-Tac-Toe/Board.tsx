import * as React from "react";
import { Square, IProps as SquareIProps } from "./Square";

export interface IProps {
  squares: string[];
  onClick: (i: number) => void;
}

export const Board: React.FC<IProps> = (props) => {
  const { squares, onClick } = props;
  const renderSquare = function (i: number) {
    const squareProps: SquareIProps = {
      value: squares[i],
      onClick: () => {
        onClick(i);
      },
    };
    return <Square {...squareProps} />;
  };
  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
