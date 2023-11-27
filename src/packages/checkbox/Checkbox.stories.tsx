import type { Meta, StoryObj } from '@storybook/react'

import React, { useRef } from 'react'
import Checkbox from './index'
import { title } from 'process'
import { useState } from 'react'
import { Cell, ConfigProvider } from '@nutui/nutui-react'
import { Checklist } from '@nutui/icons-react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Checkbox 复选按钮',
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Demo1: Story = {
  name: '非受控',
  render: ({ ...args }) => {
    return (
      <Checkbox
        {...args}
        className="test"
        label="复选框"
        defaultChecked={false}
      />
    )
  },
}

export const Demo2: Story = {
  name: '受控',
  render: ({ ...args }) => {
    const [controlled, setControlled] = useState(false)

    return (
      <Checkbox
        {...args}
        className="test"
        label="复选框"
        checked={controlled}
        onChange={(val) => setControlled(val)}
      />
    )
  },
  argTypes: {
    checked: {
      table: {
        disable: true,
      },
    },
  },
}

export const Demo3: Story = {
  name: '半选状态',
  render: ({ ...args }) => {
    const [checked, setChecked] = useState(true)
    return (
      <>
        <Checkbox {...args} value="1" label="复选框1" checked indeterminate />
      </>
    )
  },
}

export const Demo4: Story = {
  name: '禁用状态',
  render: ({ ...args }) => {
    return (
      <Checkbox
        {...args}
        labelPosition="right"
        label="未选时禁用状态"
        checked={false}
        disabled
      />
    )
  },
}

export const Demo5: Story = {
  name: '自定义图标',
  render: ({ ...args }) => {
    return (
      <>
        <Checkbox
          {...args}
          icon={<Checklist />}
          checkedIcon={<Checklist className="nut-checkbox__icon" />}
        >
          自定义图标
        </Checkbox>
      </>
    )
  },
}

export const Demo6: Story = {
  name: '全选/半选/取消',
  render: ({ ...args }) => {
    const [checkboxgroup2, setCheckboxgroup2] = useState(['1'])
    const checkboxgroup2Ref = useRef(null)
    const [checkbox1, setCheckbox1] = useState(false)
    const [indeterminate, setIndeterminate] = useState(false)
    return (
      <>
        <div style={{ width: '50%' }}>
          <Checkbox
            {...args}
            checked={checkbox1}
            indeterminate={indeterminate}
            onChange={(state, label) => {
              if (state) {
                setIndeterminate(false)
              }
              setCheckbox1(state)
              ;(checkboxgroup2Ref.current as any).toggle(state)
            }}
          >
            全选
          </Checkbox>
        </div>

        <Checkbox.Group
          ref={checkboxgroup2Ref}
          direction="horizontal"
          checkedValue={checkboxgroup2}
          onChange={(value) => {
            if (value.length === 4) {
              setIndeterminate(false)
              setCheckbox1(true)
            } else if (value.length && value.length < 4) {
              setIndeterminate(true)
              setCheckbox1(true)
            } else {
              setCheckbox1(false)
            }
          }}
        >
          <Checkbox value="1">选项</Checkbox>
          <Checkbox value="2">选项</Checkbox>
          <Checkbox value="3">选项</Checkbox>
          <Checkbox value="4">选项</Checkbox>
        </Checkbox.Group>
      </>
    )
  },
}
