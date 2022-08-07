import './sidebar-item.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

library.add(fas);

interface ISidebarItemProps {
  id?: string;
  index?: string;
  label: string;
  icon: ['fas', 'user-group'] | ['fas', 'user-check'] | ['fas', 'clipboard-check'];
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
}

class SidebarItem extends React.Component<ISidebarItemProps> {
  render() {
    const mode = this.props.index === this.props.id ? 'sidebar__item--active' : '';
    return (
      <div>
        <li
          id={this.props.id}
          className={['sidebar__item', mode].join(' ')}
          onClick={this.props.onClick}
        >
          <FontAwesomeIcon icon={this.props.icon} className="sidebar__item__icon" />
          <p className="sidebar__item__label">{this.props.label}</p>
        </li>
      </div>
    );
  }
}

export default SidebarItem;
