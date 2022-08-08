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
  state = { user: this.props.user };

  handleDelete(id: string) {
    removeUser(Number(id));
  }

  render() {
    const user = this.props.user;
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
          <Input name="Full name" value={user.username} type="text" />
          <Input name="Avatar" type="file" />
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
