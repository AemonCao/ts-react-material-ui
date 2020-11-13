import React from "react";

interface IState {}

interface IProps {
  celsius: number;
}

export class BoilingVerdict extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.celsius >= 100) {
      return <p>水开啦！</p>;
    }
    return <p>水还没开呢！</p>;
  }
}
