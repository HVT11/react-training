import { ComponentMeta, ComponentStory } from '@storybook/react';

import Modal from './Modal';

export default {
  title: 'Modal',
  componnet: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

const Default = Template.bind({});
Default.args = {
  stateModal: true,
  title: 'This is title',
};

const HasButton = Template.bind({});
HasButton.args = {
  stateModal: true,
  title: 'This is title',
  nameBtnPrimary: 'Button 1',
  nameBtnSecondary: 'Button 2',
};

const HasInput = Template.bind({});
HasInput.args = {
  stateModal: true,
  title: 'This is title',
  nameBtnPrimary: 'Button',
  hasInput: true,
};

export { Default, HasButton, HasInput };
