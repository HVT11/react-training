import '../tabs.scss';

import clsx from 'clsx';
import React from 'react';

interface ITabProps {
  id: string;
  label: string;
  index?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

class Tab extends React.Component<ITabProps> {
  render() {
    const { id, index, label, onClick } = this.props;

    return (
      <button
        role="tab"
        id={id}
        className={clsx('tab', { 'tab--active': index === id })}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
}

export default Tab;
