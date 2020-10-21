import * as React from "react";
import { Greeting } from "./Greeting";

export interface IProps {}

export interface IState {
  isLoggedIn: boolean;
}

export interface IButtonProps {
  onClick: React.MouseEventHandler;
}

export default class LoginControl extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function LoginButton(props: IButtonProps) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props: IButtonProps) {
  return <button onClick={props.onClick}>Logount</button>;
}
