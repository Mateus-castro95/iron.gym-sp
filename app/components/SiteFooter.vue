<template>
  <footer class="footer">
    <div class="section-inner">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div class="lg:col-span-1">
          <div class="footer__logo mb-6">
            <span class="font-display text-3xl tracking-widest text-primary">IRON GYM</span>
            <span class="block font-mono text-[10px] tracking-[0.4em] text-muted uppercase">Academia Premium</span>
          </div>
          <p class="text-muted text-sm leading-relaxed max-w-xs">
            Redefinindo o conceito de treinamento de alta performance desde 2015. Sua melhor versão começa aqui.
          </p>
        </div>

        <div>
          <h4 class="footer__title">Navegação</h4>
          <ul class="footer__links">
            <li><a href="#modalidades">Modalidades</a></li>
            <li><a href="#diferenciais">Diferenciais</a></li>
            <li><a href="#planos">Planos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer__title">Horários</h4>
          <ul class="footer__links text-muted text-sm space-y-2">
            <li>Segunda a Sexta: 05h - 00h</li>
            <li>Sábados: 08h - 20h</li>
            <li>Domingos e Feriados: 09h - 15h</li>
          </ul>
        </div>

        <div>
          <h4 class="footer__title">Social</h4>
          <div class="flex gap-4">
            <a href="#" class="w-10 h-10 rounded-full bg-dark-2 border border-mid/20 flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all">
              <Instagram class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-dark-2 border border-mid/20 flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all">
              <Facebook class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-dark-2 border border-mid/20 flex items-center justify-center hover:text-primary hover:border-primary/50 transition-all">
              <Youtube class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-mid/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-2xs font-mono text-muted uppercase tracking-[0.2em]">
        <p>© 2026 Iron Gym. Todos os direitos reservados.</p>
        <p>Desenvolvido por <span class="text-white hover:text-primary transition-colors cursor-pointer">MATEUS CASTRO</span></p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Instagram, Facebook, Youtube } from 'lucide-vue-next'
</script>

<style scoped>
.footer {
  @apply bg-off-black pt-20 pb-8 px-[--section-px];
}

.footer__title {
  @apply font-heading text-lg text-white uppercase tracking-wider mb-8;
}

.footer__links {
  @apply space-y-4;
}

.footer__links a {
  @apply text-muted text-sm hover:text-primary transition-colors;
}
</style>
