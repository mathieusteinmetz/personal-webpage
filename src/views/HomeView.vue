<script setup lang="ts">
import { getDelay } from '@/utils/transitionDelayUtils'
import { motion } from 'motion-v'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ExternalLinks from '@/features/ExternalLinks.vue'
import MCard from '@/components/MCard.vue'
const initial = {
  opacity: 0,
  y: -50,
}
const animate = {
  opacity: 1,
  y: 0,
}
</script>

<template>
  <header>
    <motion.div :initial="initial" :animate="animate" :transition="getDelay()">
      <img src="@/assets/logo.png" alt="Logo" class="logo text-sm" />
    </motion.div>
    <motion.div :initial="initial" :animate="animate" :transition="getDelay()" class="title">
      <h1 class="text-3xl c-main-gradient">Mathieu Steinmetz</h1>
    </motion.div>

    <motion.section :initial="initial" :animate="animate" :transition="getDelay()">
      <h2 class="text-1xl text-light c-secondary">FullStack Web Developer</h2>
    </motion.section>

    <motion.section
      :initial="initial"
      :animate="animate"
      :transition="getDelay()"
      class="infos-container"
    >
      <MCard>
        <template #prepend>
          <span class="material-symbols-outlined"> language </span>
        </template>
        <div class="text-md">Rennes, France</div>
      </MCard>
      <MCard>
        <template #prepend>
          <FontAwesomeIcon :icon="faEnvelope" />
        </template>
        <div>
          <a href="mailto:mathieu.steinmetz@orange.fr">mathieu.steinmetz@orange.fr</a>
        </div>
      </MCard>
    </motion.section>

    <motion.div :initial="initial" :animate="animate" :transition="getDelay()">
      <ExternalLinks />
    </motion.div>
  </header>
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.2;
}
.logo {
  height: var(--text-5xl);
  width: auto;
}
header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.infos-container {
  display: flex;
  gap: 1rem;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
