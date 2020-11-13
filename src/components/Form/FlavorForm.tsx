import React from "react";
import { Select, MenuItem, Input, FormControl } from "@material-ui/core";

interface IState {
  value: String;
}

interface IProps {}

export default class FlavorForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { value: "coconut" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) {
    if (typeof event.target.value === "string")
      this.setState({ value: event.target.value });
  }

  handleSubmit(event: React.FormEvent<HTMLDivElement>) {
    alert("你喜欢的水果是：" + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <FormControl onSubmit={this.handleSubmit}>
        <Select
          label="文章"
          autoWidth
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value="grapefruit">葡萄柚</MenuItem>
          <MenuItem value="lime">酸橙</MenuItem>
          <MenuItem value="coconut">椰子</MenuItem>
          <MenuItem value="mango">芒果</MenuItem>
        </Select>
        <Input type="submit" value="提交" />
      </FormControl>
    );
  }
}
