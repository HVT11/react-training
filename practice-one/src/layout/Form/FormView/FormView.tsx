import './formview.scss';

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
    return (
      <div>
        <div className="d-flex-center-col padding-l">
          {this.props.hasAvatar && (
            <Avatar size="large" url={this.props.url} username={this.props.username} />
          )}
          <h3>{this.props.username}</h3>
          {this.props.title && <p>{this.props.title}</p>}
        </div>
        {this.props.email && <List {...this.props.email} />}
        {this.props.lastVisited && <List {...this.props.lastVisited} />}
        {this.props.rules && <List {...this.props.rules} />}
        {this.props.roles && <List {...this.props.roles} />}
        {this.props.users && <List {...this.props.users} />}
      </div>
    );
  }
}

export default FormView;
