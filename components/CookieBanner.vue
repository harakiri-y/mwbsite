<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full opacity-0"
  >
    <div
      v-if="showBanner"
      class="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
    >
      <div class="max-w-4xl mx-auto">
        <div class="glass rounded-2xl p-6 shadow-xl border border-gray">
          <div class="flex flex-col md:flex-row md:items-center gap-4">
            <!-- Text -->
            <div class="flex-1">
              <h3 class="font-semibold text-dark mb-1" style="font-family: var(--font-display);">
                We value your privacy
              </h3>
              <p class="text-sm text-dark-muted leading-relaxed">
                We use cookies to enhance your browsing experience. By clicking "Accept", you consent to our use of cookies.
                <NuxtLink to="/privacy" class="text-primary hover:underline">Learn more</NuxtLink>
              </p>
            </div>

            <!-- Buttons -->
            <div class="flex gap-3 flex-shrink-0">
              <button
                @click="declineCookies"
                class="px-5 py-2.5 text-sm font-medium text-dark-muted hover:text-dark border border-gray rounded-full transition-colors duration-300"
              >
                Decline
              </button>
              <button
                @click="acceptCookies"
                class="px-5 py-2.5 text-sm font-medium text-white bg-dark hover:bg-primary rounded-full transition-colors duration-300"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const showBanner = ref(false)

onMounted(() => {
  // Check if user has already made a choice
  const cookieConsent = localStorage.getItem('cookie-consent')
  if (!cookieConsent) {
    // Small delay before showing banner
    setTimeout(() => {
      showBanner.value = true
    }, 1500)
  }
})

function acceptCookies() {
  localStorage.setItem('cookie-consent', 'accepted')
  showBanner.value = false
}

function declineCookies() {
  localStorage.setItem('cookie-consent', 'declined')
  showBanner.value = false
}
</script>
