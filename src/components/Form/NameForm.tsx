import * as React from "react";
import { Input, InputLabel, FormHelperText } from "@material-ui/core";

interface IProps {}

interface IState {
  value: string;
}

export default class NameForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { value: "" };
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
        <Input
          type="text"
          placeholder="姓名"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <Input type="submit" value="提交" />
      </form>
    );
  }
}
