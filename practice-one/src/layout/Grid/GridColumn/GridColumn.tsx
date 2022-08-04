import './grid-column.scss';

import React from 'react';

interface IGridColumnProps {
  size: 'xs' | 's' | 'm' | 'l' | 'xl';
  children?: React.ReactNode | React.ReactNode[];
}

class GridColumn extends React.Component<IGridColumnProps> {
  render() {
    return (
      <div className={['grid__column', `grid__column--${this.props.size}`].join(' ')}>
        {this.props.children}
      </div>
    );
  }
}

export default GridColumn;
