import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import VirtualList from './index'
import { defaultProps } from './virtuallist'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/VirtualList 虚拟列表',
  component: VirtualList,
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
} satisfies Meta<typeof VirtualList>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  name: '基础用法-垂直等高',
  args: {
    ...defaultProps,
    list: ['item1', 'item2', 'item3'],
  },
}

export const Primary1: Story = {
  name: '垂直不等高&无限下滑',
  args: {
    ...Primary.args,
    itemEqual: false,
  },
}

export const Primary2: Story = {
  name: '水平等宽',
  args: {
    ...Primary.args,
    direction: 'horizontal',
  },
}
