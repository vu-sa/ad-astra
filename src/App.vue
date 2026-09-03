<script setup lang="ts">
import Navigation from '@/components/Navigation.vue'
import MobileNavigation from '@/components/MobileNavigation.vue'
import LanguageToggle from '@/components/LanguageToggle.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import EventInfoSection from '@/components/EventInfoSection.vue'
import WhyAdAstraSection from '@/components/WhyAdAstraSection.vue'
import DetailedProgramSection from '@/components/DetailedProgramSection.vue'
import TeamsLinksSection from '@/components/TeamsLinksSection.vue'
import CurrentEventSection from '@/components/CurrentEventSection.vue'
import MapSection from '@/components/MapSection.vue'
import NewsSection from '@/components/NewsSection.vue'
// import PartnersSection from '@/components/PartnersSection.vue'
import OrganizatoriaiSection from '@/components/OrganizatoriaiSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import ScrollHint from '@/components/ScrollHint.vue'
import { useBackgroundAnimations } from '@/composables/useScrollAnimation'

useBackgroundAnimations()
</script>

<template>
  <div id="app">
    <Navigation />
    <MobileNavigation />
    <LanguageToggle />
    <HeroSection />
    <CurrentEventSection />
    <DetailedProgramSection />
    <MapSection />
    <TeamsLinksSection />
    <EventInfoSection />
    <AboutSection />

    <!-- Floating decorative elements -->
    <div class="floating-accent accent-1"></div>

    <WhyAdAstraSection />
    <NewsSection />
    <OrganizatoriaiSection />
    <!-- <PartnersSection /> -->

    <FooterSection />

    <!-- Scroll hint arrow -->
    <ScrollHint />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(160deg, #030408 0%, #030408 60%, #080c32 100%);
  position: relative;
  overflow-x: hidden;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}

.stars {
  position: fixed;
  top: -50vh;
  left: -50vw;
  width: 200vw;
  height: 200vh;
  z-index: -1;
  pointer-events: none;
  animation: stellar-rotation 360s linear infinite;
  transform-origin: 50% 50%;
  will-change: transform;
}

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: twinkle 12s ease-in-out infinite;
}

.star:nth-child(2n) {
  animation-delay: 2s;
}

.star:nth-child(3n) {
  animation-delay: 4s;
}

.star:nth-child(4n) {
  animation-delay: 1s;
}

.star:nth-child(5n) {
  animation-delay: 3s;
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.8;
  }
}

@keyframes stellar-rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.star-nano {
  width: 0.3px;
  height: 0.3px;
  filter: blur(0.2px);
}

.star-micro {
  width: 0.5px;
  height: 0.5px;
  filter: blur(0.3px);
}

.star-tiny {
  width: 1px;
  height: 1px;
  filter: blur(0.5px);
}

.star-xs {
  width: 1.5px;
  height: 1.5px;
  filter: blur(0.6px);
}

.star-small {
  width: 2px;
  height: 2px;
  filter: blur(0.7px);
}

.star-sm-plus {
  width: 2.5px;
  height: 2.5px;
  filter: blur(0.75px);
}

.star-medium {
  width: 3px;
  height: 3px;
  filter: blur(0.8px);
}

.star-md-plus {
  width: 3.5px;
  height: 3.5px;
  filter: blur(0.9px);
}

.star-large {
  width: 4px;
  height: 4px;
  filter: blur(1px);
}

.star-lg-plus {
  width: 5px;
  height: 5px;
  filter: blur(1.2px);
}

.star-xl {
  width: 6px;
  height: 6px;
  filter: blur(1.5px);
}

.star-xxl {
  width: 7px;
  height: 7px;
  filter: blur(1.8px);
}

.star-svg {
  width: 24px;
  height: 24px;
  background-image: url('@/assets/star.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(0) invert(1);
  animation: twinkle-rotate 12s ease-in-out infinite;
  border-radius: 0 !important;
  background-color: transparent !important;
}

@keyframes twinkle-rotate {
  0% {
    opacity: 0.7;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 0.7;
    transform: scale(1);
  }
}

.star-5point {
  width: 10px;
  height: 10px;
  background: white;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  animation: twinkle-pulse 10s ease-in-out infinite;
}

@keyframes twinkle-pulse {
  0%,
  100% {
    opacity: 0.7;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}

.shooting-star-container {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  overflow: hidden !important;
  pointer-events: none !important;
  z-index: 0 !important;
}

.shooting-star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  opacity: 0;
  animation: shoot 3s linear forwards;
}

.shooting-star::before {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  width: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, white);
  transform-origin: 100% 50%;
  transform: translateY(-50%);
  animation: tail 3s linear forwards;
}

.shooting-star::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  width: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6));
  transform-origin: 100% 50%;
  transform: translateY(-50%);
  animation: tail 3s linear forwards;
  animation-delay: 0.1s;
}

@keyframes shoot {
  0% {
    opacity: 0;
    transform: translateX(0) translateY(0) rotate(var(--rotation, 0deg));
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(var(--delta-x, 300px)) translateY(var(--delta-y, 150px))
      rotate(var(--rotation, 0deg));
  }
}

@keyframes tail {
  0% {
    width: 0;
  }
  10% {
    width: 0;
  }
  50% {
    width: 40px;
  }
  90% {
    width: 40px;
  }
  100% {
    width: 0;
  }
}

#app {
  position: relative;
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
  display: block !important;
  grid-template-columns: none !important;
}

/* Layout containers for dynamic positioning */
.layout-container {
  position: relative;
  width: 100%;
  z-index: 2;
}

.layout-offset-right {
  padding-left: 10vw;
  padding-right: 5vw;
}

.layout-offset-left {
  padding-left: 5vw;
  padding-right: 10vw;
}

.layout-center-wide {
  padding-left: 3vw;
  padding-right: 3vw;
}

.layout-full-bleed {
  padding: 0;
}

/* Floating decorative accents */
.floating-accent {
  position: absolute;
  z-index: 0;
  pointer-events: none;
  opacity: 0.1;
}

.accent-1 {
  top: 120vh;
  right: 8vw;
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse-glow 8s ease-in-out infinite;
}

@media (min-width: 768px) {
  .accent-1 {
    width: 200px;
    height: 200px;
  }
}

@keyframes pulse-glow {
  0%,
  100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.2;
    transform: scale(1.1);
  }
}

/* Star size adjustments for mobile */
@media (max-width: 768px) {
  .stars {
    animation: stellar-rotation 420s linear infinite;
  }

  .star-svg {
    width: 16px;
    height: 16px;
  }

  .star-5point {
    width: 6px;
    height: 6px;
  }

  .star-xl,
  .star-xxl,
  .star-lg-plus {
    width: 3px;
    height: 3px;
    filter: blur(1px);
  }

  .shooting-star::before,
  .shooting-star::after {
    animation: tail-mobile 3s linear forwards;
  }
}

@keyframes tail-mobile {
  0% {
    width: 0;
  }
  10% {
    width: 0;
  }
  50% {
    width: 20px;
  }
  90% {
    width: 20px;
  }
  100% {
    width: 0;
  }
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  .stars {
    animation: none;
  }

  .star {
    animation: none;
    opacity: 0.6;
  }

  .star-svg {
    animation: none;
    opacity: 0.8;
  }

  .star-5point {
    animation: none;
    opacity: 0.7;
  }

  .shooting-star {
    display: none;
  }

  .floating-accent {
    animation: none;
    opacity: 0.1;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .layout-offset-right,
  .layout-offset-left {
    padding-left: 5vw;
    padding-right: 5vw;
  }

  .layout-center-wide {
    padding-left: 2vw;
    padding-right: 2vw;
  }

  .floating-accent {
    opacity: 0.05;
  }
}

body {
  display: block !important;
  place-items: initial !important;
}
</style>
