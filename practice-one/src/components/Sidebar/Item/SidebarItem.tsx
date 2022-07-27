import './sidebar-item.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

library.add(fas);

export interface ISidebarItemProps {
  id?: string;
  active?: boolean;
  label: string;
  icon: ['fas', 'user-group'] | ['fas', 'user-check'] | ['fas', 'clipboard-check'];
  onClick?: () => void;
}

class SidebarItem extends React.Component<ISidebarItemProps> {
  render() {
    const mode = this.props.active ? 'sidebar__item--active' : '';
    return (
      <div>
        <li className={['sidebar__item', mode].join(' ')} onClick={this.props.onClick}>
          <FontAwesomeIcon icon={this.props.icon} className="sidebar__item__icon" />
          <p className="sidebar__item__label">{this.props.label}</p>
        </li>
      </div>
    );
  }
}

export default SidebarItem;
