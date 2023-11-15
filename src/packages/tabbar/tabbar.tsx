import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'
import TabbarItem from '../tabbaritem'

export interface TabbarProps extends BasicComponent {
  /**
   * 默认选中的标签的索引值
   * @default 0
   */
  defaultValue: number
  /**
   * 选中的标签的索引值
   */
  value?: number
  /**
   * 是否固定在页面底部，为 true 时默认开启 safeArea
   * @default false
   */
  fixed: boolean
  /**
   * icon未激活的颜色
   * @default #7d7e80
   */
  inactiveColor: string
  /**
   * icon激活的颜色
   * @default #1989fa
   */
  activeColor: string
  /**
   * 是否开启iphone系列全面屏底部安全区适配
   * @default false
   */
  safeArea: boolean
  /**
   * 切换页签时触发事件
   * @param value
   */
  onSwitch: (value: number) => void
}

export const defaultProps = {
  ...ComponentDefaults,
  defaultValue: 0,
  fixed: false,
  inactiveColor: '',
  activeColor: '',
  safeArea: false,
  onSwitch: (value) => {},
} as TabbarProps

export const Tabbar: FunctionComponent<Partial<TabbarProps>> & {
  Item: typeof TabbarItem
} = (props) => {
  const {
    children,
    defaultValue,
    value,
    fixed,
    activeColor,
    inactiveColor,
    safeArea,
    className,
    style,
    onSwitch,
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-tabbar'

  const [selectIndex, setSelectIndex] = usePropsValue<number>({
    value,
    defaultValue,
    finalValue: 0,
    onChange: onSwitch,
  })

  return (
    <div
      className={classNames(classPrefix, className, {
        [`${classPrefix}__fixed`]: fixed,
      })}
      style={style}
    >
      <div className={`${classPrefix}__wrap`}>
        {React.Children.map(children, (child, idx) => {
          if (!React.isValidElement(child)) {
            return null
          }
          const childProps = {
            ...child.props,
            active: idx === selectIndex,
            index: idx,
            inactiveColor,
            activeColor,
            handleClick: setSelectIndex,
          }
          return React.cloneElement(child, childProps)
        })}
      </div>
      {(fixed || safeArea) && <div className={`${classPrefix}__safe-area`} />}
    </div>
  )
}

// // Tabbar.defaultProps = defaultProps
// // Tabbar.displayName = 'NutTabbar'
Tabbar.Item = TabbarItem
