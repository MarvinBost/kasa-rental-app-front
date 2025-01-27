import { Meta, StoryFn } from '@storybook/react';
import Dropdown, { type DropdownProps } from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

const Template: StoryFn<DropdownProps> = (args: DropdownProps) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Dropdown Title',
  children: 'This is the content of the dropdown.',
};
