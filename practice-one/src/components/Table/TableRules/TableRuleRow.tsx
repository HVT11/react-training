import '../table.scss';

import React from 'react';

export interface IRule {
  id: number;
  name: string;
  des: string;
}

class TableRoleRow extends React.Component<IRule> {
  render() {
    return (
      <tr className="table__row">
        <td className="table__col">{this.props.name}</td>
        <td className="table__col">{this.props.des}</td>
      </tr>
    );
  }
}

export default TableRoleRow;
