<template>
  <section id="features" class="relative py-28 lg:py-36 bg-light overflow-hidden">
    <div class="absolute inset-0 mesh-gradient pointer-events-none opacity-50" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="section-header text-center max-w-3xl mx-auto mb-16 lg:mb-20">
        <span class="section-anim label text-primary mb-4 block">Features</span>
        <h2 class="section-anim display-large text-dark mb-6">
          Everything for your<br />
          <span class="gradient-text">Health</span>
        </h2>
        <p class="section-anim body-large max-w-xl mx-auto">
          AI-powered health agents that work for your wellbeing — 24/7.
        </p>
      </div>

      <!-- Bento Grid with Screenshots -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <!-- Large Card - Dashboard -->
        <div class="feature-card lg:col-span-2 group card overflow-hidden p-0 cursor-pointer">
          <div class="grid md:grid-cols-2">
            <div class="p-8 lg:p-10 flex flex-col justify-center">
              <div class="w-12 h-12 rounded-2xl flex items-center justify-center bg-primary/8 group-hover:bg-primary transition-all duration-500 mb-5">
                <Brain class="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" :stroke-width="1.5" />
              </div>
              <h3 class="text-xl font-semibold text-dark mb-3" style="font-family: var(--font-display);">
                AI Health Agents
              </h3>
              <p class="text-dark-muted text-sm leading-relaxed mb-4">
                Your body's signals — decoded. Get personalized AI coaching based on your real-time health data, from stress to recovery.
              </p>
              <span class="inline-flex items-center gap-1.5 text-primary text-sm font-medium opacity-0 translate-x-[-8px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                Learn more
                <ArrowRight class="w-4 h-4" />
              </span>
            </div>
            <div class="relative h-64 md:h-auto overflow-hidden bg-cream">
              <img
                src="/screenshots/image4.jpg"
                alt="Training Readiness"
                class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        <!-- Sleep Analysis -->
        <div class="feature-card group card overflow-hidden p-0 cursor-pointer bg-[#1a1040]">
          <div class="relative h-56 overflow-hidden">
            <img
              src="/screenshots/image6.jpg"
              alt="Sleep Analysis"
              class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div class="p-6">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center bg-indigo-500/20 mb-4">
              <Moon class="w-5 h-5 text-indigo-400" :stroke-width="1.5" />
            </div>
            <h3 class="text-lg font-semibold text-white mb-2" style="font-family: var(--font-display);">
              Sleep Analysis
            </h3>
            <p class="text-white/50 text-sm leading-relaxed">
              Discover what affects your recovery with detailed sleep phase tracking.
            </p>
          </div>
        </div>

        <!-- Daily Health Plan -->
        <div class="feature-card group card overflow-hidden p-0 cursor-pointer">
          <div class="relative h-56 overflow-hidden bg-[#e8f0e8]">
            <img
              src="/screenshots/image3.jpg"
              alt="Daily Health Plan"
              class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div class="p-6">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/8 mb-4">
              <Sparkles class="w-5 h-5 text-primary" :stroke-width="1.5" />
            </div>
            <h3 class="text-lg font-semibold text-dark mb-2" style="font-family: var(--font-display);">
              Daily Health Plan
            </h3>
            <p class="text-dark-muted text-sm leading-relaxed">
              Personalized actions based on your body data — updated every day.
            </p>
          </div>
        </div>

        <!-- Nutrition - Large Card -->
        <div class="feature-card lg:col-span-2 group card overflow-hidden p-0 cursor-pointer">
          <div class="grid md:grid-cols-2">
            <div class="relative h-64 md:h-auto overflow-hidden bg-[#f0f5ee] order-2 md:order-1">
              <img
                src="/screenshots/image7.jpg"
                alt="Vitamins & Nutrition"
                class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div class="p-8 lg:p-10 flex flex-col justify-center order-1 md:order-2">
              <div class="w-12 h-12 rounded-2xl flex items-center justify-center bg-primary/8 group-hover:bg-primary transition-all duration-500 mb-5">
                <Apple class="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" :stroke-width="1.5" />
              </div>
              <h3 class="text-xl font-semibold text-dark mb-3" style="font-family: var(--font-display);">
                Nutrition Tracking
              </h3>
              <p class="text-dark-muted text-sm leading-relaxed mb-4">
                Know what your body needs. Track vitamins, minerals, calories, and hydration — all in one place.
              </p>
              <span class="inline-flex items-center gap-1.5 text-primary text-sm font-medium opacity-0 translate-x-[-8px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                Learn more
                <ArrowRight class="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Brain,
  Moon,
  Sparkles,
  Apple,
  ArrowRight
} from 'lucide-vue-next'
</script>
