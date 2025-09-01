// netlify/functions/get-info.ts

import type { Handler, HandlerContext, HandlerEvent } from '@netlify/functions'

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  try {
    // Netlify'ın event objesinden direkt olarak IP adresini al
    const ip = event.headers['client-ip'] || 'Bilinmiyor'

    // IP adresini bir obje içinde JSON olarak döndür
    return {
      statusCode: 200,
      body: JSON.stringify({ ip }),
    }
  } catch (error) {
    console.error('Fonksiyon hatası:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Sunucu hatası oluştu.' }),
    }
  }
}

export { handler }
