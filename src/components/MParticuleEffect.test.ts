import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import MParticuleEffect from './MParticuleEffect.vue'

let addEventListenerSpy: ReturnType<typeof vi.spyOn>
let removeEventListenerSpy: ReturnType<typeof vi.spyOn>
let cancelAnimationFrameSpy: ReturnType<typeof vi.spyOn>

describe('MParticuleEffect', () => {
  beforeEach(() => {
    addEventListenerSpy = vi.spyOn(window, 'addEventListener')
    removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')

    cancelAnimationFrameSpy = vi.spyOn(window, 'cancelAnimationFrame')
  })

  afterEach(() => {
    addEventListenerSpy.mockRestore()
    removeEventListenerSpy.mockRestore()
    cancelAnimationFrameSpy.mockRestore()
  })

  it('renders a canvas element', () => {
    const wrapper = shallowMount(MParticuleEffect)
    expect(wrapper.find('canvas').exists()).toBe(true)
  })

  it('canvas has correct class', () => {
    const wrapper = shallowMount(MParticuleEffect)
    const canvas = wrapper.find('canvas')
    expect(canvas.classes()).toContain('m-particle-canvas')
  })

  it('adds window event listeners on mount', () => {
    shallowMount(MParticuleEffect)
    expect(addEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function))
    expect(addEventListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function))
  })

  it('removes window event listeners on unmount', () => {
    const wrapper = shallowMount(MParticuleEffect)
    wrapper.unmount()
    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function))
    expect(removeEventListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function))
    expect(cancelAnimationFrameSpy).toHaveBeenCalled()
  })

  it('accepts count and maxParallax props', () => {
    const wrapper = shallowMount(MParticuleEffect, {
      props: { count: 10, maxParallax: 50 },
    })
    expect(wrapper.props('count')).toBe(10)
    expect(wrapper.props('maxParallax')).toBe(50)
  })

  it('should correctly remove event listeners on unmount', () => {
    const wrapper = shallowMount(MParticuleEffect)
    wrapper.unmount()
    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function))
    expect(removeEventListenerSpy).toHaveBeenCalledWith('mousemove', expect.any(Function))
  })

  it('should handle mousemove event', () => {
    const wrapper = shallowMount(MParticuleEffect)
    const mouseMoveEvent = new MouseEvent('mousemove', {
      clientX: 0,
      clientY: 0,
    })
    window.dispatchEvent(mouseMoveEvent)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const vm = wrapper.vm as any

    // Assuming the component updates some internal state on mousemove
    expect(vm.mouseX).toBe(-0.5)
    expect(vm.mouseY).toBe(-0.5)
  })
})
