import './iconButton.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, IconName, IconPrefix } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

library.add(fas);

interface IIconButtonProps {
  icon: [IconPrefix, IconName];
  onHandleClick?: () => void;
}

class IconButton extends React.Component<IIconButtonProps> {
  render() {
    const { icon, onHandleClick } = this.props;

    return (
      <div className="box-icon" onClick={onHandleClick}>
        <FontAwesomeIcon icon={icon} className="icon" />
      </div>
    );
  }
}

export default IconButton;
