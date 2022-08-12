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
  handleSearch?: (input: string) => void;
  handleCloseEdit?: () => void;
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
    this.setState({ isOpened: false, value: '' });
    this.props.handleSearch ? this.props.handleSearch('') : alert('Error');
  };

  handleChangeSearch = (event: React.FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value;
    this.setState({ value: input });
    this.props.handleSearch ? this.props.handleSearch(input) : alert('Error');
  };

  render() {
    const { isOpened, value } = this.state;
    const {
      name,
      statusActive,
      mode,
      hasStatus,
      hasCancel,
      onClick,
      handleCloseEdit,
    } = this.props;

    return (
      <div className="toolbar">
        {!isOpened ? (
          <div className="toolbar__title" id="title">
            <div className="dflex">
              {hasCancel && (
                <IconButton
                  icon={['fas', 'arrow-left']}
                  onClick={handleCloseEdit}
                />
              )}
              <h3 className="title__label">{name}</h3>
            </div>
            {hasStatus && <Label active={statusActive!} />}
            {mode === 'search' && (
              <div className="dflex">
                <IconButton
                  icon={['fas', 'magnifying-glass']}
                  onClick={this.handleOnSearch}
                />
                <Button label="Role Matrix" icon={true} size="medium" />
              </div>
            )}
            {mode === 'edit' && !hasCancel && (
              <IconButton icon={['fas', 'pen']} onClick={onClick} />
            )}
          </div>
        ) : (
          <Search
            onClick={this.handleOffSearch}
            inputValue={value}
            onChange={this.handleChangeSearch}
          />
        )}
      </div>
    );
  }
}

export default Toolbar;
