import type { Meta, StoryObj } from '@storybook/react'

import React, { useState } from 'react'
import SideNavBar from './index'
import Cell from '../cell'
import SideNavBarItem from '../sidenavbaritem'
import SubSideNavBar from '../subsidenavbar'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/SideNavBar 侧边栏导航',
  component: SideNavBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof SideNavBar>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Demo1: Story = {
  name: '基础用法',
  render: (args) => {
    const [navBarState, setNavBarState] = useState({
      visible: false,
      position: 'left',
    })
    const changeNarBar = (visible, position = navBarState.position) => {
      setNavBarState({
        visible,
        position,
      })
    }

    return (
      <>
        <div style={{ height: '200px', width: '800px', position: 'relative' }}>
          <Cell
            title="左侧弹出"
            onClick={() => {
              changeNarBar(true, 'left')
            }}
          />
          <Cell
            title="右侧弹出"
            onClick={() => {
              changeNarBar(true, 'right')
            }}
          />
          <SideNavBar
            title="首页"
            visible={navBarState.visible}
            position={navBarState.position}
            onClose={() => {
              changeNarBar(false)
            }}
          >
            <SubSideNavBar title="一级标题" value="1-0">
              <SideNavBarItem title="一级内容1" value="1-01" />
              <SideNavBarItem title="一级内容2" value="1-02" />
              <SubSideNavBar title="二级标题" value="2-0">
                <SideNavBarItem title="二级内容1" value="2-01" />
                <SideNavBarItem title="二级内容2" value="2-02" />
              </SubSideNavBar>
            </SubSideNavBar>
          </SideNavBar>
        </div>
      </>
    )
  },
  args: {},
}
