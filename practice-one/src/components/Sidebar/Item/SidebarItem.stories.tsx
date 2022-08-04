import { ComponentMeta, ComponentStory } from '@storybook/react';

import SidebarItem from './SidebarItem';

export default {
  title: 'SidebarItem',
  component: SidebarItem,
} as ComponentMeta<typeof SidebarItem>;

const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem {...args} />;

const Default = Template.bind({});
Default.args = {
  label: 'SidebarItem',
  icon: ['fas', 'user-group'],
};

export { Default };
