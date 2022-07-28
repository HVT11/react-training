import { ComponentMeta, ComponentStory } from '@storybook/react';

import TableUser from './TableUser';
import { IUser } from './TableUserRow';

export default {
  title: 'Table/TableUser',
  component: TableUser,
} as ComponentMeta<typeof TableUser>;

const dataUser: IUser[] = [
  {
    id: 1,
    username: 'Name',
    status: false,
    email: 'email',
  },
  {
    id: 2,
    username: 'Name',
    status: false,
    email: 'email',
  },
];
const emptyDataUser: IUser[] = [];

const Template: ComponentStory<typeof TableUser> = (args) => <TableUser {...args} />;

const Default = Template.bind({});
Default.args = {
  list: dataUser,
};

const Empty = Template.bind({});
Empty.args = {
  list: emptyDataUser,
};

const Loading = Template.bind({});
Loading.args = {
  list: dataUser,
  isLoading: true,
};

export { Default, Empty, Loading };
