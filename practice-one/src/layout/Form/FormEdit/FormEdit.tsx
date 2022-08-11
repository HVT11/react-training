import './formEdit.scss';

import React from 'react';

import Avatar from '../../../components/Avatar/Avatar';
import Button from '../../../components/Button/NormalButton/Button';
import SwitchButton from '../../../components/Button/SwitchButton/SwitchButton';
import Input from '../../../components/Input/InputText/InputText';
import Label from '../../../components/Label/Label';
import { IUserRowProps } from '../../../components/Table/TableUser/TableUserRow';
import { IUser } from '../../../utils/interface/IUser';
import { removeUser, updateUser, uploadAvatar } from '../../../utils/servers/users';
import clsx from 'clsx';

interface IFormEditProps {
  user: IUserRowProps;
  dataOnChange: () => void;
  setItemId: () => void;
}

type State = {
  user: {
    id?: string;
    username: string;
    status: boolean;
    url?: string;
    email?: string;
  };
};

class FormEdit extends React.Component<IFormEditProps, State> {
  state = {
    user: {
      id: this.props.user.id,
      username: this.props.user.username,
      status: this.props.user.status,
      url: this.props.user.url,
      email: this.props.user.email,
    },
  };

  static getDerivedStateFromProps(props: IFormEditProps, state: State) {
    const { id, username, status, url, email } = props.user;

    if (props.user.id !== state.user.id) {
      return {
        user: {
          id: id,
          username: username,
          status: status,
          url: url,
          email: email,
        },
      };
    } else return null;
  }

  handleDelete = async (id: string) => {
    const { setItemId, dataOnChange } = this.props;

    await removeUser(Number(id));
    setItemId();
    dataOnChange();
  };

  handleSave = async () => {
    const { id, username, email, status, url } = this.state.user;

    const payload: IUser = {
      id: Number(id),
      name: username,
      email: email ? email : '',
      status: status ? 1 : 0,
      avatar: url ? url : '',
    };

    await updateUser(Number(id), payload);
    this.props.dataOnChange();
  };

  handleChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;

    this.setState({ user: { ...this.state.user, [name]: event.currentTarget.value } });
  };

  handleChangeCheckbox = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ user: { ...this.state.user, status: event.currentTarget.checked } });
  };

  handleChangeFile = async (event: React.FormEvent<HTMLInputElement>) => {
    const { user } = this.state;
    const file = event.currentTarget.files![0];

    const formData = new FormData();
    formData.append('upload', file);
    formData.append('upload_fullpath', file.name);

    const avatar = await uploadAvatar(Number(user.id), formData);
    this.setState({ user: { ...user, url: avatar!.value } });
  };

  render() {
    const { id, username, email, status, url } = this.state.user;

    return (
      <div className="padding-m">
        <div className="align-left">
          <Button
            size="medium"
            label="Delete"
            onHandleClick={() => this.handleDelete(id ? id : '')}
          />
          <Button
            size="medium"
            label="Save"
            primary={true}
            onHandleClick={this.handleSave}
          />
        </div>
        <div className="mg-top-m">
          <Input
            label="Full name"
            name="username"
            value={username}
            type="text"
            onHandleChange={this.handleChangeInput}
          />
          <Input
            label="Email"
            name="email"
            value={email}
            type="text"
            onHandleChange={this.handleChangeInput}
          />
          <Input label="Avatar" type="file" onHandleChange={this.handleChangeFile} />
          <Avatar size="medium" url={url} username={username} />
          <div className={clsx('input-box', 'justify-start')}>
            <p className="input-box__label">Status:</p>
            <SwitchButton checked={status} onHandleChange={this.handleChangeCheckbox} />
            <Label active={status} />
          </div>
        </div>
      </div>
    );
  }
}

export default FormEdit;
