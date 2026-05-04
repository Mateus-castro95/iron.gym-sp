<template>
  <section ref="heroRef" class="hero">
    <!-- Background -->
    <div class="hero__bg">
      <div class="hero__bg-video">
        <!-- Usando um placeholder de vídeo ou removendo o import direto que quebra o Vite -->
        <video autoplay muted loop playsinline class="hero__video">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-man-working-out-at-the-gym-23425-large.mp4" type="video/mp4" />
        </video>
        <div class="hero__video-overlay" />
      </div>
      <div class="glow-spot-primary hero__glow-1" />
      <div class="glow-spot-accent hero__glow-2" />
      <div class="noise-overlay" />
    </div>

    <!-- Nav -->
    <nav class="hero__nav">
      <div class="hero__logo">
        <span class="hero__logo-text">IRON GYM</span>
        <span class="hero__logo-tag">ACADEMIA</span>
      </div>
      <ul class="hero__nav-links">
        <li v-for="item in navItems" :key="item.id">
          <a :href="`#${item.id}`" class="hero__nav-link">{{ item.label }}</a>
        </li>
      </ul>
      <a href="#contato" class="btn-outline hero__nav-cta">Começar agora</a>
    </nav>

    <!-- Content -->
    <div class="hero__content">
      <div class="hero__content-left">
        <div class="hero__eyebrow" ref="eyebrowRef">
          <span class="section-label">Desde 2015 · São Paulo</span>
        </div>

        <h1 class="hero__title" ref="titleRef">
          <span class="hero__title-line hero__title-line--stroke">FORJE</span>
          <span class="hero__title-line hero__title-line--solid">SEU</span>
          <span class="hero__title-line hero__title-line--accent">LEGADO</span>
        </h1>

        <p class="hero__sub" ref="subRef">
          Não é só uma academia. É onde limites<br class="hidden md:block" /> são redefinidos e resultados são ineviáveis.
        </p>

        <div class="hero__actions" ref="actionsRef">
          <a href="#planos" class="btn-primary">Ver planos</a>
          <a href="#modalidades" class="hero__ghost-link">
            <span>Explorar modalidades</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Right visual -->
      <div class="hero__content-right" ref="rightRef">
        <div class="hero__visual-card">
          <img
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop"
            alt="Atleta Iron Gym"
            class="hero__visual-img"
          />
          <div class="hero__visual-overlay" />
          <!-- Stats badges -->
          <div class="hero__badge hero__badge--top">
            <span class="hero__badge-number">4.200+</span>
            <span class="hero__badge-label">Alunos ativos</span>
          </div>
          <div class="hero__badge hero__badge--bottom">
            <span class="hero__badge-number">98%</span>
            <span class="hero__badge-label">Satisfação garantida</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="hero__scroll" ref="scrollRef">
      <div class="hero__scroll-line" />
      <span class="hero__scroll-label">Role</span>
    </div>

    <!-- Diagonal decor -->
    <div class="hero__diagonal" />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const heroRef = ref<HTMLElement | null>(null)
const eyebrowRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const subRef = ref<HTMLElement | null>(null)
const actionsRef = ref<HTMLElement | null>(null)
const scrollRef = ref<HTMLElement | null>(null)
const rightRef = ref<HTMLElement | null>(null)

const navItems = [
  { id: 'modalidades', label: 'Modalidades' },
  { id: 'diferenciais', label: 'Diferenciais' },
  { id: 'planos', label: 'Planos' },
  { id: 'contato', label: 'Contato' },
]

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

  tl.fromTo(eyebrowRef.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 })
    .fromTo(
      titleRef.value!.querySelectorAll('.hero__title-line'),
      { opacity: 0, y: 80, skewY: 4 },
      { opacity: 1, y: 0, skewY: 0, duration: 1, stagger: 0.12 },
      '-=0.4'
    )
    .fromTo(subRef.value, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
    .fromTo(actionsRef.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
    .fromTo(scrollRef.value, { opacity: 0 }, { opacity: 1, duration: 1 }, '-=0.3')
    .fromTo(rightRef.value, { opacity: 0, x: 60, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power3.out' }, '-=1.4')
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #080808;
}

/* ── Background ── */
.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero__bg-video {
  position: absolute;
  inset: 0;
}
.hero__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.25;
  filter: saturate(0.4) contrast(1.1);
}
.hero__video-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(8,8,8,0.96) 0%,
    rgba(8,8,8,0.7) 50%,
    rgba(8,8,8,0.9) 100%
  );
}
.hero__glow-1 {
  width: 700px;
  height: 700px;
  top: -200px;
  right: -100px;
  background: radial-gradient(circle, rgba(200,245,61,0.06) 0%, transparent 70%);
}
.hero__glow-2 {
  width: 500px;
  height: 500px;
  bottom: 0;
  left: -100px;
  background: radial-gradient(circle, rgba(255,107,26,0.05) 0%, transparent 70%);
}

/* ── Nav ── */
.hero__nav {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem clamp(1.5rem, 5vw, 5rem);
}
.hero__logo {
  display: flex;
  flex-direction: column;
  line-height: 1;
}
.hero__logo-text {
  font-family: var(--font-display);
  font-size: 1.75rem;
  letter-spacing: 0.15em;
  color: #c8f53d;
}
.hero__logo-tag {
  font-family: var(--font-mono);
  font-size: 0.55rem;
  letter-spacing: 0.3em;
  color: #888;
  text-transform: uppercase;
  margin-top: 1px;
}
.hero__nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}
.hero__nav-link {
  font-family: var(--font-heading);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #888;
  text-decoration: none;
  transition: color 200ms ease;
  position: relative;
}
.hero__nav-link::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 1px;
  background: #c8f53d;
  transition: width 300ms cubic-bezier(0.16, 1, 0.3, 1);
}
.hero__nav-link:hover { color: #f0ede8; }
.hero__nav-link:hover::after { width: 100%; }
.hero__nav-cta {
  font-size: 0.8rem;
  padding: 0.6rem 1.4rem;
}
@media (max-width: 768px) {
  .hero__nav-links, .hero__nav-cta { display: none; }
}

/* ── Content ── */
.hero__content {
  position: relative;
  z-index: 10;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  padding: 0 clamp(1.5rem, 5vw, 5rem);
  padding-bottom: 8rem;
}
@media (max-width: 900px) {
  .hero__content {
    grid-template-columns: 1fr;
  }
  .hero__content-right {
    display: none;
  }
}
.hero__eyebrow {
  margin-bottom: 1.5rem;
  opacity: 0;
}
.hero__title {
  display: flex;
  flex-direction: column;
  font-family: var(--font-display);
  font-size: clamp(5rem, 14vw, 13rem);
  line-height: 0.88;
  letter-spacing: 0.02em;
  margin-bottom: 2.5rem;
}
.hero__title-line {
  display: block;
  opacity: 0;
}
.hero__title-line--stroke {
  -webkit-text-stroke: 2px rgba(240,237,232,0.15);
  color: transparent;
}
.hero__title-line--solid {
  color: #f0ede8;
}
.hero__title-line--accent {
  color: #c8f53d;
  text-shadow: 0 0 60px rgba(200,245,61,0.25);
}
.hero__sub {
  font-family: var(--font-body);
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  font-weight: 300;
  color: #888;
  line-height: 1.7;
  max-width: 480px;
  margin-bottom: 2.5rem;
  opacity: 0;
}
.hero__actions {
  display: flex;
  align-items: center;
  gap: 2rem;
  opacity: 0;
}
.hero__ghost-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-heading);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #555;
  text-decoration: none;
  transition: color 200ms ease;
}
.hero__ghost-link:hover { color: #f0ede8; }
.hero__ghost-link svg { transition: transform 300ms cubic-bezier(0.16,1,0.3,1); }
.hero__ghost-link:hover svg { transform: translateX(4px); }

/* ── Scroll indicator ── */
.hero__scroll {
  position: absolute;
  bottom: 2.5rem;
  left: clamp(1.5rem, 5vw, 5rem);
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  opacity: 0;
}
.hero__scroll-line {
  width: 40px;
  height: 1px;
  background: #c8f53d;
  animation: scroll-pulse 2s ease-in-out infinite;
}
@keyframes scroll-pulse {
  0%, 100% { width: 40px; opacity: 1; }
  50% { width: 20px; opacity: 0.5; }
}
.hero__scroll-label {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #555;
}
/* ── Right Visual ── */
.hero__content-right {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
}
.hero__visual-card {
  position: relative;
  width: 100%;
  max-width: 480px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(200,245,61,0.15);
  box-shadow: 0 0 60px rgba(200,245,61,0.05), 0 32px 80px rgba(0,0,0,0.6);
}
.hero__visual-img {
  width: 100%;
  height: 560px;
  object-fit: cover;
  object-position: center 20%;
  display: block;
  filter: saturate(0.7) contrast(1.05);
  transition: filter 600ms ease;
}
@media (max-width: 1200px) {
  .hero__visual-img {
    height: 420px;
  }
}
.hero__visual-card:hover .hero__visual-img {
  filter: saturate(1) contrast(1);
}
.hero__visual-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(8,8,8,0.85) 100%);
  pointer-events: none;
}
.hero__badge {
  position: absolute;
  background: rgba(8,8,8,0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(200,245,61,0.25);
  border-radius: 8px;
  padding: 0.75rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.hero__badge--top {
  top: 1.5rem;
  right: 1.5rem;
}
.hero__badge--bottom {
  bottom: 1.5rem;
  left: 1.5rem;
}
.hero__badge-number {
  font-family: var(--font-display);
  font-size: 1.75rem;
  color: #c8f53d;
  line-height: 1;
}
.hero__badge-label {
  font-family: var(--font-mono);
  font-size: 0.55rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #888;
}
</style>
