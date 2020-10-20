import * as React from "react";
import { Button } from "@material-ui/core";

interface IProps {}

interface IState {
  isToggleOn: boolean;
}

export default class Toggle extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { isToggleOn: true };
    // 用于回调时固定this
    // 如果不使用bind，可以使用下方的public class fields 语法，或在调用时使用箭头函数
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  // 使用 public class fields 语法
  //   handleClick = () => {
  //     this.setState((state) => ({
  //       isToggleOn: !state.isToggleOn,
  //     }));
  //   };

  render() {
    return (
      <Button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </Button>
    );
  }
}
