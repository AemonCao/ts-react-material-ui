import React from "react";
import { Input } from "@material-ui/core";

const scaleNames: { [key: string]: string } = {
  c: "摄氏度",
  f: "华氏度",
};

interface IState {}

interface IProps {
  scale: string;
  temperature: string;
  onTemperatureChange: (val: string) => void;
}

export class TemperatureInput extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    console.log(temperature, scale);
    return (
      <fieldset>
        <legend>请输入{scaleNames[scale]}:</legend>
        <Input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
