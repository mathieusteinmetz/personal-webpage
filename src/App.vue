<script setup lang="ts">
import { RouterView } from 'vue-router'
import { SpeedInsights } from '@vercel/speed-insights/vue'
import { Analytics } from '@vercel/analytics/vue'
import MParticuleEffect from './components/MParticuleEffect.vue'
</script>

<template>
  <MParticuleEffect />
  <div class="page-container">
    <RouterView />
  </div>
  <SpeedInsights />
  <Analytics />
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  max-width: 80%;
  padding: 1.5rem;
  z-index: 1;
}

@media screen and (max-width: 768px) {
  .page-container {
    max-width: 100%;
  }
}
</style>
