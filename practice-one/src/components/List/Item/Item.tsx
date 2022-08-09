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
    const { highlight, link, value } = this.props;
    const mode = highlight ? 'item--highlight' : '';
    return (
      <li className={['item', mode].join(' ')}>
        {link ? <a href={link}>{value}</a> : value}
      </li>
    );
  }
}

export default Item;
