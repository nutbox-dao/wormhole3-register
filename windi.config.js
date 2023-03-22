import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryColor: '#AE88FE',
        color62: '#7851FF',
        color84: '#848391',
        color8B: '#8B949E',
      },
      screens: {
        'xs': { min: '500px' },
        '2md': { min: '961px' },
      },
      backgroundImage: theme => ({
        'purple-white': 'linear-gradient(99.51deg, #CBBEE7 9.03%, #FFFFFF 89.53%)',
        'glass': 'linear-gradient(135deg, rgba(0, 0, 0, 0.43) 0%, rgba(174, 174, 174, 0.27) 0.01%, rgba(34, 34, 34, 0.27) 100%)',
      }),
      boxShadow: theme => ({
      })
    }
  }
})
