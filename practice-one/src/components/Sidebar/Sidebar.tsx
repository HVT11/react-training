import './sidebar.scss';

import React from 'react';

interface ISidebarProps {
  children?: React.ReactNode;
}

class Sidebar extends React.Component<ISidebarProps> {
  render() {
    return <div className="sidebar">{this.props.children}</div>;
  }
}

export default Sidebar;
