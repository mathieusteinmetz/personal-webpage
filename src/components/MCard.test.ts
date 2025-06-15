import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import MCard from './MCard.vue'

describe('MCard Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(MCard)
    expect(wrapper.exists()).toBe(true)
  })

  it('displays the correct title', () => {
    const title = 'Test Title'
    const wrapper = mount(MCard, {
      slots: {
        default: `<h1>${title}</h1>`,
      },
    })
    expect(wrapper.text()).toContain(title)
  })
})
