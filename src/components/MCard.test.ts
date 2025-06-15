import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import MCard from './MCard.vue'

describe('MCard Component', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(MCard)
    expect(wrapper.exists()).toBe(true)
  })

  it('displays content in the default slot', () => {
    const title = 'Test Title'
    const wrapper = shallowMount(MCard, {
      slots: {
        default: `<h1>${title}</h1>`,
      },
    })
    expect(wrapper.text()).toContain(title)
  })

  it('does not render the prepend container when the prepend slot is empty', () => {
    const wrapper = shallowMount(MCard)
    expect(wrapper.find('.m-card-prepend').exists()).toBe(false)
  })

  it('renders the prepend container when the prepend slot is used', () => {
    const prependContent = 'Prepend Content'
    const wrapper = shallowMount(MCard, {
      slots: {
        prepend: `<span>${prependContent}</span>`,
      },
    })

    const prependWrapper = wrapper.find('.m-card-prepend')

    expect(prependWrapper.exists()).toBe(true)
    expect(prependWrapper.text()).toContain(prependContent)
  })
})
