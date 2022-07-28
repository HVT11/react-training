import '../table.scss';

import React from 'react';

import TableRowEmpty from '../TableRow/TableRowEmpty';
import TableRowLoading from '../TableRow/TableRowLoading';
import TableRuleRow, { IRule } from './TableRuleRow';

interface ITableRoleProps {
  list: IRule[];
  isLoading: boolean;
}

class TableRule extends React.Component<ITableRoleProps> {
  render() {
    let listRow: React.ReactNode;

    if (this.props.isLoading) {
      listRow = <TableRowLoading />;
    } else {
      if (this.props.list.length === 0) {
        listRow = <TableRowEmpty />;
      } else {
        listRow = this.props.list.map((rule) => <TableRuleRow key={rule.id} {...rule} />);
      }
    }

    return (
      <table className="table">
        <thead className="table__head">
          <tr className="table__row bg-light border-bot-primary">
            <th className="table__col">Name</th>
            <th className="table__col">Description</th>
          </tr>
        </thead>
        <tbody className="table__body">{listRow}</tbody>
      </table>
    );
  }
}

export default TableRule;
