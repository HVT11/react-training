import { ComponentMeta, ComponentStory } from '@storybook/react';

import SidebarItem from './SidebarItem';

export default {
  title: 'SidebarItem',
  component: SidebarItem,
} as ComponentMeta<typeof SidebarItem>;

const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem {...args} />;

const Default = Template.bind({});
Default.args = {
  id: '1',
  index: '2',
  label: 'SidebarItem',
  icon: ['fas', 'user-group'],
};

const Active = Template.bind({});
Active.args = {
  id: '1',
  index: '1',
  label: 'SidebarItem',
  icon: ['fas', 'user-group'],
};

export { Default, Active };
