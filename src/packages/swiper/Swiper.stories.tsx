import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { defaultProps } from './swiper'
import Swiper from './index'

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
]

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Swiper 轮播',
  component: Swiper,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  render: ({ ...args }) => (
    <Swiper {...args}>
      {list.map((item, index) => {
        return (
          <Swiper.Item key={item}>
            <img src={item} onClick={() => console.log(index)} alt="" />
          </Swiper.Item>
        )
      })}
    </Swiper>
  ),
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Swiper>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  name: '基础用法',
  args: {
    ...defaultProps,
    autoPlay: '2000',
    indicator: true,
    loop: true,
  },
}

export const Primary1: Story = {
  name: '自定义大小',
  args: {
    ...Primary.args,
    width: 100,
    height: 100,
  },
}

export const Primary2: Story = {
  name: '垂直方向',
  args: {
    ...Primary.args,
    direction: 'vertical',
  },
}

export const Primary3: Story = {
  name: '水平居中展示',
  args: {
    ...Primary.args,
    center: true,
  },
}
