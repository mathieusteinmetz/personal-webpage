import { describe, expect, it, vi } from 'vitest'
const createRouter = vi.fn()
vi.mock('vue-router', async (importOriginal) => {
  const actual = (await importOriginal()) as object
  return {
    ...actual,
    createRouter,
  }
})

describe('Router', () => {
  it('should call createRouter', async () => {
    await import('./index')

    expect(createRouter).toHaveBeenCalled()
  })
})
