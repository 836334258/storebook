import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'
import Tour from './index'
import Cell from '../cell'
import Switch from '../switch'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Tour 引导',
  component: Tour,
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
} satisfies Meta<typeof Tour>

export default meta
type Story = StoryObj<typeof meta>

/**
 * 基础用法
 */

export const Base: Story = {
  name: '基础用法',
  render: ({ type, ...rest }) => {
    const [showTour, setShowTour] = useState(false)

    const closeTour = () => {
      setShowTour(false)
    }

    const steps = [
      {
        content: '70+ 高质量组件，覆盖移动端主流场景',
        target: 'target',
      },
    ]

    return (
      <div>
        <Cell
          title="点击试试"
          extra={
            <Switch
              id="target"
              onChange={() => {
                setShowTour(true)
              }}
            />
          }
        />
        <Tour
          visible={showTour}
          onClose={closeTour}
          list={steps}
          type={type}
          location="bottom-end"
        />
      </div>
    )
  },
  args: {
    type: 'tile',
  },
}
