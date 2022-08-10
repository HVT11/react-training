import './search.scss';

import React from 'react';

import IconButton from '../Button/IconButton/IconButton';
import InputSearch from '../Input/InputSearch/InputSearch';

interface ISearch {
  inputValue: string | undefined;
  onHandleClick?: () => void;
  onHandleChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

class Search extends React.Component<ISearch> {
  render() {
    const { onHandleClick, onHandleChange, inputValue } = this.props;

    return (
      <div className="search" id="search">
        <InputSearch value={inputValue} onHandleChange={onHandleChange} />
        <IconButton icon={['fas', 'xmark']} onHandleClick={onHandleClick} />
      </div>
    );
  }
}

export default Search;
