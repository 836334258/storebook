import React, { ReactNode } from 'react'
import classNames from 'classnames'
import { Context } from './context'
import { SECRET, useForm } from './useform'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import Cell from '@/packages/cell'
import { FormInstance } from '@/packages/form/types'

export interface FormProps extends BasicComponent {
  /**
   * 表单底部区域，一般放置确认和重置按钮
   * @default null
   */
  footer: ReactNode
  /**
   * 表单初始值	
   */
  initialValues: any
  /**
   * 表单名称	
   */
  name: string
  /**
   * 经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建
   */
  form: any
  divider: boolean
  /**
   * 表单项 label 的位置	
   *  @default right
   */
  labelPosition: 'top' | 'left' | 'right'
  /**
   * 必填表单项 label 的红色星标位置	
   * @default left
   */
  starPosition: 'left' | 'right'
  /**
   * 校验成功后触发	
   * @param values 
   */
  onFinish: (values: any) => void
  /**
   * 任一表单项被校验失败后触发	
   * @param values 
   * @param errorFields 
   */
  onFinishFailed: (values: any, errorFields: any) => void
}

export const defaultProps = {
  ...ComponentDefaults,
  labelPosition: 'right',
  starPosition: 'left',
  divider: false,
  onFinish: (values) => {},
  onFinishFailed: (values, errorFields) => {},
} as FormProps

const PositionInfo: any = {
  top: 'form-layout-top',
  left: 'form-layout-left',
  right: 'form-layout-right',
}

export const Form = React.forwardRef<FormInstance, Partial<FormProps>>(
  (props, ref) => {
    const classPrefix = 'nut-form'
    const {
      className,
      style,
      footer,
      children,
      initialValues,
      divider,
      onFinish,
      onFinishFailed,
      labelPosition,
      starPosition,
      form,
    } = {
      ...defaultProps,
      ...props,
    }

    let formInstance: FormInstance
    if (form !== undefined) {
      formInstance = form
    } else {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      ;[formInstance] = useForm()
    }
    React.useImperativeHandle(ref, () => formInstance)
    ;(formInstance as any).starPosition = starPosition
    const { submit, resetFields } = formInstance
    const { setCallback, setInitialValues } = formInstance.getInternal(SECRET)
    // 设置校验后的回调，给组件的使用者暴露的接口
    setCallback({
      onFinish,
      onFinishFailed,
    })
    // 初始化 initialValues 和 store
    const mountRef = React.useRef<boolean>(false)
    setInitialValues(initialValues, !mountRef.current)
    if (!mountRef.current) {
      mountRef.current = true
    }

    return (
      <form
        className={classNames(
          classPrefix,
          className,
          PositionInfo[labelPosition]
        )}
        style={style}
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          submit()
        }}
        onReset={(e) => {
          e.preventDefault()
          e.stopPropagation()
          resetFields()
        }}
      >
        <Cell.Group divider={divider}>
          <Context.Provider value={formInstance}>{children}</Context.Provider>
          {footer ? <Cell>{footer}</Cell> : null}
        </Cell.Group>
      </form>
    )
  }
)

// Form.defaultProps = defaultProps
// Form.displayName = 'NutForm'
