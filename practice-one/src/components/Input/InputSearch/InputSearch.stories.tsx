import { ComponentMeta, ComponentStory } from '@storybook/react';

import InputSearch from './InputSearch';

export default {
  title: 'Input/InputSearch',
  component: InputSearch,
} as ComponentMeta<typeof InputSearch>;

const Template: ComponentStory<typeof InputSearch> = (args) => <InputSearch {...args} />;

const Defaut = Template.bind({});

export { Defaut };
