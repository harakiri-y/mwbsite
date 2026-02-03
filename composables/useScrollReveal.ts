// Scroll Reveal Composable - Mindmarket Style Animations
export const useScrollReveal = () => {
  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1,
  }

  let observer: IntersectionObserver | null = null

  const initScrollReveal = () => {
    if (typeof window === 'undefined') return

    observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all reveal elements
    const revealElements = document.querySelectorAll(
      '.reveal, .reveal-fade, .reveal-scale, .reveal-left, .reveal-right, .image-reveal, .text-reveal'
    )

    revealElements.forEach((el) => {
      observer?.observe(el)
    })
  }

  const destroyScrollReveal = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  // Auto-initialize on mount
  onMounted(() => {
    // Small delay to ensure DOM is ready
    setTimeout(initScrollReveal, 100)
  })

  onUnmounted(() => {
    destroyScrollReveal()
  })

  return {
    initScrollReveal,
    destroyScrollReveal,
  }
}

// Parallax Composable
export const useParallax = () => {
  let ticking = false

  const updateParallax = () => {
    const scrollY = window.scrollY
    const parallaxElements = document.querySelectorAll('.parallax')

    parallaxElements.forEach((el) => {
      const speed = parseFloat(getComputedStyle(el).getPropertyValue('--parallax-speed')) || 0.5
      const rect = el.getBoundingClientRect()
      const elementTop = rect.top + scrollY
      const offset = (scrollY - elementTop) * speed

      ;(el as HTMLElement).style.transform = `translateY(${offset}px)`
    })

    ticking = false
  }

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax)
      ticking = true
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })
}

// Counter Animation Composable
export const useCounterAnimation = () => {
  const animateCounter = (element: HTMLElement, target: number, duration: number = 2000) => {
    const start = 0
    const startTime = performance.now()

    const easeOutQuart = (t: number): number => {
      return 1 - Math.pow(1 - t, 4)
    }

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutQuart(progress)
      const currentValue = Math.floor(start + (target - start) * easedProgress)

      element.textContent = currentValue.toLocaleString()

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      } else {
        element.textContent = target.toLocaleString()
      }
    }

    requestAnimationFrame(updateCounter)
  }

  const initCounters = () => {
    const counterElements = document.querySelectorAll('[data-counter]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const target = parseInt(el.dataset.counter || '0', 10)
            const duration = parseInt(el.dataset.counterDuration || '2000', 10)
            animateCounter(el, target, duration)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.5 }
    )

    counterElements.forEach((el) => observer.observe(el))
  }

  onMounted(() => {
    setTimeout(initCounters, 100)
  })

  return { animateCounter, initCounters }
}
