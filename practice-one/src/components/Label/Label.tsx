import './label.scss';

import React from 'react';

interface ILabelStatusProps {
  active: boolean;
}

class Label extends React.Component<ILabelStatusProps> {
  render(): React.ReactNode {
    const status = this.props.active ? 'Active' : 'Not active';
    const mode = this.props.active ? 'label-status--active' : '';
    return <div className={['label-status', mode].join(' ')}>{status}</div>;
  }
}

export default Label;
