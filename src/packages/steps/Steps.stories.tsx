import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import Steps from './index'
import Step from '../step'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/步骤条',
  component: Steps,
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
} satisfies Meta<typeof Steps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: (
      <>
        <Step value={1} title="步骤一" description="步骤描述">
          1
        </Step>
        <Step value={2} title="步骤二" description="步骤描述" />
        <Step value={3} title="步骤三" description="步骤描述" />
      </>
    ),
  },
}
