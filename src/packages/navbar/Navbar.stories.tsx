import type { Meta, StoryObj } from '@storybook/react'

import React, { useState } from 'react'
import NavBar from './index'
import { Drag } from '../drag/drag'
import { Left } from '@nutui/icons-react'
import { Close, Share } from '@nutui/icons-react-taro'
import Toast from '../toast'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/NavBar 头部导航',
  component: NavBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  render: (args) => {
    return (
      <div style={{ height: '100px', width: '500px', position: 'relative' }}>
        <NavBar {...args} />
      </div>
    )
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },,
} satisfies Meta<typeof NavBar>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Demo1: Story = {
  name: '基础用法',
  args: {
    back: (
      <>
        <Left name="left" color="#979797" />
        返回
      </>
    ),
    left: <Close width={12} />,
    right: (
      <span onClick={(e) => Toast.show('icon')}>
        <Share />
      </span>
    ),
    children: <span onClick={(e) => Toast.show('标题')}>订单详情</span>,
  },
}

export const Demo2: Story = {
  name: '游览记录',
  args: {
    right: <span onClick={(e) => Toast.show('清空')}>清空</span>,
    back: <Left name="left" color="#979797" />,
    onBackClick: (e) => Toast.show('返回'),
    children: <span onClick={(e) => Toast.show('标题')}>浏览记录</span>,
  },
}
