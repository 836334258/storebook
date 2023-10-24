import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useState,
  ReactNode,
} from 'react'
import type { MouseEvent } from 'react'
import { Close } from '@nutui/icons-react'
import classNames from 'classnames'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export type TagType =
  | 'default'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

export interface TagProps extends BasicComponent {
  /**标签类型 */
  type: TagType
  /**标签颜色	 */
  background: string
  /**文本颜色，优先级高于color属性 */
  color: string
  /**是否为空心样式 */
  plain: boolean
  /**是否为圆角样式 */
  round: boolean
  /**是否为标记样式 */
  mark: boolean
  /**是否为可关闭标签 */
  closeable: boolean
  /**关闭按钮 */
  closeIcon: ReactNode
  /**点击事件 */
  onClick: (e: MouseEvent<HTMLDivElement>) => void
  /**关闭事件 */
  onClose: (e?: any) => void
}

export const defaultProps = {
  ...ComponentDefaults,
  type: 'default',
  background: '',
  color: '',
  plain: false,
  round: false,
  mark: false,
  closeable: false,
  closeIcon: null,
  onClose: (e: any) => {},
  onClick: (e: MouseEvent<HTMLDivElement>) => {},
} as TagProps
export const Tag: FunctionComponent<Partial<TagProps>> = (props) => {
  const {
    className,
    style,
    background,
    plain,
    type,
    round,
    children,
    mark,
    closeable,
    closeIcon,
    color,
    onClick,
    onClose,
  } = {
    ...defaultProps,
    ...props,
  }
  const [tagClass, setTagClass] = useState('')
  const [visible, setVisible] = useState(true)
  const classPrefix = 'nut-tag'
  const classes = () => {
    return classNames({
      [classPrefix]: true,
      [`${classPrefix}--${type}`]: type,
      [`${classPrefix}--plain`]: plain,
      [`${classPrefix}--round`]: round,
      [`${classPrefix}--mark`]: mark,
      [`${classPrefix}--close`]: closeable,
      [`${className}`]: className,
    })
  }
  useEffect(() => {
    setTagClass(classes())
  }, [type, background, color, plain, round, mark, closeable, className])

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    onClick && onClick(e)
  }
  // 综合考虑 color、background、plain 组合使用时的效果
  const getStyle = (): CSSProperties => {
    const style: CSSProperties = {}
    // 标签内字体颜色
    if (color) {
      style.color = color
    } else if (background && plain) {
      style.color = background
    }
    // 标签背景与边框颜色
    if (plain) {
      style.borderColor = background
    } else if (background) {
      style.background = background
    }
    return style
  }
  return (
    <>
      {closeable ? (
        visible && (
          <div
            className={tagClass}
            style={{ ...style, ...getStyle() }}
            onClick={(e) => handleClick(e)}
          >
            {children && (
              <span className={`${classPrefix}-text`}>{children}</span>
            )}
            {React.isValidElement(closeIcon) ? (
              <i
                className={`${classPrefix}-custom-icon`}
                onClick={(e) => {
                  setVisible(false)
                  onClose && onClose(e)
                }}
              >
                {closeIcon}
              </i>
            ) : (
              <Close
                width={12}
                height={12}
                onClick={(e) => {
                  setVisible(false)
                  onClose && onClose(e)
                }}
              />
            )}
          </div>
        )
      ) : (
        <div
          className={tagClass}
          style={{ ...style, ...getStyle() }}
          onClick={(e) => handleClick(e)}
        >
          {children && (
            <span className={`${classPrefix}-text`}>{children}</span>
          )}
        </div>
      )}
    </>
  )
}

// // Tag.defaultProps = defaultProps
// // Tag.displayName = 'NutTag'
