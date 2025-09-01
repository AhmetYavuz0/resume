/**
 * main.ts
 *
 * Vuetify'yi ve diğer eklentileri başlatır, sonra Uygulamayı bağlar.
 */

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Styles
import 'unfonts.css'
import '@mdi/font/css/materialdesignicons.css' // MDI ikonları için gerekli satır

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
