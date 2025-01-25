import {Meta, StoryFn} from "@storybook/react";
import HostInfo, {type HostInfoProps} from "./HostInfo";

export default {
  title: "Components/HostInfo",
  component: HostInfo,
} as Meta;

const Template: StoryFn<HostInfoProps> = (args: HostInfoProps) => (
  <HostInfo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: "Michel",
  picture: "https://placehold.co/300x300?text=Michel",
  rating: 3.5,
};
