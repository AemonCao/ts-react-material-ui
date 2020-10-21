import * as React from "react";

interface IProps {}

interface GreetingIProps {
  isLoggedIn: boolean;
}

const UserGreeting: React.FC<IProps> = (props) => {
  return <h1>Welcome back!</h1>;
};

const GuestGreeting: React.FC<IProps> = (props) => {
  return <h1>Please sign ip.</h1>;
};

export const Greeting: React.FC<GreetingIProps> = (props) => {
  const { isLoggedIn } = props;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};
