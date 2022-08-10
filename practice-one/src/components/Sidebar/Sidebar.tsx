import './sidebar.scss';

import React from 'react';

interface ISidebarProps {
  children?: React.ReactNode;
}

class Sidebar extends React.Component<ISidebarProps> {
  render() {
    const { children } = this.props;

    return <div className="sidebar">{children}</div>;
  }
}

export default Sidebar;
