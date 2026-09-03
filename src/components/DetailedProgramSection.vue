<script setup lang="ts">
import { computed } from 'vue'
import { useTranslations } from '@/composables/useTranslations'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useTranslations()
const { sectionRef, isVisible } = useScrollAnimation()

const programSchedule = computed(() => [
  {
    courtyard: t.value.vuGrandCourtyard,
    events: [
      { time: '13:00-13:15', event: t.value.opening },
      { time: '13:15-14:05', event: t.value.disscusionCool },
      { time: '14:15-14:45', event: t.value.rectorLecture },
      { time: '14:50-15:50', event: t.value.deaconTrivia },
      { time: '16:00-16:30', event: t.value.concertKS },
      { time: '16:30-18:30', event: t.value.networkingFair },
      { time: '18:30-19:10', event: t.value.danceAndmusic },
      { time: '19:30-20:15', event: t.value.ratilio },
      { time: '20:30-21:30', event: t.value.concert },
    ],
  },
  {
    courtyard: t.value.sarbiviusCourtyard,
    events: [
      { time: '13:15-14:45', event: t.value.scientificTalks },
      { time: '15:00-16:00', event: t.value.workshops },
      { time: '16:30-17:15', event: t.value.jubilee },
      { time: '17:15-18:00', event: t.value.discussionNP },
    ],
  },
  {
    courtyard: t.value.daukantasCourtyard,
    events: [
      { time: '13:00-15:00', event: t.value.chillZone },
      { time: '15:00-15:45', event: t.value.workshopCV },
      { time: '16:00-18:30', event: t.value.chillZone },
    ],
  },
  {
    courtyard: t.value.observatoryCourtyard,
    events: [{ time: '16:30-18:30', event: t.value.networkingFair }],
  },
])
</script>

<template>
  <section
    id="detailed-program"
    ref="sectionRef"
    class="min-h-screen flex items-center justify-center py-16 lg:py-20 opacity-0 translate-y-12 transition-all duration-1000 ease-out"
    :class="{ 'opacity-100 translate-y-0': isVisible }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="text-center max-w-4xl mx-auto mb-12">
        <h2
          class="text-4xl lg:text-5xl xl:text-6xl font-walsheim text-white mb-6 lg:mb-8 uppercase"
        >
          {{ t.programTitle }}
        </h2>
      </div>

      <!-- Program Schedule Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div v-for="(courtyardProgram, index) in programSchedule" :key="index" class="p-6 lg:p-8">
          <!-- Courtyard Name -->
          <h3 class="text-2xl lg:text-3xl xl:text-4xl font-walsheim text-white mb-6 uppercase">
            {{ courtyardProgram.courtyard }}
          </h3>

          <!-- Events List -->
          <div class="space-y-4">
            <div v-for="(event, eventIndex) in courtyardProgram.events" :key="eventIndex">
              <p class="text-sm sm:text-base lg:text-lg">
                <span class="text-primary font-bold">{{ event.time }}</span>
                <span class="text-white">{{ event.event }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
