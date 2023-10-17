import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import Ellipsis from './index'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Ellipsis 文本省略',
  component: Ellipsis,
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
} satisfies Meta<typeof Ellipsis>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    content:
      '但测试得出来的结果相差很小，几乎没有什么太大的参考价值。想想也是，一个 TodoList 刚能有几行样式？只有在样式足够庞大的前提下这个测试才有意义，毕竟样式多了重复的部分自然也会变多，然后积少成多最终才能达到量变引起质变的效果。当然量变引起质变这个说法可能稍微夸张了点，但样式越庞大得出来的结果才越有参考价值这个肯定是没错的，于是我把原本比较简陋简洁的 TodoList 来了个大升级',
  },
}
