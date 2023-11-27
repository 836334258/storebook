import type { Meta, StoryObj } from '@storybook/react'

import React, { useRef } from 'react'
import { title } from 'process'
import { useState } from 'react'
import {
  Button,
  Cell,
  ConfigProvider,
  Input,
  InputNumber,
  Radio,
  TextArea,
  Toast,
} from '@nutui/nutui-react'
import { Checklist } from '@nutui/icons-react'
import Form, { FormItemRuleWithoutValidator } from './index'
import form from './index'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Form 表单',
  component: Form,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Demo1: Story = {
  name: '基础用法',
  argTypes: {
    labelPosition: {
      table: {
        disable: true,
      },
    },
    footer: {
      table: {
        disable: true,
      },
    },
  },
  render: ({ ...args }) => {
    return (
      <>
        <Form
          {...args}
          labelPosition="right"
          footer={
            <>
              <Button nativeType="submit" block type="primary">
                提交
              </Button>
            </>
          }
        >
          <Form.Item
            required
            label="字段A"
            name="username"
            rules={[
              { max: 5, message: '字段A不能超过5个字' },
              { required: true, message: '请输入字段A' },
            ]}
          >
            <Input
              className="nut-input-text"
              placeholder="请输入字段A"
              type="text"
            />
          </Form.Item>
          <Form.Item
            label="字段D"
            name="address"
            rules={[
              { max: 15, message: '字段D不能超过15个字' },
              { required: true, message: '请输入字段D' },
            ]}
          >
            <TextArea placeholder="请输入字段D" maxLength={100} />
          </Form.Item>
          <Form.Item
            label="数量"
            name="num"
            getValueFromEvent={(...args) => args[0]}
          >
            <InputNumber />
          </Form.Item>
        </Form>
      </>
    )
  },
}

export const Demo2: Story = {
  name: '表单校验',
  argTypes: {
    divider: {
      table: {
        disable: true,
      },
    },
    labelPosition: {
      table: {
        disable: true,
      },
    },
  },
  render: ({ ...args }) => {
    const submitFailed = (error: any) => {
      Toast.show({ content: JSON.stringify(error), icon: 'fail' })
    }

    const submitSucceed = (values: any) => {
      Toast.show({ content: JSON.stringify(values), icon: 'success' })
    }

    // 函数校验
    const customValidator = (
      rule: FormItemRuleWithoutValidator,
      value: string
    ) => {
      return /^\d+$/.test(value)
    }

    const valueRangeValidator = (
      rule: FormItemRuleWithoutValidator,
      value: string
    ) => {
      return /^(\d{1,2}|1\d{2}|200)$/.test(value)
    }

    return (
      <>
        <Form
          {...args}
          divider
          labelPosition="left"
          onFinish={(values) => submitSucceed(values)}
          onFinishFailed={(values, errors) => submitFailed(errors)}
          footer={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Button nativeType="submit" type="primary">
                提交
              </Button>
              <Button nativeType="reset" style={{ marginLeft: '20px' }}>
                重置
              </Button>
            </div>
          }
        >
          <Form.Item
            label="字段A"
            name="username"
            rules={[{ required: true, message: '请输入字段A' }]}
          >
            <Input placeholder="请输入字段A" type="text" />
          </Form.Item>
          <Form.Item
            label="字段B"
            name="age"
            rules={[
              { required: true, message: '请输入字段B' },
              { validator: customValidator, message: '必须输入数字' },
              { validator: valueRangeValidator, message: '必须输入0-200区间' },
            ]}
          >
            <Input placeholder="请输入字段B，必须数字且0-200区间" type="text" />
          </Form.Item>
          <Form.Item
            label="字段C"
            name="tel"
            rules={[{ max: 13, message: '请输入字段C' }]}
          >
            <Input placeholder="字段C格式不正确" type="number" />
          </Form.Item>
          <Form.Item
            label="字段D"
            name="address"
            rules={[{ required: true, message: '请输入字段D' }]}
          >
            <Input placeholder="请输入字段D" type="text" />
          </Form.Item>
        </Form>
      </>
    )
  },
}

export const Demo3: Story = {
  name: 'Form.useForm 对表单数据域进行交互',
  argTypes: {
    form: {
      table: {
        disable: true,
      },
    },
  },
  render: ({ ...args }) => {
    const [form] = Form.useForm()
    const submitFailed = (error: any) => {
      Toast.show({ content: JSON.stringify(error), icon: 'fail' })
    }

    const submitSucceed = (values: any) => {
      Toast.show({ content: JSON.stringify(values), icon: 'success' })
    }
    const onMenuChange = (value: string | number | boolean) => {
      switch (value) {
        case 'male':
          form.setFieldsValue({ note: '👨' })
          break
        case 'female':
          form.setFieldsValue({ note: '👩' })
          break
        default:
      }
    }
    return (
      <>
        <Form
          {...args}
          form={form}
          onFinish={(values) => submitSucceed(values)}
          onFinishFailed={(values, errors) => submitFailed(errors)}
        >
          <Form.Item
            label="字段A"
            name="username"
            rules={[{ required: true, message: '请输入字段A' }]}
          >
            <Input placeholder="请输入字段A" type="text" />
          </Form.Item>
          <Form.Item label="标注" name="note">
            <Input placeholder="请输入标注" type="string" />
          </Form.Item>
          <Form.Item label="字段E" name="gender">
            <Radio.Group onChange={onMenuChange}>
              <Radio value="male">A</Radio>
              <Radio value="female">B</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </>
    )
  },
}
