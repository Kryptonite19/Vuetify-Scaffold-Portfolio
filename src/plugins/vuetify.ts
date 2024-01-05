import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { type ThemeDefinition, createVuetify } from 'vuetify'
import en from '../locales/en'
import tr from '@/locales/tr'
const ogzDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#6200EE',
    secondary: '#90ee02',
    accent: '#D81B60',
    error: '#B00020',
    info: '#00897B'
  }
}

const ogzLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#6200EE',
    secondary: '#90ee02',
    accent: '#D81B60',
    error: '#B00020',
    background: '#E8EAF6',
    info: '#00897B'
  }
}
export default createVuetify({
  defaults: {
    global: {
      ripple: false
    }
  },
  theme: {
    defaultTheme: 'ogzDarkTheme',
    themes: {
      ogzDarkTheme,
      ogzLightTheme
    }
  },
  locale: {
    locale: 'en',
    fallback: 'en',
    messages: { en, tr }
  }
})
