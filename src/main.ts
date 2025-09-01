/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
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

// Fonksiyonun döndüreceği verinin tipini tanımlayalım
interface VisitorInfo {
  ip: string
  device: string
  location: {
    country: string
    city: string
    region: string
    isp: string
  }
  timestamp: string
}

// Netlify Function'ı çağıran bir fonksiyon
const fetchVisitorInfo = async () => {
  try {
    const response = await fetch('/api/get-info')
    if (!response.ok) {
      throw new Error(`HTTP hatası! Durum: ${response.status}`)
    }
    const data: VisitorInfo = await response.json()

    // Veriyi konsolda gösteriyoruz. Bu kısma veriyi kaydetme veya
    // kullanıcıya gösterme gibi istediğin bir mantığı ekleyebilirsin.
    console.log('Ziyaretçi Bilgileri:', data)
    console.log('IP Adresi:', data.ip)
    console.log('Şehir:', data.location.city)
  } catch (error) {
    console.error('API çağrısı başarısız oldu:', error)
  }
}

const app = createApp(App)

registerPlugins(app)

// Uygulama yüklendiğinde ziyaretçi bilgilerini çek
fetchVisitorInfo()

app.mount('#app')
