import React from 'react';

import TableUser from '../../../components/Table/TableUser/TableUser';
import { IUserRowProps } from '../../../components/Table/TableUser/TableUserRow';
import Toolbar from '../../../components/Toolbar/Toolbar';
import { dataFormat } from '../../../utils/format/dataFormat';
import { IUser } from '../../../utils/interface/IUser';
import * as server from '../../../utils/servers/users';
import GridColumn from '../../Grid/GridColumn/GridColumn';
import GridRow from '../../Grid/GridRow/GridRow';

const users: IUser[] | undefined = await server.fetchUsers();
const data: IUserRowProps[] = users ? dataFormat(users) : [];

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
            list={data}
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
