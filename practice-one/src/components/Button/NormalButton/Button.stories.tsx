import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Button/NormalButton',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const AddButton = Template.bind({});
AddButton.args = {
  primary: true,
  label: '+ New',
  size: 'large',
  onHandleClick: () => {
    alert('Add Button');
  },
};

const DeleteButton = Template.bind({});
DeleteButton.args = {
  label: 'Delete',
  size: 'small',
  onHandleClick: () => {
    alert('Delete Button');
  },
};

const SaveButton = Template.bind({});
SaveButton.args = {
  primary: true,
  label: 'Save',
  size: 'small',
  onHandleClick: () => {
    alert('Save Button');
  },
};

const HasIcon = Template.bind({});
HasIcon.args = {
  label: 'Name button',
  size: 'medium',
  onHandleClick: () => {
    alert('Save Button');
  },
  icon: true,
};

export { AddButton, DeleteButton, HasIcon, SaveButton };
