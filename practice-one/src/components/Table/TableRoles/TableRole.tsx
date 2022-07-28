import '../table.scss';

import React from 'react';

import TableRowEmpty from '../TableRow/TableRowEmpty';
import TableRowLoading from '../TableRow/TableRowLoading';
import TableRoleRow, { IRole } from './TableRoleRow';

interface ITableRoleProps {
  list: IRole[];
  isLoading: boolean;
}

class TableRole extends React.Component<ITableRoleProps> {
  render() {
    let listRow: React.ReactNode;

    if (this.props.isLoading) {
      listRow = <TableRowLoading />;
    } else {
      if (this.props.list.length === 0) {
        listRow = <TableRowEmpty />;
      } else {
        listRow = this.props.list.map((role) => <TableRoleRow key={role.id} {...role} />);
      }
    }

    return (
      <table className="table">
        <thead className="table__head">
          <tr className="table__row bg-light border-bot-primary">
            <th className="table__col"></th>
            <th className="table__col">Name</th>
          </tr>
        </thead>
        <tbody className="table__body">{listRow}</tbody>
      </table>
    );
  }
}

export default TableRole;
