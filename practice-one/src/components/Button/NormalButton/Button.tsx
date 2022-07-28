import './button.scss';

import React from 'react';

export interface ButtonProps {
  primary?: boolean;
  size?: 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

class Button extends React.Component<ButtonProps> {
  render() {
    const mode = this.props.primary ? 'btn--primary' : '';
    return (
      <button
        type="button"
        className={['btn', `btn--${this.props.size}`, mode].join(' ')}
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;
