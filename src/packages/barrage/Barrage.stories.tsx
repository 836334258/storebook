import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import Barrage from './index'
import { defaultProps } from './barrage'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Barrage 弹幕',
  component: Barrage,
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
} satisfies Meta<typeof Barrage>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  name: '基础用法',
  args: {
    ...defaultProps,
    list: [
      '画美不看',
      '不明觉厉',
      '喜大普奔',
      '男默女泪',
      '累觉不爱',
      '爷青结-',
    ],
  },
}
