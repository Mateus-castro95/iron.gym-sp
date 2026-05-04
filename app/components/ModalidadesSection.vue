<template>
  <section id="modalidades" class="section-wrapper bg-dark" ref="sectionRef">
    <div class="modalidades__header">
      <span class="section-label" ref="labelRef">Treinamento Especializado</span>
      <h2 class="modalidades__title text-display" ref="titleRef">
        Nossas <span class="text-primary">Modalidades</span>
      </h2>
    </div>

    <div class="modalidades__grid" ref="gridRef">
      <div 
        v-for="(mod, i) in modalidades" 
        :key="mod.title"
        class="mod-card"
        :class="{ 'mod-card--large': i === 0 }"
      >
        <div class="mod-card__bg">
          <img :src="mod.image" :alt="mod.title" class="mod-card__img">
          <div class="mod-card__overlay"></div>
        </div>
        
        <div class="mod-card__content">
          <span class="tag-primary mb-4">{{ mod.tag }}</span>
          <h3 class="mod-card__title">{{ mod.title }}</h3>
          <p class="mod-card__desc">{{ mod.desc }}</p>
          <a href="#planos" class="mod-card__link">
            Saber mais 
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const labelRef = ref(null)
const titleRef = ref(null)
const gridRef = ref(null)

const modalidades = [
  {
    title: 'Musculação Elite',
    tag: 'Hipertrofia',
    desc: 'Treinamento de alta intensidade com foco em estética e simetria muscular.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop',
    imageAlt: 'Musculação'
  },
  {
    title: 'Treino Funcional',
    tag: 'Desempenho',
    desc: 'Condicionamento físico extremo integrando força, agilidade e resistência.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop',
    imageAlt: 'Treino Funcional'
  },
  {
    title: 'Levantamento de Peso',
    tag: 'Força',
    desc: 'Foco nos três grandes levantamentos: agachamento, supino e levantamento terra.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop',
    imageAlt: 'Levantamento de Peso'
  },
  {
    title: 'Treinamento Funcional',
    tag: 'Mobilidade',
    desc: 'Movimentos naturais do corpo para melhorar o desempenho no dia a dia.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop',
    imageAlt: 'Funcional'
  }
]

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
    }
  })

  tl.from(labelRef.value, { opacity: 0, x: -20, duration: 0.6 })
    .from(titleRef.value, { opacity: 0, y: 30, duration: 0.8 }, '-=0.4')
    .from('.mod-card', { 
      opacity: 0, 
      y: 50, 
      stagger: 0.15, 
      duration: 1, 
      ease: 'expo.out',
      immediateRender: false
    }, '-=0.4')
})
</script>

<style scoped>


.modalidades__header {
  @apply mb-16;
}

.modalidades__title {
  @apply text-6xl mt-4;
}

.modalidades__grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}

.mod-card {
  @apply relative overflow-hidden aspect-card rounded-lg border border-mid/30 transition-all duration-500;
}

.mod-card--large {
  @apply md:col-span-2 lg:col-span-1 lg:row-span-2 aspect-auto min-h-[500px];
}

.mod-card:hover {
  @apply border-primary/50 -translate-y-2;
}

.mod-card__bg {
  @apply absolute inset-0 z-0;
}

.mod-card__img {
  @apply w-full h-full object-cover transition-transform duration-700;
}

.mod-card:hover .mod-card__img {
  @apply scale-110 rotate-1;
}

.mod-card__overlay {
  @apply absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80;
}

.mod-card__content {
  @apply absolute bottom-0 left-0 p-8 z-10 w-full;
}



.mod-card__title {
  @apply font-display text-4xl text-white mb-2 uppercase tracking-wide;
}

.mod-card__desc {
  @apply text-subtle text-sm mb-6 max-w-xs opacity-0 translate-y-4 transition-all duration-500;
}

.mod-card:hover .mod-card__desc {
  @apply opacity-100 translate-y-0;
}

.mod-card__link {
  @apply inline-flex items-center gap-2 font-heading font-bold text-primary uppercase text-sm tracking-wider;
}

.mod-card__link svg {
  @apply transition-transform duration-300;
}

.mod-card__link:hover svg {
  @apply translate-x-2;
}
</style>
