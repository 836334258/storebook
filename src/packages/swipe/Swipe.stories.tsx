import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import Swipe from './index'
import { Button, Cell } from '@nutui/nutui-react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Swipe 滑动手势',
  component: Swipe,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Swipe>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    rightAction: (
      <Button type="primary" shape="square">
        删除
      </Button>
    ),
    children: <Cell title="左滑删除" radius={0} />,
  },
}
