import './switchButton.scss';

import React from 'react';

interface ISwitchButtonProps {
  checked: boolean;
  onHandleChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

class SwitchButton extends React.Component<ISwitchButtonProps> {
  render() {
    const { checked, onHandleChange } = this.props;

    return (
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={onHandleChange} />
        <span className="slider round"></span>
      </label>
    );
  }
}

export default SwitchButton;
