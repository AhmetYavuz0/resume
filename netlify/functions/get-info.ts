// netlify/functions/get-info.ts

// Netlify'ın tip tanımlamalarını ve fetch API'sini içe aktarırız
import type { Handler, HandlerContext, HandlerEvent } from '@netlify/functions'
import fetch from 'node-fetch'

// Geri dönecek olan verinin yapısını (tipini) tanımlarız
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

// Netlify fonksiyonunun ana işlevini tanımlayan handler
const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  try {
    // 1. Ziyaretçinin IP adresini alırız.
    // Eğer bir nedenle IP adresi alınamazsa 'unknown' olarak ayarlarız.
    const ip = event.headers['client-ip'] || 'unknown'

    // Güvenlik: Eğer IP adresi bilinmiyorsa ve devam etmek istemiyorsan, burada hata döndürebilirsin.
    // Ancak bu, yerel geliştirme ortamında 400 hatası vermesini engeller.
    if (ip === 'unknown') {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'IP adresi bulunamadı.' }),
      }
    }

    // 2. IP adresini kullanarak konum bilgilerini almak için üçüncü taraf bir API'ye istek göndeririz.
    // Bu API, IP adresine bağlı coğrafi verileri sağlar.
    const ipApiUrl = `http://ip-api.com/json/${ip}`
    const response = await fetch(ipApiUrl)

    if (!response.ok) {
      throw new Error(`API isteği başarısız oldu: ${response.statusText}`)
    }

    const data = await response.json() as any // Gelen veriyi geçici olarak 'any' olarak işaretleriz

    // 3. Ziyaretçinin cihaz bilgilerini (User-Agent) alırız.
    const userAgent = event.headers['user-agent'] || 'Bilinmiyor'

    // 4. Tüm bilgileri bir araya getirip, 'VisitorInfo' tipine uygun bir obje oluştururuz.
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

    // 5. Başarılı bir şekilde topladığımız veriyi, 200 durum kodu ile JSON formatında geri döndürürüz.
    return {
      statusCode: 200,
      body: JSON.stringify(visitorInfo),
    }
  } catch (error) {
    // 6. İşlem sırasında herhangi bir hata oluşursa, bunu yakalayıp 500 durum kodu ile döndürürüz.
    console.error('Fonksiyon hatası:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Sunucu hatası oluştu.' }),
    }
  }
}

// Netlify'ın bu fonksiyonu tanıması için dışa aktarırız
export { handler }
