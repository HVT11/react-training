import './layoutMain.scss';

import React from 'react';

import RoleManager from './Roles/Roles';
import RuleManager from './Rules/Rules';
import UserManager from './User/UserManager';

interface ILayoutMain {
  index?: string;
  reRender: string;
}

class LayoutMain extends React.Component<ILayoutMain> {
  render() {
    const { index, reRender } = this.props;

    return (
      <div className="layout-main">
        {index === 'sidebar-item-one' && <UserManager reRender={reRender} />}
        {index === 'sidebar-item-two' && <RoleManager />}
        {index === 'sidebar-item-three' && <RuleManager />}
      </div>
    );
  }
}

export default LayoutMain;
