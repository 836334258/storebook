import { create } from '@storybook/theming/create'

export default create({
  base: 'light',
  brandTitle: 'My custom Storybook',
  brandUrl: 'https://www.maxwealthfl.com',
  brandImage: require('./static/logo@2x.png'),
  brandTarget: '_self',
})
