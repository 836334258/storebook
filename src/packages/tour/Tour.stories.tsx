import type { Meta, StoryObj } from '@storybook/react'

import React, { useState } from 'react'
import Tour from './index'
import Cell from '../cell'
import Switch from '../switch'
import './demo.scss'

const meta = {
  title: 'Example/Tour 引导',
  component: Tour,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tour>

export default meta
type Story = StoryObj<typeof meta>
/**
 * 基础用法
 */
export const Base: Story = {
  name: '基础用法',
  render: ({ type, list, location, ...rest }) => {
    const [showTour, setShowTour] = useState(false)

    const closeTour = () => {
      setShowTour(false)
    }

    return (
      <div style={{ width: '600px' }}>
        <Cell
          title="点击试试"
          extra={
            <Switch
              id="target"
              onChange={() => {
                setShowTour(true)
              }}
            />
          }
        />
        <Tour
          visible={showTour}
          onClose={closeTour}
          list={list}
          type={type}
          location={location}
        />
      </div>
    )
  },
  args: {
    type: 'tile',
    list: [
      {
        content: '70+ 高质量组件，覆盖移动端主流场景',
        target: 'target',
      },
    ],
    location: 'bottom-end',
  },
}
/**
 * 自定义内容
 */
export const Customized: Story = {
  name: '自定义内容',
  render: ({ type, list, location, closeOnOverlayClick, ...rest }) => {
    const [showTour, setShowTour] = useState(false)

    const closeTour = () => {
      setShowTour(false)
    }

    return (
      <div style={{ width: '600px' }}>
        <Cell
          title="点击试试"
          extra={
            <Switch
              id="target"
              onChange={() => {
                setShowTour(true)
              }}
            />
          }
        />
        <Tour
          visible={showTour}
          onClose={closeTour}
          list={list}
          type={type}
          location={location}
          closeOnOverlayClick={closeOnOverlayClick}
        >
          <div className="tour-demo-custom-content">
            <div>nutui-react 2.x 已经发布</div>
            <div
              onClick={() => {
                setShowTour(false)
              }}
            >
              知道了
            </div>
          </div>
        </Tour>
      </div>
    )
  },
  args: {
    type: 'tile',
    list: [
      {
        target: 'target',
      },
    ],
    location: 'bottom-end',
    closeOnOverlayClick: false,
  },
}
