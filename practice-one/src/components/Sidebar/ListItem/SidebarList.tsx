import './sidebarList.scss';

import React from 'react';

interface ISidebarListProps {
  children?: React.ReactNode;
}

class SidebarList extends React.Component<ISidebarListProps> {
  render() {
    const { children } = this.props;

    return <ul className="sidebar__list">{children}</ul>;
  }
}

export default SidebarList;
