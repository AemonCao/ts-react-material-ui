import React from "react";
import { Iproduct, ProductRow } from "./ProductRow";
import { ProductCategoryRow } from "./ProductCategoryRow";
import { IFilter } from "./FilterableProductTable";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from "@material-ui/core";

export interface IProducts {
  products: Array<Partial<Iproduct>>;
}

interface IState {}

interface IProps extends IProducts, IFilter {}

export class ProductTable extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { filterText, inStockOnly } = this.props;

    const rows: Array<JSX.Element> = [];
    let lastCategory: string | null | undefined = null;

    this.props.products.forEach((product) => {
      if (product.name?.indexOf(filterText) === -1) return;
      if (inStockOnly && !product.stocked) return;
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{rows}</TableBody>
        </Table>
      </TableContainer>
    );
  }
}
