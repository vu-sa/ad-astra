<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useTranslations } from '@/composables/useTranslations'

const { t } = useTranslations()

const isVisible = ref(false)
const activeSection = ref('')

const navigationItems = computed(() => [
  { id: 'hero', label: t.value.navHome, href: '#hero' },
  { id: 'current-events', label: t.value.navCurrentEvent, href: '#current-events' },
  { id: 'detailed-program', label: t.value.navProgram, href: '#detailed-program' },
  { id: 'map', label: t.value.navMap, href: '#map' },
  { id: 'teams-links', label: t.value.navInterpretation, href: '#teams-links' },
  { id: 'event-info', label: t.value.navEvent, href: '#event-info' },
  { id: 'about', label: t.value.navAbout, href: '#about' },
  { id: 'why-ad-astra', label: t.value.navWhy, href: '#why-ad-astra' },
  { id: 'news', label: t.value.navNews, href: '#news' },
  { id: 'organizatoriai', label: t.value.navOrganizers, href: '#organizatoriai' },
  // { id: 'partners', label: t.value.navPartners, href: '#partners' },
])

const handleScroll = () => {
  const heroSection = document.getElementById('hero')
  const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight

  // Hide navigation on hero section
  isVisible.value = window.scrollY > heroHeight - 100

  // Find active section
  const sections = navigationItems.value.map((item) =>
    document.getElementById(item.id.replace('#', '')),
  )
  const scrollPosition = window.scrollY + 100

  // Default to hero if at the top
  if (window.scrollY < 50) {
    activeSection.value = 'hero'
  } else {
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i]
      if (section && section.offsetTop <= scrollPosition) {
        activeSection.value = navigationItems.value[i].id
        break
      }
    }
  }
}

const scrollToSection = (href: string) => {
  const targetId = href.replace('#', '')
  const element = document.getElementById(targetId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    class="fixed left-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 hidden lg:block"
    :class="[isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full']"
  >
    <!-- Navigation Links -->
    <div class="flex flex-col space-y-3">
      <button
        v-for="item in navigationItems"
        :key="item.id"
        @click="scrollToSection(item.href)"
        class="uppercase relative text-sm font-medium transition-all duration-200 group text-left"
        :class="[activeSection === item.id ? 'text-amber-400' : 'text-white/60 hover:text-white']"
      >
        <span class="relative z-10">{{ item.label }}</span>

        <!-- Active indicator line -->
        <div
          v-if="activeSection === item.id"
          class="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-amber-400 animate-pulse"
        ></div>

        <!-- Hover effect - shooting star -->
        <div class="absolute -left-2 top-1/2 -translate-y-1/2 shooting-star-nav"></div>
      </button>
    </div>

    <!-- Floating stars decoration -->
    <div class="absolute -top-6 left-2 w-4 h-4 opacity-40">
      <img src="@/assets/star.svg" alt="" class="w-full h-full animate-pulse star-white" />
    </div>
    <div class="absolute -bottom-6 left-4 w-4 h-4 opacity-30" style="animation-delay: 1.5s">
      <img src="@/assets/star.svg" alt="" class="w-full h-full animate-pulse star-amber" />
    </div>
    <div class="absolute top-1/3 -right-4 w-4 h-4 opacity-20" style="animation-delay: 0.8s">
      <img src="@/assets/star.svg" alt="" class="w-full h-full animate-pulse star-white" />
    </div>
  </nav>
</template>

<style scoped>
/* Smooth scroll behavior for the entire document */
:global(html) {
  scroll-behavior: smooth;
}

/* Custom pulse animation for star effects */
@keyframes star-pulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.animate-star-pulse {
  animation: star-pulse 2s ease-in-out infinite;
}

/* Shooting star animation for hover effect */
.shooting-star-nav {
  position: relative;
}

.shooting-star-nav::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, white);
  transform: translateY(-50%);
  opacity: 0;
  transition: all 0.3s ease-out;
}

.group:hover .shooting-star-nav::before {
  width: 12px;
  opacity: 1;
  animation: shoot-tail 0.6s ease-out forwards;
}

@keyframes shoot-tail {
  0% {
    width: 0px;
    opacity: 0;
  }
  30% {
    width: 12px;
    opacity: 1;
  }
  100% {
    width: 40px;
    opacity: 0;
  }
}

.star-white {
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg)
    brightness(100%) contrast(100%);
}

.star-amber {
  filter: brightness(0) saturate(100%) invert(63%) sepia(78%) saturate(463%) hue-rotate(360deg)
    brightness(102%) contrast(100%);
}
</style>
