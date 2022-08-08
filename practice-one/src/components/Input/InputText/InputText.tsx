import './input-text.scss';

import React from 'react';

interface IInputProps {
  label: string;
  name?: string;
  value?: string;
  type: 'text' | 'file';
  // eslint-disable-next-line no-unused-vars
  onHandleChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

class Input extends React.Component<IInputProps> {
  render() {
    return (
      <div className="input-box">
        <p className="input-box__label">{this.props.label}:</p>
        <input
          type={this.props.type}
          className="input-box__input"
          name={this.props.name}
          onChange={this.props.onHandleChange}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default Input;
