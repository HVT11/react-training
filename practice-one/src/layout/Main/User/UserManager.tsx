import React from 'react';

import TableUser from '../../../components/Table/TableUser/TableUser';
import Toolbar from '../../../components/Toolbar/Toolbar';
import { dataFormat } from '../../../utils/format/dataFormat';
import { IUser } from '../../../utils/interface/IUser';
import * as server from '../../../utils/servers/users';
import GridColumn from '../../Grid/GridColumn/GridColumn';
import GridRow from '../../Grid/GridRow/GridRow';

class UserManager extends React.Component {
  state = { itemId: '', data: [], isLoading: true };

  componentDidMount() {
    this.getData();
  }

  handleClick = (event: React.MouseEvent<HTMLTableRowElement>) => {
    this.setState({ itemId: event.currentTarget.id });
  };

  getData = async () => {
    const users: IUser[] | undefined = await server.fetchUsers();
    users
      ? this.setState({ data: dataFormat(users), isLoading: false })
      : this.setState({ data: [], isLoading: false });
  };

  render() {
    const size = this.state.itemId === '' ? 'xl' : 'm';
    return (
      <GridRow>
        <GridColumn size={size}>
          <Toolbar mode="search" name="Users" />
          <TableUser
            list={this.state.data}
            isLoading={this.state.isLoading}
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
