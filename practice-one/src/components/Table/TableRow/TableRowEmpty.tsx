import './tableRow.scss';

import clsx from 'clsx';
import React from 'react';

class TableRowEmpty extends React.Component {
  render() {
    return (
      <tr className={clsx('table__row', 'table__row--empty')}>
        <td>Empty!!! You can add new</td>
      </tr>
    );
  }
}

export default TableRowEmpty;
