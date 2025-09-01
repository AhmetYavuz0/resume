<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'

  // Geri dönen verinin tipini güncelle
  interface VisitorInfo {
    ip: string
    country: string
    city: string
    isp: string
  }

  const fetchVisitorInfo = async () => {
    try {
      const response = await fetch('/api/get-info')
      if (!response.ok) {
        throw new Error(`HTTP hatası! Durum: ${response.status}`)
      }
      const data: VisitorInfo = await response.json()

      // Konsolda yeni verileri göster
      console.log('Ziyaretçi Bilgileri:', data)
      console.log('IP Adresi:', data.ip)
      console.log('Şehir:', data.city)
    } catch (error) {
      console.error('API çağrısı başarısız oldu:', error)
    }
  }

  onMounted(() => {
    fetchVisitorInfo()
  })
</script>
