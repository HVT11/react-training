import { ComponentMeta, ComponentStory } from '@storybook/react';

import Modal from './Modal';

export default {
  title: 'Modal',
  componnet: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

const Default = Template.bind({});
Default.args = {
  title: 'This is title',
};

const HasButton = Template.bind({});
HasButton.args = {
  title: 'This is title',
  nameBtn1: 'Button 1',
  nameBtn2: 'Button 2',
};

const HasInput = Template.bind({});
HasInput.args = {
  title: 'This is title',
  nameBtn1: 'Button',
  hasInput: true,
};

export { Default, HasButton, HasInput };
