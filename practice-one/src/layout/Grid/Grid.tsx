import './grid.scss';

import React from 'react';

interface IProps {
  children?: React.ReactNode | React.ReactNode[];
}

class Grid extends React.Component<IProps> {
  render() {
    const { children } = this.props;

    return <div className="grid">{children}</div>;
  }
}

export default Grid;
