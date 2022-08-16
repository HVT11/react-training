import './label.scss';

import clsx from 'clsx';
import React from 'react';

interface IProps {
  active: boolean;
}

class Label extends React.Component<IProps> {
  render() {
    const { active } = this.props;

    return (
      <div className={clsx('label', { 'label--active': active })}>
        {active ? 'Active' : 'Not active'}
      </div>
    );
  }
}

export default Label;
