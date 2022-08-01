import './button.scss';

import { faTableList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  icon?: true;
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
        {this.props.icon && (
          <FontAwesomeIcon icon={faTableList} style={{ marginRight: '4px' }} />
        )}
        {this.props.label}
      </button>
    );
  }
}

export default Button;
