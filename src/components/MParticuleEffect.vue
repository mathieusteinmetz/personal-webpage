<script setup lang="ts">
import { onMounted, onUnmounted, defineProps, useTemplateRef } from 'vue'

type Particle = {
  x: number
  y: number
  radius: number
  dx: number
  dy: number
}

const props = defineProps({
  count: {
    type: Number,
    default: 80,
  },
  maxParallax: {
    type: Number,
    default: 30,
  },
})

const canvasRef = useTemplateRef('canvasRef')

let ctx: CanvasRenderingContext2D | null = null
const particles: Particle[] = []
let mouseX = 0
let mouseY = 0
let animationFrameId: number

const resizeCanvas = /* istanbul ignore next */ () => {
  if (canvasRef.value) {
    canvasRef.value.width = window.innerWidth
    canvasRef.value.height = window.innerHeight
  }
}

const handleMouseMove = /* istanbul ignore next */ (event: MouseEvent) => {
  const isFinePointer = window.matchMedia('(pointer: fine)').matches
  if (!isFinePointer) return
  // only update mouse position if the pointer is fine (e.g., not a touch device)

  if (canvasRef.value) {
    mouseX = event.clientX / canvasRef.value.width - 0.5
    mouseY = event.clientY / canvasRef.value.height - 0.5
  }
}

const animate = /* istanbul ignore next */ () => {
  if (!ctx) return

  if (!canvasRef.value) return

  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)

  for (const p of particles) {
    p.x += p.dx
    p.y += p.dy
    if (p.x + p.radius > canvasRef.value.width || p.x - p.radius < 0) p.dx *= -1
    if (p.y + p.radius > canvasRef.value.height || p.y - p.radius < 0) p.dy *= -1

    const offsetX = mouseX * props.maxParallax * p.radius
    const offsetY = mouseY * props.maxParallax * p.radius

    ctx.beginPath()
    ctx.arc(p.x + offsetX, p.y + offsetY, p.radius, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
    ctx.fill()
  }
  animationFrameId = requestAnimationFrame(animate)
}

onMounted(
  /* istanbul ignore next */
  () => {
    if (canvasRef.value) {
      ctx = canvasRef.value.getContext('2d')

      resizeCanvas()

      for (let i = 0; i < props.count; i++) {
        particles.push({
          x: Math.random() * canvasRef.value.width,
          y: Math.random() * canvasRef.value.height,
          radius: Math.random() * 2.5 + 1,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
        })
      }

      window.addEventListener('resize', resizeCanvas)
      window.addEventListener('mousemove', handleMouseMove)

      animate()
    }
  },
)

onUnmounted(() => {
  window.removeEventListener('resize', resizeCanvas)
  window.removeEventListener('mousemove', handleMouseMove)
  cancelAnimationFrame(animationFrameId)
})
</script>

<template>
  <div class="m-particle-container">
    <canvas ref="canvasRef" class="m-particle-canvas"></canvas>
  </div>
</template>

<style scoped>
.m-particle-container {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
}

.m-particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  display: block;
}
</style>
