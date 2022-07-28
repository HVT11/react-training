import './sidebar.scss';

import React from 'react';

import Button, { ButtonProps } from '../Button/NormalButton/Button';
import SidebarList, { ISidebarListProps } from './ListItem/SidebarList';

interface ISidebarProps {
  buttonProp: ButtonProps;
  sidebarListProp: ISidebarListProps;
}

class Sidebar extends React.Component<ISidebarProps> {
  render() {
    return (
      <div className="sidebar grid__column-2">
        <Button {...this.props.buttonProp} />
        <SidebarList {...this.props.sidebarListProp} />
      </div>
    );
  }
}

export default Sidebar;
