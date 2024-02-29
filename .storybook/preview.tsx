import type { Preview } from '@storybook/react'
import '@nutui/nutui-react/dist/style.css'
import './index.css'
import React from 'react'

const preview: Preview = {
  decorators: [
    (Story) => (
        <Story />
    ),
  ],
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
    args: {
      visible: true, // 全局属性
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
