import './gridColumn.scss';

import React from 'react';

interface IProps {
  size: 'xs' | 's' | 'm' | 'l' | 'xl';
  children?: React.ReactNode | React.ReactNode[];
}

class GridColumn extends React.Component<IProps> {
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
