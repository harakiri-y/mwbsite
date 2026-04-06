// GSAP Animation Composable - Professional scroll-triggered animations
export const useGsapAnimations = () => {
  let gsapInstance: any = null
  let ScrollTriggerInstance: any = null
  let ctx: any = null

  const init = async () => {
    if (typeof window === 'undefined') return

    const gsapModule = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')

    gsapInstance = gsapModule.gsap
    ScrollTriggerInstance = ScrollTrigger
    gsapInstance.registerPlugin(ScrollTrigger)

    ctx = gsapInstance.context(() => {
      // Hero animations
      animateHero()
      // Scroll-triggered sections
      animateSections()
      // Parallax backgrounds
      animateParallax()
      // Smooth reveal for all .gsap-reveal elements
      animateReveals()
    })
  }

  const animateHero = () => {
    const heroTl = gsapInstance.timeline({ defaults: { ease: 'power4.out' } })

    heroTl
      .fromTo('.hero-label', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.2)
      .fromTo('.hero-title', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 0.4)
      .fromTo('.hero-subtitle', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, 0.6)
      .fromTo('.hero-description', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.8)
      .fromTo('.hero-cta', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 1.0)
      .fromTo('.hero-phone', { y: 80, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }, 0.5)
      .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.6 }, 1.4)

    // Continuous float for phone
    gsapInstance.to('.hero-phone-float', {
      y: -15,
      duration: 3,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
    })

    // Parallax on hero bg elements
    gsapInstance.to('.hero-bg-orb', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: -100,
      opacity: 0,
    })
  }

  const animateSections = () => {
    // Features section
    gsapInstance.utils.toArray('.feature-card').forEach((card: any, i: number) => {
      gsapInstance.fromTo(card,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          delay: i * 0.08,
        }
      )
    })

    // Section headers
    gsapInstance.utils.toArray('.section-header').forEach((header: any) => {
      const children = header.querySelectorAll('.section-anim')
      gsapInstance.fromTo(children,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    // Steps animation
    gsapInstance.utils.toArray('.step-item').forEach((step: any, i: number) => {
      gsapInstance.fromTo(step,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          delay: i * 0.2,
        }
      )
    })

    // Connection line draw
    const connectionLine = document.querySelector('.step-line')
    if (connectionLine) {
      gsapInstance.fromTo(connectionLine,
        { scaleX: 0 },
        {
          scaleX: 1, duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: connectionLine,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    // Stats counters
    gsapInstance.utils.toArray('.stat-card').forEach((card: any, i: number) => {
      gsapInstance.fromTo(card,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          delay: i * 0.1,
        }
      )
    })

    // App Preview phone
    const previewPhone = document.querySelector('.preview-phone')
    if (previewPhone) {
      gsapInstance.fromTo(previewPhone,
        { y: 80, opacity: 0, rotateY: -10 },
        {
          y: 0, opacity: 1, rotateY: 0, duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: previewPhone,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    // Download section
    const downloadSection = document.querySelector('.download-section')
    if (downloadSection) {
      gsapInstance.fromTo(downloadSection.querySelectorAll('.download-anim'),
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: downloadSection,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    // Testimonial
    const testimonial = document.querySelector('.testimonial-card')
    if (testimonial) {
      gsapInstance.fromTo(testimonial,
        { y: 50, opacity: 0, scale: 0.97 },
        {
          y: 0, opacity: 1, scale: 1, duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: testimonial,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }
  }

  const animateParallax = () => {
    gsapInstance.utils.toArray('.gsap-parallax').forEach((el: any) => {
      const speed = parseFloat(el.dataset.speed || '0.3')
      gsapInstance.to(el, {
        y: () => -100 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: el.closest('section') || el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    })
  }

  const animateReveals = () => {
    gsapInstance.utils.toArray('.gsap-reveal').forEach((el: any) => {
      gsapInstance.fromTo(el,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    // Reveal from left
    gsapInstance.utils.toArray('.gsap-reveal-left').forEach((el: any) => {
      gsapInstance.fromTo(el,
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    // Reveal from right
    gsapInstance.utils.toArray('.gsap-reveal-right').forEach((el: any) => {
      gsapInstance.fromTo(el,
        { x: 60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    // Scale reveal
    gsapInstance.utils.toArray('.gsap-reveal-scale').forEach((el: any) => {
      gsapInstance.fromTo(el,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }

  const destroy = () => {
    if (ctx) ctx.revert()
    if (ScrollTriggerInstance) ScrollTriggerInstance.killAll()
  }

  onMounted(() => {
    nextTick(() => {
      setTimeout(init, 50)
    })
  })

  onUnmounted(destroy)

  return { init, destroy }
}

// Magnetic button effect
export const useMagnetic = (elementRef: Ref<HTMLElement | null>, strength: number = 0.3) => {
  const onMouseMove = (e: MouseEvent) => {
    if (!elementRef.value) return
    const rect = elementRef.value.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    elementRef.value.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  const onMouseLeave = () => {
    if (!elementRef.value) return
    elementRef.value.style.transform = 'translate(0, 0)'
    elementRef.value.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    setTimeout(() => {
      if (elementRef.value) elementRef.value.style.transition = ''
    }, 400)
  }

  onMounted(() => {
    elementRef.value?.addEventListener('mousemove', onMouseMove)
    elementRef.value?.addEventListener('mouseleave', onMouseLeave)
  })

  onUnmounted(() => {
    elementRef.value?.removeEventListener('mousemove', onMouseMove)
    elementRef.value?.removeEventListener('mouseleave', onMouseLeave)
  })
}

// 3D tilt effect for phone mockups
export const useTilt = (elementRef: Ref<HTMLElement | null>, maxTilt: number = 8) => {
  const onMouseMove = (e: MouseEvent) => {
    if (!elementRef.value) return
    const rect = elementRef.value.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    elementRef.value.style.transform = `perspective(1000px) rotateY(${x * maxTilt}deg) rotateX(${-y * maxTilt}deg)`
  }

  const onMouseLeave = () => {
    if (!elementRef.value) return
    elementRef.value.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
    elementRef.value.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
    setTimeout(() => {
      if (elementRef.value) elementRef.value.style.transition = ''
    }, 600)
  }

  onMounted(() => {
    const parent = elementRef.value?.parentElement
    parent?.addEventListener('mousemove', onMouseMove)
    parent?.addEventListener('mouseleave', onMouseLeave)
  })

  onUnmounted(() => {
    const parent = elementRef.value?.parentElement
    parent?.removeEventListener('mousemove', onMouseMove)
    parent?.removeEventListener('mouseleave', onMouseLeave)
  })
}
