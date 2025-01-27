import { Meta, StoryFn } from '@storybook/react';
import Carousel, { type CarouselProps } from './Carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as Meta;

const Template: StoryFn<CarouselProps> = (args: CarouselProps) => (
  <Carousel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  pictures: [
    'https://placehold.co/400x300?text=1',
    'https://placehold.co/400x300?text=2',
    'https://placehold.co/400x300?text=3',
  ],
  altText: 'Carousel Image',
};
