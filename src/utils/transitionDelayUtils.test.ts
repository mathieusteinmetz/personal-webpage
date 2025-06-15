import { describe, it, expect, beforeEach } from 'vitest'

import * as utils from './transitionDelayUtils'
describe('transitionDelayUtils', () => {
  beforeEach(async () => {
    utils.resetDelay()
  })

  it('returns delay 0 and duration 0.5 on first call', () => {
    const result = utils.getDelay()
    expect(result).toEqual({ delay: 0, duration: 0.5 })
  })

  it('increments delay by DELAY_STEP on each call', () => {
    const DELAY_STEP = 0.3
    expect(utils.getDelay()).toEqual({ delay: 0, duration: 0.5 })
    expect(utils.getDelay()).toEqual({ delay: DELAY_STEP, duration: 0.5 })
    expect(utils.getDelay()).toEqual({ delay: DELAY_STEP * 2, duration: 0.5 })
    expect(utils.getDelay()).toEqual({ delay: DELAY_STEP * 3, duration: 0.5 })
  })

  it('always returns duration 0.5', () => {
    for (let i = 0; i < 5; i++) {
      const result = utils.getDelay()
      expect(result.duration).toBe(0.5)
    }
  })

  it('produces correct sequence of delays for multiple calls', () => {
    const expectedDelays = [0, 0.3, 0.6, 0.9, 1.2]
    const results = expectedDelays.map(() => utils.getDelay())
    results.forEach((result, idx) => {
      expect(result.delay).toBeCloseTo(expectedDelays[idx])
      expect(result.duration).toBe(0.5)
    })
  })
})
