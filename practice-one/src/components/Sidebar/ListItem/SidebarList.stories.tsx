import { ComponentMeta, ComponentStory } from '@storybook/react';

import SidebarList from './SidebarList';

export default {
  title: 'SidebarList',
  component: SidebarList,
} as ComponentMeta<typeof SidebarList>;

const Template: ComponentStory<typeof SidebarList> = (args) => <SidebarList {...args} />;

const Default = Template.bind({});
Default.args = {
  list: [
    { id: '1', label: 'Users', icon: ['fas', 'user-group'], active: true },
    { id: '2', label: 'Roles', icon: ['fas', 'user-check'] },
    { id: '3', label: 'Rules', icon: ['fas', 'clipboard-check'] },
  ],
};

export { Default };
