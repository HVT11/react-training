import './grid-row.scss';

import React from 'react';

interface IGridRowProps {
  children?: React.ReactNode;
}

class GridRow extends React.Component<IGridRowProps> {
  render() {
    return <div className="grid__row">{this.props.children}</div>;
  }
}

export default GridRow;
