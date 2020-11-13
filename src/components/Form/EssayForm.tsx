import React from "react";
import { FormControl, TextField, Input } from "@material-ui/core";

interface IState {
  value: string;
}

interface IProps {}

export default class EssayForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      value: "这个人很留下，什么都没用懒。",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    alert(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormControl>
          <TextField
            label="文章"
            multiline
            value={this.state.value}
            onChange={this.handleChange}
            variant="outlined"
          />
        </FormControl>
        <FormControl>
          <Input type="submit" value="提交" />
        </FormControl>
      </form>
    );
  }
}
