import { ComponentMeta, ComponentStory } from '@storybook/react';

import Label from './Label';

export default {
  title: 'Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

const Default = Template.bind({});
Default.args = {
  active: false,
};

const Active = Template.bind({});
Active.args = {
  active: true,
};

export { Active, Default };
