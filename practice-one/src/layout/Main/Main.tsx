import './layout-main.scss';

import React from 'react';

interface ILayoutMain {
  children?: React.ReactNode;
}

class LayoutMain extends React.Component<ILayoutMain> {
  render() {
    return <div className="layout-main">{this.props.children}</div>;
  }
}

export default LayoutMain;
