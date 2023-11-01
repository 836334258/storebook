import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Add } from '@nutui/icons-react';

import Button from './index'
import Image from '../image'
import Cell from '../cell'
import { defaultProps } from './button'

const meta = {
  title: 'Example/Button 按钮',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Demo1: Story = {
  name: '基础样式',
  args: {
    children: '按钮',
  },
}

export const Demo2: Story = {
  name: '填充模式',
  args: {
    ...Demo1.args,
    fill: 'outline',
  },
}

export const Demo3: Story = {
  name: '禁用状态',
  args: {
    ...Demo1.args,
    disabled: true,
  },
}

export const Demo4: Story = {
  name: '按钮形状',
  args: {
    ...Demo1.args,
    shape: 'square',
  },
}

export const Demo5: Story = {
  name: '加载状态',
  args: {
    ...Demo1.args,
    loading: true,
  },
}

export const Demo6: Story = {
  name: '按钮尺寸',
  args: {
    ...Demo1.args,
    size: 'small',
  },
}

export const Demo7: Story = {
  name: '图标按钮',
  args: {
    ...Demo1.args,
    icon: <Add />,
  },
}
