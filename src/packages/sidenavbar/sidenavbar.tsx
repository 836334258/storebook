import React, { FunctionComponent, ReactNode } from 'react'
import classNames from 'classnames'
import Popup from '@/packages/popup'
import { handleClick } from './utils'
import { OffsetContext } from './context'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface SideNavBarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    BasicComponent {
  /**
   * 整体标题
   */
  title: ReactNode
  /**
   * 组件是否显示
   * @default false
   */
  visible: boolean
  /**
   * 遮罩宽度百分比
   * @default 80%
   */
  width: string
  /**
   * 缩进宽度
   * @default 20
   */
  indent: number
  /**
   * 弹出位置
   * @default left
   */
  position: 'left' | 'right'
  /**
   * 关闭遮罩时触发
   */
  onClose: () => void
}

export const defaultProps = {
  ...ComponentDefaults,
  position: 'left',
  width: '80%',
} as SideNavBarProps

export const SideNavBar: FunctionComponent<Partial<SideNavBarProps>> = (
  props
) => {
  const classPrefix = 'nut-sidenavbar'
  const {
    title,
    visible,
    width,
    position,
    children,
    className,
    onClose,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const indent = props.indent ? Number(props.indent) : 20

  return (
    <Popup
      visible={visible}
      style={{ width, height: '100%' }}
      position={position}
      onClose={onClose}
    >
      <div className={classNames(className, classPrefix)} {...rest}>
        <div className={`${classPrefix}__content`}>
          <div
            className={`${classPrefix}__list sidenavbar-show`}
            onClick={handleClick}
          >
            <div
              className={`${classPrefix}__title ${classPrefix}-border-bt`}
              style={{ paddingLeft: `${indent}px` }}
            >
              {title} <i className="arrow-icon arrow-down" />
            </div>
            <OffsetContext.Provider value={indent}>
              <div className={`${classPrefix}__content`}>{children}</div>
            </OffsetContext.Provider>
          </div>
        </div>
      </div>
    </Popup>
  )
}

// SideNavBar.defaultProps = defaultProps
// SideNavBar.displayName = 'NutSideNavBar'
