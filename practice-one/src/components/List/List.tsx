import './list.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Item, { IItemProps } from './Item/Item';

library.add(fas);

interface IListProps {
  headerList: string;
  count: number;
  icon:
    | ['fas', 'envelope']
    | ['fas', 'user-check']
    | ['fas', 'clipboard-check']
    | ['fas', 'clock'];
  listItem: IItemProps[];
}

class List extends React.Component<IListProps> {
  render() {
    return (
      <ul className="list">
        <div className="d-flex list__header">
          <div>
            <FontAwesomeIcon icon={this.props.icon} />
          </div>
          <p className="list__header__label">
            {this.props.headerList} {this.props.count && `(${this.props.count})`}
          </p>
        </div>
        {this.props.listItem.map((item) => (
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
