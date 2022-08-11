import React from 'react';

import Tab from '../../Tabs/Tab/Tab';
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
  renderRow = (
    isLoading: boolean,
    list: IUserRowProps[],
    onClickRow: (event: React.MouseEvent<HTMLTableRowElement>) => void,
    itemActive: string,
  ) => {
    if (isLoading) {
      return <TableRowLoading />;
    } else {
      if (list.length === 0) {
        return <TableRowEmpty />;
      } else {
        return list.map((user) => (
          <TableUserRow
            key={user.id}
            onClickRow={onClickRow}
            itemActive={itemActive}
            {...user}
          />
        ));
      }
    }
  };

  render() {
    const { list, isLoading, onClickRow, itemActive } = this.props;

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
          {this.renderRow(isLoading, list, onClickRow, itemActive)}
        </tbody>
      </table>
    );
  }
}

export default TableUser;
