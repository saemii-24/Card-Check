import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const handleGsapAnimation = (triggerEl, option = null) => {
  gsap.fromTo(
    triggerEl,
    { autoAlpha: 0, y: '50px' },
    {
      y: '0',
      autoAlpha: 1,
      duration: 0.5,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: triggerEl,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play play play pause',
        // markers: true,/
      },
    },
    option,
  )
}

const handleShowAnimation = (triggerEl, option = null) => {
  gsap.fromTo(
    triggerEl,
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      duration: 0.5,
    },
    option,
  )
}

export { handleGsapAnimation, handleShowAnimation }
