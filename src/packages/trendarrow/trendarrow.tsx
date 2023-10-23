import React, { FunctionComponent, useRef } from 'react'
import { TriangleDown, TriangleUp } from '@nutui/icons-react'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface TrendArrowProps extends BasicComponent {
  /**  
  数值，大于0时箭头向上，小于0时箭头向下 
  */
  value: number
  /** 
    小数位精度
  */
  digits: number
  /** 是否显示加减号	 */
  symbol: boolean
  /** 是否显示 0	 */
  zero: boolean
  /** 是否在数字左侧显示箭头	 */
  left: boolean
  /** 文字颜色是否与箭头同步	 */
  sync: boolean
  /** 文字颜色	 */
  color: string
  /** 向上箭头颜色	 */
  riseColor: string
  /** 向下箭头颜色	 */
  dropColor: string
  /** 自定义向上箭头icon	 */
  riseIcon: React.ReactNode
  /** 自定义向下箭头icon	 */
  dropIcon: React.ReactNode
}

export const defaultProps = {
  ...ComponentDefaults,
  value: 0,
  digits: 2,
  symbol: false,
  zero: false,
  left: false,
  sync: true,
  color: '#333',
  riseColor: '#fa2c19',
  dropColor: '#64b578',
  riseIcon: null,
  dropIcon: null,
} as TrendArrowProps

/**
 * 带有箭头指示的百分比数字,用以展示指标趋势
 */
export const TrendArrow: FunctionComponent<
  Partial<TrendArrowProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    value,
    digits,
    symbol,
    zero,
    left,
    sync,
    color,
    riseColor,
    dropColor,
    riseIcon,
    dropIcon,
    className,
    style,
    children,
    ...rest
  } = { ...defaultProps, ...props }
  const classPrefix = 'nut-trendarrow'
  const rateTrend = useRef(value > 0)

  const myFixed = (num: any, digit = 2) => {
    if (Object.is(parseFloat(num), NaN)) {
      return console.warn(`传入的值：${num}不是一个数字`)
    }
    num = parseFloat(num)
    // eslint-disable-next-line no-restricted-properties
    const numPow = 10 ** digit
    return (Math.round((num + Number.EPSILON) * numPow) / numPow).toFixed(digit)
  }

  const calcStyle = (() => {
    const arrowColor = rateTrend.current ? riseColor : dropColor
    const textEquArrowColor = sync ? arrowColor : color
    const style = {
      color: value === 0 ? color : textEquArrowColor,
    }
    return style
  })()

  const calcRate = (() => {
    rateTrend.current = value > 0
    const absRate = Math.abs(value)
    if (!zero && value === 0) {
      return '--'
    }
    const resultRate = `${
      // eslint-disable-next-line no-nested-ternary
      symbol && value !== 0 ? (rateTrend.current ? '+' : '-') : ''
    }${myFixed(Number(absRate), digits)}%`

    return resultRate
  })()

  const calcIconProps = (() => {
    const iconProps = {
      color: rateTrend.current ? riseColor : dropColor,
    }
    return iconProps
  })()

  const renderContent = (left: boolean) => {
    const classNameSuffix = !left ? 'icon-after' : 'icon-before'
    return (
      <span
        className={`${classPrefix}__${classNameSuffix} ${classPrefix}__value`}
        style={calcStyle}
      >
        {calcRate}
      </span>
    )
  }
  return (
    <div className={`${classPrefix} ${className}`} style={style} {...rest}>
      {!left && renderContent(!left)}
      {Number(value) !== 0 && (
        <>
          {rateTrend.current ? (
            <>{riseIcon || <TriangleUp color={calcIconProps.color} />}</>
          ) : (
            <>{dropIcon || <TriangleDown color={calcIconProps.color} />}</>
          )}
        </>
      )}
      {left && renderContent(!left)}
    </div>
  )
}

// // TrendArrow.defaultProps = defaultProps
// // TrendArrow.displayName = 'NutTrendArrow'
