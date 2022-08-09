import React, { Fragment } from 'react';

import Button from '../components/Button/NormalButton/Button';
import Modal from '../components/Modal/Modal';
import SidebarItem from '../components/Sidebar/Item/SidebarItem';
import SidebarList from '../components/Sidebar/ListItem/SidebarList';
import Sidebar from '../components/Sidebar/Sidebar';
import Grid from '../layout/Grid/Grid';
import GridColumn from '../layout/Grid/GridColumn/GridColumn';
import GridRow from '../layout/Grid/GridRow/GridRow';
import Header from '../layout/Header/Header';
import LayoutMain from '../layout/Main/Main';
import { createUser } from '../utils/servers/users';

interface IPageProps {
  children?: React.ReactNode;
}

class Page extends React.Component<IPageProps> {
  state = { index: 'sidebar-item-one', value: '', stateModal: false, reRender: '' };

  handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    this.setState({ index: event.currentTarget.id });
  };

  handleChangeText = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ value: event.currentTarget.value });
  };

  openModal = () => {
    this.setState({ stateModal: true });
  };

  closeModal = () => {
    this.setState({ stateModal: false, value: '' });
  };

  addUser = async (username: string) => {
    const payload = {
      name: username,
      email: '',
      status: 0,
      avatar: '',
    };
    await createUser(payload);
    this.setState({ reRender: username });
    this.closeModal();
  };

  render() {
    return (
      <Fragment>
        <Header>Users Manager</Header>
        <Grid>
          <GridRow>
            <GridColumn size="xs">
              <Sidebar>
                <Button
                  label="+ New"
                  primary={true}
                  size="large"
                  onClick={this.openModal}
                />
                <SidebarList>
                  <SidebarItem
                    id="sidebar-item-one"
                    index={this.state.index}
                    label="Users"
                    icon={['fas', 'user-group']}
                    onClick={this.handleClick}
                  />
                  <SidebarItem
                    id="sidebar-item-two"
                    index={this.state.index}
                    label="Roles"
                    icon={['fas', 'clipboard-check']}
                    onClick={this.handleClick}
                  />
                  <SidebarItem
                    id="sidebar-item-three"
                    index={this.state.index}
                    label="Rules"
                    icon={['fas', 'user-check']}
                    onClick={this.handleClick}
                  />
                </SidebarList>
              </Sidebar>
            </GridColumn>
            <GridColumn size="l">
              <LayoutMain index={this.state.index} reRender={this.state.reRender} />
            </GridColumn>
          </GridRow>
        </Grid>
        <Modal
          stateModal={this.state.stateModal}
          title="Enter username"
          nameBtn1="Save"
          onClickBtn1={() => this.addUser(this.state.value)}
          value={this.state.value}
          onHandleChange={this.handleChangeText}
          handleCloseModal={this.closeModal}
          hasInput={true}
        />
      </Fragment>
    );
  }
}

export default Page;
