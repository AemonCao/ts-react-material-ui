import React from "react";

interface IState {
  value: string;
}

interface IProps {}

export default class FlavorForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { value: "coconut" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    alert("你喜欢的水果是：" + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="grapefruit">葡萄柚</option>
          <option value="lime">酸橙</option>
          <option value="coconut">椰子</option>
          <option value="mango">芒果</option>
        </select>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
