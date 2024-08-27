// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['nuxt-primevue'],
  primevue: {
    usePrimeVue: true,
    components: {
      include: [
        'Card',
        'Badge',
        'Avatar',
        'Button',
        'Dialog',
        'Rating',
        'Slider',
        'Select',
        'TabView',
        'Divider',
        'TabPanel',
        'Checkbox',
        'Textarea',
        'InputText',
        'InputSwitch',
        'ProgressBar',
        'InlineMessage',
        'ProgressSpinner',
        'Sidebar',
        'DataTable',
        'Column'
      ]
    },
    directives: {
      include: ['StyleClass', 'Ripple']
    }
  },
  css: [
    'primevue/resources/themes/lara-light-blue/theme.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css'
  ],
  build: {
    transpile: ['primevue'],
  },
})
