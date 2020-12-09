import React from "react";
import { Button } from "@material-ui/core";
import { TextContext } from "./TextContext";

export interface ITheme {}

interface IState {}

interface IProps extends ITheme {}

export class ThemedButton extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  static contextType = TextContext;

  render() {
    return <Button>{this.context}</Button>;
  }
}
