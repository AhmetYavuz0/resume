<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup lang="ts">
  import axios from 'axios'
  import { onMounted } from 'vue'

  onMounted(async () => {
    try {
      const res = await axios.get('https://api.ahmet-yavuz/log-visit')
      console.log('Ziyaret loglandı:', res.data)
    } catch (error) {
      console.error('Hata oluştu:', error)
    }
  })
</script>
