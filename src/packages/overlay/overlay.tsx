import React, {
  useState,
  useEffect,
  FunctionComponent,
  MouseEvent,
  MouseEventHandler,
  useRef,
} from 'react'
import { CSSTransition } from 'react-transition-group'
import { EnterHandler, ExitHandler } from 'react-transition-group/Transition'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface OverlayProps extends BasicComponent {
  zIndex: number
  /**动画时长，单位毫秒 */
  duration: number
  /**是否点击遮罩关闭 */
  closeOnOverlayClick: boolean
  /**当前组件是否显示 */
  visible: boolean
  /**背景是否锁定 */
  lockScroll: boolean
  /**点击时触发 */
  onClick: (event: MouseEvent) => void
  /**完全展示后触发 */
  afterShow: () => void
  /**完全关闭后触发 */
  afterClose: () => void
}

export const defaultOverlayProps = {
  ...ComponentDefaults,
  zIndex: 1000,
  duration: 300,
  closeOnOverlayClick: true,
  visible: false,
  lockScroll: true,
  onClick: (event: MouseEvent) => {},
} as OverlayProps
export const Overlay: FunctionComponent<
  Partial<OverlayProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    zIndex,
    duration,
    className,
    closeOnOverlayClick,
    visible,
    lockScroll,
    style,
    afterShow,
    afterClose,
    onClick,
    ...rest
  } = {
    ...defaultOverlayProps,
    ...props,
  }

  const [innerVisible, setInnerVisible] = useState(visible)

  const classPrefix = `nut-overlay`

  const nodeRef = useRef(null)

  useEffect(() => {
    if (visible) {
      setInnerVisible(true)
    } else {
      setInnerVisible(false)
    }
    lock()
  }, [visible])

  useEffect(() => {
    return () => {
      document.body.classList.remove('nut-overflow-hidden')
    }
  }, [])

  const classes = classNames(className, classPrefix)

  const styles = {
    ...style,
  }

  const lock = () => {
    if (lockScroll && visible) {
      document.body.classList.add('nut-overflow-hidden')
    } else {
      document.body.classList.remove('nut-overflow-hidden')
    }
  }

  const handleClick: MouseEventHandler<HTMLDivElement> = (e: MouseEvent) => {
    if (closeOnOverlayClick) {
      onClick && onClick(e)
    }
  }

  const onHandleOpened: EnterHandler<HTMLElement | undefined> | undefined = (
    e: HTMLElement
  ) => {
    afterShow && afterShow()
  }

  const onHandleClosed: ExitHandler<HTMLElement | undefined> | undefined = (
    e: HTMLElement
  ) => {
    afterClose && afterClose()
  }

  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        classNames={`${classPrefix}-slide`}
        unmountOnExit
        timeout={duration}
        in={innerVisible}
        onEntered={onHandleOpened}
        onExited={onHandleClosed}
      >
        <div
          ref={nodeRef}
          className={classes}
          style={styles}
          {...rest}
          onClick={handleClick}
        >
          {children}
        </div>
      </CSSTransition>
    </>
  )
}

// Overlay.defaultProps = defaultOverlayProps
// Overlay.displayName = 'NutOverlay'
