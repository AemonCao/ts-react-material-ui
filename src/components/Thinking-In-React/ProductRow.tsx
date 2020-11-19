import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

export interface Iproduct {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

interface IState {}

interface IProps {
  product: Partial<Iproduct>;
}

export class ProductRow extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { product } = this.props;
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );
    return (
      <TableRow hover={true}>
        <TableCell>{name}</TableCell>
        <TableCell>{product.price}</TableCell>
      </TableRow>
    );
  }
}
