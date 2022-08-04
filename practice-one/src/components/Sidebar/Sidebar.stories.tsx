import { ComponentMeta, ComponentStory } from '@storybook/react';

import Sidebar from './Sidebar';

export default {
  title: 'Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

const Default = Template.bind({});
Default.args = {};

export { Default };
