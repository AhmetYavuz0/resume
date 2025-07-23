/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'
// Material Design Icons CSS'ini buraya ekleyin
import '@mdi/font/css/materialdesignicons.css' // MDI ikonları için gerekli satır

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
