import './gridRow.scss';

import React from 'react';

interface IGridRowProps {
  children?: React.ReactNode;
}

class GridRow extends React.Component<IGridRowProps> {
  render() {
    const { children } = this.props;

    return <div className="grid__row">{children}</div>;
  }
}

export default GridRow;
