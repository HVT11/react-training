import '../tabs.scss';

import React from 'react';

interface ITabProps {
  id: string;
  label: string;
  index?: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

class Tab extends React.Component<ITabProps> {
  render() {
    const active = this.props.index === this.props.id ? 'tab--active' : '';
    return (
      <button
        role="tab"
        id={`${this.props.id}`}
        className={['tab', active].join(' ')}
        onClick={this.props.onClick}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Tab;
