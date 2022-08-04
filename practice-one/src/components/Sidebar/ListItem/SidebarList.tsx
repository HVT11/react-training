import './sidebar-list.scss';

import React from 'react';

interface ISidebarListProps {
  children?: React.ReactNode;
}

class SidebarList extends React.Component<ISidebarListProps> {
  render() {
    return <ul className="sidebar__list">{this.props.children}</ul>;
  }
}

export default SidebarList;
