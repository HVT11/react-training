import React from 'react';

import TableUser from '../../components/Table/TableUser/TableUser';
import { IUserRowProps } from '../../components/Table/TableUser/TableUserRow';
import Toolbar from '../../components/Toolbar/Toolbar';
import { dataFormat } from '../../utils/format/dataFormat';
import { IUser } from '../../interface/IUser';
import { fetchUsers } from '../../services/services';
import FormEdit from '../../layout/Form/FormEdit/FormEdit';
import FormView from '../../layout/Form/FormView/FormView';
import GridColumn from '../../layout/Grid/GridColumn/GridColumn';
import GridRow from '../../layout/Grid/GridRow/GridRow';

interface IProps {
  reRender: string;
}

type IState = {
  itemId: string;
  data: IUserRowProps[];
  dataOriginal: IUserRowProps[];
  isLoading: boolean;
  item: IUserRowProps;
  editOpened: boolean;
  reRender: string;
};

class UserManager extends React.Component<IProps, IState> {
  state = {
    itemId: '',
    data: [] as IUserRowProps[],
    dataOriginal: [] as IUserRowProps[],
    isLoading: true,
    item: {} as IUserRowProps,
    editOpened: false,
    reRender: this.props.reRender,
  };

  //Life Cycle
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

  getData = async () => {
    const users: IUser[] | null = await fetchUsers();
    users
      ? this.setState({ data: dataFormat(users), isLoading: false, dataOriginal: dataFormat(users) })
      : this.setState({ data: [], isLoading: false });
    this.setUser();
  };

  findUser = (id: string): IUserRowProps | undefined => {
    return this.state.data.find((item: IUserRowProps) => item.user.id === id);
  };

  searchUser = async (input: string) => {
    const { dataOriginal } = this.state;
    const dataSearch = dataOriginal.filter((item: IUserRowProps) => item.user.username.search(input) >= 0);
    this.setState({ data: dataSearch });
  };

  setUser = () => {
    this.setState({ item: this.findUser(this.state.itemId)!});
  };

  onClickRow = (event: React.MouseEvent<HTMLTableRowElement>) => {
    const id = event.currentTarget.id;
    this.setState({ itemId: id, item: this.findUser(id)! });
  };

  onClickEdit = () => {
    this.setState({ editOpened: true });
  };

  closeFormEdit = () => {
    this.setState({ editOpened: false });
  };

  renderFormView = (data: IUserRowProps) => {
    const { username, url, email} = data.user;
    return (
      <FormView
        username={username}
        hasAvatar={true}
        url={url}
        email={{
          headerList: 'Email',
          icon: ['fas', 'envelope'],
          listItem: [{ id: 1, value: email ? email : 'Unknown' }],
        }}
      />
    );
  };

  renderFormEdit = (data: IUserRowProps) => {
    return (
      <FormEdit
        user={data.user}
        dataOnChange={this.getData}
        setItemId={this.setDefault}
      />
    );
  };

  render() {
    const { data, isLoading, itemId, editOpened, item } = this.state;
    const size = itemId === '' ? 'xl' : 'm';

    return (
      <GridRow>
        <GridColumn size={size}>
          <Toolbar
            mode="search"
            name="Users"
            handleSearch={this.searchUser}
          />
          <TableUser
            list={data}
            isLoading={isLoading}
            onClickRow={this.onClickRow}
            itemActive={itemId}
          />
        </GridColumn>
        {size === 'm' && (
          <GridColumn size="s">
            <Toolbar
              mode="edit"
              name="User infomation"
              hasStatus={!editOpened}
              statusActive={item.user.status ? true : false}
              onClick={this.onClickEdit}
              hasCancel={editOpened}
              handleCloseEdit={this.closeFormEdit}            
            />
            {!editOpened ? this.renderFormView(item) : this.renderFormEdit(item)}
          </GridColumn>
        )}
      </GridRow>
    );
  }
}

export default UserManager;
