import React, { CSSProperties, useCallback } from 'react'
import type { MouseEvent } from 'react'
import classNames from 'classnames'
import { Loading } from '@nutui/icons-react'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export type ButtonType =
  | 'default'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
export type ButtonSize = 'large' | 'normal' | 'small'
export type ButtonShape = 'square' | 'round'
export type ButtonFill = 'solid' | 'outline' | 'none'

export interface ButtonProps extends BasicComponent {
  /**按钮颜色，支持传入 linear-gradient 渐变色 */
  color: string
  /**按钮的形状	 */
  shape: ButtonShape
  /**按钮的样式 */
  type: ButtonType
  /**按钮的尺寸	 */
  size: ButtonSize
  /**填充模式	 */
  fill: ButtonFill
  /**是否为块级元素	 */
  block: boolean
  /**按钮loading状态	 */
  loading: boolean
  /**是否禁用按钮	 */
  disabled: boolean
  /**按钮图标	 */
  icon: React.ReactNode
  id: string
  nativeType: 'submit' | 'reset' | 'button'
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

const prefixCls = 'nut-button'

export const defaultProps = {
  ...ComponentDefaults,
  color: '',
  type: 'default',
  size: 'normal',
  shape: 'round',
  fill: 'solid',
  loading: false,
  disabled: false,
  block: false,
  icon: null,
  nativeType: 'button',
  onClick: (e: MouseEvent<HTMLButtonElement>) => {},
} as ButtonProps
export const Button = React.forwardRef<HTMLButtonElement, Partial<ButtonProps>>(
  (props, ref) => {
    const {
      color,
      shape = 'round',
      fill = 'solid',
      loading = false,
      disabled = false,
      type = 'default',
      size = 'normal',
      block = false,
      icon = null,
      children,
      onClick,
      className,
      style,
      nativeType = 'button',
      ...rest
    } = {
      ...props,
    }
    const getStyle = useCallback(() => {
      const style: CSSProperties = {}
      if (props.color) {
        if (fill && fill === 'outline') {
          style.color = color
          style.background = '#fff'
          if (!color?.includes('gradient')) {
            style.borderColor = color
          }
        } else {
          style.color = '#fff'
          style.background = color
        }
      }
      return style
    }, [color])

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      if (!loading && !disabled && onClick) {
        onClick(e)
      }
    }

    return (
      <button
        {...rest}
        ref={ref}
        type={nativeType}
        className={classNames(
          prefixCls,
          className,
          props.type ? `${prefixCls}--${type}` : null,
          props.fill ? `${prefixCls}--${fill}` : null,
          {
            [`${prefixCls}--${size}`]: size,
            [`${prefixCls}--${shape}`]: shape,
            [`${prefixCls}--block`]: block,
            [`${prefixCls}--disabled`]: disabled,
            [`${prefixCls}--loading`]: loading,
          }
        )}
        style={{ ...getStyle(), ...style }}
        onClick={(e) => handleClick(e)}
      >
        <div className="nut-button__warp">
          {loading ? <Loading className="nut-icon-loading" /> : null}
          {!loading && icon ? icon : null}
          {children && (
            <div className={icon || loading ? 'nut-button-text' : ''}>
              {children}
            </div>
          )}
        </div>
      </button>
    )
  }
)

// Button.displayName = 'NutButton'
