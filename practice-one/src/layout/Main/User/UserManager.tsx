import React from 'react';

import TableUser from '../../../components/Table/TableUser/TableUser';
import { IUserRowProps } from '../../../components/Table/TableUser/TableUserRow';
import Toolbar from '../../../components/Toolbar/Toolbar';
import { dataFormat } from '../../../utils/format/dataFormat';
import { IUser } from '../../../utils/interface/IUser';
import { fetchUsers } from '../../../utils/servers/users';
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
    const users: IUser[] | undefined = await fetchUsers();
    users
      ? this.setState({ data: dataFormat(users), isLoading: false })
      : this.setState({ data: [], isLoading: false });
    this.setUser();
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    const { reRender } = this.props;
    if (reRender !== this.state.reRender) {
      this.getData();
      this.setState({ reRender: reRender });
    }
  }

  setDefault = () => {
    this.setState({ itemId: '' });
    this.closeFormEdit();
  };

  closeFormEdit = () => {
    this.setState({ editOpened: false });
  };

  findUser = (id: string): IUserRowProps | undefined => {
    return this.state.data.find((user: IUserRowProps) => user.id === id);
  };

  searchUser = async (input: string) => {
    const dataSearch = dataFormat((await fetchUsers())!).filter(
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

  renderFormView = (data: IUserRowProps) => {
    return (
      <FormView
        username={data.username}
        hasAvatar={true}
        url={data.url}
        email={{
          headerList: 'Email',
          icon: ['fas', 'envelope'],
          listItem: [{ id: 1, value: data.email ? data.email : 'Unknown' }],
        }}
      />
    );
  };

  renderFormEdit = (data: IUserRowProps) => {
    return (
      <FormEdit user={data} dataOnChange={this.getData} setItemId={this.setDefault} />
    );
  };

  render() {
    const { data, isLoading, itemId, editOpened, user } = this.state;
    const size = itemId === '' ? 'xl' : 'm';

    return (
      <GridRow>
        <GridColumn size={size}>
          <Toolbar mode="search" name="Users" onHandleSearch={this.searchUser} />
          <TableUser
            list={data}
            isLoading={isLoading}
            onClickRow={this.onHandleClickRow}
            itemActive={itemId}
          />
        </GridColumn>
        {size === 'm' && (
          <GridColumn size="s">
            <Toolbar
              mode="edit"
              name="User infomation"
              hasStatus={!editOpened}
              statusActive={user.status ? true : false}
              onHandleClick={this.onHandleClickEdit}
              hasCancel={editOpened}
              onHandleCloseEdit={this.closeFormEdit}
            />
            {!editOpened ? this.renderFormView(user) : this.renderFormEdit(user)}
          </GridColumn>
        )}
      </GridRow>
    );
  }
}

export default UserManager;
