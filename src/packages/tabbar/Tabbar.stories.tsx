import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Tabbar from './index'
import { Home, Category, Find, Cart, My } from '@nutui/icons-react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Tabbar 标签栏',
  component: Tabbar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Tabbar>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Demo1: Story = {
  name: '基础用法',
  render: ({ ...args }) => (
    <div style={{ height: '50px', width: '500px', position: 'relative' }}>
      <Tabbar {...args}>
        <Tabbar.Item title="首页" icon={<Home width={20} height={20} />} />
        <Tabbar.Item title="分类" icon={<Category width={20} height={20} />} />
        <Tabbar.Item title="发现" icon={<Find width={20} height={20} />} />
        <Tabbar.Item title="购物车" icon={<Cart width={20} height={20} />} />
        <Tabbar.Item title="我的" icon={<My width={20} height={20} />} />
      </Tabbar>
    </div>
  ),
}

export const Demo2: Story = {
  name: '自定义选中',
  render: ({ ...args }) => (
    <div style={{ height: '50px', width: '500px', position: 'relative' }}>
      <Tabbar {...args}>
        <Tabbar.Item title="首页" icon={<Home width={20} height={20} />} />
        <Tabbar.Item title="分类" icon={<Category width={20} height={20} />} />
        <Tabbar.Item title="发现" icon={<Find width={20} height={20} />} />
        <Tabbar.Item title="购物车" icon={<Cart width={20} height={20} />} />
        <Tabbar.Item title="我的" icon={<My width={20} height={20} />} />
      </Tabbar>
    </div>
  ),
  args: {
    value: 2,
  },
}

export const Demo3: Story = {
  name: '只配图标',
  render: ({ ...args }) => (
    <div style={{ height: '50px', width: '500px', position: 'relative' }}>
      <Tabbar {...args}>
        <Tabbar.Item title="首页" icon={<Home width={20} height={20} />} />
        <Tabbar.Item title="分类" icon={<Category width={20} height={20} />} />
        <Tabbar.Item icon={<Find width={20} height={20} />} />
        <Tabbar.Item title="购物车" icon={<Cart width={20} height={20} />} />
        <Tabbar.Item title="我的" icon={<My width={20} height={20} />} />
      </Tabbar>
    </div>
  ),
}

export const Demo4: Story = {
  name: '无图标',
  render: ({ ...args }) => (
    <div style={{ height: '50px', width: '500px', position: 'relative' }}>
      <Tabbar {...args}>
        <Tabbar.Item title="首页" />
        <Tabbar.Item title="分类" />
        <Tabbar.Item title="发现" />
        <Tabbar.Item title="购物车" />
        <Tabbar.Item title="我的" />
      </Tabbar>
    </div>
  ),
}

export const Demo5: Story = {
  name: '徽标提示',
  render: ({ ...args }) => (
    <div style={{ height: '50px', width: '500px', position: 'relative' }}>
      <Tabbar {...args}>
        <Tabbar.Item title="首页" value={11} />
        <Tabbar.Item title="分类" />
        <Tabbar.Item title="发现" />
        <Tabbar.Item title="购物车" />
        <Tabbar.Item title="我的" />
      </Tabbar>
    </div>
  ),
}

export const Demo6: Story = {
  name: '红点',
  render: ({ ...args }) => (
    <div style={{ height: '50px', width: '500px', position: 'relative' }}>
      <Tabbar {...args}>
        <Tabbar.Item dot title="首页" value={11} />
        <Tabbar.Item title="分类" />
        <Tabbar.Item dot title="发现" />
        <Tabbar.Item title="购物车" />
        <Tabbar.Item title="我的" />
      </Tabbar>
    </div>
  ),
}

export const Demo7: Story = {
  name: '自定义颜色',
  render: ({ ...args }) => (
    <div style={{ height: '50px', width: '500px', position: 'relative' }}>
      <Tabbar {...args}>
        <Tabbar.Item dot title="首页" value={11} />
        <Tabbar.Item title="分类" />
        <Tabbar.Item dot title="发现" />
        <Tabbar.Item title="购物车" />
        <Tabbar.Item title="我的" />
      </Tabbar>
    </div>
  ),
  args: {
    inactiveColor: '#7d7e80',
    activeColor: '#1989fa',
  },
}
