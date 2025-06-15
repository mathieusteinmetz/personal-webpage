// filepath: src/views/test_HomeView.vue
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from './HomeView.vue'
import ExternalLinks from '@/features/ExternalLinks.vue'
import MCard from '@/components/MCard.vue'

vi.mock('@/utils/transitionDelayUtils', () => ({
  getDelay: () => ({ delay: 0, duration: 0.5 }),
}))

describe('HomeView', () => {
  const wrapper = mount(HomeView)

  it('renders the logo image', () => {
    const img = wrapper.find('img[alt="Logo"]')
    expect(img.exists()).toBe(true)
  })

  it('renders the main title', () => {
    expect(wrapper.text()).toContain('Mathieu Steinmetz')
  })

  it('renders the subtitle', () => {
    expect(wrapper.text()).toContain('FullStack Web Developer')
  })

  it('renders two MCard components', () => {
    const mCards = wrapper.findAllComponents(MCard)
    expect(mCards.length).toBe(2)
  })

  it('renders the location', () => {
    expect(wrapper.text()).toContain('Rennes, France')
  })

  it('renders the email address', () => {
    expect(wrapper.text()).toContain('mathieu.steinmetz@orange.fr')
    const mailLink = wrapper.find('a[href="mailto:mathieu.steinmetz@orange.fr"]')
    expect(mailLink.exists()).toBe(true)
  })

  it('renders the ExternalLinks component', async () => {
    expect(wrapper.findComponent(ExternalLinks).exists()).toBe(true)
  })
})
