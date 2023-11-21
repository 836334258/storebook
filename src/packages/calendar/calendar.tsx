import React, { useRef, ReactNode } from 'react'
import Popup from '@/packages/popup'
import CalendarItem from '@/packages/calendaritem'
import { Utils } from '@/utils/date'
import { useConfig } from '@/packages/configprovider'
import { Day, SelectedType } from './type'
import { ComponentDefaults } from '@/utils/typings'

type CalendarRef = {
  scrollToDate: (date: string) => void
}

export interface CalendarProps {
  /**
   * 类型，日期选择’single’，区间选择’range’
   * @default single
   */
  type?: SelectedType
  /**
   * 自动回填
   * @default false
   */
  autoBackfill?: boolean
  /**
   * 是否弹窗状态展示
   * @default true
   */
  popup?: boolean
  /**
   * 是否可见
   * @default false
   */
  visible?: boolean
  /**
   * 显示标题
   * @default 日期选择
   */
  title?: string
  /**
   * 默认值，日期选择 string 格式，区间选择 Array 格式
   */
  defaultValue?: string | string[]
  /**
   * 开始日期， 如果不限制开始日期传 null
   * @default 今天
   */
  startDate?: string
  /**
   * 结束日期，如果不限制结束日期传 null
   * @default 距离今天 365 天
   */
  endDate?: string
  /**
   * 是否展示今天标记
   * @default true
   */
  showToday?: boolean
  /**
   * 范围选择，开始信息文案
   * @default 开始
   */
  startText?: ReactNode
  /**
   * 范围选择，结束信息文案
   * @default 结束
   */
  endText?: ReactNode
  /**
   * 底部确认按钮文案
   * @default 确认
   */
  confirmText?: ReactNode
  /**
   * 是否在展示日历标题
   * @default true
   */
  showTitle?: boolean
  /**
   * 是否展示日期标题
   * @default true
   */
  showSubTitle?: boolean
  /**
   * 是否启动滚动动画
   * @default true
   */
  scrollAnimation?: boolean
  /**
   * 设置周起始日
   * @default 0
   */
  firstDayOfWeek: number
  /**
   * 设置不可选日期
   * @param date
   */
  disableDate: (date: Day) => boolean
  /**
   * 自定义日历标题下部，可用以添加自定义操作
   */
  renderHeaderButtons?: () => string | JSX.Element
  /**
   * 日期信息
   * @param date
   */
  renderDay?: (date: Day) => string | JSX.Element
  /**
   * 日期顶部信息
   * @param date
   */
  renderDayTop?: (date: Day) => string | JSX.Element
  /**
   * 日期底部信息
   * @param date
   */
  renderDayBottom?: (date: Day) => string | JSX.Element
  /**
   * onClose
   */
  onClose?: () => void
  /**
   * 选择之后或是点击确认按钮触发
   * @param param
   */
  onConfirm?: (param: string) => void
  /**
   * 点击/选择后触发
   * @param data
   */
  onDayClick?: (data: string) => void
  /**
   * 年月子标题到达顶部时触发
   * @param param
   */
  onPageChange?: (param: string) => void
}

export const defaultProps = {
  ...ComponentDefaults,
  type: 'single',
  autoBackfill: false,
  popup: true,

  visible: false,

  title: '',

  defaultValue: '',

  startDate: Utils.getDay(0),

  endDate: Utils.getDay(365),

  showToday: true,

  startText: '',

  endText: '',

  confirmText: '',

  showTitle: true,

  showSubTitle: true,

  scrollAnimation: true,

  firstDayOfWeek: 0,
  disableDate: (date: Day) => false,
  renderHeaderButtons: undefined,
  renderDay: undefined,
  renderDayTop: undefined,
  renderDayBottom: undefined,
  onClose: () => {},
  onConfirm: (param: string) => {},
  onDayClick: (data: string) => {},
  onPageChange: (param: string) => {},
} as CalendarProps

export const Calendar = React.forwardRef<
  CalendarRef,
  Partial<CalendarProps> & Omit<React.HTMLAttributes<HTMLDivElement>, ''>
>((props, ref) => {
  const { locale } = useConfig()
  const {
    style,
    className,
    children,
    popup,
    visible,
    type,
    autoBackfill,
    title,
    defaultValue,
    startDate,
    endDate,
    showToday,
    startText,
    endText,
    confirmText,
    showTitle,
    showSubTitle,
    scrollAnimation,
    firstDayOfWeek,
    disableDate,
    renderHeaderButtons,
    renderDay,
    renderDayTop,
    renderDayBottom,
    onClose,
    onConfirm,
    onDayClick,
    onPageChange,
  } = { ...defaultProps, ...props }

  const calendarRef = useRef<any>(null)

  const close = () => {
    onClose && onClose()
  }

  const choose = (param: string) => {
    close()
    onConfirm && onConfirm(param)
  }
  const closePopup = () => {
    close()
  }

  const select = (param: string) => {
    onDayClick && onDayClick(param)
  }

  const scrollToDate = (date: string) => {
    calendarRef.current?.scrollToDate(date)
  }

  const yearMonthChange = (param: string) => {
    onPageChange && onPageChange(param)
  }

  React.useImperativeHandle(ref, () => ({
    scrollToDate,
  }))

  const renderItem = () => {
    return (
      <CalendarItem
        ref={calendarRef}
        style={style}
        className={className}
        children={children}
        type={type}
        autoBackfill={autoBackfill}
        popup={popup}
        title={title || locale.calendaritem.title}
        defaultValue={defaultValue}
        startDate={startDate}
        endDate={endDate}
        showToday={showToday}
        startText={startText || locale.calendaritem.start}
        endText={endText || locale.calendaritem.end}
        confirmText={confirmText || locale.calendaritem.confirm}
        showTitle={showTitle}
        showSubTitle={showSubTitle}
        scrollAnimation={scrollAnimation}
        firstDayOfWeek={firstDayOfWeek}
        disableDate={disableDate}
        renderHeaderButtons={renderHeaderButtons}
        renderDay={renderDay}
        renderDayTop={renderDayTop}
        renderDayBottom={renderDayBottom}
        onConfirm={choose}
        onDayClick={select}
        onPageChange={yearMonthChange}
      />
    )
  }

  return (
    <>
      {popup ? (
        <Popup
          visible={visible}
          position="bottom"
          round
          closeable
          destroyOnClose
          onOverlayClick={closePopup}
          onCloseIconClick={closePopup}
          style={{ height: '85vh' }}
        >
          {renderItem()}
        </Popup>
      ) : (
        renderItem()
      )}
    </>
  )
})

// // Calendar.defaultProps = defaultProps
// // Calendar.displayName = 'NutCalendar'
