import { ref } from 'vue'
import { SKILLS_LIST } from './skillsList'

export type Skill = (typeof SKILLS_LIST)[number]

const selectedSkill = ref<Skill>(SKILLS_LIST[1])
export const useSkills = () => {
  const setSkill = (skillId: Skill['id']) => {
    const skill = SKILLS_LIST.find((s) => s.id === skillId)
    if (skill) {
      selectedSkill.value = skill
    } else {
      selectedSkill.value = SKILLS_LIST[0] // Fallback to the first skill
    }
  }

  const nextSkill = () => {
    const currentIndex = SKILLS_LIST.findIndex((s) => s.id === selectedSkill.value.id)
    const nextIndex = (currentIndex + 1) % SKILLS_LIST.length
    selectedSkill.value = SKILLS_LIST[nextIndex]
  }
  const previousSkill = () => {
    const currentIndex = SKILLS_LIST.findIndex((s) => s.id === selectedSkill.value.id)
    const previousIndex = (currentIndex - 1 + SKILLS_LIST.length) % SKILLS_LIST.length
    selectedSkill.value = SKILLS_LIST[previousIndex]
  }

  return {
    selectedSkill,
    setSkill,
    nextSkill,
    previousSkill,
    SKILLS_LIST,
  }
}
