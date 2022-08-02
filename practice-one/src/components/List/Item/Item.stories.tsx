import { ComponentMeta, ComponentStory } from '@storybook/react';

import Item from './Item';

export default {
  title: 'List/Item',
  component: Item,
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = (args) => <Item {...args} />;

const Default = Template.bind({});
Default.args = {
  value: 'Item',
};

const Highlight = Template.bind({});
Highlight.args = {
  value: 'Highlight item',
  highlight: true,
};

export { Default, Highlight };
