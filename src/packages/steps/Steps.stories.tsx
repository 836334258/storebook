import type { Meta, StoryObj } from '@storybook/react'

import React, { useState } from 'react'
import Steps from './index'
import Step from '../step'
import Demo from './demo'
import { Button } from '../button/button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Steps 步骤条',
  component: Steps,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Steps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Demo1: Story = {
  name: '基础用法',
  render: ({ ...args }) => {
    const [stepState, setStepState] = useState<any>({
      current1: 1,
      current2: 1,
      current3: 1,
      current4: 1,
      current5: 1,
    })
    const handleStep = (params: string) => {
      if (stepState[params] >= 3) {
        stepState[params] = 1
        setStepState({ ...stepState })
      } else {
        stepState[params] += 1
        setStepState({ ...stepState })
      }
    }
    return (
      <div style={{ height: '500px', width: '500px', position: 'relative' }}>
        <Steps {...args} value={stepState.current1}>
          <Step value={1} title="步骤一">
            1
          </Step>
          <Step value={2} title="步骤二">
            2
          </Step>
          <Step value={3} title="步骤三">
            3
          </Step>
        </Steps>
        <div className="steps-button" style={{ textAlign: 'center' }}>
          <Button type="danger" onClick={() => handleStep('current1')}>
            下一步
          </Button>
        </div>
      </div>
    )
  },
}

export const Demo2: Story = {
  name: '基础用法：点状',
  render: ({ ...args }) => {
    const [stepState, setStepState] = useState<any>({
      current1: 1,
      current2: 1,
      current3: 1,
      current4: 1,
      current5: 1,
    })
    const handleStep = (params: string) => {
      if (stepState[params] >= 3) {
        stepState[params] = 1
        setStepState({ ...stepState })
      } else {
        stepState[params] += 1
        setStepState({ ...stepState })
      }
    }

    return (
      <div style={{ height: '500px', width: '500px', position: 'relative' }}>
        <Steps
          {...args}
          value={stepState.current1}
          dot
          onStepClick={handleStep}
        >
          <Step value={1}>1</Step>
          <Step value={2}>2</Step>
          <Step value={3}>3</Step>
        </Steps>
        <div className="steps-button" style={{ textAlign: 'center' }}>
          <Button type="danger" onClick={() => handleStep('current1')}>
            下一步
          </Button>
        </div>
      </div>
    )
  },
}

export const Demo3: Story = {
  name: '标题和描述信息',
  render: ({ ...args }) => {
    const [stepState, setStepState] = useState<any>({
      current1: 1,
      current2: 1,
      current3: 1,
      current4: 1,
      current5: 1,
    })
    const handleStep = (params: string) => {
      if (stepState[params] >= 3) {
        stepState[params] = 1
        setStepState({ ...stepState })
      } else {
        stepState[params] += 1
        setStepState({ ...stepState })
      }
    }
    return (
      <div style={{ height: '500px', width: '500px', position: 'relative' }}>
        <Steps {...args} value={stepState.current2}>
          <Step value={1} title="步骤一" description="步骤描述">
            1
          </Step>
          <Step value={2} title="步骤二" description="步骤描述" />
          <Step value={3} title="步骤三" description="步骤描述" />
        </Steps>
        <div
          className="steps-button"
          style={{ marginTop: '10px', textAlign: 'center' }}
        >
          <Button type="danger" onClick={() => handleStep('current2')}>
            下一步
          </Button>
        </div>
      </div>
    )
  },
}

export const Demo4: Story = {
  name: '竖向步骤条',
  render: ({ ...args }) => {
    const [stepState, setStepState] = useState<any>({
      current1: 1,
      current2: 1,
      current3: 1,
      current4: 1,
      current5: 1,
    })
    const handleStep = (params: string) => {
      if (stepState[params] >= 3) {
        stepState[params] = 1
        setStepState({ ...stepState })
      } else {
        stepState[params] += 1
        setStepState({ ...stepState })
      }
    }
    return (
      <div
        className="steps-wrapper"
        style={{ height: '300px', padding: '15px 30px' }}
      >
        <Steps {...args} direction="vertical" value={2}>
          <Step
            value={1}
            title="已完成"
            description="您的订单已经打包完成，商品已发出"
          >
            1
          </Step>
          <Step value={2} title="进行中" description="您的订单正在配送途中">
            2
          </Step>
          <Step
            value={3}
            title="未开始"
            description="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"
          >
            3
          </Step>
        </Steps>
      </div>
    )
  },
}

export const Demo5: Story = {
  name: '点状步骤和垂直方向',
  render: ({ ...args }) => {
    const [stepState, setStepState] = useState<any>({
      current1: 1,
      current2: 1,
      current3: 1,
      current4: 1,
      current5: 1,
    })
    const handleStep = (params: string) => {
      if (stepState[params] >= 3) {
        stepState[params] = 1
        setStepState({ ...stepState })
      } else {
        stepState[params] += 1
        setStepState({ ...stepState })
      }
    }
    return (
      <div
        className="steps-wrapper"
        style={{ height: '300px', padding: '15px 30px' }}
      >
        <Steps {...args} direction="vertical" dot value={2}>
          <Step
            value={1}
            title="已完成"
            description="您的订单已经打包完成，商品已发出"
          >
            1
          </Step>
          <Step value={2} title="进行中" description="您的订单正在配送途中">
            2
          </Step>
          <Step
            value={3}
            title="未开始"
            description={
              <>
                <p>收货地址为：</p>
                <p>北京市经济技术开发区科创十一街18号院京东大厦</p>
              </>
            }
          >
            3
          </Step>
        </Steps>
      </div>
    )
  },
}
