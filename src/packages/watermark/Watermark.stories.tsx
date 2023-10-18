import type { Meta, StoryObj } from '@storybook/react'

import WaterMark from './index'
import Image from '../image'
import Cell from '../cell'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Watermark文字水印',
  component: WaterMark,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   content: { control: 'text' },
  // },
} satisfies Meta<typeof WaterMark>

export default meta
type Story = StoryObj<typeof meta>

/**
 * 文字水印
 */
export const Text: Story = {
  name: '文字水印',
  render: (args) => (
    <div style={{ width: '800px', height: '400px' }}>
      <WaterMark {...args} />
    </div>
  ),
  args: {
    content: 'WinUI',
    zIndex: 200,
  },
}

/**
 * 图片水印
 */
const imgSrc =
  '//m.360buyimg.com/imagetools/jfs/t1/57345/6/20069/8019/62b995cdEd96fef03/51d3302dfeccd1d2.png'
export const Pic: Story = {
  name: '图片水印',
  render: (args) => (
    <div style={{ width: '800px', height: '400px' }}>
      <WaterMark {...args} />
    </div>
  ),
  args: {
    zIndex: 200,
    rotate: 22,
    imageWidth: 60,
    imageHeight: 23,
    image: imgSrc,
  },
}

/**
 * 局部水印
 */
const LocalImgSrc =
  '//m.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
export const Local: Story = {
  name: '局部水印',
  render: (args) => (
    <Cell>
      <Image src={LocalImgSrc} alt="" width="100%" height="100%" />
      <WaterMark {...args} />
    </Cell>
  ),
  args: {
    fullPage: false,
    color: 'red',
    content: 'WinUI',
  },
}
