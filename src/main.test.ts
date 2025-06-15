import { describe, it, expect, vi, beforeEach } from 'vitest'

// --- Mock Setup ---

// 1. Create spies for the methods we want to control on the mock app
const mockUse = vi.fn()
const mockMount = vi.fn()

// 2. Create the spy for `createApp`. It will return a mock app object.
const createApp = vi.fn(() => ({
  use: mockUse,
  mount: mockMount,
}))

// 3. Mock the 'vue' module using the partial mock pattern.
//    This is the key change.
vi.mock('vue', async (importOriginal) => {
  // Get all the real exports from the original 'vue' module
  const actual = (await importOriginal()) as object
  return {
    ...actual, // Keep all the real exports (like defineComponent, ref, etc.)
    createApp, // BUT, override createApp with our spy
  }
})

// Mock the router, as before
vi.mock('./router', () => ({
  default: {},
}))

// --- Test Suite ---

describe('main.js', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should initialize and mount the Vue app', async () => {
    // Dynamically import main.js
    await import('@/main.js')

    // Assertions remain the same and are now more powerful
    expect(createApp).toHaveBeenCalledOnce()
    expect(mockUse).toHaveBeenCalledOnce()
    expect(mockMount).toHaveBeenCalledOnce()
    expect(mockMount).toHaveBeenCalledWith('#app')
  })
})
