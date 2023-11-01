import React, { CSSProperties, FunctionComponent } from 'react'
import classNames from 'classnames'
import { GridItem, GridItemProps } from '../griditem/griditem'
import GridContext from './grid.context'
import { pxCheck } from '@/utils/px-check'

export type GridDirection = 'horizontal' | 'vertical'

export interface GridProps {
  /**
   * 列数
   * @default 4
   *  */
  columns: string | number
  /**
   * 格子之间的间距，默认单位为px
   * @default 0
   *  */
  gap: string | number
  /**
   * 是否将格子内容居中显示
   * @default center
   *  */
  center: boolean
  /**
   * 是否将格子固定为正方形
   * @default false
   *  */
  square: boolean
  /**
   * 内容翻转
   * @default false
   * */
  reverse: boolean
  /**
   * 格子内容排列的方向
   * @default	vertical
   *  */
  direction: GridDirection
  className?: string
  style?: CSSProperties
  onClick: (item: GridItemProps, index: number) => void
}

export const defaultProps = {
  columns: 4,
  gap: 0,
  center: true,
  square: false,
  reverse: false,
  direction: 'vertical',
} as GridProps

export const Grid: FunctionComponent<
  Partial<GridProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> & {
  Item: typeof GridItem
} = (props) => {
  const {
    children,
    columns = 4,
    gap = 0,
    center = true,
    square = false,
    reverse = false,
    direction = 'vertical',
    style,
    className,
    onClick,
    ...rest
  } = { ...defaultProps, ...props }
  const childrenDom = React.Children.toArray(children)

  const classPrefix = 'nut-grid'

  const rootClass = () => {
    return classNames(className, classPrefix, {
      [`${classPrefix}__border`]: !gap,
    })
  }

  const rootStyle = () => {
    let styleSelf: CSSProperties = {}
    if (style) {
      styleSelf = style
    }
    if (gap) {
      styleSelf.paddingLeft = pxCheck(gap)
    }

    return styleSelf
  }

  return (
    <div className={rootClass()} style={rootStyle()} {...rest}>
      <GridContext.Provider value={{ onClick }}>
        {childrenDom.map((item: any, idex: number) => {
          return React.cloneElement(item, {
            index: idex,
            columns,
            center,
            gap,
            square,
            reverse,
            direction,
          })
        })}
      </GridContext.Provider>
    </div>
  )
}

// Grid.defaultProps = defaultProps
// Grid.displayName = 'NutGrid'
Grid.Item = GridItem
