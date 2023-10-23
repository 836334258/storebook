import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import TrendArrow from './index'
import { Success } from '@nutui/icons-react'
import { defaultProps } from './trendarrow'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/TrendArrow 趋势箭头',
  component: TrendArrow,
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
} satisfies Meta<typeof TrendArrow>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  name: '基础用法',
  args: {
    ...defaultProps,
    value: 1,
    sync: false,
  },
}

export const Primary1: Story = {
  name: '改变文字颜色',
  args: {
    ...Primary.args,
    value: 1,
  },
}

export const Primary2: Story = {
  name: '指定小数位',
  args: {
    ...Primary.args,
    value: 1,
    digits: 1,
  },
}

export const Primary3: Story = {
  name: '箭头在前面',
  args: {
    ...Primary.args,
    value: 1,
    left: true,
  },
}

export const Primary4: Story = {
  name: '显示正负号',
  args: {
    ...Primary.args,
    value: 1,
    symbol: true,
  },
}

export const Primary5: Story = {
  name: '是否展示0',
  args: {
    ...Primary.args,
    value: 0,
    symbol: true,
    zero: true,
  },
}

export const Primary6: Story = {
  name: '自定义颜色',
  args: {
    ...Primary.args,
    value: 9,
    riseColor: 'rgb(73,143,242)',
    dropColor: 'rgb(255, 190, 13)',
  },
}

export const Primary7: Story = {
  name: '自定义图标',
  args: {
    ...Primary.args,
    value: 9,
    riseIcon: <Success color="blue" />,
  },
}
