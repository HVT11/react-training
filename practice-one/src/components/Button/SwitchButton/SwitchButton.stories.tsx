import { ComponentMeta, ComponentStory } from '@storybook/react';

import SwitchButton from './SwitchButton';

export default {
  title: 'Button/SwitchButton',
  component: SwitchButton,
} as ComponentMeta<typeof SwitchButton>;

const Template: ComponentStory<typeof SwitchButton> = (args) => (
  <SwitchButton {...args} />
);

const NoneChecked = Template.bind({});
NoneChecked.args = {
  checked: false,
};

const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export { Checked, NoneChecked };
