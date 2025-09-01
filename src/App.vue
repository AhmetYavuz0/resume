<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'

  // Fonksiyonun döndüreceği verinin yeni ve daha basit tipini tanımla
  interface VisitorInfo {
    ip: string
  }

  const fetchVisitorInfo = async () => {
    try {
      const response = await fetch('/api/get-info')
      if (!response.ok) {
        throw new Error(`HTTP hatası! Durum: ${response.status}`)
      }
      const data: VisitorInfo = await response.json()

      // Sadece IP adresini konsola yazdır
      console.log('Ziyaretçi IP Adresi:', data.ip)
    } catch (error) {
      console.error('API çağrısı başarısız oldu:', error)
    }
  }

  // Bileşen yüklendiğinde (mounted) fonksiyonu çağır
  onMounted(() => {
    fetchVisitorInfo()
  })

</script>
