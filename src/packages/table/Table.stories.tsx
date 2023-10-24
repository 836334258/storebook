import type { Meta, StoryObj } from '@storybook/react'

import React from 'react'
import Table from './index'
import { defaultProps } from './table'
import { Dongdong } from '@nutui/icons-react'
import Button from '../button'
import Toast from '../toast'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Table 表格',
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
  name: '基础用法',
  args: {
    ...defaultProps,
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

export const Primary1: Story = {
  name: '是否显示边框，文字对齐',
  args: {
    ...Primary.args,
    bordered: false,
  },
}

export const Primary2: Story = {
  name: '显示总结栏',
  args: {
    ...Primary.args,
    summary: '这是总结栏',
  },
}

export const Primary3: Story = {
  name: '条纹、明暗交替',
  args: {
    ...Primary.args,
    striped: true,
  },
}

export const Primary4: Story = {
  name: '隐藏表头',
  args: {
    ...Primary.args,
    showHeader: false,
  },
}

export const Primary5: Story = {
  name: '无数据默认展示，支持自定义',
  args: {
    ...Primary.args,
    data: [],
    noData: '这里是自定义展示',
  },
}

export const Primary6: Story = {
  name: '自定义单元格',
  args: {
    ...Primary.args,
    data: [
      {
        name: 'Tom',
        sex: '男',
        record: '小学',
        render: () => {
          return (
            <Button
              onClick={() => Toast.show('hello')}
              size="small"
              type="primary"
            >
              <div>Hello</div>
            </Button>
          )
        },
      },
      {
        name: 'Lucy',
        sex: '女',
        record: '本科',
        render: () => {
          return <Dongdong height="14px" width="14px" />
        },
      },
      {
        name: 'Jack',
        sex: '男',
        record: '高中',
        render: () => {
          return (
            <Button
              type="success"
              size="small"
              onClick={() => window.open('https://www.jd.com')}
            >
              <div>跳转到京东</div>
            </Button>
          )
        },
      },
    ],
    columns: [
      {
        title: '姓名',
        key: 'name',
        align: 'center',
      },
      {
        title: '性别',
        key: 'sex',
      },
      {
        title: '学历',
        key: 'record',
      },
      {
        title: '操作',
        key: 'render',
      },
    ],
  },
}

export const Primary7: Story = {
  name: '支持排序',
  args: {
    ...Primary.args,
    onSort: (item, data) => {
      return data
    },
  },
}
