import React, { useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Address from './index'
import { Cell } from '@nutui/nutui-react'
import { AddressList } from '@nutui/nutui-react/dist/types/packages/address/type'
import { HeartFill, Heart1, Close, Left } from '@nutui/icons-react-taro'

const meta = {
  title: 'Example/Address 地址',
  component: Address,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Address>

export default meta
type Story = StoryObj<typeof meta>

export const Demo1: Story = {
  name: '选择地址',
  render: ({ ...args }) => {
    const [text, setText] = useState('请选择地址')
    const [optionsDemo1] = useState([
      {
        value: '浙江',
        text: '浙江',
        children: [
          {
            value: '杭州',
            text: '杭州',
            disabled: true,
            children: [
              { value: '西湖区', text: '西湖区', disabled: true },
              { value: '余杭区', text: '余杭区' },
            ],
          },
          {
            value: '温州',
            text: '温州',
            children: [
              { value: '鹿城区', text: '鹿城区' },
              { value: '瓯海区', text: '瓯海区' },
            ],
          },
        ],
      },
      {
        value: '湖南',
        text: '湖南',
        disabled: true,
        children: [
          {
            value: '长沙',
            text: '长沙',
            disabled: true,
            children: [
              { value: '西湖区', text: '西湖区' },
              { value: '余杭区', text: '余杭区' },
            ],
          },
          {
            value: '温州',
            text: '温州',
            children: [
              { value: '鹿城区', text: '鹿城区' },
              { value: '瓯海区', text: '瓯海区' },
            ],
          },
        ],
      },
      {
        value: '福建',
        text: '福建',
        children: [
          {
            value: '福州',
            text: '福州',
            children: [
              { value: '鼓楼区', text: '鼓楼区' },
              { value: '台江区', text: '台江区' },
            ],
          },
        ],
      },
    ])
    const [visible, setVisible] = useState(false)

    return (
      <>
        <div style={{ height: '50px', width: '500px', position: 'relative' }}>
          <Cell
            title="选择地址"
            description={text}
            onClick={() => setVisible(true)}
          />
          <Address
            visible={visible}
            options={optionsDemo1}
            title="选择地址"
            onChange={(value, params) => {
              setText(value)
            }}
            onClose={() => setVisible(false)}
          />
        </div>
      </>
    )
  },
}

export const Demo2: Story = {
  name: '选择已有地址',
  render: ({ ...args }) => {
    const [text, setText] = useState('请选择地址')
    const [visible, setVisible] = useState(false)
    const [existList, setExistAddress] = useState([
      {
        id: 1,
        addressDetail: '',
        cityName: '次渠镇',
        countyName: '通州区',
        provinceName: '北京市',
        selectedAddress: true,
        townName: '',
        name: '探探鱼1',
        phone: '182****1718',
      },
      {
        id: 2,
        addressDetail: '',
        cityName: '钓鱼岛全区',
        countyName: '',
        provinceName: '钓鱼岛',
        selectedAddress: false,
        townName: '',
        name: '探探鱼2',
        phone: '182****1718',
      },
      {
        id: 3,
        addressDetail: '京东大厦',
        cityName: '大兴区',
        countyName: '科创十一街18号院',
        provinceName: '北京市',
        selectedAddress: false,
        townName: '',
        name: '探探鱼3',
        phone: '182****1718',
      },
    ])

    const selectedTwo = (data: AddressList) => {
      const { provinceName, cityName, countyName, townName, addressDetail } =
        data as AddressResult
      if (provinceName) {
        setText(provinceName + cityName + countyName + townName + addressDetail)
      }
    }

    return (
      <>
        <div style={{ height: '50px', width: '500px', position: 'relative' }}>
          <Cell
            title="选择地址"
            description={text}
            onClick={() => setVisible(true)}
          />
          <Address
            visible={visible}
            type="exist"
            existList={existList}
            onExistSelect={selectedTwo}
            title="配送"
            onClose={() => setVisible(false)}
          />
        </div>
      </>
    )
  },
}

export const Demo3: Story = {
  name: '自定义图标',
  render: ({ ...args }) => {
    const [text, setText] = useState('请选择地址')
    const [icon, setIcon] = useState({
      selectIcon: <HeartFill color="red" />,
      defaultIcon: <Heart1 />,
      closeIcon: <Close />,
      backIcon: <Left />,
    })

    const [visible, setVisible] = useState(false)
    const [existList, setExistAddress] = useState([
      {
        id: 1,
        addressDetail: '',
        cityName: '次渠镇',
        countyName: '通州区',
        provinceName: '北京市',
        selectedAddress: true,
        townName: '',
        name: '探探鱼1',
        phone: '182****1718',
      },
      {
        id: 2,
        addressDetail: '',
        cityName: '钓鱼岛全区',
        countyName: '',
        provinceName: '钓鱼岛',
        selectedAddress: false,
        townName: '',
        name: '探探鱼2',
        phone: '182****1718',
      },
      {
        id: 3,
        addressDetail: '京东大厦',
        cityName: '大兴区',
        countyName: '科创十一街18号院',
        provinceName: '北京市',
        selectedAddress: false,
        townName: '',
        name: '探探鱼3',
        phone: '182****1718',
      },
    ])

    const selectedThree = (data: AddressList) => {
      const { provinceName, cityName, countyName, townName, addressDetail } =
        data as AddressResult
      if (provinceName) {
        setText(provinceName + cityName + countyName + townName + addressDetail)
      }
    }

    return (
      <div style={{ height: '50px', width: '500px', position: 'relative' }}>
        <Cell
          title="选择地址"
          description={text}
          onClick={() => setVisible(true)}
        />
        <Address
          visible={visible}
          type="exist"
          existList={existList}
          onExistSelect={selectedThree}
          defaultIcon={icon.defaultIcon}
          selectIcon={icon.selectIcon}
          onClose={() => setVisible(false)}
        />
      </div>
    )
  },
}

export const Demo4: Story = {
  name: '非受控方式',
  render: ({ ...args }) => {
    const addressRef = useRef<any>(null)
    const [text, setText] = useState('请选择地址')

    const [optionsDemo] = useState([
      {
        value: '浙江',
        text: '浙江',
        children: [
          {
            value: '杭州',
            text: '杭州',
            disabled: true,
            children: [
              { value: '西湖区', text: '西湖区', disabled: true },
              { value: '余杭区', text: '余杭区' },
            ],
          },
          {
            value: '温州',
            text: '温州',
            children: [
              { value: '鹿城区', text: '鹿城区' },
              { value: '瓯海区', text: '瓯海区' },
            ],
          },
        ],
      },
      {
        value: '湖南',
        text: '湖南',
        disabled: true,
        children: [
          {
            value: '长沙',
            text: '长沙',
            disabled: true,
            children: [
              { value: '西湖区', text: '西湖区' },
              { value: '余杭区', text: '余杭区' },
            ],
          },
          {
            value: '温州',
            text: '温州',
            children: [
              { value: '鹿城区', text: '鹿城区' },
              { value: '瓯海区', text: '瓯海区' },
            ],
          },
        ],
      },
      {
        value: '福建',
        text: '福建',
        children: [
          {
            value: '福州',
            text: '福州',
            children: [
              { value: '鼓楼区', text: '鼓楼区' },
              { value: '台江区', text: '台江区' },
            ],
          },
        ],
      },
    ])

    return (
      <div style={{ height: '50px', width: '500px', position: 'relative' }}>
        <Cell
          title="选择地址"
          description={text}
          onClick={() => addressRef.current?.open()}
        />
        <Address
          ref={addressRef}
          defaultVisible={false}
          options={optionsDemo}
          title="选择地址"
          onChange={(value, params) => {
            setText(value)
          }}
          onClose={() => addressRef.current?.close()}
        />
      </div>
    )
  },
}
