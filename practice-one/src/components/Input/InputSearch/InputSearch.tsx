import './input-search.scss';

import React from 'react';

type State = {
  text: string;
};

class InputSearch extends React.Component<{}, State> {
  state = { text: '' };

  handleChangeText = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ text: event.currentTarget.value });
  };

  render() {
    return (
      <input
        type="search"
        placeholder="Search..."
        className="input-search"
        value={this.state.text}
        onChange={this.handleChangeText}
      />
    );
  }
}

export default InputSearch;
