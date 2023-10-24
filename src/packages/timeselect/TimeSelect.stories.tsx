import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import TimeSelect from './index'
import { defaultProps } from './timeselect'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/TimeSelect 配送时间',
  component: TimeSelect,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],

  render: ({ ...args }) => (
    <div>
      <TimeSelect {...args} />
    </div>
  ),
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof TimeSelect>

export default meta
type Story = StoryObj<typeof meta>

const defaultValue = {
  visible: true,
  options: [
    {
      value: '20230520',
      text: '5月20日(今天)',
      children: [
        { value: '09', text: '09:00-10:00' },
        { value: '10', text: '10:00-11:00' },
        { value: '11', text: '11:00-12:00' },
      ],
    },
    {
      value: '20230521',
      text: '5月21日(星期三)',
      children: [
        { value: '09', text: '09:00-10:00' },
        { value: '10', text: '10:00-11:00' },
      ],
    },
  ],
  style: {
    height: '200px',
    with: '200px',
    flex: '1',
  },
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  name: '基础用法',
  args: {
    ...defaultProps,
    ...defaultValue,
  },
}
