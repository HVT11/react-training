import './switchButton.scss';

import React from 'react';

interface IProps {
  checked: boolean;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

class SwitchButton extends React.Component<IProps> {
  render() {
    const { checked, onChange } = this.props;

    return (
      <label className="switch">
        <input 
          type="checkbox" 
          checked={checked} 
          onChange={onChange} 
        />
        <span className="slider round"></span>
      </label>
    );
  }
}

export default SwitchButton;
