import React from 'react';

import TableRowEmpty from '../TableRow/TableRowEmpty';
import TableRowLoading from '../TableRow/TableRowLoading';
import TableUserRow, { IUserRowProps } from './TableUserRow';

interface ITableUserProps {
  list: IUserRowProps[];
  isLoading: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
  itemActive: string;
}

class TableUser extends React.Component<ITableUserProps> {
  render() {
    let listRow: React.ReactNode;

    if (this.props.isLoading) {
      listRow = <TableRowLoading />;
    } else {
      if (this.props.list.length === 0) {
        listRow = <TableRowEmpty />;
      } else {
        listRow = this.props.list.map((user) => (
          <TableUserRow
            key={user.id}
            onClick={this.props.onClick}
            itemActive={this.props.itemActive}
            {...user}
          />
        ));
      }
    }

    return (
      <table className="table">
        <thead className="table__head">
          <tr className="table__row bg-light border-bot-primary">
            <th className="table__col"></th>
            <th className="table__col">Full name</th>
            <th className="table__col">Status</th>
            <th className="table__col">Email</th>
          </tr>
        </thead>
        <tbody className="table__body">{listRow}</tbody>
      </table>
    );
  }
}

export default TableUser;
