import './sidebarItem.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, IconName, IconPrefix } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

library.add(fas);

interface ISidebarItemProps {
  id?: string;
  index?: string;
  label: string;
  icon: [IconPrefix, IconName];
  onClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
}

class SidebarItem extends React.Component<ISidebarItemProps> {
  render() {
    const { index, id, onClick, icon, label } = this.props;

    return (
      <div>
        <li
          id={id}
          className={clsx('sidebar__item', { 'sidebar__item--active': index === id })}
          onClick={onClick}
        >
          <FontAwesomeIcon icon={icon} className="sidebar__item__icon" />
          <p className="sidebar__item__label">{label}</p>
        </li>
      </div>
    );
  }
}

export default SidebarItem;
