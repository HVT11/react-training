import './sidebar.scss';

import React from 'react';

interface IProps {
  children?: React.ReactNode;
}

class Sidebar extends React.Component<IProps> {
  render() {
    const { children } = this.props;

    return <div className="sidebar">{children}</div>;
  }
}

export default Sidebar;
