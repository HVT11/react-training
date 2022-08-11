import './gridColumn.scss';

import React from 'react';

interface IGridColumnProps {
  size: 'xs' | 's' | 'm' | 'l' | 'xl';
  children?: React.ReactNode | React.ReactNode[];
}

class GridColumn extends React.Component<IGridColumnProps> {
  render() {
    const { size, children } = this.props;

    return (
      <div className={['grid__column', `grid__column--${size}`].join(' ')}>
        {children}
      </div>
    );
  }
}

export default GridColumn;
