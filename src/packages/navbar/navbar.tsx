import React, { FunctionComponent } from 'react'
import classNames from 'classnames'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface NavBarProps extends BasicComponent {
  /**
   * 左侧内容，渲染在返回区域的右侧
   */
  left: React.ReactNode
  /**
   * 返回区域的文字
   */
  back: React.ReactNode
  /**
   * 右侧内容
   */
  right: React.ReactNode
  /**
   * 是否固定
   * @default false
   */
  fixed: boolean
  /**
   * 是否适配安全区
   * @default false
   */
  safeAreaInsetTop: boolean
  /**
   * 固定在顶部时，是否在标签位置生成一个等高的占位元素
   * @default false
   */
  placeholder: boolean
  /**
   * 导航栏层级
   * @default 10
   */
  zIndex: number | string
  /**
   * 点击返回区域后的回调
   * @param e 
   */
  onBackClick: (e: React.MouseEvent<HTMLElement>) => void
  children?: React.ReactNode
}

export const defaultProps = {
  ...ComponentDefaults,
  left: '',
  right: '',
  back: '',
  fixed: false,
  safeAreaInsetTop: false,
  placeholder: false,
  zIndex: 10,
} as NavBarProps
export const NavBar: FunctionComponent<Partial<NavBarProps>> = (props) => {
  const {
    right,
    left,
    className,
    style,
    back,
    fixed,
    safeAreaInsetTop,
    placeholder,
    zIndex,
    onBackClick,
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-navbar'

  const children = Array.isArray(props.children)
    ? props.children
    : [props.children]

  const styles = () => {
    return {
      ...style,
      zIndex,
    }
  }

  const renderLeft = () => {
    return (
      <div className={`${classPrefix}__left`}>
        {back && (
          <div
            className={`${classPrefix}__left__back`}
            onClick={(e) => onBackClick(e)}
          >
            {back}
          </div>
        )}
        {left}
      </div>
    )
  }

  const renderContent = () => {
    return <div className={`${classPrefix}__title`}>{children}</div>
  }

  const renderRight = () => {
    return <div className={`${classPrefix}__right`}>{right}</div>
  }

  const renderWrapper = () => {
    return (
      <div className={cls} style={styles()}>
        {renderLeft()}
        {renderContent()}
        {renderRight()}
      </div>
    )
  }

  const classes = classNames({
    [`${classPrefix}--fixed`]: fixed,
    [`${classPrefix}--safe-area-inset-top`]: safeAreaInsetTop,
  })

  const cls = classNames(classPrefix, classes, className)

  return (
    <>
      {fixed && placeholder ? (
        <div className={`${classPrefix}--placeholder`}>{renderWrapper()}</div>
      ) : (
        renderWrapper()
      )}
    </>
  )
}

// NavBar.defaultProps = defaultProps
// NavBar.displayName = 'NutNavBar'
