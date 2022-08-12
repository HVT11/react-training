import '../table.scss';

import React from 'react';

import Avatar from '../../Avatar/Avatar';
import Label from '../../Label/Label';
import clsx from 'clsx';

export interface IUserRowProps {
  user: {
    id?: string;
    url?: string;
    username: string;
    status: boolean;
    email?: string;
  }
  itemActive?: string;
  onClickRow?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
}

class TableUserRow extends React.Component<IUserRowProps> {
  render() {
    const { itemActive, onClickRow } = this.props;
    const { id, username, status, email, url } = this.props.user;

    return (
      <tr
        className={clsx('table__row', {'table__row--active': itemActive === id})}
        id={id}
        onClick={onClickRow}
      >
        <td className="table__col">
          <Avatar
            url={url}
            username={username}
            circle={true}
            size="small"
          />
        </td>
        <td className="table__col">{username}</td>
        <td className="table__col">
          <Label active={status} />
        </td>
        <td className="table__col">{email}</td>
      </tr>
    );
  }
}

export default TableUserRow;
