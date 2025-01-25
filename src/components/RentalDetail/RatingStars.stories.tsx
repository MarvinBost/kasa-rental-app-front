import {Meta, StoryFn} from "@storybook/react";
import {RatingStars} from "./RatingStars";

export default {
  title: "Components/RatingStars",
  component: RatingStars,
} as Meta;

const Template: StoryFn<{rating: number}> = (args: {rating: number}) => (
  <RatingStars {...args} />
);

export const Default = Template.bind({});
Default.args = {
  rating: 3.5,
};
