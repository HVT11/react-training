import './list.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Item, { IItemProps } from './Item/Item';

library.add(fas);

export interface IListProps {
  headerList: string;
  count?: number;
  icon:
    | ['fas', 'envelope']
    | ['fas', 'user-check']
    | ['fas', 'clipboard-check']
    | ['fas', 'clock'];
  listItem: IItemProps[];
}

class List extends React.Component<IListProps> {
  render() {
    const { icon, headerList, count, listItem } = this.props;
    return (
      <ul className="list">
        <div className="d-flex list__header">
          <div>
            <FontAwesomeIcon icon={icon} />
          </div>
          <p className="list__header__label">
            {headerList} {count && `(${count})`}
          </p>
        </div>
        {listItem.map((item) => (
          <Item
            key={item.id}
            value={item.value}
            highlight={item.highlight}
            link={item.link}
          />
        ))}
      </ul>
    );
  }
}

export default List;
