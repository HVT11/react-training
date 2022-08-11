import '../table.scss';

import React from 'react';

import Avatar from '../../Avatar/Avatar';
import Label from '../../Label/Label';

export interface IUserRowProps {
  id?: string;
  url?: string;
  username: string;
  status: boolean;
  email?: string;
  itemActive?: string;
  onClickRow?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
}

class TableUserRow extends React.Component<IUserRowProps> {
  render() {
    const mode = this.props.itemActive === this.props.id ? 'table__row--active' : '';
    return (
      <tr
        className={['table__row', mode].join(' ')}
        id={this.props.id}
        onClick={this.props.onClickRow}
      >
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
