import './toolbar.scss';

import React from 'react';

import IconButton from '../Button/IconButton/IconButton';
import Button from '../Button/NormalButton/Button';
import Label from '../Label/Label';
import Search from '../SearchBar/Search';

interface IToolbarProps {
  mode?: 'search' | 'edit';
  hasStatus?: boolean;
  statusActive?: boolean;
  hasCancel?: boolean;
  name: string;
  onClick?: () => void;
  onHandleSearch?: any;
  onHandleCloseEdit?: () => void;
}

type State = {
  isOpened: boolean;
  value: string | undefined;
};

class Toolbar extends React.Component<IToolbarProps, State> {
  state = { isOpened: false, value: '' };

  handleOnSearch = () => {
    this.setState({ isOpened: true });
  };

  handleOffSearch = () => {
    this.setState({ isOpened: false });
  };

  handleChangeSearch = (event: React.FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value;
    this.setState({ value: input });
    this.props.onHandleSearch(input);
  };

  render() {
    return (
      <div className="toolbar">
        {!this.state.isOpened ? (
          <div className="toolbar__title" id="title">
            {this.props.hasCancel && (
              <IconButton
                icon={['fas', 'arrow-left']}
                onClick={this.props.onHandleCloseEdit}
              />
            )}
            <h3 className="title__label">{this.props.name}</h3>
            {this.props.hasStatus && <Label active={this.props.statusActive!} />}
            {this.props.mode === 'search' && (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  icon={['fas', 'magnifying-glass']}
                  onClick={this.handleOnSearch}
                />
                <Button label="Role Matrix" icon={true} size="medium" />
              </div>
            )}
            {this.props.mode === 'edit' && (
              <IconButton icon={['fas', 'pen']} onClick={this.props.onClick} />
            )}
          </div>
        ) : (
          <Search
            onClick={this.handleOffSearch}
            inputValue={this.state.value}
            onHandleChange={this.handleChangeSearch}
          />
        )}
      </div>
    );
  }
}

export default Toolbar;
