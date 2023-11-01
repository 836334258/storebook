import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'
import TimeSelect from './index'
import Cell from '../cell'

// import { defaultProps } from './timeselect'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/TimeSelect 配送时间',
  component: TimeSelect,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],

  // render: ({ ...args }) => (
  //   <div>
  //     <TimeSelect {...args} />
  //   </div>
  // ),
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof TimeSelect>

export default meta
type Story = StoryObj<typeof meta>

/**
 * 基础用法
 */
export const Base: Story = {
  name: '基础用法',
  render: (args) => {
    const [visible, setVisible] = useState(false)
    const [title, setTitle] = useState('请选择时间')
    const handleClick = () => {
      setVisible(true)
    }
    const handleSelect = (value) => {
      setVisible(false)
    }
    const handleDateChange = (date, value) => {
      console.log(date, value)
    }
    const handleTimeChange = (time, value) => {
      setVisible(false)
      setTitle(time.text)
      console.log(time, value)
    }
    return (
      <div style={{ width: '600px', height: '700px' }}>
        <Cell title={title} onClick={handleClick} />
        <TimeSelect
          {...args}
          visible={visible}
          onSelect={handleSelect}
          onDateChange={handleDateChange}
          onTimeChange={handleTimeChange}
        />
      </div>
    )
  },
  argTypes: {
    visible: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    style: { height: '30%' },
    options: [
      {
        value: '20230520',
        text: '5月20日(今天)',
        children: [
          { value: '09', text: '09:00-10:00' },
          { value: '10', text: '10:00-11:00' },
          { value: '11', text: '11:00-12:00' },
        ],
      },
      {
        value: '20230521',
        text: '5月21日(星期三)',
        children: [
          { value: '09', text: '09:00-10:00' },
          { value: '10', text: '10:00-11:00' },
        ],
      },
    ],
  },
}

/**
 * 自定义数据key
 */
export const Customized: Story = {
  name: '自定义数据key',
  render: (args) => {
    const [visible, setVisible] = useState(false)
    const [title, setTitle] = useState('请选择时间')
    const handleClick = () => {
      setVisible(true)
    }
    const handleSelect = (value) => {
      setVisible(false)
    }
    const handleDateChange = (date, value) => {
      console.log(date, value)
    }
    const handleTimeChange = (time, value) => {
      setVisible(false)
      setTitle(time.text1)
      console.log(time, value)
    }
    return (
      <div style={{ width: '600px', height: '700px' }}>
        <Cell title={title} onClick={handleClick} />
        <TimeSelect
          {...args}
          visible={visible}
          onSelect={handleSelect}
          onDateChange={handleDateChange}
          onTimeChange={handleTimeChange}
        />
      </div>
    )
  },
  args: {
    style: { height: '30%' },
    options: [
      {
        value1: '20230520',
        text1: '5月20日(今天)',
        children1: [
          { value1: '09', text1: '09:00-10:00' },
          { value1: '10', text1: '10:00-11:00' },
          { value1: '11', text1: '11:00-12:00' },
        ],
      },
      {
        value1: '20230521',
        text1: '5月21日(星期三)',
        children1: [
          { value1: '09', text1: '09:00-10:00' },
          { value1: '10', text1: '10:00-11:00' },
        ],
      },
    ],
    defaultValue: [
      {
        value1: '20230521',
        children1: [{ value1: '10' }],
      },
    ],
    optionKey: {
      valueKey: 'value1',
      textKey: 'text1',
      childrenKey: 'children1',
    },
  },
}

/**
 * 支持多选
 */
export const Multiple: Story = {
  name: '支持多选',
  render: (args) => {
    const [visible, setVisible] = useState(false)
    const handleClick = () => {
      setVisible(true)
    }
    const handleSelect = (value) => {
      setVisible(false)
    }
    const handleDateChange = (date, value) => {
      console.log(date, value)
    }
    const handleTimeChange = (time, value) => {
      console.log(time, value)
    }
    return (
      <div style={{ width: '600px', height: '700px' }}>
        <Cell title="时间多选" onClick={handleClick} />
        <TimeSelect
          {...args}
          visible={visible}
          onSelect={handleSelect}
          onDateChange={handleDateChange}
          onTimeChange={handleTimeChange}
        />
      </div>
    )
  },
  args: {
    style: { height: '30%' },
    multiple: true,
    options: [
      {
        value: '20230520',
        text: '5月20日(今天)',
        children: [
          { value: '09', text: '09:00-10:00' },
          { value: '10', text: '10:00-11:00' },
          { value: '11', text: '11:00-12:00' },
        ],
      },
      {
        value: '20230521',
        text: '5月21日(星期三)',
        children: [
          { value: '09', text: '09:00-10:00' },
          { value: '10', text: '10:00-11:00' },
        ],
      },
    ],
  },
}
