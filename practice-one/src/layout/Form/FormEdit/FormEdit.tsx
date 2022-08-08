import React from 'react';

import Avatar from '../../../components/Avatar/Avatar';
import Button from '../../../components/Button/NormalButton/Button';
import SwitchButton from '../../../components/Button/SwitchButton/SwitchButton';
import Input from '../../../components/Input/InputText/InputText';
import Label from '../../../components/Label/Label';
import { IUserRowProps } from '../../../components/Table/TableUser/TableUserRow';
import { removeUser } from '../../../utils/servers/users';

interface IFormEditProps {
  user: IUserRowProps;
}

class FormEdit extends React.Component<IFormEditProps> {
  state = {
    user: {
      id: this.props.user.id,
      username: this.props.user.username,
      status: this.props.user.status,
      url: this.props.user.url,
      email: this.props.user.email,
    },
  };

  handleDelete(id: string) {
    removeUser(Number(id));
  }

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;
    this.setState({ user: { ...this.state.user, [name]: event.currentTarget.value } });
  };

  render() {
    const user = this.state.user;
    return (
      <div className="padding-m">
        <div className="align-left">
          <Button
            size="medium"
            label="Delete"
            onClick={() => this.handleDelete(user.id ? user.id : '')}
          />
          <Button size="medium" label="Save" primary={true} />
        </div>
        <div className="mg-top-m">
          <Input
            label="Full name"
            name="username"
            value={user.username}
            type="text"
            onHandleChange={this.handleChange}
          />
          <Input
            label="Email"
            name="email"
            value={user.email}
            type="text"
            onHandleChange={this.handleChange}
          />
          <Input label="Avatar" type="file" />
          <Avatar size="medium" url={user.url} username={user.username} />
          <div className="input-box" style={{ justifyContent: 'start' }}>
            <p className="input-box__label">Status:</p>
            <SwitchButton checked={user.status} />
            <Label active={user.status} />
          </div>
        </div>
      </div>
    );
  }
}

export default FormEdit;
