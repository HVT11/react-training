import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IItemProps } from '../../../components/List/Item/Item';
import FormView from './FormView';

const listItem: IItemProps[] = [
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
    value: 'Item 2',
  },
];
const listItemHightlight: IItemProps[] = [
  {
    id: 1,
    value: 'Item 1',
    highlight: true,
  },
  {
    id: 2,
    value: 'Item 2',
    highlight: true,
  },
  {
    id: 3,
    value: 'Item 2',
    highlight: true,
  },
];

export default {
  title: 'Layout/FormView',
  component: FormView,
} as ComponentMeta<typeof FormView>;

const Template: ComponentStory<typeof FormView> = (args) => <FormView {...args} />;

const Default = Template.bind({});
Default.args = {
  username: 'Name',
  hasAvatar: true,
  email: {
    headerList: 'List',
    icon: ['fas', 'envelope'],
    listItem: listItem,
  },
  roles: {
    headerList: 'List',
    icon: ['fas', 'envelope'],
    listItem: listItemHightlight,
    count: listItemHightlight.length,
  },
};

export { Default };
