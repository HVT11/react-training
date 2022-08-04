import { ComponentMeta, ComponentStory } from '@storybook/react';

import Tab from './Tab';

export default {
  title: 'Tab',
  component: Tab,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

const Default = Template.bind({});
Default.args = {
  id: '1',
  label: 'Item one',
};

export { Default };
