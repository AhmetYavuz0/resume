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
      const res = await axios.get('http://45.87.173.246:8080/log-visit')
      console.log('Ziyaret loglandı:', res.data)
    } catch (error) {
      console.error('Hata oluştu:', error)
    }
  })
</script>
