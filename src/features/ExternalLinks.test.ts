import ExternalLinks from './ExternalLinks.vue'

import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
describe('ExternalLinks', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(ExternalLinks)
    expect(wrapper.exists()).toBe(true)
  })

  it('contains a link to the GitHub repository', () => {
    const wrapper = shallowMount(ExternalLinks)
    const githubLink = wrapper.find('a[href="https://github.com/mathieusteinmetz"]')
    expect(githubLink.exists()).toBe(true)
  })

  it('contains a link to the LinkedIn profile', () => {
    const wrapper = shallowMount(ExternalLinks)
    const linkedinLink = wrapper.find('a[href="https://www.linkedin.com/in/mathieusteinmetz/"]')
    expect(linkedinLink.exists()).toBe(true)
  })
})
