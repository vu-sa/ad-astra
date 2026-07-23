<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useTranslations } from '@/composables/useTranslations'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

type ProgramEvent = { time: string; event: string }
type CourtyardProgram = { courtyard: string; events: ProgramEvent[] }

const { t } = useTranslations()
const { sectionRef, isVisible } = useScrollAnimation()

// Keep the schedule definition consistent with DetailedProgramSection
const programSchedule = computed<CourtyardProgram[]>(() => [
  {
    courtyard: t.value.vuGrandCourtyard,
    events: [
      { time: '13:00-13:50', event: t.value.rectorLecture },
      { time: '14:00-15:15', event: t.value.vuUpClose },
      { time: '15:20-16:00', event: t.value.studentLife },
      { time: '16:00-18:00', event: t.value.networkingFair },
      { time: '18:00-21:30', event: t.value.concert },
    ],
  },
  {
    courtyard: t.value.sarbiviusCourtyard,
    events: [
      { time: '14:00-14:55', event: t.value.studentsToStudentsPt1 },
      { time: '15:00-15:45', event: t.value.timeToAct },
      { time: '16:00-17:30', event: t.value.studentsToStudentsPt2 },
      { time: '17:30-18:00', event: t.value.aiDiscussion },
    ],
  },
  {
    courtyard: t.value.observatoryCourtyard,
    events: [
      { time: '14:00-16:00', event: t.value.workshopCycle },
      { time: '16:00-18:00', event: t.value.networkingFair },
    ],
  },
  {
    courtyard: t.value.sirwydasCourtyard,
    events: [
      { time: '14:00-15:00', event: t.value.prepareForSuccess },
      { time: '15:00-16:00', event: t.value.mobileBioclass },
      { time: '16:00-18:00', event: t.value.boardGames },
    ],
  },
])

function parseTimeRange(range: string): { start: number; end: number } | null {
  // returns minutes since midnight
  const match = range.match(/^(\d{2}):(\d{2})-(\d{2}):(\d{2})$/)
  if (!match) return null
  const [, h1, m1, h2, m2] = match
  const start = parseInt(h1, 10) * 60 + parseInt(m1, 10)
  const end = parseInt(h2, 10) * 60 + parseInt(m2, 10)
  return { start, end }
}

const currentInstant = ref<Date>(new Date())
let timer: number | null = null
let scrollTimeout: number | null = null

const handleWheel = (event: WheelEvent) => {
  // Handle scroll up to hero section; allow default behavior on scroll down
  if (event.deltaY < 0) {
    event.preventDefault()

    // Clear any existing timeout
    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }

    // Add a small delay to prevent too rapid scrolling
    scrollTimeout = setTimeout(() => {
      const heroSection = document.getElementById('hero')
      if (heroSection) {
        heroSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 100)
  }
}

// Get current time in Vilnius timezone
const getCurrentVilniusTime = () => {
  const now = new Date()
  const vilniusTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Vilnius' }))
  return vilniusTime.getHours() * 60 + vilniusTime.getMinutes()
}

const nowMinutes = ref<number>(getCurrentVilniusTime())

// Event window on September 4, 2026 from 13:00 until 22:00 (Vilnius time, EEST UTC+03)
const eventStart = new Date('2026-09-04T13:00:00+03:00')
const eventEnd = new Date('2026-09-04T22:00:00+03:00')

const eventStatus = computed(() => {
  const now = currentInstant.value
  if (now.getTime() < eventStart.getTime()) return 'before'
  if (now.getTime() >= eventStart.getTime() && now.getTime() < eventEnd.getTime()) return 'during'
  return 'after'
})

const timeUntilEvent = computed(() => {
  if (eventStatus.value !== 'before') return null

  const now = currentInstant.value
  const diff = eventStart.getTime() - now.getTime()
  if (diff <= 0) return null

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
})

// (Removed unused formattedDateTime)

const currentEvents = computed(() => {
  if (eventStatus.value !== 'during') return []

  const current = nowMinutes.value
  const results: Array<{ courtyard: string; time: string; name: string }> = []
  for (const courtyard of programSchedule.value) {
    for (const ev of courtyard.events) {
      const range = parseTimeRange(ev.time)
      if (!range) continue
      if (current >= range.start && current < range.end) {
        results.push({ courtyard: courtyard.courtyard, time: ev.time, name: ev.event })
      }
    }
  }
  return results
})

onMounted(() => {
  timer = window.setInterval(() => {
    nowMinutes.value = getCurrentVilniusTime()
    currentInstant.value = new Date()
  }, 1000) // update every second for accurate time display

  if (sectionRef.value) {
    sectionRef.value.addEventListener('wheel', handleWheel, { passive: false })
  }
})

onUnmounted(() => {
  if (timer) window.clearInterval(timer)
  if (sectionRef.value) {
    sectionRef.value.removeEventListener('wheel', handleWheel)
  }
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }
})
</script>

<template>
  <section
    id="current-events"
    ref="sectionRef"
    class="min-h-screen flex items-center justify-center py-16 lg:py-20 opacity-0 translate-y-12 transition-all duration-1000 ease-out"
    :class="{ 'opacity-100 translate-y-0': isVisible }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="text-center max-w-4xl mx-auto">
        <h2
          class="text-4xl lg:text-5xl xl:text-6xl font-walsheim text-white mb-6 lg:mb-8 uppercase"
        >
          <span v-if="eventStatus === 'before'">{{ t.eventCountdown }}</span>
          <span v-else-if="eventStatus === 'during'">{{ t.currentEventTitle }}</span>
          <span v-else>{{ t.eventEnded }}</span>
        </h2>
      </div>

      <!-- Content Container -->
      <div class="mt-12 max-w-6xl mx-auto">
        <!-- Before Event: Countdown -->
        <div v-if="eventStatus === 'before' && timeUntilEvent" class="text-center">
          <div
            class="grid gap-4 lg:gap-6 max-w-4xl mx-auto"
            :class="
              timeUntilEvent.days > 0 ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 lg:grid-cols-3'
            "
          >
            <div v-if="timeUntilEvent.days > 0" class="p-6 lg:p-8">
              <div class="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {{ timeUntilEvent.days }}
              </div>
              <div class="text-white/70 text-sm lg:text-base uppercase font-medium">
                {{ t.days }}
              </div>
            </div>
            <div class="p-6 lg:p-8">
              <div class="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {{ timeUntilEvent.hours }}
              </div>
              <div class="text-white/70 text-sm lg:text-base uppercase font-medium">
                {{ t.hours }}
              </div>
            </div>
            <div class="p-6 lg:p-8">
              <div class="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {{ timeUntilEvent.minutes }}
              </div>
              <div class="text-white/70 text-sm lg:text-base uppercase font-medium">
                {{ t.minutes }}
              </div>
            </div>
            <div class="p-6 lg:p-8">
              <div class="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {{ timeUntilEvent.seconds }}
              </div>
              <div class="text-white/70 text-sm lg:text-base uppercase font-medium">
                {{ t.seconds }}
              </div>
            </div>
          </div>
        </div>

        <!-- During Event: Current Events -->
        <div v-else-if="eventStatus === 'during'">
          <div
            v-if="currentEvents.length > 0"
            class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          >
            <div
              v-for="(ev, idx) in currentEvents"
              :key="idx"
              class="p-6 lg:p-8 h-64 flex flex-col justify-center text-center relative"
            >
              <div class="relative z-10">
                <p class="text-sm lg:text-base text-primary font-semibold mb-3 uppercase">
                  {{ ev.time }}
                </p>
                <h3
                  class="text-xl lg:text-2xl xl:text-3xl text-white font-walsheim font-bold mb-4 uppercase leading-tight"
                >
                  {{ ev.name }}
                </h3>
                <p class="text-white/70 text-base lg:text-lg">{{ ev.courtyard }}</p>
              </div>
            </div>
          </div>

          <div v-else class="text-center">
            <div class="p-8 lg:p-12 max-w-2xl mx-auto">
              <div class="text-xl lg:text-2xl text-white/70 font-medium">
                {{ t.noCurrentEvent }}
              </div>
            </div>
          </div>
        </div>

        <!-- After Event: Event Ended -->
        <div v-else class="text-center">
          <div class="p-8 lg:p-12 max-w-2xl mx-auto">
            <div class="text-lg lg:text-2xl text-white/80 font-medium">
              {{ t.eventEndedMessage }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
