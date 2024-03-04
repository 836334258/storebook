import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Space from './index'
import { Button } from '../button/button'
import ConfigProvider from '../configprovider'

const meta = {
  title: 'Example/Space 间距',
  component: Space,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Space>

export default meta
type Story = StoryObj<typeof meta>

export const Demo1: Story = {
  name: '基本用法',
  render: (args) => (
    <Space {...args}>
      <Button>按钮1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
    </Space>
  ),
}

export const Demo2: Story = {
  name: '换行',
  render: (args) => (
    <Space {...args}>
      <Button>按钮1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
      <Button>按钮4</Button>
      <Button>按钮5</Button>
      <Button>按钮6</Button>
    </Space>
  ),
  args: {
    wrap: true,
  },
}

export const Demo3: Story = {
  name: '垂直',
  render: (args) => (
    <Space {...args}>
      <Button>按钮1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
      <Button>按钮4</Button>
      <Button>按钮5</Button>
      <Button>按钮6</Button>
    </Space>
  ),
  args: {
    direction: 'vertical',
  },
}

export const Demo4: Story = {
  name: '间距大小',
  render: (args) => (
    <ConfigProvider
      theme={{
        nutuiSpaceGap: '20px',
      }}
    >
      <Space {...args}>
        <Button>按钮1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
        <Button>按钮4</Button>
        <Button>按钮5</Button>
        <Button>按钮6</Button>
      </Space>
    </ConfigProvider>
  )
}
