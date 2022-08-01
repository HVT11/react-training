import './search.scss';

import React from 'react';

import IconButton from '../Button/IconButton/IconButton';
import InputSearch from '../Input/InputSearch/InputSearch';

interface ISearch {
  onClick: () => void
}

class Search extends React.Component<ISearch> {
  render() {
    return (
      <div className="search" id="search">
        <InputSearch />
        <IconButton icon={['fas', 'xmark']} onClick={this.props.onClick} />
      </div>
    );
  }
}

export default Search;
