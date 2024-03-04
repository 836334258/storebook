import type { Meta, StoryObj } from '@storybook/react'

import React, { useMemo, useState } from 'react'
import FixedNav from './index'
import { Drag } from '../drag/drag'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/FixedNav 悬浮导航',
  component: FixedNav,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },,
} satisfies Meta<typeof FixedNav>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Demo1: Story = {
  name: '基础用法',
  render: ({ visible: visible1, onChange, ...args }) => {
    const [visible, setVisible] = useState(false)
    const change = (value: boolean) => {
      setVisible(value)
    }

    return (
      <div style={{ height: '200px', width: '1000px' }}>
        <FixedNav visible={visible} onChange={change} {...args} />
      </div>
    )
  },
  args: {
    visible: true,
    overlay: true,
    activeText: '基础用法',
    position: { top: '70px' },
    list: [
      {
        id: 1,
        text: '首页',
        icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png',
      },
      {
        id: 2,
        text: '分类',
        icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png',
      },
      {
        id: 3,
        text: '购物车',
        num: 2,
        icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png',
      },
      {
        id: 4,
        text: '我的',
        icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png',
      },
    ],
  },
}

export const Demo2: Story = {
  name: '左侧效果',
  render: ({ visible: visible1, onChange, ...args }) => {
    const [visible, setVisible] = useState(false)
    const change = (value: boolean) => {
      setVisible(value)
    }
    return (
      <div style={{ height: '200px', width: '1000px' }}>
        <FixedNav visible={visible} onChange={change} {...args} />
      </div>
    )
  },
  args: {
    ...Demo1.args,
    type: 'left',
  },
}

export const Demo3: Story = {
  name: '取消背景遮罩',
  render: ({ visible: visible1, onChange, ...args }) => {
    const [visible, setVisible] = useState(false)
    const change = (value: boolean) => {
      setVisible(value)
    }
    return (
      <div style={{ height: '200px', width: '1000px' }}>
        <FixedNav visible={visible} onChange={change} {...args} />
      </div>
    )
  },
  args: {
    ...Demo1.args,
    overlay: false,
    type: 'left',
  },
}

export const Demo4: Story = {
  name: '支持拖拽',
  render: ({ visible: visible1, onChange, ...args }) => {
    const [visible, setVisible] = useState(false)
    const change = (value: boolean) => {
      setVisible(value)
    }
    return (
      <div style={{ height: '200px', width: '1000px', position: 'relative' }}>
        <Drag direction="y" style={{ left: '0px', top: '0px' }}>
          <FixedNav visible={visible} onChange={change} {...args} />
        </Drag>
      </div>
    )
  },
  args: {
    ...Demo1.args,
    overlay: false,
    type: 'left',
  },
}
