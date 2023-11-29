import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import BackTop from './index'
import { Cell } from '../cell/cell'
import { Top } from '@nutui/icons-react'

const meta = {
  title: 'Example/BackTop 返回顶部',
  component: BackTop,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BackTop>

export default meta
type Story = StoryObj<typeof meta>

export const Demo1: Story = {
  name: '基本用法',
  render: (args) => (
    <>
      <div
        id="target"
        style={{ height: '300px', width: '800px', overflowY: 'auto' }}
      >
        {new Array(60).fill(0).map((_, index) => {
          return <Cell key={index}>我是测试数据{index}</Cell>
        })}
      </div>
      <BackTop {...args} />
    </>
  ),
  args: {
    target: 'target',
  },
}
