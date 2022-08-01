import './search.scss';

import React from 'react';

import IconButton from '../Button/IconButton/IconButton';
import InputSearch from '../Input/InputSearch/InputSearch';

class Search extends React.Component {
  render() {
    return (
      <div className="search" id="search">
        <InputSearch placeholder="Search user..." />
        <IconButton icon={['fas', 'xmark']} />
      </div>
    );
  }
}

export default Search;
