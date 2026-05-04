<template>
  <section class="section-wrapper bg-off-black" ref="sectionRef">
    <div class="section-inner">
      <div class="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div class="max-w-2xl">
          <span class="section-label">Comunidade Elite</span>
          <h2 class="text-display text-5xl mt-4">QUEM TREINA, <span class="text-primary">CONFIA.</span></h2>
        </div>
        <div class="flex gap-4">
          <button @click="scrollPrev" class="w-12 h-12 rounded-full border border-mid/50 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
            <ChevronLeft />
          </button>
          <button @click="scrollNext" class="w-12 h-12 rounded-full border border-mid/50 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
            <ChevronRight />
          </button>
        </div>
      </div>

      <div class="testemunhos__slider-container overflow-hidden">
        <div class="testemunhos__track flex gap-8" ref="trackRef">
          <div v-for="t in testemunhos" :key="t.name" class="test-card flex-shrink-0">
            <Quote class="w-10 h-10 text-primary/20 mb-6" />
            <p class="test-card__text text-lg italic text-light mb-8">"{{ t.text }}"</p>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-dark-3 border border-mid/30 overflow-hidden">
                <img :src="t.avatar" :alt="t.name" class="w-full h-full object-cover">
              </div>
              <div>
                <h4 class="font-heading text-white uppercase tracking-wider">{{ t.name }}</h4>
                <p class="text-primary text-xs font-mono">{{ t.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-vue-next'

const sectionRef = ref(null)
const trackRef = ref<HTMLElement | null>(null)

const testemunhos = [
  {
    name: 'Carlos Oliveira',
    role: 'Plano Black',
    text: 'A infraestrutura aqui é de outro planeta. O cuidado com a biomecânica dos aparelhos fez toda a diferença na minha evolução e prevenção de lesões.',
    avatar: 'https://i.pravatar.cc/150?u=amanda'
  },
  {
    name: 'Juliana Mendes',
    role: 'Plano Essencial',
    text: 'Encontrei uma comunidade que me motiva todos os dias. Os coaches não só ensinam, eles te inspiram a superar seus próprios recordes.',
    avatar: 'https://i.pravatar.cc/150?u=juliana'
  },
  {
    name: 'Ricardo Silva',
    role: 'Plano Elite',
    text: 'O plano Elite transformou minha rotina. Ter tudo que preciso, do estacionamento ao espaço de recuperação, economiza meu tempo e foca no que importa: minha saúde.',
    avatar: 'https://i.pravatar.cc/150?img=11'
  },
  {
    name: 'Amanda Costa',
    role: 'Plano Essencial',
    text: 'Melhor custo-benefício para quem busca alto nível. Os equipamentos da Iron Gym são impecáveis e a limpeza é nota 10 sempre.',
    avatar: 'https://i.pravatar.cc/150?u=carlos'
  }
]

let scrollAmount = 0
const scrollNext = () => {
  if (!trackRef.value) return
  const maxScroll = trackRef.value.scrollWidth - trackRef.value.clientWidth
  scrollAmount = Math.min(scrollAmount + 400, maxScroll)
  gsap.to(trackRef.value, { x: -scrollAmount, duration: 0.6, ease: 'power2.out' })
}

const scrollPrev = () => {
  if (!trackRef.value) return
  scrollAmount = Math.max(scrollAmount - 400, 0)
  gsap.to(trackRef.value, { x: -scrollAmount, duration: 0.6, ease: 'power2.out' })
}

onMounted(() => {
  gsap.from('.test-card', {
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
    },
    opacity: 0,
    x: 100,
    stagger: 0.2,
    duration: 1,
    ease: 'power3.out',
    immediateRender: false
  })
})
</script>

<style scoped>


.test-card {
  @apply bg-dark-2 p-10 rounded-md border border-mid/30 w-[300px] md:w-[450px] transition-all duration-300;
}

.test-card:hover {
  @apply border-primary/30;
}
</style>
