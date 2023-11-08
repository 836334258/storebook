import React, { FunctionComponent, MouseEvent } from 'react'
import classNames from 'classnames'
import { Left } from '@nutui/icons-react'
import Overlay from '@/packages/overlay'
import { useConfig } from '@/packages/configprovider'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export type FixedNavDirection = 'right' | 'left'
export type FixedNavPosition = {
  top?: string
  bottom?: string
}

export interface FixedNavProps extends BasicComponent {
  /**
   * 是否打开
   * @default false
   */
  visible: boolean
  /**
   * 展开时是否显示遮罩
   * @default true
   */
  overlay: boolean
  /**
   * 悬浮列表内容数据
   * @default []
   */
  list: Array<any>
  /**
   * 收起列表按钮文案
   * @default 收起导航
   */
  activeText: string
  /**
   * 展开列表按钮文案
   * @default 快速导航
   */
  inactiveText: string
  /**
   * fixed 垂直位置
   * @default {top: 'auto', bottom: 'auto'}
   */
  position: FixedNavPosition
  /**
   * 导航方向
   * @default right
   */
  type: FixedNavDirection
  /**
   * 展开收起按钮回调
   * @param item
   */
  onChange: (item: any) => void
  /**
   * 选择之后触发
   * @param item
   * @param event
   */
  onSelect: (item: any, event: MouseEvent) => void
  /**
   * 自定义按钮
   */
  content: React.ReactNode
}

export const defaultProps = {
  ...ComponentDefaults,
  activeText: '',
  inactiveText: '',
  type: 'right',
  position: {
    top: 'auto',
    bottom: 'auto',
  },
} as FixedNavProps

export const FixedNav: FunctionComponent<
  Partial<FixedNavProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onChange' | 'onSelect' | 'content'
    >
> = (props) => {
  const { locale } = useConfig()
  const {
    className,
    overlay,
    visible,
    list,
    activeText,
    inactiveText,
    position,
    onChange,
    onSelect,
    type,
    children,
    style,
    content,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-fixednav'

  const classes = classNames(
    {
      active: visible,
    },
    type,
    className,
    classPrefix
  )

  const handleClick = (item: any, event: MouseEvent): void => {
    onSelect(item, event)
  }

  const onUpdateValue = (value = !visible): void => {
    onChange(value)
  }

  return (
    <div
      className={classes}
      style={{
        ...position,
        ...style,
      }}
      {...rest}
    >
      {overlay && (
        <Overlay
          visible={visible}
          style={{ '--nutui-overlay-zIndex': 200 }}
          onClick={() => onUpdateValue(false)}
        />
      )}
      <div className="list">
        {children || (
          <div className={`${classPrefix}__list`}>
            {list.map((item: any, index) => {
              return (
                <div
                  className={`${classPrefix}__list-item`}
                  onClick={(event) => handleClick(item, event)}
                  key={item.id || index}
                >
                  <img src={item.icon} alt="" />
                  <div className={`${classPrefix}__list-text`}>{item.text}</div>
                  {item.num && <div className="b">{item.num}</div>}
                </div>
              )
            })}
          </div>
        )}
      </div>

      <div className={`${classPrefix}__btn`} onClick={() => onUpdateValue()}>
        {content || (
          <>
            <Left color="#fff" />
            <div className="text">
              {visible
                ? activeText || locale.fixednav.activeText
                : inactiveText || locale.fixednav.inactiveText}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// // FixedNav.defaultProps = defaultProps
// // FixedNav.displayName = 'NutFixedNav'
