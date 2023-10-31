import type { Meta, StoryObj } from '@storybook/react'

import Divider from './index'
import React from 'react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Divider 分割线',
  component: Divider,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Demo1: Story = {
  name: '基础样式',
  args: {},
}

export const Demo2: Story = {
  name: '展示文本',
  args: {
    ...Demo1.args,
    children: '文本',
  },
}

export const Demo3: Story = {
  name: '内容位置',
  args: {
    ...Demo1.args,
    children: '文本',
    contentPosition: 'right',
  },
}

export const Demo4: Story = {
  name: '垂直分割线',
  render: () => (
    <div>
      文本
      <Divider direction="vertical" />
      <a href="#" style={{ color: '#1989fa' }}>
        链接
      </a>
      <Divider direction="vertical" />
      <a href="#" style={{ color: '#1989fa' }}>
        链接
      </a>
    </div>
  ),
  args: {
    ...Demo1.args,
    direction: 'vertical',
  },
}
