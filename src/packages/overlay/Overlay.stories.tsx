import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Overlay from './index'
import Button from '../button'

const render = ({ ...args }) => {
  return (
    <>
      <div
        style={{
          width: '800px',
          height: '400px',
        }}
      >
        <Overlay {...args} />
      </div>
    </>
  )
}

const meta = {
  title: 'Example/Overlay 遮罩层',
  component: Overlay,
  render,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Overlay>

export default meta
type Story = StoryObj<typeof meta>

export const Demo1: Story = {
  name: '基础样式',
  args: {
    visible: false,
    closeOnOverlayClick: true,
    lockScroll: false,
  },
}

export const Demo2: Story = {
  name: '嵌套内容',
  args: {
    ...Demo1.args,
    children: <div>这里是正文</div>,
  },
}
