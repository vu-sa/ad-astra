<script setup lang="ts">
import { useTranslations } from '@/composables/useTranslations'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import mapImg from '@/assets/map.png'

const { t } = useTranslations()
const { sectionRef, isVisible } = useScrollAnimation()
</script>

<template>
  <section
    id="map"
    ref="sectionRef"
    class="min-h-screen flex items-center justify-center py-16 lg:py-20 opacity-0 translate-y-12 transition-all duration-1000 ease-out"
    :class="{ 'opacity-100 translate-y-0': isVisible }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="text-center max-w-4xl mx-auto mb-8">
        <h2
          class="text-4xl lg:text-5xl xl:text-6xl font-walsheim text-white mb-6 lg:mb-8 uppercase"
        >
          {{ t.mapTitle }}
        </h2>
      </div>

      <div class="max-w-5xl mx-auto">
        <img :src="mapImg" alt="Ad Astra map" class="w-full h-auto rounded shadow-lg" />
      </div>
    </div>
  </section>
</template>
