import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import Tag from './index'
import { defaultProps } from './tag'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Tag 标签',
  component: Tag,
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
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  name: '基础用法',
  args: {
    ...defaultProps,
    children: '标签',
    type: 'primary',
  },
}

export const Primar1: Story = {
  name: '样式风格',
  args: {
    ...Primary.args,
    round: true,
  },
}

export const Primar2: Story = {
  name: '自定义颜色',
  args: {
    ...Primary.args,
    background: '#E9E9E9',
    color: '#999999',
  },
}
