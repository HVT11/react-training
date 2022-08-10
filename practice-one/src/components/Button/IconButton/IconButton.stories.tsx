import { ComponentMeta, ComponentStory } from '@storybook/react';

import IconButton from './IconButton';

export default {
  title: 'Button/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

const Search = Template.bind({});
Search.args = {
  icon: ['fas', 'magnifying-glass'],
  onHandleClick: () => alert('Button Search'),
};

const Edit = Template.bind({});
Edit.args = {
  icon: ['fas', 'pen'],
  onHandleClick: () => alert('Button Edit'),
};

const Cancel = Template.bind({});
Cancel.args = {
  icon: ['fas', 'xmark'],
  onHandleClick: () => alert('Button cancel'),
};

const Back = Template.bind({});
Back.args = {
  icon: ['fas', 'arrow-left'],
  onHandleClick: () => alert('Button back'),
};

export { Back, Cancel, Edit, Search };
