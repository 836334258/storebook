import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Image from '../image'
import { Loading } from '@nutui/icons-react'

const meta = {
  title: 'Example/Image 图片',
  component: Image,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>

export const Demo1: Story = {
  name: '基础用法',
  args: {
    width: '100',
    height: '100',
    src: 'https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics5.baidu.com%2Ffeed%2F80cb39dbb6fd5266eddea9e1a90c6a27d507366a.jpeg%40f_auto%3Ftoken%3Dadb10177a7a8feeb0db216b2b7f32695&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1698771600&t=ceb0810f30bbbe975d1759ed665f719b',
  },
}

export const Demo2: Story = {
  name: '填充模式',
  args: {
    ...Demo1.args,
    fit: 'contain',
  },
}

export const Demo3: Story = {
  name: '图片位置',
  args: {
    ...Demo1.args,
    position: 'top',
  },
}

export const Demo4: Story = {
  name: '圆形图片',
  args: {
    ...Demo1.args,
    radius: '50%',
  },
}

