import './search.scss';

import React from 'react';

import IconButton from '../Button/IconButton/IconButton';
import InputSearch from '../Input/InputSearch/InputSearch';

interface ISearch {
  onClick?: () => void;
  // eslint-disable-next-line no-unused-vars
  onHandleChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  inputValue: string | undefined;
}

class Search extends React.Component<ISearch> {
  render() {
    const { onClick, onHandleChange, inputValue } = this.props;
    return (
      <div className="search" id="search">
        <InputSearch value={inputValue} onHandleChange={onHandleChange} />
        <IconButton icon={['fas', 'xmark']} onClick={onClick} />
      </div>
    );
  }
}

export default Search;
