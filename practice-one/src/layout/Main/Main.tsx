import './layoutMain.scss';

import React from 'react';

import RoleManager from '../../container/Roles/Roles';
import RuleManager from '../../container/Rules/Rules';
import UserManager from '../../container/User/UserManager';

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
