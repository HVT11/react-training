import './sidebar-list.scss';

import React from 'react';

import SidebarItem, { ISidebarItemProps } from '../Item/SidebarItem';

export interface ISidebarListProps {
  list: ISidebarItemProps[];
}

class SidebarList extends React.Component<ISidebarListProps> {
  render() {
    return (
      <ul className="sidebar__list">
        {this.props.list.map((item) => (
          <SidebarItem
            key={item.id}
            label={item.label}
            icon={item.icon}
            active={item.active}
            onClick={item.onClick}
          />
        ))}
      </ul>
    );
  }
}

export default SidebarList;
