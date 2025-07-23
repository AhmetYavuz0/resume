/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css' // Bu satır zaten vardı, harika!
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// Material Design Icons için gerekli import'lar
import { aliases, mdi } from 'vuetify/iconsets/mdi' // Bu satırı ekledik

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'system', // Tema ayarınız
  },
  // İkon ayarlarını buraya ekliyoruz
  icons: {
    defaultSet: 'mdi', // Varsayılan ikon setini 'mdi' olarak ayarladık
    aliases, // MDI'ın alias'larını kullan
    sets: {
      mdi, // MDI ikon setini tanımla
    },
  },
})
