<template>
  <section class="stats" ref="statsRef">
    <div class="stats__inner">
      <div
        v-for="(stat, i) in stats"
        :key="stat.label"
        class="stats__item"
        :ref="el => (items[i] = el as HTMLElement)"
      >
        <div class="stats__number">
          <span class="stats__count" :data-target="stat.value">0</span>
          <span class="stats__suffix">{{ stat.suffix }}</span>
        </div>
        <div class="stats__divider" />
        <p class="stats__label">{{ stat.label }}</p>
      </div>
    </div>

    <!-- Marquee strip -->
    <div class="stats__marquee">
      <div class="stats__marquee-track">
        <span v-for="n in 8" :key="n" class="stats__marquee-item">
          PERFORMANCE · DISCIPLINA · RESULTADO · SUPERAÇÃO ·&nbsp;
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const statsRef = ref<HTMLElement | null>(null)
const items = ref<HTMLElement[]>([])

const stats = [
  { value: 10, suffix: '+', label: 'Anos de experiência' },
  { value: 4200, suffix: '+', label: 'Alunos ativos' },
  { value: 98, suffix: '%', label: 'Taxa de satisfação' },
  { value: 24, suffix: 'h', label: 'Funcionamento diário' },
]

onMounted(() => {
  // Entrance
  gsap.fromTo(
    items.value,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: statsRef.value,
        start: 'top 80%',
      },
    }
  )

  // Count up
  items.value.forEach((el) => {
    const countEl = el.querySelector('.stats__count') as HTMLElement
    const target = parseInt(countEl.dataset.target || '0')
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            countEl.textContent = Math.round(obj.val).toLocaleString('pt-BR')
          }
        })
      },
    })
  })
})
</script>

<style scoped>
.stats {
  background: #111111;
  padding: 0 clamp(1.5rem, 5vw, 5rem);
  overflow: hidden;
}
.stats__inner {
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: #2e2e2e;
  border: 1px solid #2e2e2e;
  padding: clamp(3rem, 6vw, 5rem) 0;
}
@media (max-width: 768px) {
  .stats__inner { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .stats__inner { grid-template-columns: 1fr; }
}
.stats__item {
  background: #111111;
  padding: clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.5rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  opacity: 0;
}
.stats__number {
  display: flex;
  align-items: baseline;
  gap: 0.15em;
}
.stats__count {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 6vw, 5rem);
  line-height: 1;
  color: #c8f53d;
}
.stats__suffix {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.5vw, 3rem);
  color: #c8f53d;
  opacity: 0.7;
}
.stats__divider {
  width: 2rem;
  height: 2px;
  background: linear-gradient(90deg, #c8f53d, transparent);
}
.stats__label {
  font-family: var(--font-heading);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #555;
}

/* Marquee */
.stats__marquee {
  overflow: hidden;
  border-top: 1px solid #1e1e1e;
  padding: 1.25rem 0;
  max-width: 100%;
}
.stats__marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 30s linear infinite;
}
.stats__marquee-item {
  font-family: var(--font-display);
  font-size: 0.85rem;
  letter-spacing: 0.25em;
  color: #2e2e2e;
  white-space: nowrap;
  padding-right: 0;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
