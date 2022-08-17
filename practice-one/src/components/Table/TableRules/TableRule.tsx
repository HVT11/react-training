import '../table.scss';

import React from 'react';

import TableRowEmpty from '../TableRow/TableRowEmpty';
import TableRowLoading from '../TableRow/TableRowLoading';
import TableRuleRow, { IRuleProps } from './TableRuleRow';

interface IProps {
  list: IRuleProps[];
  isLoading: boolean;
}

class TableRule extends React.Component<IProps> {
  renderRow = (listRow: IProps) => {
    const { isLoading, list } = listRow;

    if (isLoading) {
      return <TableRowLoading />;
    }
    if (list.length === 0) {
      return <TableRowEmpty />;
    }

    return list.map((rule) => <TableRuleRow key={rule.id} {...rule} />);
  };

  render() {
    return (
      <table className="table">
        <thead className="table__head">
          <tr className="table__row bg-light border-bot-primary">
            <th className="table__col">Name</th>
            <th className="table__col">Description</th>
          </tr>
        </thead>
        <tbody className="table__body">{this.renderRow(this.props)}</tbody>
      </table>
    );
  }
}

export default TableRule;
