import { ComponentMeta, ComponentStory } from '@storybook/react';

import SidebarList from './SidebarList';

export default {
  title: 'SidebarList',
  component: SidebarList,
} as ComponentMeta<typeof SidebarList>;

const Template: ComponentStory<typeof SidebarList> = (args) => <SidebarList {...args} />;

const Default = Template.bind({});
Default.args = {};

export { Default };
