import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { DataContext } from './context'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface StepsProps extends BasicComponent {
  value: number
  /**
   * 显示方向
   * @default horizontal
   */
  direction: string
  /**
   * 点状步骤条
   * @default false
   */
  dot: boolean
  /**
   * 点击步骤的标题或图标时触发
   * @param index
   */
  onStepClick: (index: number) => void
}

export const defaultProps = {
  ...ComponentDefaults,
  value: 0,
  /**
   * 显示方向
   * @default horizontal
   */
  direction: 'horizontal',
  dot: false,
} as StepsProps

export const Steps: FunctionComponent<
  Partial<StepsProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const propSteps = { ...defaultProps, ...props }
  const {
    children,
    value,
    direction,
    className,
    dot,
    onStepClick,
    ...restProps
  } = propSteps

  const parentSteps = {
    propSteps,
  }

  const classPrefix = `nut-steps`
  const classes = classNames(
    {
      [`${classPrefix}-${direction}`]: true,
      [`${classPrefix}-dot`]: !!props.dot,
    },
    className,
    classPrefix
  )
  return (
    <DataContext.Provider value={parentSteps}>
      {React.createElement(
        'div',
        {
          className: classes,
          ...restProps,
        },
        children
      )}
    </DataContext.Provider>
  )
}

// // Steps.defaultProps = defaultProps
// // Steps.displayName = 'NutSteps'
