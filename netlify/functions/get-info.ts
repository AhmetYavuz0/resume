// netlify/functions/get-info.ts

import type { Handler, HandlerContext, HandlerEvent } from '@netlify/functions'
import fetch from 'node-fetch' // node-fetch'i yüklemen gerekebilir: npm install node-fetch

// Geri döndürülecek verinin tipini tanımlayalım
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

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  try {
    // 1. Kullanıcının IP adresini al
    const ip = event.headers['client-ip']

    if (!ip) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'IP adresi bulunamadı.' }),
      }
    }

    // 2. IP adresine göre konum bilgisi almak için 3. parti API'ye istek gönder
    const ipApiUrl = `http://ip-api.com/json/${ip}`
    const response = await fetch(ipApiUrl)

    if (!response.ok) {
      throw new Error(`API isteği başarısız oldu: ${response.statusText}`)
    }

    const data = await response.json() as any // Gelen JSON verisini any olarak kabul edelim

    // 3. Kullanıcının cihaz bilgisini (User-Agent) al
    const userAgent = event.headers['user-agent'] || 'Bilinmiyor'

    // Verileri tanımladığımız tip ile eşleştirerek geri döndürülecek objeyi oluştur
    const visitorInfo: VisitorInfo = {
      ip,
      device: userAgent,
      location: {
        country: data.country,
        city: data.city,
        region: data.regionName,
        isp: data.isp,
      },
      timestamp: new Date().toISOString(),
    }

    // Fonksiyon başarılı olursa, 200 kodu ve veriyi döndür
    return {
      statusCode: 200,
      body: JSON.stringify(visitorInfo),
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
