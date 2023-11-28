import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import Drag from './index'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Drag 拖拽',
  component: Drag,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Drag>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Demo1: Story = {
  name: '基础用法',
  render: ({ ...args }) => {
    const btnStyle = {
      borderRadius: '25px',
      padding: '0 18px',
      fontSize: '14px',
      color: '#fff',
      display: 'inline-block',
      lineHeight: '36px',
      background: 'linear-gradient(135deg,#fa2c19 0,#fa6419 100%)',
    }
    return (
      <div style={{ height: '500px', width: '500px', position: 'relative' }}>
        <Drag {...args}>
          <div className="touch-dom" style={btnStyle}>
            触摸移动
          </div>
        </Drag>
      </div>
    )
  },
}

export const Demo2: Story = {
  name: '限制拖拽方向',
  render: ({ ...args }) => {
    const btnStyle = {
      borderRadius: '25px',
      padding: '0 18px',
      fontSize: '14px',
      color: '#fff',
      display: 'inline-block',
      lineHeight: '36px',
      background: 'linear-gradient(135deg,#fa2c19 0,#fa6419 100%)',
    }
    return (
      <>
        <div style={{ height: '500px', width: '500px', position: 'relative' }}>
          <Drag {...args} direction="x" style={{ top: '200px', left: '8px' }}>
            <span style={btnStyle}>只能X轴拖拽</span>
          </Drag>
          <Drag {...args} direction="y" style={{ top: '200px', right: '50px' }}>
            <span style={btnStyle}>只能Y轴拖拽</span>
          </Drag>
        </div>
      </>
    )
  },
}

export const Demo3: Story = {
  name: '自动吸边',
  render: ({ ...args }) => {
    const btnStyle = {
      borderRadius: '25px',
      padding: '0 18px',
      fontSize: '14px',
      color: '#fff',
      display: 'inline-block',
      lineHeight: '36px',
      background: 'linear-gradient(135deg,#fa2c19 0,#fa6419 100%)',
    }
    return (
      <div style={{ height: '500px', width: '500px', position: 'relative' }}>
        <Drag {...args} direction="x" attract>
          <div className="touch-dom" style={btnStyle}>
            按钮
          </div>
        </Drag>
      </div>
    )
  },
}

export const Demo4: Story = {
  name: '限制拖拽边界',
  render: ({ ...args }) => {
    const btnStyle = {
      borderRadius: '25px',
      padding: '0 18px',
      fontSize: '14px',
      color: '#fff',
      display: 'inline-block',
      lineHeight: '36px',
      background: 'linear-gradient(135deg,#fa2c19 0,#fa6419 100%)',
    }

    const right = () => {
      return document.documentElement.clientWidth - 300 - 9
    }
    const bottom = () => {
      return document.documentElement.clientHeight - 202
    }
    return (
      <>
        <div
          className="drag-boundary"
          style={{
            position: 'absolute',
            top: '0px',
            left: '8px',
            width: '300px',
            height: '200px',
            border: '1px solid red',
          }}
        />
        <Drag
          boundary={{ top: 1, left: 9, bottom: bottom(), right: right() }}
          style={{ top: '40px', left: '50px' }}
        >
          <span style={btnStyle}>限制拖拽边界</span>
        </Drag>
      </>
    )
  },
}
