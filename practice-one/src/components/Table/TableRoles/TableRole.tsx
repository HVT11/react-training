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
  renderRow = (isLoading: boolean, list: IRole[]) => {
    if (isLoading) {
      return <TableRowLoading />;
    } else {
      if (list.length === 0) {
        return <TableRowEmpty />;
      } else {
        return list.map((role) => <TableRoleRow key={role.id} {...role} />);
      }
    }
  };

  render() {
    const { isLoading, list } = this.props;

    return (
      <table className="table">
        <thead className="table__head">
          <tr className="table__row bg-light border-bot-primary">
            <th className="table__col"></th>
            <th className="table__col">Name</th>
          </tr>
        </thead>
        <tbody className="table__body">{this.renderRow(isLoading, list)}</tbody>
      </table>
    );
  }
}

export default TableRole;
