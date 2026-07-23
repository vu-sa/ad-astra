<script setup lang="ts">
import logoUrl from '/src/assets/logo.png'
import mobileLogoUrl from '/src/assets/mobile-logo.png'
import { useTranslations } from '@/composables/useTranslations'
import { useScrollHint } from '@/composables/useScrollHint'
import { ref, onMounted, onUnmounted } from 'vue'

const { t } = useTranslations()
const { showHint } = useScrollHint()

const heroRef = ref<HTMLElement>()
let scrollTimeout: number | null = null

const handleWheel = (event: WheelEvent) => {
  // Only handle scroll down events
  if (event.deltaY > 0) {
    event.preventDefault()

    // Clear any existing timeout
    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }

    // Add a small delay to prevent too rapid scrolling
    scrollTimeout = setTimeout(() => {
      const currentEventsSection = document.getElementById('current-events')
      if (currentEventsSection) {
        currentEventsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 100)
  }
}

onMounted(() => {
  if (heroRef.value) {
    heroRef.value.addEventListener('wheel', handleWheel, { passive: false })
  }
})

onUnmounted(() => {
  if (heroRef.value) {
    heroRef.value.removeEventListener('wheel', handleWheel)
  }
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }
})
</script>

<template>
  <main
    id="hero"
    ref="heroRef"
    class="min-h-screen flex flex-col md:flex-row md:items-center justify-start md:justify-center px-4 sm:px-6 lg:px-8 relative pt-2 md:pt-24 lg:pt-0"
  >
    <!-- Mobile logo at top (only visible on mobile) -->
    <div class="flex justify-center w-full md:hidden mb-4">
      <img
        :src="mobileLogoUrl"
        alt="Ad Astra Logo"
        class="w-80 h-auto drop-shadow-lg object-contain"
      />
    </div>

    <div
      class="flex items-center justify-start w-full max-w-screen-2xl mx-auto text-left relative z-10"
    >
      <div class="w-full max-w-none pr-8 sm:pr-16 md:pr-32 lg:pr-40 xl:pr-48 2xl:pr-56">
        <h1
          class="text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-walsheim-hero text-primary mb-4 sm:mb-6 lg:mb-8 leading-none tracking-tight"
        >
          AD ASTRA
        </h1>
        <div
          class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-walsheim-hero text-white mb-4 sm:mb-6 lg:mb-8 leading-tight tracking-tight"
        >
          {{ t.subtitle }}
        </div>
        <div
          class="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-white mb-6 sm:mb-8 lg:mb-10 leading-relaxed max-w-4xl"
        >
          {{ t.description }}
        </div>
        <div
          class="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-walsheim-hero text-primary mb-6 sm:mb-8 lg:mb-10 leading-none tracking-tight drop-shadow-lg"
        >
          09.04
        </div>

        <a
          :href="t.registrationUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-500 text-black px-6 sm:px-6 md:px-8 py-4 sm:py-4 rounded-xl font-semibold text-base sm:text-base md:text-lg shadow-lg hover:shadow-amber-400/25 hover:from-amber-300 hover:to-amber-400 transform hover:scale-105 transition-all duration-300 group"
        >
          {{ t.registrationTitle }}
        </a>
      </div>
    </div>

    <!-- Large logo positioned at bottom right (hidden on mobile) -->
    <img
      :src="logoUrl"
      alt="Ad Astra Logo"
      class="hidden md:block absolute bottom-0 right-0 w-[32rem] sm:w-[36rem] md:w-[40rem] lg:w-[44rem] xl:w-[48rem] 2xl:w-[64rem] h-auto drop-shadow-2xl object-contain z-0 opacity-80 sm:opacity-85 md:opacity-90 lg:opacity-95 xl:opacity-100"
    />
    <div
      class="scroll-indicator absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300"
      :class="{ 'opacity-0 pointer-events-none': showHint }"
    >
      <span class="text-xl sm:text-2xl text-white/50">↓</span>
    </div>
  </main>
</template>

<style scoped>
#hero {
  position: relative;
}

#hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/src/assets/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -2;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

.scroll-indicator {
  animation: bounce 2s infinite;
}

@media (max-width: 768px) {
  .whitespace-nowrap {
    white-space: normal;
  }
}
</style>
