import React from "react";
import { Dialog } from "./Dialog";
import { Input, Button } from "@material-ui/core";

interface IState {
  login: string;
}

interface IProps {}

export class SignUpDialog extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { login: "" };
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ login: e.target.value });
  }

  handleSignUp(e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    alert(`Welcome aboard, ${this.state.login}`);
  }

  render() {
    return (
      <Dialog
        title="Mars Exploration Program"
        message="How should we refer to you?"
      >
        <Input value={this.state.login} onChange={this.handleChange} />
        <Button color="primary" onClick={this.handleSignUp}>
          Sign Me Up!
        </Button>
      </Dialog>
    );
  }
}
