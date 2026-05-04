<template>
  <section id="planos" class="section-wrapper bg-dark" ref="sectionRef">
    <div class="section-inner">
      <div class="planos__header text-center mb-20">
        <span class="section-label" ref="labelRef">Invista em você</span>
        <h2 class="planos__title text-display mt-4" ref="titleRef">
          ESCOLHA SEU <span class="text-primary">CAMINHO</span>
        </h2>
      </div>

      <div class="planos__grid" ref="gridRef">
        <div 
          v-for="plano in planos" 
          :key="plano.name" 
          class="plan-card"
          :class="{ 'plan-card--featured': plano.featured }"
        >
          <div v-if="plano.featured" class="plan-card__badge">Mais Escolhido</div>
          
          <div class="plan-card__header">
            <h3 class="plan-card__name">{{ plano.name }}</h3>
            <div class="plan-card__price">
              <span class="currency">R$</span>
              <span class="amount">{{ plano.price }}</span>
              <span class="period">/mês</span>
            </div>
          </div>

          <div class="divider my-8"></div>

          <ul class="plan-card__features">
            <li v-for="feat in plano.features" :key="feat" class="flex items-center gap-3 text-sm">
              <Check class="w-4 h-4 text-primary" />
              <span>{{ feat }}</span>
            </li>
          </ul>

          <button 
            class="btn w-full mt-10"
            :class="plano.featured ? 'btn-primary' : 'btn-outline'"
          >
            Assinar agora
          </button>
        </div>
      </div>

      <p class="text-center mt-12 text-muted text-xs font-mono uppercase tracking-widest">
        * Todos os planos incluem avaliação física inicial gratuita.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check } from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const labelRef = ref(null)
const titleRef = ref(null)
const gridRef = ref(null)

const planos = [
  {
    name: 'Essencial',
    price: '189',
    featured: false,
    features: [
      'Acesso à área de musculação',
      'Treino personalizado',
      'App de treinos',
      'Vestiário premium',
      'Horário livre'
    ]
  },
  {
    name: 'Performance',
    price: '259',
    featured: true,
    features: [
      'Tudo do Essencial',
      'Acesso a todas as modalidades',
      'Zona de Recuperação (2x/mês)',
      'Acompanhamento nutricional',
      'Acesso a convidados (1x/mês)'
    ]
  },
  {
    name: 'Black Elite',
    price: '449',
    featured: false,
    features: [
      'Tudo do Performance',
      'Personal Trainer exclusivo (2x/semana)',
      'Zona de Recuperação ilimitada',
      'Suplementação pós-treino inclusa',
      'Estacionamento VIP'
    ]
  }
]

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%',
    }
  })

  tl.from(labelRef.value, { opacity: 0, y: 20, duration: 0.6 })
    .from(titleRef.value, { opacity: 0, scale: 0.9, duration: 0.8 }, '-=0.4')
    .from('.plan-card', { 
      opacity: 0, 
      y: 40, 
      stagger: 0.15, 
      duration: 1, 
      ease: 'expo.out',
      immediateRender: false
    }, '-=0.4')
})
</script>

<style scoped>


.planos__grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto;
}

.plan-card {
  @apply bg-dark-2 p-10 rounded-lg border border-mid/30 relative flex flex-col transition-all duration-500;
}

.plan-card--featured {
  @apply border-primary/50 bg-dark-3 scale-105 z-10;
  box-shadow: 0 0 40px rgba(200,245,61,0.05);
}

.plan-card__badge {
  @apply absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black font-heading font-bold text-xs uppercase px-4 py-1.5 rounded-full tracking-wider;
}

.plan-card__name {
  @apply font-heading text-2xl text-white uppercase tracking-widest mb-6;
}

.plan-card__price {
  @apply flex items-baseline;
}

.currency {
  @apply text-primary font-heading text-lg font-bold mr-1;
}

.amount {
  @apply text-white font-display text-6xl leading-none;
}

.period {
  @apply text-muted text-sm ml-2;
}

.plan-card__features {
  @apply space-y-4 flex-grow;
}

.plan-card:hover {
  @apply border-primary/40 -translate-y-2;
}
</style>
