import { ComponentMeta, ComponentStory } from '@storybook/react';

import Toolbar from './Toolbar';

export default {
  title: 'Toolbar',
  component: Toolbar,
} as ComponentMeta<typeof Toolbar>;

const Template: ComponentStory<typeof Toolbar> = (args) => <Toolbar {...args} />;

const Default = Template.bind({});
Default.args = {
  name: 'Name',
};

const Search = Template.bind({});
Search.args = {
  name: 'Name',
  mode: 'search',
};

const Edit = Template.bind({});
Edit.args = {
  name: 'Name',
  mode: 'edit',
};

const HasStatus = Template.bind({});
HasStatus.args = {
  name: 'Name',
  mode: 'edit',
  hasStatus: true,
};

export { Default, Edit, HasStatus, Search };
