import { ComponentMeta, ComponentStory } from '@storybook/react';

import Sidebar from './Sidebar';

export default {
  title: 'Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

const Default = Template.bind({});
Default.args = {
  buttonProp: {
    primary: true,
    label: '+ New',
    size: 'large',
  },
  sidebarListProp: {
    list: [
      { id: '1', label: 'Users', icon: ['fas', 'user-group'], active: true },
      { id: '2', label: 'Roles', icon: ['fas', 'user-check'] },
      { id: '3', label: 'Rules', icon: ['fas', 'clipboard-check'] },
    ],
  },
};

export { Default };
