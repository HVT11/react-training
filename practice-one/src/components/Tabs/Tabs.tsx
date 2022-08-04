import './tabs.scss';

import React from 'react';

import Tab from './Tab/Tab';

class Tabs extends React.Component {
  state = { index: '1' };

  handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ index: event.currentTarget.id });
  };

  render() {
    return (
      <div className="tabs">
        <div className="tabs__options">
          <Tab
            label="Tab 1"
            id="1"
            index={this.state.index}
            onClick={this.handleChange}
          />
          <Tab
            label="Tab 2"
            id="2"
            index={this.state.index}
            onClick={this.handleChange}
          />
          <Tab
            label="Tab 3"
            id="3"
            index={this.state.index}
            onClick={this.handleChange}
          />
        </div>
        <div className="tabs__panel"></div>
      </div>
    );
  }
}

export default Tabs;
