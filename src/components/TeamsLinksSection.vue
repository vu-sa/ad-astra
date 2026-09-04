<script setup lang="ts">
import { useTranslations } from '@/composables/useTranslations'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { t } = useTranslations()
const { sectionRef, isVisible } = useScrollAnimation()

// TODO: Replace placeholder links with actual Teams meeting URLs if provided
const vuDidysisKiemasUrl = 'https://teams.microsoft.com/meet/389955670344186?p=T0ScSI0xp9Utm1IzoF'
const sarbievijausKiemasUrl = ''
</script>

<template>
  <section
    id="teams-links"
    ref="sectionRef"
    class="min-h-screen flex items-center justify-center py-16 lg:py-20 opacity-0 translate-y-12 transition-all duration-1000 ease-out"
    :class="{ 'opacity-100 translate-y-0': isVisible }"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="text-center">
        <div class="content-header mb-12">
          <h2 class="text-4xl lg:text-5xl xl:text-6xl font-walsheim text-white mb-6 uppercase">
            {{ t.teamsLinksTitle }}
          </h2>
          <div class="text-lg lg:text-xl font-light text-white mb-8">
            {{ t.teamsLinksSubtitle }}
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <a
          :href="vuDidysisKiemasUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="border bg-black border-white/10 rounded-2xl p-8 text-center"
        >
          <div class="mb-6"></div>
          <h3 class="text-2xl font-semibold text-primary mb-4">{{ t.vuGrandCourtyard }}</h3>
          <p class="text-lg text-gray-200 mb-6">{{ t.teamsJoinDescription }}</p>
          <a
            :href="vuDidysisKiemasUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-500 text-black px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-amber-400/25 hover:from-amber-300 hover:to-amber-400 transform hover:scale-105 transition-all duration-300 group"
          >
            {{ t.joinMeeting }}
            <svg
              class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </a>

        <a
          :href="sarbievijausKiemasUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="border bg-black border-white/10 rounded-2xl p-8 text-center"
        >
          <div class="mb-6"></div>
          <h3 class="text-2xl font-semibold text-primary mb-4">{{ t.sarbiviusCourtyard }}</h3>
          <p class="text-lg text-gray-200 mb-6">{{ t.teamsJoinDescription }}</p>
          <a
            :href="sarbievijausKiemasUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-500 text-black px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-amber-400/25 hover:from-amber-300 hover:to-amber-400 transform hover:scale-105 transition-all duration-300 group"
          >
            {{ t.joinMeeting }}
            <svg
              class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </a>
      </div>
    </div>
  </section>
</template>
