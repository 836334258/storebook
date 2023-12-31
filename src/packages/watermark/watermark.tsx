import React, { useState, useEffect, FunctionComponent } from 'react'
import classNames from 'classnames'
import { useConfig } from '@/packages/configprovider'
import { BasicComponent } from '@/utils/typings'

export interface WaterMarkProps extends BasicComponent {
  /** 水印文字内容 */
  content: string
  /** 是否覆盖整个页面 */
  fullPage: boolean
  /** 追加的水印元素的 z-index */
  zIndex: number
  /** 水印之间的水平间距 */
  gapX: number
  /** 水印之间的垂直间距 */
  gapY: number
  /** 水印的宽度 */
  width: number
  /** 水印的高度 */
  height: number
  /** 图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印 */
  image: string
  /** 图片宽度 */
  imageWidth: number
  /** 图片高度 */
  imageHeight: number
  /** 水印绘制时，旋转的角度 */
  rotate: number
  /** 水印文字颜色 */
  color: string
  fontStyle: string
  /** 水印文字字体 */
  fontFamily: string
  fontWeight: string
  /** 文字大小 */
  fontSize: string | number
}

export const WaterMark: FunctionComponent<
  Partial<WaterMarkProps> & React.HTMLAttributes<HTMLDivElement>
> = ({
  content,
  fullPage = true,
  zIndex = 2000,
  className,
  gapX = 24,
  gapY = 48,
  width = 120,
  height = 64,
  image,
  imageWidth = 120,
  imageHeight = 64,
  rotate = -22,
  color = 'rgba(0, 0, 0, .15)',
  fontStyle = 'normal',
  fontFamily,
  fontWeight = 'normal',
  fontSize = 16,
  style,
}) => {
    const { locale } = useConfig()

    const [base64Url, setBase64Url] = useState('')

    const classPrefix = 'nut-watermark'
    const classes = classNames(classPrefix, {
      [`${classPrefix}-full-page`]: fullPage,
    })
    const cls = classNames(classes, className)

    useEffect(() => {
      init()
    }, [])

    const init = () => {
      const canvas = document.createElement('canvas')
      const ratio = window.devicePixelRatio
      const ctx = canvas.getContext('2d')
      const canvasWidth = `${(gapX + width) * ratio}px`
      const canvasHeight = `${(gapY + height) * ratio}px`
      const markWidth = width * ratio
      const markHeight = height * ratio
      canvas.setAttribute('width', canvasWidth)
      canvas.setAttribute('height', canvasHeight)

      if (ctx) {
        if (image) {
          ctx.translate(markWidth / 2, markHeight / 2)
          ctx.rotate((Math.PI / 180) * Number(rotate))

          const img = new Image()
          img.crossOrigin = 'anonymous'
          img.referrerPolicy = 'no-referrer'
          img.src = image
          img.onload = () => {
            ctx.drawImage(
              img,
              (-imageWidth * ratio) / 2,
              (-imageHeight * ratio) / 2,
              imageWidth * ratio,
              imageHeight * ratio
            )
            ctx.restore()
            setBase64Url(canvas.toDataURL())
          }
        } else if (content) {
          ctx.textBaseline = 'middle' // 设置或返回在绘制文本时使用的当前文本基线。(正中)
          ctx.textAlign = 'center' // 设置或返回文本内容的当前对齐方式。
          // 文字绕中间旋转
          ctx.translate(markWidth / 2, markHeight / 2)
          ctx.rotate((Math.PI / 180) * Number(rotate))

          const markSize = Number(fontSize) * ratio
          ctx.font = `${fontStyle} normal ${fontWeight} ${markSize}px/${markHeight}px ${fontFamily}`
          ctx.fillStyle = color

          ctx.fillText(content, 0, 0) // 在画布上绘制"被填充的"文本。
          ctx.restore() // 返回之前保存过的路径状态和属性。
          setBase64Url(canvas.toDataURL())
        }
      } else {
        throw new Error(locale.watermark.errorCanvasTips)
      }
    }

    return (
      <div
        className={cls}
        style={{
          zIndex,
          backgroundSize: `${gapX + width}px`,
          backgroundImage: `url('${base64Url}')`,
          ...style,
        }}
      />
    )
  }

// // WaterMark.defaultProps = defaultProps
// // WaterMark.displayName = 'NutWaterMark'
