import './grid.scss';

import React from 'react';

interface IGridProps {
  children?: React.ReactNode | React.ReactNode[];
}

class Grid extends React.Component<IGridProps> {
  render() {
    return <div className="grid">{this.props.children}</div>;
  }
}

export default Grid;
