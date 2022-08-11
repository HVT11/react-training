import './tableRow.scss';

import clsx from 'clsx';
import React from 'react';

class TableRowLoading extends React.Component {
  render() {
    return (
      <tr className={clsx('table__row', 'table__row--loading')}>
        <td>Loading...</td>
      </tr>
    );
  }
}

export default TableRowLoading;
