import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import Tour from './index'
import { defaultProps } from './tour'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Tour 引导',
  component: Tour,
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
} satisfies Meta<typeof Tour>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  name: '基础用法',
  args: {
    ...defaultProps,
    list: [
      {
        content: '70+ 高质量组件，覆盖移动端主流场景',
        target: 'target',
      },
    ],
  },
}

export const Primary1: Story = {
  name: '设置偏移量',
  args: {
    ...Primary.args,
    offset: [8, 8],
  },
}

export const Primary2: Story = {
  name: '自定义内容',
  args: {
    ...Primary.args,
    children: <div>自定义内容</div>,
  },
}
