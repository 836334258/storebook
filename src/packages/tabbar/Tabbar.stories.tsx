import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Tabbar from './index'
import { Home, Category, Find, Cart, My } from '@nutui/icons-react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Tabbar',
  component: Tabbar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  render: ({ ...args }) => (
    <Tabbar {...args}>
      <Tabbar.Item title="首页" icon={<Home width={20} height={20} />} />
      <Tabbar.Item title="分类" icon={<Category width={20} height={20} />} />
      <Tabbar.Item title="发现" icon={<Find width={20} height={20} />} />
      <Tabbar.Item title="购物车" icon={<Cart width={20} height={20} />} />
      <Tabbar.Item title="我的" icon={<My width={20} height={20} />} />
    </Tabbar>
  ),
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Tabbar>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {}
