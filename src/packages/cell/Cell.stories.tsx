import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Cell from '../cell'

const meta = {
  title: 'Example/Cell 单元格',
  render: ({ ...args }) => {
    return <Cell {...args} />
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Cell>

export default meta
type Story = StoryObj<typeof meta>

export const Demo1: Story = {
  name: '基础用法',
  args: {
    title: '我是标题',
    extra: '我是文字',
  },
}

export const Demo2: Story = {
  name: '自定义内容',
  args: {
    children: <div>自定义内容</div>,
  },
}

export const Demo3: Story = {
  name: '垂直居中',
  args: {
    ...Demo1.args,
    align: 'center',
  },
}

export const Demo4: Story = {
  name: '链接 | 分组用法',
  render: () => (
    <Cell.Group
      divider={false}
      title="分组用法"
      description="单元格之间不显示下边线"
    >
      <Cell title="我是标题" extra="描述文字" />
      <Cell title="我是标题" extra="描述文字" />
    </Cell.Group>
  ),
}

// export const Demo5: Story = {
//   name: '加载状态',
//   args: {
//     ...Demo1.args,
//     loading: true,
//   },
// }

// export const Demo6: Story = {
//   name: '按钮尺寸',
//   args: {
//     ...Demo1.args,
//     size: 'small',
//   },
// }
