import './search.scss';

import React from 'react';

import IconButton from '../Button/IconButton/IconButton';
import InputSearch from '../Input/InputSearch/InputSearch';

interface ISearch {
  inputValue: string | undefined;
  onClick?: () => void;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

class Search extends React.Component<ISearch> {
  render() {
    const { onClick, onChange, inputValue } = this.props;

    return (
      <div className="search" id="search">
        <InputSearch value={inputValue} onChange={onChange} />
        <IconButton icon={['fas', 'xmark']} onClick={onClick} />
      </div>
    );
  }
}

export default Search;
