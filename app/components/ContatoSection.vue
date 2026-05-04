<template>
  <section id="contato" class="section-wrapper bg-dark" ref="sectionRef">
    <div class="section-inner">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span class="section-label">Fale Conosco</span>
          <h2 class="text-display text-6xl mt-4 mb-8">VAMOS <span class="text-primary">COMEÇAR?</span></h2>
          <p class="text-subtle text-lg mb-12 max-w-md">
            Agende uma visita guiada ou tire suas dúvidas com nosso time de consultores agora mesmo.
          </p>

          <div class="space-y-8">
            <div class="contact-info">
              <div class="contact-info__icon"><MapPin /></div>
              <div>
                <h4 class="contact-info__title">Endereço</h4>
                <p class="contact-info__text">Av. Paulista, 1000 — Bela Vista, São Paulo/SP</p>
              </div>
            </div>
            
            <div class="contact-info">
              <div class="contact-info__icon"><Phone /></div>
              <div>
                <h4 class="contact-info__title">WhatsApp</h4>
                <p class="contact-info__text">(11) 99999-9999</p>
              </div>
            </div>

            <div class="contact-info">
              <div class="contact-info__icon"><Mail /></div>
              <div>
                <h4 class="contact-info__title">E-mail</h4>
                <p class="contact-info__text">contato@academiaelite.com.br</p>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form-container">
          <form class="contact-form" @submit.prevent>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div class="form-group">
                <label>Nome Completo</label>
                <input type="text" placeholder="Seu nome">
              </div>
              <div class="form-group">
                <label>E-mail</label>
                <input type="email" placeholder="seu@email.com">
              </div>
            </div>
            
            <div class="form-group mb-6">
              <label>Plano de Interesse</label>
              <select>
                <option>Escolha um plano</option>
                <option>Essencial</option>
                <option>Performance</option>
                <option>Black Elite</option>
              </select>
            </div>

            <div class="form-group mb-8">
              <label>Mensagem (Opcional)</label>
              <textarea rows="4" placeholder="Como podemos te ajudar?"></textarea>
            </div>

            <button class="btn-primary w-full justify-center">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MapPin, Phone, Mail } from 'lucide-vue-next'

const sectionRef = ref(null)
</script>

<style scoped>


.contact-info {
  @apply flex gap-6 items-start;
}

.contact-info__icon {
  @apply w-12 h-12 rounded bg-dark-2 border border-mid/20 flex items-center justify-center text-primary flex-shrink-0;
}

.contact-info__title {
  @apply font-heading text-lg text-white uppercase tracking-wider mb-1;
}

.contact-info__text {
  @apply text-muted text-sm;
}

.contact-form-container {
  @apply bg-dark-2 p-10 rounded-lg border border-mid/30 relative;
}

.contact-form-container::before {
  content: '';
  @apply absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-primary/30 rounded-tr-lg -z-10;
}

.form-group label {
  @apply block font-mono text-2xs uppercase tracking-widest text-subtle mb-2;
}

.form-group input, 
.form-group select, 
.form-group textarea {
  @apply w-full bg-dark border border-mid/20 rounded px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors;
}

.form-group select {
  @apply appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23c8f53d%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.2em];
}
</style>
