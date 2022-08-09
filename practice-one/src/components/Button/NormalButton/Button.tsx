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
    const { primary, size, label, icon, onClick } = this.props;
    const mode = primary ? 'btn--primary' : '';
    return (
      <button
        type="button"
        className={['btn', `btn--${size}`, mode].join(' ')}
        onClick={onClick}
      >
        {icon && <FontAwesomeIcon icon={faTableList} style={{ marginRight: '4px' }} />}
        {label}
      </button>
    );
  }
}

export default Button;
