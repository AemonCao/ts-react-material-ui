import React from "react";
import { IFilter } from "./FilterableProductTable";
import { Input, Checkbox, FormControlLabel } from "@material-ui/core";

interface IState {}

interface IProps extends IFilter {
  onFilterTextChange: (arg0: string) => void;
  onInStockChange: (arg0: boolean) => void;
}

export class SearchBar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    const { filterText, inStockOnly } = this.props;
    return (
      <form>
        <Input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={this.handleFilterTextChange}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={inStockOnly}
              onChange={this.handleInStockChange}
            />
          }
          label="Only show products in stock"
        ></FormControlLabel>
      </form>
    );
  }
}
