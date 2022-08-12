import React from 'react';

import TableRowEmpty from '../TableRow/TableRowEmpty';
import TableRowLoading from '../TableRow/TableRowLoading';
import TableUserRow, { IUserRowProps } from './TableUserRow';


interface ITableUserProps {
  list: IUserRowProps[];
  isLoading: boolean;
  onClickRow: (event: React.MouseEvent<HTMLTableRowElement>) => void;
  itemActive: string;
}

class TableUser extends React.Component<ITableUserProps> {
  renderRow = ( listRow: ITableUserProps) => {
    const { isLoading, list, itemActive, onClickRow } = listRow;

    if (isLoading) {
      return <TableRowLoading />;
    }

    if (list.length === 0) {
      return <TableRowEmpty />;
    } 

    return list.map((item) => (
          <TableUserRow
            key={item.user.id}
            user={item.user}
            onClickRow={onClickRow}
            itemActive={itemActive}
          />
    ));
  };

  render() {
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
        <tbody className="table__body">
          {this.renderRow(this.props)}
        </tbody>
      </table>
    );
  }
}

export default TableUser;
