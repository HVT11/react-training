import '../table.scss';

import React from 'react';

export interface IRule {
  id: number;
  name: string;
  des: string;
}

class TableRoleRow extends React.Component<IRule> {
  render() {
    const { name, des } = this.props;

    return (
      <tr className="table__row">
        <td className="table__col">{name}</td>
        <td className="table__col">{des}</td>
      </tr>
    );
  }
}

export default TableRoleRow;
