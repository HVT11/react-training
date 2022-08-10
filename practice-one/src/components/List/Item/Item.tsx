import './item.scss';

import clsx from 'clsx';
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

    return (
      <li className={clsx('item', { 'item--highlight': highlight })}>
        {link ? <a href={link}>{value}</a> : value}
      </li>
    );
  }
}

export default Item;
