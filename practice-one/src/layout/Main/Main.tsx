import './layout-main.scss';

import React from 'react';

import RoleManager from './Roles/Roles';
import RuleManager from './Rules/Rules';
import UserManager from './User/UserManager';

interface ILayoutMain {
  index?: string;
}

class LayoutMain extends React.Component<ILayoutMain> {
  render() {
    return (
      <div className="layout-main">
        {this.props.index === 'sidebar-item-one' && <UserManager />}
        {this.props.index === 'sidebar-item-two' && <RoleManager />}
        {this.props.index === 'sidebar-item-three' && <RuleManager />}
      </div>
    );
  }
}

export default LayoutMain;
