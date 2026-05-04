<template>
  <section id="diferenciais" class="section-wrapper bg-off-black" ref="sectionRef">
    <div class="section-inner">
      <div class="diferenciais__grid">
        <div class="diferenciais__content">
          <span class="section-label" ref="labelRef">Excelência em cada detalhe</span>
          <h2 class="diferenciais__title text-display" ref="titleRef">
            POR QUE SOMOS <span class="text-primary">REFERÊNCIA?</span>
          </h2>
          <p class="diferenciais__text" ref="textRef">
            Combinamos ciência esportiva de ponta com o que há de mais moderno em equipamentos mundiais para garantir que cada minuto do seu treino conte.
          </p>
          
          <ul class="features-list" ref="listRef">
            <li v-for="feat in features" :key="feat.title" class="feature-item">
              <div class="feature-item__icon">
                <component :is="feat.icon" class="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 class="feature-item__title">{{ feat.title }}</h4>
                <p class="feature-item__desc">{{ feat.desc }}</p>
              </div>
            </li>
          </ul>
        </div>

        <div class="diferenciais__visual" ref="visualRef">
          <div class="image-stack">
            <div class="image-stack__item image-stack__item--1">
              <img src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1469&auto=format&fit=crop" alt="Gym" class="rounded-lg shadow-2xl">
            </div>
            <div class="image-stack__item image-stack__item--2" data-speed="1.1">
              <div class="experience-badge">
                <span class="text-4xl font-display text-primary">10+</span>
                <span class="text-2xs font-mono uppercase tracking-tighter">Anos de Excelência</span>
              </div>
            </div>
            <div class="glow-spot-primary -z-10 bottom-0 right-0 w-64 h-64 opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ShieldCheck, Zap, Users, Trophy } from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const labelRef = ref(null)
const titleRef = ref(null)
const textRef = ref(null)
const listRef = ref(null)
const visualRef = ref(null)

const features = [
  {
    icon: ShieldCheck,
    title: 'Equipamentos de Ponta',
    desc: 'Tecnologia italiana de última geração para máxima eficiência biomecânica.'
  },
  {
    icon: Zap,
    title: 'Zona de Recuperação',
    desc: 'Espaço dedicado à recuperação muscular com crioterapia e massoterapia.'
  },
  {
    icon: Users,
    title: 'Instrutores Certificados',
    desc: 'Profissionais com especialização internacional em desempenho humano.'
  },
  {
    icon: Trophy,
    title: 'Comunidade Ativa',
    desc: 'Eventos exclusivos e aulas especiais mensais para nossos alunos.'
  }
]

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
    }
  })

  tl.from(labelRef.value, { opacity: 0, x: -30, duration: 0.6 })
    .from(titleRef.value, { opacity: 0, y: 30, duration: 0.8 }, '-=0.4')
    .from(textRef.value, { opacity: 0, y: 20, duration: 0.8 }, '-=0.6')
    .from('.feature-item', { 
      opacity: 0, 
      x: -30, 
      stagger: 0.15, 
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.4')
    .from(visualRef.value, { 
      opacity: 0, 
      scale: 0.9, 
      duration: 1.2,
      ease: 'power3.out'
    }, '-=1')

  // Parallax effect for the image stack
  gsap.to('.image-stack__item--1', {
    y: -40,
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })
})
</script>

<style scoped>


.diferenciais__grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-16 items-center;
}

.diferenciais__title {
  @apply text-5xl mt-4 mb-8;
}

.diferenciais__text {
  @apply text-subtle text-lg mb-12 max-w-xl leading-relaxed;
}

.features-list {
  @apply space-y-8;
}

.feature-item {
  @apply flex gap-6;
}

.feature-item__icon {
  @apply w-14 h-14 rounded-md bg-dark-3 border border-mid/30 flex items-center justify-center flex-shrink-0 transition-all duration-300;
}

.feature-item:hover .feature-item__icon {
  @apply border-primary/50 shadow-glow-primary bg-dark-2;
}

.feature-item__title {
  @apply font-heading text-xl text-white mb-1 uppercase tracking-wide;
}

.feature-item__desc {
  @apply text-muted text-sm max-w-sm;
}

.image-stack {
  @apply relative;
}

.image-stack__item--1 img {
  @apply w-full grayscale contrast-125 hover:grayscale-0 transition-all duration-700;
}

.image-stack__item--2 {
  @apply absolute -bottom-10 -left-10 z-10;
}

.experience-badge {
  @apply bg-primary p-6 rounded-md shadow-2xl flex flex-col items-center justify-center text-black border-4 border-dark;
  min-width: 140px;
}
</style>
