import './input-text.scss';

import React from 'react';

interface IInputProps {
  name: string;
  value?: string;
  type: 'text' | 'file';
}

type State = {
  value?: string;
};

class Input extends React.Component<IInputProps, State> {
  state = { value: this.props.value ? this.props.value : '' };

  handleChangeText = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ value: event.currentTarget.value });
  };

  static getDerivedStateFromProps(props: IInputProps, state: State) {
    if (props.value !== state.value) {
      return {
        value: props.value,
      };
    } else return null;
  }

  render() {
    return (
      <div className="input-box">
        <p className="input-box__label">{this.props.name}:</p>
        <input
          type={this.props.type}
          className="input-box__input"
          id={this.props.name}
          onChange={this.handleChangeText}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default Input;
