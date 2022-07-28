import './table-row.scss';

import React from 'react';

class TableRowLoading extends React.Component {
  render() {
    return (
      <tr className={['table__row', 'table__row--loading'].join(' ')}>
        <td>Loading...</td>
      </tr>
    );
  }
}

export default TableRowLoading;
