import type { Meta, StoryObj } from '@storybook/react'

import { Calendar } from './calendar'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Calendar',
  component: Calendar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CalendarPrimary: Story = {
  args: {
    type: 'single',
    autoBackfill: false,
    popup: true,
    visible: true,
    title: '',
    defaultValue: '',
    showToday: true,
    startText: '',
    endText: '',
    confirmText: '',
    showTitle: true,
    showSubTitle: true,
    scrollAnimation: true,
    firstDayOfWeek: 0,
    renderHeaderButtons: undefined,
    renderDay: undefined,
    renderDayTop: undefined,
    renderDayBottom: undefined,
  },
}

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
