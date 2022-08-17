import '../table.scss';

import React from 'react';

import TableRowEmpty from '../TableRow/TableRowEmpty';
import TableRowLoading from '../TableRow/TableRowLoading';
import TableRoleRow, { IRoleProps } from './TableRoleRow';

interface IProps {
  list: IRoleProps[];
  isLoading: boolean;
}

class TableRole extends React.Component<IProps> {
  renderRow = (listRow: IProps) => {
    const { isLoading, list } = listRow;
    
    if (isLoading) {
      return <TableRowLoading />;
    } 
    
    if (list.length === 0) {
      return <TableRowEmpty />;
    }

    return list.map((role) => <TableRoleRow key={role.id} {...role} />);
  };

  render() {
    return (
      <table className="table">
        <thead className="table__head">
          <tr className="table__row bg-light border-bot-primary">
            <th className="table__col"></th>
            <th className="table__col">Name</th>
          </tr>
        </thead>
        <tbody className="table__body">{this.renderRow(this.props)}</tbody>
      </table>
    );
  }
}

export default TableRole;
