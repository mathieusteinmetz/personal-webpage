let currentDelayIndex = 0

const DELAY_STEP = 0.3

export const getDelay = () => {
  const delay = currentDelayIndex * DELAY_STEP
  currentDelayIndex++
  return {
    delay,
    duration: 0.5,
  }
}

export const resetDelay = () => {
  currentDelayIndex = 0
}
