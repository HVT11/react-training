import './table-row.scss';

import React from 'react';

class TableRowEmpty extends React.Component {
  render() {
    return (
      <tr className={['table__row', 'table__row--empty'].join(' ')}>
        <td>Empty!!! You can add new</td>
      </tr>
    );
  }
}

export default TableRowEmpty;
