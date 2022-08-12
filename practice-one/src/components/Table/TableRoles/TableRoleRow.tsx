import '../table.scss';

import React from 'react';

import Avatar from '../../Avatar/Avatar';

export interface IRole {
  id?: string;
  role: string;
}

class TableRoleRow extends React.Component<IRole> {
  render() {
    const { id, role } = this.props;

    return (
      <tr className="table__row" id={id}>
        <td className="table__col">
          <Avatar 
            username={role} 
            circle={true} 
            size="small" 
          />
        </td>
        <td className="table__col">{role}</td>
      </tr>
    );
  }
}

export default TableRoleRow;
