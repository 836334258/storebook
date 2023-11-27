import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Checked, CheckDisabled, CheckNormal } from '@nutui/icons-react'
import classNames from 'classnames'
import CheckboxGroup from '@/packages/checkboxgroup'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import Context from '../checkboxgroup/context'
import { usePropsValue } from '@/utils/use-props-value'

export interface CheckboxProps extends BasicComponent {
  /**
   * 是否选中
   * @default false
   */
  checked: boolean
  /**
   * 是否禁用选择
   * @default false
   */
  disabled: boolean
  /**
   * 初始是否选中
   * @default false
   */
  defaultChecked: boolean
  /**
   * 文本所在的位置
   * @default right
   */
  labelPosition: 'left' | 'right'
  /**
   * 选中前
   * @default CheckNormal
   */
  icon: React.ReactNode
  /**
   * 选中后
   * @default Checked
   */
  activeIcon: React.ReactNode
  /**
   * 半选状态
   * @default CheckDisabled
   */
  indeterminateIcon: React.ReactNode
  /**
   * 标识值，用于 Group 模式
   */
  value: string | number
  /**
   * 半选状态
   * @default CheckDisabled
   */
  indeterminate: boolean
  /**
   * 复选框的文本内容
   */
  label: string | number
  /**
   * 值变化时触发
   * @param value
   */
  onChange: (value: boolean) => void
}

export const defaultProps = {
  ...ComponentDefaults,
  disabled: false,
  labelPosition: 'right',
  icon: null,
  activeIcon: null,
  indeterminateIcon: null,
  onChange: (value) => {},
} as CheckboxProps

const classPrefix = 'nut-checkbox'
export const Checkbox: FunctionComponent<
  Partial<CheckboxProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> & { Group: typeof CheckboxGroup } = (props) => {
  const { children } = {
    ...defaultProps,
    ...props,
  }
  const {
    icon,
    label,
    className,
    activeIcon,
    checked,
    value,
    defaultChecked,
    disabled,
    onChange,
    indeterminate,
    indeterminateIcon,
    ...others
  } = props as any
  // eslint-disable-next-line prefer-const
  let { labelPosition, ...rest } = others
  const ctx = useContext(Context)

  let [innerChecked, setChecked] = usePropsValue<boolean>({
    value: props.checked,
    defaultValue: props.defaultChecked,
    finalValue: defaultChecked,
    onChange,
  })
  // eslint-disable-next-line prefer-const
  let [innerDisabled, setDisabled] = useState(disabled)
  const [innerIndeterminate, setIndeterminate] = useState(indeterminate)

  useEffect(() => {
    setDisabled(disabled)
  }, [disabled])

  useEffect(() => {
    setIndeterminate(indeterminate)
  }, [indeterminate])

  if (ctx) {
    if (ctx.labelPosition !== undefined) {
      labelPosition = ctx.labelPosition
    }
    innerDisabled = ctx.disabled !== undefined ? ctx.disabled : innerDisabled
    innerChecked = ctx.value.includes(value)
    setChecked = (checked: boolean) => {
      if (ctx.disabled) return
      if (checked) ctx.check(value)
      if (!checked) ctx.uncheck(value)
    }
  }

  const renderIcon = () => {
    if (!innerChecked) {
      return React.isValidElement(icon) ? (
        icon
      ) : (
        <CheckNormal className={color()} />
      )
    }
    if (innerIndeterminate) {
      return React.isValidElement(indeterminateIcon) ? (
        indeterminateIcon
      ) : (
        <CheckDisabled className={color()} />
      )
    }
    return React.isValidElement(activeIcon) ? (
      activeIcon
    ) : (
      <Checked className={color()} />
    )
  }
  const color = () => {
    if (innerDisabled) {
      return `${classPrefix}__icon--disable`
    }
    if (innerChecked) {
      if (innerIndeterminate) {
        return `${classPrefix}__icon--indeterminate`
      }
      return `${classPrefix}__icon`
    }
    return `${classPrefix}__icon--unchecked`
  }
  const renderLabel = () => {
    return (
      <span
        className={classNames(`${classPrefix}__label `, {
          [`${classPrefix}__label--disabled`]: innerDisabled,
        })}
      >
        {children || label}
      </span>
    )
  }

  const handleClick = () => {
    // 禁用的时候直接返回
    if (disabled) return
    // 先转换状态
    const latestChecked = !innerChecked
    // 判断是不是有 context 和 max，有的话需要判断是不是超过最大限制
    if (ctx && ctx.max !== undefined) {
      if (latestChecked && ctx.value.length >= ctx.max) return
    }
    setChecked(latestChecked)
  }

  return (
    <div
      className={classNames(classPrefix, className, {
        [`${classPrefix}--reverse`]: labelPosition === 'left',
      })}
      {...rest}
      onClick={handleClick}
    >
      {renderIcon()}
      {renderLabel()}
    </div>
  )
}

// Checkbox.defaultProps = defaultProps
// Checkbox.displayName = 'NutCheckBox'
Checkbox.Group = CheckboxGroup
