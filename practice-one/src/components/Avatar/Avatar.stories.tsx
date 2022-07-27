import { ComponentMeta, ComponentStory } from '@storybook/react';

import Avatar from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

const Defaut = Template.bind({});
Defaut.args = {
  username: 'Username',
  size: 'small',
};

const Circle = Template.bind({});
Circle.args = {
  username: 'Username',
  size: 'small',
  circle: true,
};

const Medium = Template.bind({});
Medium.args = {
  username: 'Username',
  size: 'medium',
};

const Large = Template.bind({});
Large.args = {
  username: 'Username',
  size: 'large',
};

const HasImage = Template.bind({});
HasImage.args = {
  url: 'https://hinhnen123.com/wp-content/uploads/2021/07/hinh-anh-avatar-trang-11.jpg',
  size: 'medium',
  circle: true,
};

export { Circle, Defaut, HasImage, Large, Medium };
