import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import Collapse from './index'
import { DownArrow } from '@nutui/icons-react'
import { Primary as CollapseItemPrimary } from '../collapseitem/CollapseItem.stories'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Collapse 折叠面板',
  component: Collapse,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  render: ({ items, ...args }) => (
    <Collapse defaultActiveName={['1']} expandIcon={<DownArrow />}>
      {items.map((item, idx) => (
        <Collapse.Item key={idx} {...item}>
          标题
        </Collapse.Item>
      ))}
    </Collapse>
  ),
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Collapse>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    defaultActiveName: ['1'],
    items: [{ ...CollapseItemPrimary.args }],
  },
}
