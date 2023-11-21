import type { Meta, StoryObj } from '@storybook/react'

import Calendar from './index'
import { title } from 'process'
import { useState } from 'react'
import { Cell } from '@nutui/nutui-react'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Calendar 日历',
  component: Calendar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Demo1: Story = {
  name: '基础用法',
  render: ({ ...args }) => {
    const [date, setDate] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const [dateWeek, setDateWeek] = useState('')

    const openSwitch = () => {
      setIsVisible(true)
    }

    const closeSwitch = () => {
      setIsVisible(false)
    }

    const setChooseValue = (param: string) => {
      setDate(param[3])
      setDateWeek(param[4])
    }
    return (
      <div style={{ height: '50px', width: '500px', position: 'relative' }}>
        <Cell
          title="选择单个日期"
          description={date ? `${date} ${dateWeek}` : '请选择'}
          onClick={openSwitch}
        />
        <Calendar
          {...args}
          visible={isVisible}
          defaultValue={date}
          startDate="2022-01-11"
          endDate="2029-11-30"
          onClose={closeSwitch}
          onConfirm={setChooseValue}
        />
      </div>
    )
  },
}

export const Demo2: Story = {
  name: '区间选择',
  render: ({ ...args }) => {
    const [date1, setDate1] = useState(['2019-12-23', '2019-12-26'])
    const [isVisible1, setIsVisible1] = useState(false)

    const openSwitch1 = () => {
      setIsVisible1(true)
    }

    const closeSwitch1 = () => {
      setIsVisible1(false)
    }

    const setChooseValue1 = (param: string) => {
      setDate1([...[param[0][3], param[1][3]]])
    }

    return (
      <div style={{ height: '50px', width: '500px', position: 'relative' }}>
        <Cell
          title="选择日期区间"
          description={date1 ? `${date1[0]}至${date1[1]}` : '请选择'}
          onClick={openSwitch1}
        />
        <Calendar
          visible={isVisible1}
          defaultValue={date1}
          type="range"
          startDate="2019-12-22"
          endDate="2021-01-08"
          onClose={closeSwitch1}
          onConfirm={setChooseValue1}
        />
      </div>
    )
  },
}

export const Demo3: Story = {
  name: '选择多个日期',
  render: ({ ...args }) => {
    const [date3, setDate3] = useState('')
    const [isVisible3, setIsVisible3] = useState(false)

    const openSwitch3 = () => {
      setIsVisible3(true)
    }

    const closeSwitch3 = () => {
      setIsVisible3(false)
    }

    const setChooseValue3 = (param: string) => {
      setDate3(param[3])
    }

    return (
      <div style={{ height: '50px', width: '500px', position: 'relative' }}>
        <Cell
          title="选择多个日期"
          description={
            date3 && date3.length ? `已选择${date3.length}` : '请选择'
          }
          onClick={openSwitch3}
        />
        <Calendar
          visible={isVisible3}
          defaultValue={date3}
          type="multiple"
          startDate="2022-01-01"
          endDate="2022-09-10"
          onClose={closeSwitch3}
          onConfirm={setChooseValue3}
        />
      </div>
    )
  },
}

export const Demo4: Story = {
  name: '选择周',
  render: ({ ...args }) => {
    const [date3, setDate3] = useState('')
    const [isVisible3, setIsVisible3] = useState(false)

    const openSwitch3 = () => {
      setIsVisible3(true)
    }

    const closeSwitch3 = () => {
      setIsVisible3(false)
    }

    const setChooseValue3 = (param: string) => {
      const dateArr = [...[param[0][3], param[1][3]]]
      setDate3([...dateArr])
    }

    return (
      <div style={{ height: '50px', width: '500px', position: 'relative' }}>
        <Cell
          title="选择周"
          description={
            date3 && date3.length ? `${date3[0]}$-${date3[1]}` : '请选择'
          }
          onClick={openSwitch3}
        />
        <Calendar
          visible={isVisible3}
          defaultValue={date3}
          type="week"
          startDate="2022-01-01"
          endDate="2022-09-10"
          onClose={closeSwitch3}
          onConfirm={setChooseValue3}
        />
      </div>
    )
  },
}

export const Demo5: Story = {
  name: '日期不可选',
  render: ({ ...args }) => {
    const [date3, setDate3] = useState('')
    const [isVisible3, setIsVisible3] = useState(false)

    const openSwitch3 = () => {
      setIsVisible3(true)
    }

    const closeSwitch3 = () => {
      setIsVisible3(false)
    }

    const setChooseValue3 = (param: string) => {
      const dateArr = [...[param[0][3], param[1][3]]]
      setDate3([...dateArr])
    }

    const disableDate = (date: Day) => {
      return date.day === 25
    }

    return (
      <div style={{ height: '50px', width: '500px', position: 'relative' }}>
        <Cell
          title="选择周"
          description={
            date3 && date3.length ? `${date3[0]}$-${date3[1]}` : '请选择'
          }
          onClick={openSwitch3}
        />
        <Calendar
          visible={isVisible3}
          defaultValue={date3}
          type="week"
          startDate="2023-01-01"
          endDate="2024-09-10"
          disableDate={disableDate}
          onClose={closeSwitch3}
          onConfirm={setChooseValue3}
        />
      </div>
    )
  },
}

export const Demo6: Story = {
  name: '自定义日历-自定义时间文案',
  render: ({ ...args }) => {
    const [date3, setDate3] = useState('')
    const [isVisible3, setIsVisible3] = useState(false)

    const openSwitch3 = () => {
      setIsVisible3(true)
    }

    const closeSwitch3 = () => {
      setIsVisible3(false)
    }

    const setChooseValue3 = (param: string) => {
      setDate3([...[param[0][3], param[1][3]]])
    }

    const renderDay = (date: Day) => {
      return <span>{date.day <= 9 ? `0${date.day}` : date.day}</span>
    }

    const renderDayBottom = (date: Day) => {
      return (
        <span className="info" style={{ fontSize: '12px', lineHeight: '14px' }}>
          {date ? (date.day <= 10 ? '' : date.day <= 20 ? 'mid' : '') : ''}
        </span>
      )
    }

    return (
      <div style={{ height: '50px', width: '500px', position: 'relative' }}>
        <Cell
          title="选择日期"
          description={date3 ? `${date3[0]}至${date3[1]}` : '请选择'}
          onClick={openSwitch3}
        />
        <Calendar
          visible={isVisible3}
          defaultValue={date3}
          type="range"
          startDate="2019-12-22"
          endDate="2021-01-08"
          confirmText="submit"
          startText="enter"
          endText="leave"
          renderDay={renderDay}
          renderDayBottom={renderDayBottom}
          onClose={closeSwitch3}
          onConfirm={setChooseValue3}
        />
      </div>
    )
  },
}
