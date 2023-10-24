import type { CSSProperties, ReactNode } from 'react'

export interface BasicComponent {
  /**  类名 */
  className?: string
  /**  样式 */
  style?: CSSProperties
  /**  子组件 */
  children?: ReactNode
  /**  id */
  id?: string
}

export const ComponentDefaults = {
  /**  类名 */
  className: '',
  /** 样式 */
  style: {},
}
