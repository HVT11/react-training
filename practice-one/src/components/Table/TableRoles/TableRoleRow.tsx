import '../table.scss';

import React from 'react';

import Avatar from '../../Avatar/Avatar';

export interface IRole {
  id: number;
  role: string;
}

class TableRoleRow extends React.Component<IRole> {
  render() {
    return (
      <tr className="table__row">
        <td className="table__col">
          <Avatar username={this.props.role} circle={true} size="small" />
        </td>
        <td className="table__col">{this.props.role}</td>
      </tr>
    );
  }
}

export default TableRoleRow;
