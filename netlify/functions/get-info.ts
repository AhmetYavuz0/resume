// netlify/functions/get-info.ts

import type { Handler, HandlerContext, HandlerEvent } from '@netlify/functions'
import fetch from 'node-fetch'

// Geri dönecek verinin tipini tanımla
interface VisitorInfo {
  ip: string
  country: string
  city: string
  isp: string
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  try {
    // ipapi.co API'sine istek gönder. API, isteği yapanın IP'sini otomatik olarak alır.
    const ipApiUrl = 'https://ipapi.co/json/'
    const response = await fetch(ipApiUrl)

    if (!response.ok) {
      throw new Error(`API isteği başarısız oldu: ${response.statusText}`)
    }

    const data = await response.json() as any

    const visitorInfo: VisitorInfo = {
      ip: data.ip || 'Bilinmiyor',
      country: data.country_name || 'Bilinmiyor',
      city: data.city || 'Bilinmiyor',
      isp: data.org || 'Bilinmiyor',
    }

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
