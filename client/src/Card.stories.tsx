import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    to: { control: false },
    handleClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const example = Template.bind({});
example.args = {
  title: "Title",
  author: "Author"
};
