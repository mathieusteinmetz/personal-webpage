<script setup lang="ts">
import { getDelay } from '@/utils/transitionDelayUtils'
import { motion } from 'motion-v'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ExternalLinks from '@/features/ExternalLinks.vue'
import MCard from '@/components/MCard.vue'
import SkillGraph from '@/features/SkillsSection/SkillGraph.vue'
import SkillArticle from '@/features/SkillsSection/SkillArticle.vue'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
import { useSkills } from '@/features/SkillsSection/useSkills'
const { nextSkill, previousSkill } = useSkills()
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
  <motion.main :initial="initial" :animate="animate" :transition="getDelay()">
    <section class="intro-section">
      <p>
        Bonjour et bienvenue. Je suis <strong>Mathieu Steinmetz</strong>, développeur web
        <strong>full-stack</strong> basé en France, passionné par la création de projets web
        modernes, performants et maintenables.
      </p>
      <p>
        Spécialisé en <strong>Vue.js</strong> pour le frontend et <strong>Node.js</strong> pour le
        backend, je conçois des applications web complètes, de l’interface utilisateur jusqu’à
        l’architecture serveur.
      </p>
      <p>
        J'accorde une grande importance à la qualité du code, à l'expérience utilisateur et à la
        performance applicative. En complément, je mets en œuvre des pratiques
        <strong>DevOps</strong> (Docker, Kubernetes, CI/CD avec GitHub Actions) pour garantir des
        déploiements fluides, reproductibles et rapides.
      </p>
    </section>
  </motion.main>
  <motion.div
    class="skills-container"
    :initial="initial"
    :animate="animate"
    :transition="getDelay()"
  >
    <SkillGraph />
    <div class="skills-info-container">
      <div class="skills-actions">
        <ArrowLeft :size="32" @click="previousSkill" />
        <ArrowRight :size="32" @click="nextSkill" />
      </div>

      <SkillArticle />
    </div>
  </motion.div>
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
  margin-bottom: 2rem;
}

.infos-container {
  display: flex;
  gap: 1rem;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.skills-container {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 1rem;
}

.skills-info-container {
  position: relative;
}

.skills-actions {
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

@media screen and (max-width: 768px) {
  .skills-container {
    grid-template-columns: 1fr;
  }
}

.skills-actions > * {
  color: #6dbcc8;
  transition:
    color 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  transform: scale(1);
  cursor: pointer;
}

.skills-actions > *:hover {
  color: #2ab9cf;
  transform: scale(1.1);
}

.intro-section {
  max-width: 768px;
  margin: 6rem auto;
  padding: 0 1rem;
  text-align: center;
  color: #e0e0e0;
}

.intro-section p {
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #cbd5e1;
}

.intro-section strong {
  font-weight: 600;
  color: #ffffff;
}
</style>
