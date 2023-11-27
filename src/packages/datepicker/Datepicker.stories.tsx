import type { Meta, StoryObj } from '@storybook/react'

import React, { useRef } from 'react'
import { title } from 'process'
import { useState } from 'react'
import { Cell, ConfigProvider } from '@nutui/nutui-react'
import { Checklist } from '@nutui/icons-react'
import DatePicker from './index'
import { PickerOption } from '@nutui/nutui-react/dist/types/packages/picker/types'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/DatePicker 日期选择器',
  component: DatePicker,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Demo1: Story = {
  name: '选择日期',
  argTypes: {
    visible: {
      table: {
        disable: true,
      },
    },
    title: {
      table: {
        disable: true,
      },
    },
    showChinese: {
      disable: true,
    },
  },
  render: ({ ...args }) => {
    const [show1, setShow1] = useState(false)
    const [desc1, setDesc1] = useState('2012年 01月 01日')
    const confirm1 = (values: (string | number)[], options: PickerOption[]) => {
      setDesc1(options.map((option) => option.text).join(' '))
    }
    return (
      <>
        <Cell
          title="显示中文"
          description={desc1}
          onClick={() => setShow1(true)}
        />
        <DatePicker
          {...args}
          title="日期选择"
          visible={show1}
          pickerProps={{
            popupProps: { zIndex: 1220 },
          }}
          showChinese
          onCancel={() => setShow1(false)}
          onConfirm={(options, values) => confirm1(values, options)}
        />
      </>
    )
  },
}

export const Demo2: Story = {
  name: '选择月日',
  argTypes: {
    visible: {
      table: {
        disable: true,
      },
    },
  },
  render: ({ ...args }) => {
    const [show2, setShow2] = useState(false)
    const [desc2, setDesc2] = useState('')
    const confirm2 = (values: (string | number)[], options: PickerOption[]) => {
      setDesc2(options.map((option) => option.text).join('-'))
    }
    return (
      <>
        <Cell
          title="日期选择"
          description={desc2}
          onClick={() => setShow2(true)}
        />
        <DatePicker
          title="日期选择"
          startDate={new Date(2023, 6, 4)}
          endDate={new Date(2025, 7, 1)}
          type="month-day"
          visible={show2}
          onClose={() => setShow2(false)}
          onConfirm={(options, values) => confirm2(values, options)}
        />
      </>
    )
  },
}
