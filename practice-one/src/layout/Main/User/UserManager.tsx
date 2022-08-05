import React from 'react';

import TableUser from '../../../components/Table/TableUser/TableUser';
import { IUser } from '../../../components/Table/TableUser/TableUserRow';
import Toolbar from '../../../components/Toolbar/Toolbar';
import GridColumn from '../../Grid/GridColumn/GridColumn';
import GridRow from '../../Grid/GridRow/GridRow';

const mockData: IUser[] = [
  {
    id: '1',
    username: 'Name',
    status: false,
    email: 'email',
  },
  {
    id: '2',
    username: 'Name',
    status: false,
    email: 'email',
  },
];

class UserManager extends React.Component {
  state = { itemId: '' };
  handleClick = (event: React.MouseEvent<HTMLTableRowElement>) => {
    this.setState({ itemId: event.currentTarget.id });
  };

  render() {
    const size = this.state.itemId === '' ? 'xl' : 'm';
    return (
      <GridRow>
        <GridColumn size={size}>
          <Toolbar mode="search" name="Users" />
          <TableUser
            list={mockData}
            isLoading={false}
            onClick={this.handleClick}
            itemActive={this.state.itemId}
          />
        </GridColumn>
        {size === 'm' && <GridColumn size="s"></GridColumn>}
      </GridRow>
    );
  }
}

export default UserManager;
