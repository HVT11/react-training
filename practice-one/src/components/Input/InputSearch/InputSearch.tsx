import './inputSearch.scss';

import React from 'react';

interface IInputSearchProps {
  value: string | undefined;
  onHandleChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

class InputSearch extends React.Component<IInputSearchProps> {
  render() {
    const { value, onHandleChange } = this.props;

    return (
      <input
        type="text"
        name="search"
        placeholder="Search..."
        className="input-search"
        value={value}
        onChange={onHandleChange}
      />
    );
  }
}

export default InputSearch;
