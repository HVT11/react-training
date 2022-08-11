import './formView.scss';

import React from 'react';

import Avatar from '../../../components/Avatar/Avatar';
import List, { IListProps } from '../../../components/List/List';

interface IFormViewProps {
  username: string;
  url?: string;
  hasAvatar?: boolean;
  title?: string;
  email?: IListProps;
  lastVisited?: IListProps;
  users?: IListProps;
  roles?: IListProps;
  rules?: IListProps;
}

class FormView extends React.Component<IFormViewProps> {
  render() {
    const { rules, roles, users, hasAvatar, username, title, email, lastVisited, url } =
      this.props;

    return (
      <div>
        <div className="d-flex-center-col padding-l">
          {hasAvatar && <Avatar size="large" url={url} username={username} />}
          <h3>{username}</h3>
          {title && <p>{title}</p>}
        </div>
        {email && <List {...email} />}
        {lastVisited && <List {...lastVisited} />}
        {rules && <List {...rules} />}
        {roles && <List {...roles} />}
        {users && <List {...users} />}
      </div>
    );
  }
}

export default FormView;
