import './icon-button.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

library.add(fas);

interface IIconButtonProps {
  icon:
    | ['fas', 'xmark']
    | ['fas', 'pen']
    | ['fas', 'arrow-left']
    | ['fas', 'magnifying-glass'];
  onClick?: () => void;
}

class IconButton extends React.Component<IIconButtonProps> {
  render() {
    return (
      <div className="box-icon" onClick={this.props.onClick}>
        <FontAwesomeIcon icon={this.props.icon} className="icon" />
      </div>
    );
  }
}

export default IconButton;
