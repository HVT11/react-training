import { ComponentMeta, ComponentStory } from '@storybook/react';

import TableRule from './TableRule';
import { IRule } from './TableRuleRow';

export default {
  title: 'Table/TableRule',
  component: TableRule,
} as ComponentMeta<typeof TableRule>;

const dataRole: IRule[] = [
  {
    id: 1,
    name: 'Name',
    des: 'Des',
  },
  {
    id: 2,
    name: 'Name',
    des: 'Des',
  },
];
const emptyDataUser: IRule[] = [];

const Template: ComponentStory<typeof TableRule> = (args) => <TableRule {...args} />;

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
