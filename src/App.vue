<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup lang="ts">
  import axios from 'axios'
  import { onMounted } from 'vue'

  onMounted(() => {
    axios.get('http://45.87.173.246:8080/log-visit')
  })
</script>
