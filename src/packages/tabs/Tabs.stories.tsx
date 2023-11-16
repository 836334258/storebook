import React, { useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Tabs from './index'
import { Home, Category, Find, Cart, My, Dongdong, Jd } from '@nutui/icons-react'
import { Swiper } from '@nutui/nutui-react'

const meta = {
  title: 'Example/Tabs 选项卡切换',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Demo1: Story = {
  name: '基础用法',
  render: ({ ...args }) => {
    const [tab1value, setTab1value] = useState('0')
    return (
      <>
        <Tabs
          value={tab1value}
          onChange={(value) => {
            setTab1value(value)
          }}
        >
          <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
        </Tabs>
      </>
    )
  },
}

export const Demo2: Story = {
  name: '基础用法-微笑曲线',
  render: ({ ...args }) => {
    const [tab1value, setTab1value] = useState('0')
    return (
      <>
        <Tabs
          value={tab1value}
          activeType="smile"
          onChange={(value) => {
            setTab1value(value)
          }}
        >
          <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
        </Tabs>
      </>
    )
  },
}

export const Demo3: Story = {
  name: '基础用法-Title 左对齐',
  render: ({ ...args }) => {
    const [tab1value, setTab1value] = useState('0')
    return (
      <>
        <Tabs
          value={tab1value}
          align="left"
          onChange={(value) => {
            setTab1value(value)
          }}
        >
          <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
        </Tabs>
      </>
    )
  },
}

export const Dem4: Story = {
  name: '通过 value 匹配',
  render: ({ ...args }) => {
    const [tab2value, setTab2value] = useState('0')
    return (
      <>
        <Tabs
          value={tab2value}
          onChange={(value) => {
            setTab2value(value)
          }}
        >
          <Tabs.TabPane title="Tab 1" value="0">
            {' '}
            Tab 1{' '}
          </Tabs.TabPane>
          <Tabs.TabPane title="Tab 2" value="1" disabled>
            {' '}
            Tab 2{' '}
          </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3" value="2">
            {' '}
            Tab 3{' '}
          </Tabs.TabPane>
        </Tabs>
      </>
    )
  },
}

export const Demo5: Story = {
  name: '滑动切换',
  render: ({ ...args }) => {
    const [tab2value, setTab2value] = useState('0')
    const swiperRef = useRef(null)
    const [tabIndex, setTabIndex] = useState(0)
    return (
      <>
        <div style={{ height: '200px', width: '500px' }}>
          <Tabs
            value={tabIndex}
            onChange={(page) => {
              swiperRef.current?.to(page)
              setTabIndex(page)
            }}
          >
            <Tabs.TabPane title="Tab 1" />
            <Tabs.TabPane title="Tab 2" />
            <Tabs.TabPane title="Tab 3" />
          </Tabs>
          <Swiper
            initPage={0}
            loop={false}
            ref={swiperRef}
            onChange={(page) => {
              setTabIndex(page)
            }}
          >
            <Swiper.Item>
              <div style={{ backgroundColor: '#fff', padding: '10px' }}>
                Tab 1
              </div>
            </Swiper.Item>
            <Swiper.Item>
              <div style={{ backgroundColor: '#fff', padding: '10px' }}>
                Tab 2
              </div>
            </Swiper.Item>
            <Swiper.Item>
              <div style={{ backgroundColor: '#fff', padding: '10px' }}>
                Tab 3
              </div>
            </Swiper.Item>
          </Swiper>
        </div>
      </>
    )
  },
}

export const Demo6: Story = {
  name: 'Tabpane 自动高度',
  render: ({ ...args }) => {
    const [tab2value, setTab2value] = useState('0')
    return (
      <>
        <Tabs
          value={tab2value}
          autoHeight
          onChange={(value) => {
            setTab2value(value)
          }}
        >
          <Tabs.TabPane title="Tab 1">
            <p>Tab 1</p>
            <p>Tab 1</p>
            <p>Tab 1</p>
            <p>Tab 1</p>
          </Tabs.TabPane>
          <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
          <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
        </Tabs>
      </>
    )
  },
}

export const Demo7: Story = {
  name: '自定义标签栏',
  render: ({ ...args }) => {
    const [tab7value, setTab7value] = useState('c1')
    const list6 = [
      {
        title: '自定义 1',
        paneKey: 'c1',
        icon: <Dongdong />,
      },
      {
        title: '自定义 2',
        paneKey: 'c2',
        icon: <Jd />,
      },
      {
        title: '自定义 3',
        paneKey: 'c3',
      },
    ]
    return (
      <>
        <Tabs
          value={tab7value}
          title={() => {
            return list6.map((item) => (
              <div
                onClick={() => setTab7value(item.paneKey)}
                className={`nut-tabs__titles-item ${
                  tab7value === item.paneKey
                    ? 'nut-tabs__titles-item--active'
                    : ''
                }`}
                key={item.paneKey}
              >
                {item.icon || null}
                <span className="nut-tabs__titles-item__text">
                  {item.title}
                </span>
                <span className="nut-tabs__titles-item__line" />
              </div>
            ))
          }}
        >
          {list6.map((item) => (
            <Tabs.TabPane key={item.paneKey} value={item.paneKey}>
              {item.title}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </>
    )
  },
}
