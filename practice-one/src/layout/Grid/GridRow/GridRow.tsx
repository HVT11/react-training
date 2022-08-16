import './gridRow.scss';

import React from 'react';

interface IProps {
  children?: React.ReactNode;
}

class GridRow extends React.Component<IProps> {
  render() {
    const { children } = this.props;

    return <div className="grid__row">{children}</div>;
  }
}

export default GridRow;
