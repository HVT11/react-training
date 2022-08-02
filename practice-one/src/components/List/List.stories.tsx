import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IItemProps } from './Item/Item';
import List from './List';

export default {
  title: 'List',
  component: List,
} as ComponentMeta<typeof List>;

const list: IItemProps[] = [
  {
    id: 1,
    value: 'Item 1',
  },
  {
    id: 2,
    value: 'Item 2',
  },
  {
    id: 3,
    value: 'Item 3',
  },
];

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

const Default = Template.bind({});
Default.args = {
  icon: ['fas', 'envelope'],
  headerList: 'List',
  listItem: list,
};

export { Default };
