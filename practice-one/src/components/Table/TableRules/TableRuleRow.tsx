import '../table.scss';

import React from 'react';

export interface IRuleProps {
  id: number;
  name: string;
  des: string;
}

class TableRoleRow extends React.Component<IRuleProps> {
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
