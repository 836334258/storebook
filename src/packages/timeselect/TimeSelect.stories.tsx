import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import TimeSelect from './index'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/TimeSelect',
  component: TimeSelect,
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
} satisfies Meta<typeof TimeSelect>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    visible: true,
    style: { height: '300px' },
    defaultValue: [
      {
        value1: '20230521',
        children1: [{ value1: '10' }],
      },
    ],
    options: [
      {
        value1: '20230520',
        text1: '5月20日(今天)',
        children1: [
          { value1: '09', text1: '09:00-10:00' },
          { value1: '10', text1: '10:00-11:00' },
          { value1: '11', text1: '11:00-12:00' },
        ],
      },
      {
        value1: '20230521',
        text1: '5月21日(星期三)',
        children1: [
          { value1: '09', text1: '09:00-10:00' },
          { value1: '10', text1: '10:00-11:00' },
        ],
      },
    ],
  },
}
