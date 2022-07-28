import { ComponentMeta, ComponentStory } from '@storybook/react';

import TableRole from './TableRole';
import { IRole } from './TableRoleRow';

export default {
  title: 'Table/TableRole',
  component: TableRole,
} as ComponentMeta<typeof TableRole>;

const dataRole: IRole[] = [
  {
    id: 1,
    role: 'Role 1',
  },
  {
    id: 2,
    role: 'Role 2',
  },
];
const emptyDataUser: IRole[] = [];

const Template: ComponentStory<typeof TableRole> = (args) => <TableRole {...args} />;

const Default = Template.bind({});
Default.args = {
  list: dataRole,
};

const Empty = Template.bind({});
Empty.args = {
  list: emptyDataUser,
};

const Loading = Template.bind({});
Loading.args = {
  list: dataRole,
  isLoading: true,
};

export { Default, Empty, Loading };
