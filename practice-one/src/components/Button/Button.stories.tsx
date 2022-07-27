import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './Button';

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const AddButton = Template.bind({});
AddButton.args = {
  primary: true,
  label: '+ New',
  size: 'large',
  onClick: () => {
    alert('Add Button');
  },
};

const DeleteButton = Template.bind({});
DeleteButton.args = {
  label: 'Delete',
  size: 'medium',
  onClick: () => {
    alert('Delete Button');
  },
};

const SaveButton = Template.bind({});
SaveButton.args = {
  primary: true,
  label: 'Save',
  size: 'medium',
  onClick: () => {
    alert('Save Button');
  },
};

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export { AddButton, DeleteButton, SaveButton };
