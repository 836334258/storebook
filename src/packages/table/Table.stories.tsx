import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import Table from './index'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/表格',
  component: Table,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    columns: [
      {
        title: 'ID',
        key: 'id',
        render: (record: any, index) => {
          return index + 1
        },
      },
      {
        title: '姓名',
        key: 'name',
      },
      {
        title: '性别',
        key: 'sex',
        render: (record: any) => {
          return (
            <span style={{ color: record.sex === '女' ? 'blue' : 'green' }}>
              {record.sex}
            </span>
          )
        },
      },
      {
        title: '学历',
        key: 'record',
      },
    ],
    data: [
      {
        name: 'Tom',
        sex: '男',
        record: '小学',
      },
      {
        name: 'Lucy',
        sex: '女',
        record: '本科',
      },
      {
        name: 'Jack',
        sex: '男',
        record: '高中',
      },
    ],
  },
}
