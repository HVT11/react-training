import '../table.scss';

import React from 'react';

import Avatar from '../../Avatar/Avatar';
import Label from '../../Label/Label';

export interface IUser {
  id: number;
  url?: string;
  username: string;
  status: boolean;
  email?: string;
}

class TableUserRow extends React.Component<IUser> {
  render() {
    return (
      <tr className="table__row">
        <td className="table__col">
          <Avatar
            url={this.props.url}
            username={this.props.username}
            circle={true}
            size="small"
          />
        </td>
        <td className="table__col">{this.props.username}</td>
        <td className="table__col">
          <Label active={this.props.status} />
        </td>
        <td className="table__col">{this.props.email}</td>
      </tr>
    );
  }
}

export default TableUserRow;
