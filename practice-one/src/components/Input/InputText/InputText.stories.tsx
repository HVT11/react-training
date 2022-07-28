import { ComponentMeta, ComponentStory } from '@storybook/react';

import InputText from './InputText';

export default {
  title: 'Input/InputText',
  component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} />;

const Defaut = Template.bind({});
Defaut.args = {
  name: 'Name',
  text: '',
};

export { Defaut };
