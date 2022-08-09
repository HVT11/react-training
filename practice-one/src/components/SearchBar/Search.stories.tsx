import { ComponentMeta, ComponentStory } from '@storybook/react';

import Search from './Search';

export default {
  title: 'Search',
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = () => <Search />;

const Default = Template.bind({});

export { Default };
