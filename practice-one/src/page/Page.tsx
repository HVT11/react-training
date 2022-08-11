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
    const { index, value, stateModal, reRender } = this.state;

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
                  onHandleClick={this.openModal}
                />
                <SidebarList>
                  <SidebarItem
                    id="sidebar-item-one"
                    index={index}
                    label="Users"
                    icon={['fas', 'user-group']}
                    onClick={this.handleClick}
                  />
                  <SidebarItem
                    id="sidebar-item-two"
                    index={index}
                    label="Roles"
                    icon={['fas', 'clipboard-check']}
                    onClick={this.handleClick}
                  />
                  <SidebarItem
                    id="sidebar-item-three"
                    index={index}
                    label="Rules"
                    icon={['fas', 'user-check']}
                    onClick={this.handleClick}
                  />
                </SidebarList>
              </Sidebar>
            </GridColumn>
            <GridColumn size="l">
              <LayoutMain index={index} reRender={reRender} />
            </GridColumn>
          </GridRow>
        </Grid>
        <Modal
          stateModal={stateModal}
          title="Enter username"
          nameBtnPrimary="Save"
          onClickBtnPrimary={() => this.addUser(value)}
          value={value}
          onHandleChange={this.handleChangeText}
          onhandleCloseModal={this.closeModal}
          hasInput={true}
        />
      </Fragment>
    );
  }
}

export default Page;
