import './switch-button.scss';

import React from 'react';

interface ISwitchButtonProps {
  checked: boolean;
  // eslint-disable-next-line no-unused-vars
  onHandleChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

class SwitchButton extends React.Component<ISwitchButtonProps> {
  render() {
    const { checked, onHandleChange } = this.props;
    return (
      <label className="switch" style={{ margin: '0 20px' }}>
        <input type="checkbox" checked={checked} onChange={onHandleChange} />
        <span className="slider round"></span>
      </label>
    );
  }
}

export default SwitchButton;
