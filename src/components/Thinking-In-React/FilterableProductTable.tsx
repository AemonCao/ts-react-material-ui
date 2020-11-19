import React from "react";
import { SearchBar } from "./SearchBar";
import { ProductTable, IProducts } from "./ProductTable";

export interface IFilter {
  filterText: string;
  inStockOnly: boolean;
}

interface IState extends IFilter {}

interface IProps extends IProducts {}

export class FilterableProductTable extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { filterText: "", inStockOnly: false };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText: string) {
    this.setState({ filterText: filterText });
  }

  handleInStockChange(inStockOnly: boolean) {
    this.setState({ inStockOnly: inStockOnly });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}
