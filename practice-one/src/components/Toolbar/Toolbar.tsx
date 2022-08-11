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
  onHandleClick?: () => void;
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
    const { isOpened, value } = this.state;
    const {
      name,
      statusActive,
      mode,
      hasStatus,
      hasCancel,
      onHandleClick,
      onHandleCloseEdit,
      onHandleSearch,
    } = this.props;

    return (
      <div className="toolbar">
        {!isOpened ? (
          <div className="toolbar__title" id="title">
            <div className="dflex">
              {hasCancel && (
                <IconButton
                  icon={['fas', 'arrow-left']}
                  onHandleClick={onHandleCloseEdit}
                />
              )}
              <h3 className="title__label">{name}</h3>
            </div>
            {hasStatus && <Label active={statusActive!} />}
            {mode === 'search' && (
              <div className="dflex">
                <IconButton
                  icon={['fas', 'magnifying-glass']}
                  onHandleClick={this.handleOnSearch}
                />
                <Button label="Role Matrix" icon={true} size="medium" />
              </div>
            )}
            {mode === 'edit' && !hasCancel && (
              <IconButton icon={['fas', 'pen']} onHandleClick={onHandleClick} />
            )}
          </div>
        ) : (
          <Search
            onHandleClick={this.handleOffSearch}
            inputValue={value}
            onHandleChange={this.handleChangeSearch}
          />
        )}
      </div>
    );
  }
}

export default Toolbar;
