import * as React from "react";

interface IProps {}

interface IState {
  date: Date;
  timerID?: number;
}

export default class Clock extends React.Component<IProps, IState> {
  timerID?: NodeJS.Timeout;
  constructor(props: IProps) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    if (this.timerID) clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>现在是{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}
