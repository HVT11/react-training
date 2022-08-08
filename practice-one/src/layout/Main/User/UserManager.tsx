import React from 'react';

import TableUser from '../../../components/Table/TableUser/TableUser';
import { IUserRowProps } from '../../../components/Table/TableUser/TableUserRow';
import Toolbar from '../../../components/Toolbar/Toolbar';
import { dataFormat } from '../../../utils/format/dataFormat';
import { IUser } from '../../../utils/interface/IUser';
import * as server from '../../../utils/servers/users';
import FormEdit from '../../Form/FormEdit/FormEdit';
import FormView from '../../Form/FormView/FormView';
import GridColumn from '../../Grid/GridColumn/GridColumn';
import GridRow from '../../Grid/GridRow/GridRow';

class UserManager extends React.Component {
  state = {
    itemId: '',
    data: [] as IUserRowProps[],
    isLoading: true,
    user: {} as IUserRowProps,
    editOpened: false,
  };

  getData = async () => {
    const users: IUser[] | undefined = await server.fetchUsers();
    users
      ? this.setState({ data: dataFormat(users), isLoading: false })
      : this.setState({ data: [], isLoading: false });
  };

  componentDidMount() {
    this.getData();
  }

  findUser = (id: string): IUserRowProps | undefined => {
    return this.state.data.find((user) => user.id === id);
  };

  onHandleClickRow = (event: React.MouseEvent<HTMLTableRowElement>) => {
    const id = event.currentTarget.id;
    this.setState({ itemId: id, user: this.findUser(id) });
  };

  onHandleClickEdit = () => {
    this.setState({ editOpened: true });
  };

  render() {
    const size = this.state.itemId === '' ? 'xl' : 'm';
    const user = this.state.user;
    return (
      <GridRow>
        <GridColumn size={size}>
          <Toolbar mode="search" name="Users" />
          <TableUser
            list={this.state.data}
            isLoading={this.state.isLoading}
            onClick={this.onHandleClickRow}
            itemActive={this.state.itemId}
          />
        </GridColumn>
        {size === 'm' && (
          <GridColumn size="s">
            <Toolbar
              mode="edit"
              name="User infomation"
              hasStatus={true}
              statusActive={user.status ? true : false}
              onClick={this.onHandleClickEdit}
            />
            {!this.state.editOpened ? (
              <FormView
                username={user.username}
                hasAvatar={true}
                url={user.url}
                email={{
                  headerList: 'Email',
                  icon: ['fas', 'envelope'],
                  listItem: [{ id: 1, value: user.email ? user.email : 'Unknow' }],
                }}
              />
            ) : (
              <FormEdit user={user} />
            )}
          </GridColumn>
        )}
      </GridRow>
    );
  }
}

export default UserManager;
