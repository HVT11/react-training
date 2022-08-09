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
    const { label, name, value, type, onHandleChange } = this.props;
    return (
      <div className="input-box">
        <p className="input-box__label">{label}:</p>
        <input
          type={type}
          className="input-box__input"
          name={name}
          onChange={onHandleChange}
          value={value}
        />
      </div>
    );
  }
}

export default Input;
