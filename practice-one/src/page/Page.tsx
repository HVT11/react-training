import React, { Fragment } from 'react';

import Button from '../components/Button/NormalButton/Button';
import SidebarItem from '../components/Sidebar/Item/SidebarItem';
import SidebarList from '../components/Sidebar/ListItem/SidebarList';
import Sidebar from '../components/Sidebar/Sidebar';
import Grid from '../layout/Grid/Grid';
import GridColumn from '../layout/Grid/GridColumn/GridColumn';
import GridRow from '../layout/Grid/GridRow/GridRow';
import Header from '../layout/Header/Header';
import LayoutMain from '../layout/Main/Main';

interface IPageProps {
  children?: React.ReactNode;
}

type State = {
  index: string;
};

class Page extends React.Component<IPageProps, State> {
  state = { index: 'sidebar-item-one' };

  handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    this.setState({ index: event.currentTarget.id });
  };

  render() {
    return (
      <Fragment>
        <Header>Users Manager</Header>
        <Grid>
          <GridRow>
            <GridColumn size="xs">
              <Sidebar>
                <Button label="+ New" primary={true} size="large" />
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
              <LayoutMain index={this.state.index} />
            </GridColumn>
          </GridRow>
        </Grid>
      </Fragment>
    );
  }
}

export default Page;
