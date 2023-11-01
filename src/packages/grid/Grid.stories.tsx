import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Dongdong } from '@nutui/icons-react'
import Grid from './index'
import { My } from '@nutui/icons-react-taro'
import { Image, Avatar } from '@nutui/nutui-react'

const meta = {
  title: 'Example/Grid 宫格',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Grid>

export default meta
type Story = StoryObj<typeof meta>

export const Demo1: Story = {
  name: '基础样式',
  render: (args) => (
    <Grid {...args}>
      <Grid.Item text="文字1">
        <Dongdong />
      </Grid.Item>
      <Grid.Item text="文字2">
        <Dongdong />
      </Grid.Item>
      <Grid.Item text="文字3">
        <Dongdong />
      </Grid.Item>
      <Grid.Item text="文字4">
        <Dongdong />
      </Grid.Item>
      <Grid.Item text="文字5">
        <Dongdong />
      </Grid.Item>
      <Grid.Item text="文字6">
        <Dongdong />
      </Grid.Item>
      <Grid.Item text="文字7">
        <Dongdong />
      </Grid.Item>
      <Grid.Item text="文字8">
        <Dongdong />
      </Grid.Item>
    </Grid>
  ),
}

export const Demo2: Story = {
  name: '内容翻转',
  render: (args) => (
    <Grid {...args}>
      <Grid.Item text="文字1">
        <Dongdong />
      </Grid.Item>
      <Grid.Item text="文字2">
        <Dongdong />
      </Grid.Item>
      <Grid.Item text="文字3">
        <Dongdong />
      </Grid.Item>
      <Grid.Item text="文字4">
        <Dongdong />
      </Grid.Item>
      <Grid.Item text="文字5">
        <Dongdong />
      </Grid.Item>
      <Grid.Item text="文字6">
        <Dongdong />
      </Grid.Item>
      <Grid.Item text="文字7">
        <Dongdong />
      </Grid.Item>
      <Grid.Item text="文字8">
        <Dongdong />
      </Grid.Item>
    </Grid>
  ),
  args: {
    reverse: true,
  },
}

export const Demo3: Story = {
  name: '内容横向',
  render: (args) => (
    <Grid {...args}>
      <Grid.Item text="文字1">
        <Dongdong />
      </Grid.Item>
      <Grid.Item text="文字2">
        <Dongdong />
      </Grid.Item>
      <Grid.Item text="文字3">
        <Dongdong />
      </Grid.Item>
      <Grid.Item text="文字4">
        <Dongdong />
      </Grid.Item>
      <Grid.Item text="文字5">
        <Dongdong />
      </Grid.Item>
      <Grid.Item text="文字6">
        <Dongdong />
      </Grid.Item>
      <Grid.Item text="文字7">
        <Dongdong />
      </Grid.Item>
      <Grid.Item text="文字8">
        <Dongdong />
      </Grid.Item>
    </Grid>
  ),
  args: {
    direction: 'horizontal',
  },
}

export const Demo4: Story = {
  name: '自定义内容',
  render: (args) => (
    <Grid {...args}>
      <Grid.Item text={<span>More</span>}>
        <Dongdong />
      </Grid.Item>
      <Grid.Item>
        <Avatar
          className="demo-avatar"
          icon={<My color="#fff" />}
          background="#FA2C19"
        />
      </Grid.Item>
      <Grid.Item>
        <Avatar
          size="small"
          icon={
            <Image src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" />
          }
        />
      </Grid.Item>
    </Grid>
  ),
  args: {
    direction: 'horizontal',
  },
}
