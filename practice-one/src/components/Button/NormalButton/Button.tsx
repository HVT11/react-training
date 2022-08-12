import './button.scss';

import { faTableList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  icon?: true;
}

class Button extends React.Component<ButtonProps> {
  render() {
    const { primary, size, label, icon, onClick } = this.props;

    return (
      <button
        type="button"
        className={clsx('btn', `btn--${size}`, { 'btn--primary': primary })}
        onClick={onClick}
      >
        {icon && <FontAwesomeIcon icon={faTableList} className="mg-right-s" />}
        {label}
      </button>
    );
  }
}

export default Button;
