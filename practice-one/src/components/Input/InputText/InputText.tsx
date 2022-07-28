import './input-text.scss';

import React from 'react';

interface IInputTextProps {
  name: string;
  text: string;
}

type State = {
  text: string;
};

class InputText extends React.Component<IInputTextProps, State> {
  state = { text: this.props.text };

  handleChangeText = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ text: event.currentTarget.value });
  };

  render() {
    return (
      <div className="input-box">
        <p className="input-box__label">{this.props.name}:</p>
        <input
          type="text"
          className="input-box__input"
          id={this.props.name}
          onChange={this.handleChangeText}
          value={this.state.text}
        />
      </div>
    );
  }
}

export default InputText;
