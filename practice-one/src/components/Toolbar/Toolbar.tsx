import './toolbar.scss';

import React from 'react';

import IconButton from '../Button/IconButton/IconButton';
import Button from '../Button/NormalButton/Button';
import Label from '../Label/Label';
import Search from '../Search/Search';

interface IToolbarProps {
  mode?: 'search' | 'edit';
  hasStatus?: boolean;
  name: string;
}

type State = {
  isOpened: boolean;
};

class Toolbar extends React.Component<IToolbarProps, State> {
  state = { isOpened: false };

  handleOnSearch = () => {
    this.setState({ isOpened: true });
    console.log('Click on');
  };

  handleOffSearch = () => {
    this.setState({ isOpened: false });
    console.log('Click off');
  };

  render() {
    return (
      <div className="toolbar">
        {!this.state.isOpened ? (
          <div className="toolbar__title" id="title">
            <h3 className="title__label">{this.props.name}</h3>
            {this.props.hasStatus && <Label active={false} />}
            {this.props.mode === 'search' && (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  icon={['fas', 'magnifying-glass']}
                  onClick={this.handleOnSearch}
                />
                <Button label="Role Matrix" icon={true} size="medium" />
              </div>
            )}
            {this.props.mode === 'edit' && <IconButton icon={['fas', 'pen']} />}
          </div>
        ) : (
          <Search onClick={this.handleOffSearch} />
        )}
      </div>
    );
  }
}

export default Toolbar;
