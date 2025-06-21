<script lang="ts" setup>
import { DatabaseIcon, HeartPulse, Monitor, Server, Wrench } from 'lucide-vue-next'
import type { Component } from 'vue'
import { type Skill, useSkills } from './useSkills'
import MTooltip from '@/components/MTooltip.vue'

const VIEWBOX_WIDTH = 600
const VIEWBOX_HEIGHT = 400

const VIEWBOX_SIZE = `0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`
type SkillNode = Skill & {
  icon: Component
  x: number
  y: number
  id: Skill['id']
  to: Skill['id'][]
}
const { setSkill, SKILLS_LIST, selectedSkill } = useSkills()
const getSkillById = (id: Skill['id']): Skill => {
  return SKILLS_LIST.find((skill) => skill.id === id)! // Since SKILLS_LIST is defined 'as const', we can safely assert that the skill exists
}

const skills: SkillNode[] = [
  {
    ...getSkillById('frontend'),
    icon: Monitor,
    x: 100,
    y: 200,
    to: ['backend'],
  },
  {
    ...getSkillById('backend'),
    icon: Server,
    x: 200,
    y: 200,
    to: ['devops', 'database'],
  },
  {
    ...getSkillById('devops'),
    icon: Wrench,
    x: 300,
    y: 100,
    to: ['monitoring'],
  },
  {
    ...getSkillById('monitoring'),
    icon: HeartPulse,
    x: 400,
    y: 100,
    to: [],
  },
  {
    ...getSkillById('database'),
    icon: DatabaseIcon,
    x: 200,
    y: 300,
    to: [],
  },
]

const getOrthogonalLineWithRadius = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  radius: number,
) => {
  const dx = x2 - x1
  const dy = y2 - y1

  const horizontalDir = dx >= 0 ? 1 : -1
  const verticalDir = dy >= 0 ? 1 : -1

  // Point avant l'arc sur la verticale
  const xCorner = x1
  const yCorner = y2 - verticalDir * radius

  let path = `M ${x1} ${y1} `

  // Ligne verticale jusqu'au point avant l'arc
  path += `L ${xCorner} ${yCorner} `

  // Arc quart de cercle
  // Sweep flag : sens de rotation du quart de cercle
  // ici on tourne vertical → horizontal

  // Pour vertical→horizontal, le sweepFlag est inverse du premier cas
  const sweepFlag =
    (horizontalDir === 1 && verticalDir === 1) || (horizontalDir === -1 && verticalDir === -1)
      ? 0
      : 1

  path += `A ${radius} ${radius} 0 0 ${sweepFlag} ${x1 + horizontalDir * radius} ${y2} `

  // Ligne horizontale jusqu'au point final
  path += `L ${x2} ${y2}`

  return path
}
</script>
<template>
  <div class="graph-container">
    <svg
      class="skill-graph"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="VIEWBOX_SIZE"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <g v-for="(skill, index) in skills" :key="index">
        <path
          stroke-dasharray="5, 5"
          v-for="to in skill.to"
          :d="
            getOrthogonalLineWithRadius(
              skill.x,
              skill.y,
              skills.find((s) => s.id === to)?.x || 0,
              skills.find((s) => s.id === to)?.y || 0,
              10,
            )
          "
          stroke="#ccc"
        />
        <circle r="4" fill="#00d4ff" v-for="to in skill.to">
          <animateMotion
            :dur="`${Math.random() + 1}s`"
            repeatCount="indefinite"
            keyPoints="1;0"
            keyTimes="0;1"
            :path="
              getOrthogonalLineWithRadius(
                skill.x,
                skill.y,
                skills.find((s) => s.id === to)?.x || 0,
                skills.find((s) => s.id === to)?.y || 0,
                10,
              )
            "
          />
        </circle>
      </g>
    </svg>

    <div class="nodes-container">
      <MTooltip
        v-for="(skill, index) in skills"
        class="node"
        :class="{ active: skill.id === selectedSkill.id }"
        :key="index"
        :style="{
          left: (skill.x / VIEWBOX_WIDTH) * 100 + '%',
          top: (skill.y / VIEWBOX_HEIGHT) * 100 + '%',
        }"
        @click="setSkill(skill.id)"
      >
        <template #content>
          <div class="node-tooltip">
            {{ skill.title }}
          </div>
        </template>

        <component :is="skill.icon" />
      </MTooltip>
    </div>
  </div>
</template>

<style scoped>
.graph-container {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #111111ae;
  background-image:
    linear-gradient(#191919 0.1em, transparent 0.1em),
    linear-gradient(90deg, #191919 0.1em, transparent 0.1em);
  background-size: 50px 50px;
  background-position: -3em -3em;
  border-radius: 0.5rem;
  box-shadow:
    0 0 10px #2ab9cf95 inset,
    0 0 2px #2ab9cf95;
  backdrop-filter: blur(5px);
}
.skill-graph {
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.nodes-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.nodes-container > .node {
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: rgb(55, 97, 131);
  padding: 0.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(86, 86, 86, 0.745);
  color: #fff;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.nodes-container > .node:hover,
.nodes-container > .node.active {
  cursor: pointer;
  transform: translate(-50%, -50%) scale(1.1);
  background-color: rgb(158, 69, 164);
}
</style>
