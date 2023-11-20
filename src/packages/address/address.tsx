import React, {
  ForwardRefRenderFunction,
  useImperativeHandle,
  forwardRef,
  useState,
} from 'react'
import { Left } from '@nutui/icons-react'
import Popup from '@/packages/popup'
import { CustomRender } from './customRender'
import { ExistRender } from './existRender'
import { useConfig } from '@/packages/configprovider'
import { AddressList } from './type'
import {
  CascaderOption,
  CascaderOptionKey,
  CascaderProps,
  CascaderValue,
} from '@/packages/cascader/index'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'

type AddressRef = {
  open: () => void
  close: () => void
}

export interface AddressProps extends CascaderProps {
  /**
   * 是否打开地址选择
   */
  visible: boolean
  /**
   * 初始地址选择打开/关闭状态
   */
  defaultVisible: boolean
  value?: CascaderValue
  defaultValue?: CascaderValue
  /**
   * 地址选择类型 exist/custom
   * @default custom
   */
  type: string
  options: CascaderOption[]
  optionKey: CascaderOptionKey
  format: Record<string, string | number | null>
  /**
   * 是否可以切换自定义地址选择，type=‘exist’ 时生效
   * @default true
   */
  custom: boolean | string
  existList: AddressList[]
  height: string | number
  /**
   * 已有地址列表默认图标，type=‘exist’ 时生效	
   */
  defaultIcon: React.ReactNode
  /**
   * 已有地址列表选中图标，type=‘exist’ 时生效	
   */
  selectIcon: React.ReactNode
  /**
   * 自定义地址与已有地址切换时，自定义返回的按钮图标	
   */
  backIcon: React.ReactNode
  /**
   * 点击’选择其他地址’或自定义地址选择左上角返回按钮触发	
   * @param data 
   */
  onSwitch?: (data: { type: string }) => void
  // 仅用于选择已有地址
  /**
   * 选择已有地址列表时触发	
   * @param data 
   */
  onExistSelect?: (data: AddressList) => void
}

export const defaultProps = {
  ...ComponentDefaults,
  defaultValue: [],
  type: 'custom',
  options: [],
  optionKey: { textKey: 'text', valueKey: 'value', childrenKey: 'children' },
  format: {},
  custom: false,
  existList: [],
  height: '200px',
  defaultIcon: null,
  selectIcon: null,
  closeIcon: null,
  backIcon: null,
} as unknown as AddressProps

export const InternalAddress: ForwardRefRenderFunction<
  AddressRef,
  Partial<AddressProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onChange' | 'defaultValue' | 'onLoad' | 'title'
    >
> = (props, ref) => {
  const { locale } = useConfig()
  const {
    visible,
    defaultVisible,
    defaultValue,
    children,
    type,
    options,
    optionKey,
    format,
    height,
    title,
    existList,
    custom,
    selectIcon,
    defaultIcon,
    closeIcon,
    backIcon,
    onChange,
    onExistSelect,
    onClose,
    onSwitch,
    style,
    className,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-address'
  const [currentType, setCurrentType] = useState<string>(type)
  const [innerVisible, setInnerVisible] = usePropsValue<boolean>({
    value: visible,
    defaultValue: defaultVisible,
    finalValue: defaultVisible,
  })

  useImperativeHandle(ref, () => {
    return {
      open() {
        setInnerVisible(true)
      },
      close() {
        setInnerVisible(false)
      },
    }
  })

  const handleClose = () => {
    setInnerVisible(false)
    onClose && onClose()
  }

  const renderLeftOnCustomSwitch = () => {
    return (
      <>
        {custom && (
          <div className={`${classPrefix}-left-icon`} onClick={onSwitchModule}>
            {React.isValidElement(backIcon) ? (
              backIcon
            ) : (
              <Left color="#cccccc" />
            )}
          </div>
        )}
      </>
    )
  }

  const selectedExistItem = (data: AddressList) => {
    onExistSelect && onExistSelect(data)
    handleClose()
  }

  // 切换地址选择模式
  const onSwitchModule = () => {
    if (currentType === 'exist') {
      setCurrentType('custom')
    } else {
      setCurrentType('exist')
    }
    onSwitch && onSwitch({ type: currentType })
  }
  return (
    <>
      {currentType === 'custom' || currentType === 'custom2' ? (
        <CustomRender
          visible={innerVisible}
          closeable
          title={title || locale.address.selectRegion}
          left={renderLeftOnCustomSwitch()}
          defaultValue={defaultValue}
          options={options}
          format={format}
          optionKey={optionKey}
          type={currentType}
          height={height}
          onClose={handleClose}
          onChange={(val: CascaderValue, params?: any) => {
            onChange?.(val, params)
          }}
        />
      ) : (
        <Popup
          visible={innerVisible}
          position="bottom"
          round
          closeable
          closeIcon={closeIcon}
          title={title || locale.address.selectRegion}
          onClose={handleClose}
        >
          <div
            className={`${classPrefix} ${className || ''}`}
            style={{ ...style }}
          >
            {
              // 不需要 close，选中切换即关闭弹框。可手动关闭弹框，只关闭弹框不处理逻辑。
              <ExistRender
                type={currentType}
                existList={existList}
                selectIcon={selectIcon}
                defaultIcon={defaultIcon}
                custom={custom}
                onSelect={selectedExistItem}
                onSwitch={onSwitchModule}
              />
            }
          </div>
        </Popup>
      )}
    </>
  )
}

export const Address = forwardRef(InternalAddress)

// Address.defaultProps = defaultProps
// Address.displayName = 'NutAddress'
