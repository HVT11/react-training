import './inputSearch.scss';

import React from 'react';

interface IProps {
  value: string | undefined;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

class InputSearch extends React.Component<IProps> {
  render() {
    const { value, onChange } = this.props;

    return (
      <input
        type="text"
        name="search"
        placeholder="Search..."
        className="input-search"
        value={value}
        onChange={onChange}
      />
    );
  }
}

export default InputSearch;
