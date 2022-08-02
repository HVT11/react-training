import './item.scss';

import React from 'react';

export interface IItemProps {
  id?: number;
  value: string;
  highlight?: boolean;
  link?: string;
}

class Item extends React.Component<IItemProps> {
  render() {
    const mode = this.props.highlight ? 'item--highlight' : '';
    return (
      <li className={['item', mode].join(' ')}>
        {this.props.link ? (
          <a href={this.props.link}>{this.props.value}</a>
        ) : (
          this.props.value
        )}
      </li>
    );
  }
}

export default Item;
