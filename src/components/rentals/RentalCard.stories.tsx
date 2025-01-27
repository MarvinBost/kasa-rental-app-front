import { Meta, StoryFn } from '@storybook/react';
import RentalCard, { type RentalCardProps } from './RentalCard';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Components/RentalCard',
  component: RentalCard,
} as Meta;

const Template: StoryFn<RentalCardProps> = (args: RentalCardProps) => (
  <MemoryRouter>
    <RentalCard {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  rental: {
    id: '1',
    title: 'Beautiful Beach House',
    cover: 'https://placehold.co/300x300?text=Picture',
  },
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  rental: {
    id: '1',
    title: 'Beautiful Beach House',
    cover: '',
  },
  loading: true,
};
