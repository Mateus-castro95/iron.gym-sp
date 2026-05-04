<template>
  <div class="cursor-dot" ref="dot" />
  <div class="cursor-ring" ref="ring" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const dot = ref<HTMLElement | null>(null)
const ring = ref<HTMLElement | null>(null)

let rafId: number
let mouse = { x: 0, y: 0 }
let ringPos = { x: 0, y: 0 }

function onMouseMove(e: MouseEvent) {
  mouse.x = e.clientX
  mouse.y = e.clientY
  if (dot.value) {
    dot.value.style.left = `${mouse.x}px`
    dot.value.style.top = `${mouse.y}px`
  }
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function animate() {
  ringPos.x = lerp(ringPos.x, mouse.x, 0.12)
  ringPos.y = lerp(ringPos.y, mouse.y, 0.12)
  if (ring.value) {
    ring.value.style.left = `${ringPos.x}px`
    ring.value.style.top = `${ringPos.y}px`
  }
  rafId = requestAnimationFrame(animate)
}

function onMouseEnterLink() {
  if (dot.value) { dot.value.style.transform = 'translate(-50%,-50%) scale(2.5)' }
  if (ring.value) {
    ring.value.style.width = '60px'
    ring.value.style.height = '60px'
    ring.value.style.borderColor = 'rgba(200,245,61,0.9)'
  }
}
function onMouseLeaveLink() {
  if (dot.value) { dot.value.style.transform = 'translate(-50%,-50%) scale(1)' }
  if (ring.value) {
    ring.value.style.width = '36px'
    ring.value.style.height = '36px'
    ring.value.style.borderColor = 'rgba(200,245,61,0.5)'
  }
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  animate()
  document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
    el.addEventListener('mouseenter', onMouseEnterLink)
    el.addEventListener('mouseleave', onMouseLeaveLink)
  })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  cancelAnimationFrame(rafId)
})
</script>
