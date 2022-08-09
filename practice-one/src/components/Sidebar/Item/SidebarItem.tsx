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
    const { index, id, onClick, icon, label } = this.props;
    const mode = index === id ? 'sidebar__item--active' : '';
    return (
      <div>
        <li id={id} className={['sidebar__item', mode].join(' ')} onClick={onClick}>
          <FontAwesomeIcon icon={icon} className="sidebar__item__icon" />
          <p className="sidebar__item__label">{label}</p>
        </li>
      </div>
    );
  }
}

export default SidebarItem;
