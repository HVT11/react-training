import { ComponentMeta, ComponentStory } from '@storybook/react';

import TableUser from './TableUser';
import { IUserRowProps } from './TableUserRow';

export default {
  title: 'Table/TableUser',
  component: TableUser,
} as ComponentMeta<typeof TableUser>;

const dataUser: IUserRowProps[] = [
  {
    user: {
      id: '1',
      username: 'Name',
      status: false,
      email: 'email',
    }
  },
  {
    user: {
      id: '2',
      username: 'Name',
      status: false,
      email: 'email',
    } 
  },
];
const emptyDataUser: IUserRowProps[] = [];

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
