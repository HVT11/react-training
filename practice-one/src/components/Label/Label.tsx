import './label.scss';

import React from 'react';

interface ILabelStatusProps {
  active: boolean;
}

class Label extends React.Component<ILabelStatusProps> {
  render(): React.ReactNode {
    const active = this.props.active;
    const status = active ? 'Active' : 'Not active';
    const mode = active ? 'label-status--active' : '';
    return <div className={['label-status', mode].join(' ')}>{status}</div>;
  }
}

export default Label;
