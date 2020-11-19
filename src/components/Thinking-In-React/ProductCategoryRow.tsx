import React from "react";
import { Iproduct } from "./ProductRow";
import { TableRow, TableCell } from "@material-ui/core";

interface IState {}

export class ProductCategoryRow extends React.Component<
  Partial<Iproduct>,
  IState
> {
  constructor(props: Partial<Iproduct>) {
    super(props);
    this.state = {};
  }

  render() {
    const { category } = this.props;
    return (
      <TableRow>
        <TableCell colSpan={2} align="center">
          {category}
        </TableCell>
      </TableRow>
    );
  }
}
