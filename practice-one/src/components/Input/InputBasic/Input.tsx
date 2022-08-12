import './input.scss';

import React from 'react';

interface IInputProps {
  label: string;
  name?: string;
  value?: string;
  type: 'text' | 'file';
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

class Input extends React.Component<IInputProps> {
  render() {
    const { label, name, value, type, onChange } = this.props;

    return (
      <div className="input-box">
        <p className="input-box__label">{label}:</p>
        <input
          type={type}
          className="input-box__input"
          name={name}
          onChange={onChange}
          value={value}
        />
      </div>
    );
  }
}

export default Input;
