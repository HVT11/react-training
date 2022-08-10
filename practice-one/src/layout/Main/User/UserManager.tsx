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

interface IUSerManager {
  reRender: string;
}

type State = {
  itemId: string;
  data: IUserRowProps[];
  isLoading: boolean;
  user: IUserRowProps;
  editOpened: boolean;
  reRender: string;
};

class UserManager extends React.Component<IUSerManager, State> {
  state = {
    itemId: '',
    data: [] as IUserRowProps[],
    isLoading: true,
    user: {} as IUserRowProps,
    editOpened: false,
    reRender: this.props.reRender,
  };

  getData = async () => {
    const users: IUser[] | undefined = await server.fetchUsers();
    users
      ? this.setState({ data: dataFormat(users), isLoading: false })
      : this.setState({ data: [], isLoading: false });
    this.setUser();
  };

  componentDidMount() {
    this.getData();
  }

  setDefault = () => {
    this.setState({ itemId: '' });
    this.closeFormEdit();
  };

  closeFormEdit = () => {
    this.setState({ editOpened: false });
  };

  componentDidUpdate() {
    const { reRender } = this.props;
    if (reRender !== this.state.reRender) {
      this.getData();
      this.setState({ reRender: reRender });
    }
  }

  findUser = (id: string): IUserRowProps | undefined => {
    return this.state.data.find((user: IUserRowProps) => user.id === id);
  };

  searchUser = async (input: string) => {
    const dataSearch = dataFormat((await server.fetchUsers())!).filter(
      (user: IUserRowProps) => user.username.search(input) >= 0,
    );
    this.setState({ data: dataSearch });
  };

  setUser = () => {
    this.setState({ user: this.findUser(this.state.itemId)! });
  };

  onHandleClickRow = (event: React.MouseEvent<HTMLTableRowElement>) => {
    const id = event.currentTarget.id;
    this.setState({ itemId: id, user: this.findUser(id)! });
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
          <Toolbar mode="search" name="Users" onHandleSearch={this.searchUser} />
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
              hasStatus={!this.state.editOpened}
              statusActive={user.status ? true : false}
              onClick={this.onHandleClickEdit}
              hasCancel={this.state.editOpened}
              onHandleCloseEdit={this.closeFormEdit}
            />
            {!this.state.editOpened && (
              <FormView
                username={user.username}
                hasAvatar={true}
                url={user.url}
                email={{
                  headerList: 'Email',
                  icon: ['fas', 'envelope'],
                  listItem: [{ id: 1, value: user.email ? user.email : 'Unknown' }],
                }}
              />
            )}
            {this.state.editOpened && (
              <FormEdit
                user={user}
                dataOnChange={this.getData}
                setItemId={this.setDefault}
              />
            )}
          </GridColumn>
        )}
      </GridRow>
    );
  }
}

export default UserManager;
