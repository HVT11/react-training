import './grid.scss';

import React from 'react';

interface IGridProps {
  children?: React.ReactNode | React.ReactNode[];
}

class Grid extends React.Component<IGridProps> {
  render() {
    const { children } = this.props;

    return <div className="grid">{children}</div>;
  }
}

export default Grid;
