<script lang="ts" setup>
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const links = [
  {
    icon: faGithub,
    url: 'https://github.com/mathieusteinmetz',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/mathieusteinmetz/',
  },
]
</script>
<template>
  <div class="external-links text-2xl">
    <a
      class="external-link"
      v-for="link in links"
      :key="link.url"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon :icon="link.icon" />
    </a>
  </div>
</template>

<style scoped>
.external-links {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}

.external-link {
  color: inherit;
}
</style>
