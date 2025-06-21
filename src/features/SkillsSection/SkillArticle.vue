<script lang="ts" setup>
import { useSkills } from './useSkills'

const { selectedSkill } = useSkills()
</script>

<template>
  <Transition name="fade" mode="out-in">
    <article class="skill-infos" :key="selectedSkill.id">
      <div class="skill-header">
        <h3 class="skill-name">{{ selectedSkill.title }}</h3>
        <ul class="subskill-icons">
          <li class="subskill-icon c-secondary" v-for="(skill, index) in selectedSkill.skills">
            <component :is="skill.icon" class="skill-icon" :size="32" />
          </li>
        </ul>
      </div>
      <p class="skill-description">{{ selectedSkill.description }}</p>
    </article>
  </Transition>
</template>

<style lang="css" scoped>
.skill-name {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--c-primary);
}
.skill-infos {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  background-color: var(--c-secondary);
  color: var(--c-text);
  border-radius: var(--border-radius);
  text-align: justify;
}

.skill-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.skill-infos h3 {
  margin-bottom: 0.5rem;
}
.subskill-icons {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  gap: 0.5rem;
}
.subskill-icon {
  display: flex;

  padding: 0;
  list-style: none;
  flex-direction: row;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.skill-description {
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--c-text);
}
</style>
