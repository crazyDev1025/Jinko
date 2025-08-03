import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import Scrollbar from 'smooth-scrollbar'
import { Linear, gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FormattedMessage, useIntl } from 'react-intl'
import { StyledText, SubmitButton } from 'components/GlobalStyle'
import { Flex } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Lottie, { AnimationItem, RendererType } from 'lottie-web'
import styled from 'styled-components'
import { Divider } from '@mantine/core'
import { ReactComponent as EllipseSvg } from 'assets/ellipse2.svg'
import useIntersectionObserverPassive from 'hooks/useIntersectionObserverPassive'
// import { useSection } from 'contexts/SectionContext'
import { useSocialLinks } from './hooks/useSocial'
import { brandList } from './constant'

export interface hookProps {
  target: string,
  path: string,
  speed: speedChoice,
  scrub?: number,
  renderer?: RendererType,
  rendererSettings?: any,
  duration?: number
}
export enum speedChoice {
  SLOW = "slow", MEDIUM = "medium", FAST = "fast"
}
const LottieContainer = styled.div`
  // display: flex;
  // margin-bottom: 800px;
  // justify-content: center;
  // flex-direction: column;
  // align-items: center;
  width: 100vw;
  height: 100vh;
  // position: absolute;
  top: 0;
`
const StyledBgChange = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-repeat: no-repeat !important;
  background-size: 100% 100% !important;
`
const TextWrapper = styled.div`
  overflow: hidden;
  will-change: transform;
`
const CustomImgWrapper = styled(TextWrapper)`
  top: -5vh;

  @media only screen and (max-width: 800px) {
    top: 1vh;
    right: 8vh;
  }
`
const StyledBox = styled(Flex)`
  // background: radial-gradient(50% 1229.25% at 50% 50%, rgba(245, 249, 255, 0.6) 0%, rgba(245, 249, 255, 0.6) 100%);
  // box-shadow: 0px 4px 30px rgba(255, 255, 255, 0.6), 0px 30px 80px #CCD7FE;
  // border-radius: 30px;

  border-image-source: url(/images/landing/content-frame-t.svg);
  border-image-width: 20px;
  border-image-outset: 6px;
  border-image-slice: 27;
`
const StyledSocialMediaIcon = styled.a`
  max-width: 60px;
  // cursor: pointer;
`
const StyledSpan = styled.span`
  color: var(--textYellow);
`
const StyledFirstSession = styled.div`
  display: grid;
  padding: 0 max(20px, 6vw);
  width: 100vw;
  height: 100vh;
  grid-column-gap: 0;
  grid-row-gap: 0;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(3,1fr);
`
const StyledSessionGrid = styled.div`
  display: grid;
  padding: 0 max(20px, 2vw);
  width: 100vw;
  height: 100vh;
  grid-column-gap: 0;
  grid-row-gap: 0;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(3,1fr);
  position: absolute;
`
const StyledPicLabel = styled(Flex)`
  border: 1.2px solid;
  border-image-source: linear-gradient(180deg, #FF9B3D 0%, #FF9E3E 0.01%, #FFCD4D 100%);
  border-image-outset: 0px;
  border-image-slice: 27;
  padding: 8px;
`
const StyledSection5LeftFlex = styled(Flex)`
  flex: 0 0 auto;
  @media only screen and (max-width: 800px) {
    flex: 1 0 auto;
  }
`
const StyledSectionFlex = styled(Flex)`
  row-gap: 1rem;

  @media only screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`
const StyledJoinUsSectionFlex = styled(Flex)`
  @media only screen and (max-width: 1000px) {
    flex-wrap: wrap;
  }
`
const StyledVideoWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 15.65% 0;
  overflow: hidden;
  width: 100%;
  // height: 100%;
  max-width: 550px;

  > iframe {
    position: absolute;
    // top: 0;
    // left: 0;
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 800px) {
    // padding: 36.65% 0;
    padding: 20.65% 0;
  }

  @media only screen and (max-width: 576px) {
    padding: 26.65% 0;
  }

  @media only screen and (max-width: 415px) {
    padding: 36.65% 0;
  }
`

const StyledShowcaseParent = styled(Flex)<{ gutter?: string; }>`
  gap: ${props => props.gutter === undefined ? '1rem 4rem' : `1rem ${props.gutter}`};

  @media only screen and (max-width: 684px) {
    gap: ${props => props.gutter === undefined ? 'clamp(1rem, 3vh, 4rem)' : `clamp(1rem, 3vh, ${props.gutter})`};
  }
`
const StyledShowcaseChild = styled(Flex)<{ maxPerRow?: string; gutter?: string; }>`
  flex-direction: column;
  gap: 10px;
  flex: ${props => props.maxPerRow === undefined && props.gutter === undefined ?
    '1 1 calc(100% / 3 - 4rem)'
    :
    `1 1 calc(100% / ${props.maxPerRow} - ${props.gutter})`};
  justify-content: center;
  align-items: center;
  max-width: ${props => props.maxPerRow === undefined ? 'calc(100% / 3)' : `calc(100% / ${props.maxPerRow})`};

  @media only screen and (max-width: 684px) {
    flex: ${props => props.maxPerRow === undefined && props.gutter === undefined ?
      '1 1 calc(100% / 3 - clamp(1rem, 3vh, 4rem))'
      :
      `1 1 calc(100% / ${props.maxPerRow} - clamp(1rem, 3vh, ${props.gutter}))`
    }
  }
`
const StyledBrandShowcaseChild = styled(Flex)`
  flex: 1 1 calc(100% / 4 - 3rem);
  justify-content: center;
  // max-width: calc(100% / 4);

  @media only screen and (max-width: 684px) {
    flex: 1 1 calc(100% / 4)
  }
`

const Home: React.FC = () => {

  ScrollTrigger.config({ ignoreMobileResize: true })

  const characterLottieContainerRef = useRef<HTMLDivElement>(null)

  const { currentLanguage } = useTranslation()
  const intl = useIntl()

  // temp solution to skip useeffect rendering twice issue
  const didAnimate = useRef(false)

  const [isMobile, setIsMobile] = useState(false)
  const [loading, setLoading] = useState(true)
  const initSocialLinks = useMemo(() => ({
    "twitter": "",
    "discord": "",
    "instagram": "",
    "telegram": ""
  }), [])
  const [socialLinks, setSocialLinks] = useState(initSocialLinks)
  const { onSocialLinks: handleSocialLinks } = useSocialLinks()

  const influencerList = [
    {
      id: 1, name: 'Bermuda',
      origin: intl.formatMessage({ id: 'label-us', defaultMessage: 'US' }),
      path: '/images/landing/influencer/icon-bermudaisbae.png',
      alt: 'bermudaisbae',
      ig: 'https://www.instagram.com/bermudaisbae/'
    },
    {
      id: 2, name: 'Lil Miquela',
      origin: intl.formatMessage({ id: 'label-us', defaultMessage: 'US' }),
      path: '/images/landing/influencer/icon-lilmiquela.png',
      alt: 'lilmiquela',
      ig: 'https://www.instagram.com/lilmiquela/'
    },
    {
      id: 3, name: 'Imma',
      origin: intl.formatMessage({ id: 'label-jp', defaultMessage: 'Japan' }),
      path: '/images/landing/influencer/icon-immajapan.png',
      alt: 'imma',
      ig: 'https://www.instagram.com/imma.gram/'
    },
    {
      id: 4, name: 'Shudu',
      origin: intl.formatMessage({ id: 'label-za', defaultMessage: 'South Africa' }),
      path: '/images/landing/influencer/icon-shudu.png',
      alt: 'shudu',
      ig: 'https://www.instagram.com/shudu.gram/'
    },
    {
      id: 5, name: 'Rozy',
      origin: intl.formatMessage({ id: 'label-ko', defaultMessage: 'South Korea' }),
      path: '/images/landing/influencer/icon-rozy.png',
      alt: 'rozy',
      ig: 'https://www.instagram.com/rozy.gram/'
    }
  ]

  const iframeRef = useRef(null)
  const entry = useIntersectionObserverPassive(iframeRef, {})
  const isIframeIntersecting = entry ? !!entry.isIntersecting : false

  // GSAP context
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  // const ctx = gsap.context(() => {})
  const ctx = gsap.matchMedia()
  const ctxRef = useRef(ctx)

  // initialize smooth scrollbar with GSAP ScrollTrigger
  const initSmoothScrollbar = useCallback(() => {
    const scroller = document.querySelector('.scroller') as HTMLElement
    const bodyScrollBar = Scrollbar.init(scroller, {
      damping: 0.1, delegateTo: document, alwaysShowTracks: true,
    })

    ScrollTrigger.scrollerProxy(".scroller", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value
        }
        return bodyScrollBar.scrollTop
      }
    })
    bodyScrollBar.addListener(ScrollTrigger.update)
    ScrollTrigger.defaults({ scroller })
  }, [])

  // Initialize Lottie
  const lottieInit = useCallback((elemId: string, path: string, loop = false, autoplay = true, initialSegment = null) => {
    const target = document.querySelector(elemId)
    const animation = Lottie.loadAnimation({
      container: target,
      renderer: 'svg',
      loop,
      autoplay,
      path,
      rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
      initialSegment
    })
    return animation
  }, [])

  // GSAP ScrollTrigger linked with Lottie
  const lottieScrollTrigger = useCallback((vars: hookProps) => {
    const playhead = { frame: 0 }
    const target = gsap.utils.toArray(vars.target)[0] as HTMLElement
    const animation = Lottie.loadAnimation({
      container: target,
      renderer: vars.renderer || 'svg',
      loop: false,
      autoplay: false,
      path: vars.path,
      rendererSettings: vars.rendererSettings || { preserveAspectRatio: 'xMidYMid slice' }
    })

    animation.addEventListener("DOMLoaded", () => {
      const createTween = () => {
        const tl = gsap.timeline()
        tl.to(playhead, {
          duration: vars.duration,
          frame: animation.totalFrames - 1,
          ease: 'none',
          onUpdate: () => animation.goToAndStop(playhead.frame, true),
          scrollTrigger: {
            trigger: target,
            pin: true,
            start: "top top",
            end: "+=5000",
            scrub: 2,
            markers: false
          }
        })
        return () => animation.destroy && animation.destroy()
      }
      const createTweenSmall = () => {
        const tl = gsap.timeline()
        tl.to(playhead, {
          duration: vars.duration,
          frame: animation.totalFrames - 1,
          ease: 'none',
          onUpdate: () => animation.goToAndStop(playhead.frame, true),
          scrollTrigger: {
            trigger: target,
            pin: true,
            start: "top top",
            end: "+=500",
            scrub: 2,
            markers: false
          }
        })
        return () => animation.destroy && animation.destroy()
      }
      // eslint-disable-next-line no-unused-expressions
      ctxRef.current && ctxRef.current.add ? ctxRef.current.add("(min-width: 801px)", () => { createTween() }).add("(max-width: 800px)", () => { createTweenSmall() }) : createTween()
      ScrollTrigger.sort()
      ScrollTrigger.refresh()
    })
    return animation
  }, [])

  // change bg color
  const scrollBackgroundColorChange = useCallback(() => {
    // const updateBg = gsap.utils.toArray(".section").map((elem) => {
    //   let bg = (elem as HTMLElement).getAttribute('data-bg')
    //   const trigger = ScrollTrigger.create({
    //     trigger: elem as HTMLElement,
    //     start: 'top 5%',
    //     end: 'bottom 5%',
    //     markers: false,
    //     onToggle() {
    //       gsap.to("section", {
    //         background: `url(/images/landing/${bg}.png)`,
    //         duration: 1.4
    //       })
    //     }
    //   })

    //   return () => {
    //     bg = (elem as HTMLElement).getAttribute('data-bg')
    //     if (trigger.isActive) {
    //       gsap.killTweensOf("section")
    //       gsap.set("section", { background: `url(/images/landing/${bg}.png)` })
    //     }
    //   }
    // })

    // gsap.to("section", {
    //   background: `url(/images/landing/1.png)`,
    //   immediateRender: false,
    //   scrollTrigger: {
    //     trigger: ".section-1",
    //     scroller: '.scroller',
    //     scrub: true,
    //     pin: true,
    //     markers: true
    //   }
    // })
    // gsap.to("section", {
    //   background: `url(/images/landing/2.png)`,
    //   immediateRender: false,
    //   scrollTrigger: {
    //     trigger: ".section-2",
    //     scroller: '.scroller',
    //     scrub: true,
    //     pin: true,
    //     markers: true
    //   }
    // })

    gsap.set(".bg-change", { zIndex: (i, target, targets) => targets.length - i })
    const allBgs = gsap.utils.toArray(".bg-change")
    const allBgsWithoutLast = allBgs.slice(0, -1)
    // const lastBg = allBgs.slice(-1)
    const action = gsap.timeline({ defaults: { ease: 'none', stagger: 1 } })
      .to(allBgsWithoutLast, {
        autoAlpha: 0,
        duration: 0.5,
        // scrollTrigger: {
        //   trigger: 'test',
        //   start: 'top top',
        //   end: '+=3000',
        //   scrub: true,
        //   pin: true,
        //   scroller: '.scroller',
        //   markers: true
        // }
      }, 1)
      // .fromTo('.content-p', { y: 0, immediateRender: false }, {
      //   immediateRender: false,
      //   y: 270,
      //   ease: 'power4.out',
      //   duration: 2
      // }, 1)
      .to({}, { duration: 0.5 })

    ScrollTrigger.create({
      trigger: '.section-1',
      start: 'top top',
      end: '+=5000',
      animation: action,
      scrub: true,
      scroller: '.scroller',
      markers: false,
      pin: true
    })
  }, [])

  const contentChange = useCallback((_isMobile: boolean) => {
    const tl = gsap.timeline()
    tl.from(".content-p", {
      y: 270,
      ease: 'power4.out',
      delay: 0.5,
      duration: 1.2,
      stagger: {
        amount: 0.4
      },
    })
      .from(".sec1-content-line", {  // section 1 scroll down line
        x: -270, ease: 'power4.out', delay: 0, duration: 1.2, stagger: {
          amount: 0.4
        }
      }, 1)

    // const tt = gsap.timeline({ paused: true })
    // tt.from(".content-p", {
    //   y: 270,
    //   ease: 'power4.out',
    //   delay: 0.5,
    //   duration: 1.2,
    //   stagger: {
    //     amount: 0.4
    //   },
    // })
    // .fromTo('.content-p', { y: 0 }, {
    //   immediateRender: false,
    //   y: 270,
    //   ease: 'power4.out',
    //   duration: 2,
    // }, 2)
    // const masterTl = gsap.timeline()
    // masterTl.fromTo(tt, { progress: 0 }, {
    //   progress: 0.5
    // })
    // .fromTo(tt, { progress: 0.5 }, {
    //   immediateRender: false,
    //   progress: 1,
    //   scrollTrigger: {
    //     trigger: 'content-p',
    //     start: 'top top',
    //     end: '+=1000',
    //     scrub: 1,
    //     markers: true,
    //   }
    // }, 2)
    // tl.fromTo('.content-p', { y: 0 }, {
    //   y: 270,
    //   ease: 'power4.out',
    //   duration: 2,
    //   // scrollTrigger: {
    //   //   trigger: '.content-p',
    //   //   start: "top top",
    //   //   end: "bottom center",
    //   //   markers: true,
    //   //   scrub: true
    //   //   // toggleActions: "play none none reverse"
    //   // }
    // })
    const path = document.querySelector('#circle-path') as SVGGeometryElement
    const pathLength = path.getTotalLength()
    const action = gsap.timeline({
      defaults: { ease: 'none', stagger: 1 },
      scrollTrigger: {
        trigger: '.content-p',
        start: 'top top',
        end: '+=4800',
        scrub: 1,
        markers: false,
        onUpdate: (self) => {
          if (self.progress > 0 && tl.isActive()) {
            tl.progress(1)
          }
        },
        onRefresh: (self) => {
          self.scroll(0)
        }
      }
    })
      .call(() => {
        tl.play()
      })
      .fromTo('.content-p', { y: 0 }, {
        immediateRender: false,
        y: 270,
        ease: 'power4.out',
        duration: 2,
        // scrollTrigger: {
        //   trigger: 'content-p',
        //   start: 'top top',
        //   end: '+=1000',
        //   scrub: true,
        //   markers: true
        // }
      }, 2)
      .fromTo('.sec1-content-line', { x: 0 }, {
        immediateRender: false,
        x: -270, ease: 'power4.out', duration: 2,
      }, 2)
      .from('.sec2-content', {
        y: 270,
        ease: 'power4.out',
        duration: 1.2,
        stagger: {
          amount: 0.4
        },
      }, ">7")
      .fromTo('.sec2-content', { y: 0 }, {
        immediateRender: false,
        y: 270,
        ease: 'power4.out',
        duration: 2,
        delay: 0
      }, ">3")
      .fromTo('#sec2-button-wrapper', { visibility: 'hidden' }, {
        visibility: 'inherit'
      }, 6)
      .fromTo('.sec2-content-box', { autoAlpha: 0 }, {
        autoAlpha: 1, delay: 2, duration: 1.2
      }, 7)
      .to('.sec2-content-box', {
        autoAlpha: 0, duration: 1.2
      }, ">5")
      // SECTION 3
      .from('.sec3-content', {
        y: 270,
        ease: 'power4.out',
        duration: 1.2,
        stagger: {
          amount: 0.4
        },
      }, ">4")
      .to('.sec3-content', {
        y: 270,
        ease: 'power4.in',
        duration: 2,
        delay: 0
      }, ">4")
      .fromTo('.sec3-content-box', { autoAlpha: 0 }, {
        autoAlpha: 1, delay: 2, duration: 1.2
      }, 17)
      .to('.sec3-content-box', {
        autoAlpha: 0, duration: 1.2
      }, ">11")
      .fromTo('#sec3-button-wrapper', { visibility: 'hidden' }, {
        visibility: 'inherit'
      }, 16)
      .fromTo('.sec345-content-L-lottie', { x: -750, y: 500 }, {  // Section 3,4,5 Left Lottie
        x: "0vw", y: "0vh", ease: 'power4.out', duration: 2, delay: 3
      }, 16)
      // .to('.sec345-content-L-lottie', {
      //   x: -750, y: 500, ease: 'power4.in', duration: 2, delay: 2
      // }, ">5")
      .fromTo('.sec3-content-line', { x: -270 }, {
        x: 0, ease: 'power4.out', duration: 2, delay: 3
      }, 17)
      .to('.sec3-content-line', {
        x: -270, ease: 'power4.in', duration: 2
      }, ">5")
      // SECTION 4
      .from('.sec4-content', {
        y: 270,
        ease: 'power4.out',
        duration: 1.2,
        stagger: {
          amount: 0.4
        },
        delay: 1
      }, 35)
      .to('.sec4-content', {
        y: 270,
        ease: 'power4.in',
        duration: 2,
        delay: 1
      }, ">3")
      .fromTo('.sec4-content-box', { autoAlpha: 0 }, {
        autoAlpha: 1, delay: 0, duration: 1.2
      }, 35)
      .to('.sec4-content-box', {
        autoAlpha: 0, duration: 1.2
      }, ">12")
      // .fromTo('.sec4-content-line', { x: -270 }, {
      //   x: 0, ease: 'power4.out', duration: 2, delay: 3
      // }, 35)
      // .to('.sec4-content-line', {
      //   x: -270, ease: 'power4.in', duration: 2
      // }, ">5")
      // SECTION 5
      .from('.sec5-content', {
        y: 270,
        ease: 'power4.out',
        duration: 1.2,
        stagger: {
          amount: 0.4
        },
        delay: 3
      }, 49)
      .to('.sec5-content', {
        y: 270,
        ease: 'power4.in',
        duration: 2,
        delay: 2
      }, ">4")
      .fromTo('#sec5-button-wrapper', { visibility: 'hidden' }, {
        visibility: 'inherit'
      }, 48)
      .fromTo('.sec5-content-box', { autoAlpha: 0 }, {
        autoAlpha: 1, delay: 2, duration: 1.2
      }, 49)
      .to('.sec5-content-box', {
        autoAlpha: 0, duration: 1.2
      }, ">10")
      // .fromTo('.sec5-content-line', { x: -270 }, {
      //   x: 0, ease: 'power4.out', duration: 2, delay: 3
      // }, 49)
      // .to('.sec5-content-line', {
      //   x: -270, ease: 'power4.in', duration: 2
      // }, ">5")
      .add('sec345-lottie-out', '>')
      .to('.sec345-content-L-lottie', {
        x: -750, y: 500, ease: 'power4.in', duration: 2, delay: 2
      }, "sec345-lottie-out")
      // .to('.sec345-content-R-lottie', {
      //   x: 750, y: 500, ease: 'power4.in', duration: 2, delay: 2
      // }, "sec345-lottie-out")
      // SECTION 6
      .from('.sec6-content', {
        y: 270,
        ease: 'power4.out',
        duration: 1.2,
        stagger: {
          amount: 0.4
        },
      }, 66)
      .fromTo('#sec6-button-wrapper', { visibility: 'hidden' }, {
        visibility: 'inherit'
      }, 64)
      .fromTo('.sec6-content-box', { autoAlpha: 0 }, {
        autoAlpha: 1, delay: 0, duration: 1.2
      }, 65)
      .to({}, { duration: 0.5 })
      // .from('.sec6-icon', {
      //   y: 100,
      //   ease: 'back.out(1.7)',
      //   duration: 2.5,
      //   stagger: {
      //     amount: 0.4
      //   },
      // }, 65)
      .fromTo('.sec6-content-line', { x: -270 }, {
        x: 0, ease: 'power4.out', duration: 2, delay: 3
      }, 64)
      .to('#glow-light', !_isMobile ? {
        scaleX: 0.3, scaleY: 0.5, duration: 10, ease: 'power1.out'
      } : {
        scaleX: 0.3, scaleY: 0.5, duration: 1, ease: 'power1.out'
      }, !_isMobile ? 2 : 0)
      .to('#glow-light', !_isMobile ? {
        top: '25vh', duration: 5, delay: 1
      } : {
        top: '25vh', duration: 2, delay: 1
      }, !_isMobile ? 2 : 1)
      .to('#glow-light', !_isMobile ? {
        opacity: 0.8, duration: 2
      } : {
        opacity: 0.8, duration: 2
      }, !_isMobile ? 3 : 1)
      .to('#glow-light', _isMobile ? {
        opacity: 0, duration: 1
      } : {}, _isMobile ? '>3' : null)
      // set character mobile image autoalpha based on screen size
      .set('#char-mobile', _isMobile ? {
        autoAlpha: 1, immediateRender: true
      } : { autoAlpha: 0, immediateRender: true }, 0)
      .to('#char-mobile', _isMobile ? {
        autoAlpha: 0, duration: 1
      } : {}, _isMobile ? '>3' : null)
      // set character lottie autoalpha based on screen size
      .set('#char-lottie', _isMobile ? {
        autoAlpha: 0, immediateRender: true
      } : { autoAlpha: 1, immediateRender: true })

    // .fromTo('path', { autoAlpha: 0 }, {
    //   autoAlpha: 1,
    //   stagger: 0.1, ease: 'Power4.easeInOut'
    // }, 62)
    // .to('#ellipse-svg', {
    //   motionPath: {
    //     path: '#circle-path',
    //     align: '#circle-path',
    //     // alignOrigin: [0.5, 0.5],
    //     // autoRotate: true
    //   },
    //   // transformOrigin: '50% 50%',
    //   duration: 2, ease: 'power2.inOut'
    // }, 64)
    // .set(path, { strokeDasharray: pathLength }, 0)
    // .fromTo(path, { strokeDashoffset: pathLength }, {
    //   strokeDashoffset: 0, ease: Linear.easeNone, duration: 2, delay: 1
    // }, 64)

    // ScrollTrigger.create({
    //   trigger: 'content-p',
    //   start: 'top top',
    //   end: '+=5000',
    //   animation: action,
    //   scrub: true,
    //   // scroller: '.scroller',
    //   markers: true,
    // })

    const secondaryPath = document.querySelector('#circle-path-sec') as SVGGeometryElement
    const secondaryPathLength = secondaryPath.getTotalLength()
    const drawSvgAction = gsap.timeline({
      defaults: { ease: 'none', stagger: 1 },
      scrollTrigger: {
        trigger: '#ellipse-svg',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
      .fromTo([path, secondaryPath], { autoAlpha: 0 }, {
        autoAlpha: 1,
        stagger: 0.1, ease: 'Power4.easeInOut'
      }, 0)
      .set(path, { strokeDasharray: pathLength }, 0)
      .set(secondaryPath, { strokeDasharray: secondaryPathLength }, 0)
      .fromTo(path, { strokeDashoffset: pathLength }, {
        strokeDashoffset: 0, ease: Linear.easeNone, duration: 2, delay: 1
      }, 2)
      .fromTo(secondaryPath, { strokeDashoffset: secondaryPathLength }, {
        strokeDashoffset: 0, ease: Linear.easeNone, duration: 2, delay: 0
      }, 2)

    const glowTimeline = gsap.timeline({
      defaults: { ease: 'none', stagger: 1 },
      scrollTrigger: {
        trigger: '#glow-light',
        start: 'top top',
        end: '+=4650',
        scrub: 1,
        pin: true,
      }
    })

    const characterMobile = gsap.timeline({
      defaults: { ease: 'none', stagger: 1 },
      scrollTrigger: {
        trigger: '#char-mobile',
        start: 'top top',
        end: '+=1100',
        pin: true,
        scrub: 1
      }
    })
  }, [])

  const observerRef = useRef<IntersectionObserver>(null)
  const lottieIO = useCallback((animationItem: AnimationItem) => {
    if (observerRef.current) {
      observerRef.current.disconnect()
    }
    const options = { root: null, rootMargin: "0px", threshold: 0.5 }
    observerRef.current = new IntersectionObserver((entries, _observer) => {
      // eslint-disable-next-line no-unused-expressions
      if (entries[0].isIntersecting === true) {
        animationItem.goToAndPlay(0)
        animationItem.addEventListener('complete', () => {
          animationItem.playSegments([58, 180])
        })
      } else {
        animationItem.goToAndStop(0)
        animationItem.resetSegments(true)
      }
    }, options)

    observerRef.current.observe(document.querySelector("#side-data-lottie"))
  }, [])

  const [_, setForceUpdate] = useState(Date.now());
  const charLottieRef = useRef<AnimationItem | null>(null)
  const sideLottieRef = useRef<AnimationItem | null>(null)
  const loadingLottieRef = useRef<AnimationItem | null>(null)

  useEffect(() => {
    setForceUpdate(1)  // to avoid partial rerender not trigger using same value
  }, [currentLanguage.code])

  useLayoutEffect(() => {
    if (loadingLottieRef.current) {
      loadingLottieRef.current.destroy()
      loadingLottieRef.current = null
    }
    if (!loadingLottieRef.current) {
      loadingLottieRef.current = lottieInit("#loading-lottie", "/lotties/loading-icon.json", true)
    }
    ctxRef.current.add("(min-width: 801px)", () => {
      setIsMobile(false)
      initSmoothScrollbar()
      scrollBackgroundColorChange()
      if (charLottieRef.current) {
        charLottieRef.current.destroy()
        charLottieRef.current = null
      }
      if (sideLottieRef.current) {
        sideLottieRef.current.destroy()
        sideLottieRef.current = null
      }
      if (!charLottieRef.current) {
        // if (!didAnimate.current) {
        didAnimate.current = true
        charLottieRef.current = lottieScrollTrigger({
          target: "#char-lottie",
          path: "/lotties/char-animation-v3.json",
          speed: speedChoice.MEDIUM,
          duration: 2, renderer: 'canvas', rendererSettings: {}
        })
        charLottieRef.current.addEventListener("DOMLoaded", () => {
          setForceUpdate(0)
        })
        // lottieScrollTrigger({
        //   target: "#round-gradient-lottie",
        //   path: "/lotties/round-gradient-change.json",
        //   speed: speedChoice.MEDIUM,
        //   duration: 2
        // })
        lottieInit("#scroll-down-lottie", "/lotties/scroll-down-animation.json", true)
        // lottieInit("#setting-single-lottie", "/lotties/setting-single.json", true)
        // lottieInit("#setting-double-lottie", "/lotties/setting-double.json", true)
        // const sideDataAnim = lottieInit("#side-data-lottie", "/lotties/side-data.json", false, false)
        // lottieIO(sideDataAnim)
      }
      if (!sideLottieRef.current) {
        sideLottieRef.current = lottieInit("#side-data-lottie", "/lotties/side-data.json", false, false)
        lottieIO(sideLottieRef.current)
      }
      contentChange(false)
    })
      .add("(max-width: 800px)", () => {
        setIsMobile(true)
        initSmoothScrollbar()
        scrollBackgroundColorChange()
        // if (charLottieRef.current) {
        //   charLottieRef.current.destroy()
        //   charLottieRef.current = null
        // }
        // if (!charLottieRef.current) {
        // didAnimate.current = true
        // charLottieRef.current = lottieScrollTrigger({
        //   target: "#char-lottie",
        //   path: "/lotties/char-animation-v4.json",
        //   speed: speedChoice.MEDIUM,
        //   duration: 2,
        //   renderer: 'canvas', rendererSettings: { preserveAspectRatio: "xMidYMax slice"}
        // })
        lottieInit("#scroll-down-lottie", "/lotties/scroll-down-animation.json", true)
        // }
        contentChange(true)
        // gsap.timeline({
        //   defaults: { ease: 'none', stagger: 1 },
        //   scrollTrigger: {
        //     trigger: "#char-lottie",
        //     scrub: 1,
        //     start: 'top top',
        //     end: '+=10',
        //   }
        // })
        // .fromTo('#char-lottie', { autoAlpha: 1 }, {
        //   autoAlpha: 0,
        //   duration: 1,
        //   delay: 0,
        // }, ">-2")
      })

    let ctxRefTemp = null
    if (ctxRef.current) ctxRefTemp = ctxRef.current

    return () => { if (ctxRefTemp) ctxRefTemp.revert() }
  }, [initSmoothScrollbar, lottieScrollTrigger, scrollBackgroundColorChange, contentChange, lottieInit, lottieIO])

  // To solve FOUC
  useEffect(() => {
    const handleDoneLoading = () => {
      setLoading(false)
      // console.log("done...")
    }
    // const loadEvent = new Event("load")
    // window.dispatchEvent(loadEvent);
    // window.addEventListener("load", () => {
    //   handleDoneLoading()
    // })
    // Check if the page has already loaded
    if (document.readyState === "complete") {
      setLoading(false)
      // console.log("[readyState] page loaded...")
    } else {
      window.addEventListener("load", () => { handleDoneLoading() });
    }
    return () => window.removeEventListener("load", () => {
      handleDoneLoading()
    })
  }, [])

  useEffect(() => {
    // function to get social links
    const getSocialLinks = async () => {
      const result = await handleSocialLinks()
      if (result.error === false) {
        setSocialLinks(result.data)
      } else {
        setSocialLinks(initSocialLinks)
      }
    }
    getSocialLinks()
  }, [handleSocialLinks, initSocialLinks])

  const [iframeUrl, setIframeUrl] = useState(() => {
    switch (currentLanguage.locale) {
      case 'zh-CN':
        return process.env.REACT_APP_IFRAME_YT_LINK_CN
      case 'ja-JP':
        return process.env.REACT_APP_IFRAME_YT_LINK_JP
      default:
        return process.env.REACT_APP_IFRAME_YT_LINK_EN
    }
  })
  const iframeUrlRef = useRef(iframeUrl)

  useEffect(() => {
    const getIFrameYTLink = (language) => {
      switch (language) {
        case 'zh-CN':
          return process.env.REACT_APP_IFRAME_YT_LINK_CN
        case 'ja-JP':
          return process.env.REACT_APP_IFRAME_YT_LINK_JP
        default:
          return process.env.REACT_APP_IFRAME_YT_LINK_EN
      }
    }
    const selectedLang = getIFrameYTLink(currentLanguage.locale);
    const formattedLink = `${selectedLang}${iframeUrlRef.current.includes('autoplay=1') ? '&autoplay=1&mute=1&playsinline=1' : ''}`
    setIframeUrl(formattedLink)
    iframeUrlRef.current = formattedLink
  }, [currentLanguage.locale])

  useEffect(() => {
    if (isIframeIntersecting && iframeUrlRef.current.includes('autoplay=1') === false) {
      setIframeUrl(`${iframeUrlRef.current}&autoplay=1&mute=1&playsinline=1`)
      iframeUrlRef.current = `${iframeUrlRef.current}&autoplay=1&mute=1&playsinline=1`
    }
  }, [isIframeIntersecting])

  return (
    <>
      {(loading || (!isMobile && !charLottieRef.current) || (!isMobile && charLottieRef.current && charLottieRef.current.isLoaded === false)) &&
        <Flex background="black" justifyContent="center" alignItems="center" zIndex={12} width="100%" height="100%" position='fixed'>
          <div id='loading-lottie' style={{ overflow: "hidden" }} />
        </Flex>}
      <div className='scroller' style={{ height: '100vh', position: 'fixed', minHeight: '-webkit-fill-available' }}>
        {/* <StyledBgChange className='bg-change' style={{ background: 'url(/images/landing/1.png)' }} />
        <StyledBgChange className='bg-change' style={{ background: 'url(/images/landing/2.png)' }} /> */}
        {/* <LottieContainer> */}
        {/* <div id='char-lottie' ref={characterLottieContainerRef} style={{ height: "100vh", position: "absolute" }} /> */}
        {/* </LottieContainer> */}
        <Flex justifyContent="center">
          <div id='char-lottie' style={{ height: "100vh", width: "100%", position: "absolute", paddingTop: "8vh", zIndex: 10, pointerEvents: "none" }} />
          {/* <div id='round-gradient-lottie' style={{ width: "30vw", minWidth: "300px", maxWidth: "461px", position: "absolute", paddingTop: "22vh", zIndex: 9 }} /> */}
          <div id='glow-light' style={{
            width: "38vw", minWidth: "300px", position: "absolute", height: "55vh", zIndex: 9,
            background: "var(--textYellow)", opacity: 0.9, filter: "blur(150px)", top: "45vh", willChange: "transform"
          }} />
          <img id="char-mobile" src="/images/landing/character-mobile.png" alt="character-mobile" style={{ height: "100vh", position: "absolute", zIndex: 10, paddingTop: "11vh", visibility: "hidden" }} />
        </Flex>
        <div className='section-1' data-bg='1' style={{ height: "100vh" }}>
          <StyledBgChange className='bg-change' style={{ background: 'url(/images/landing/1.png)' }} />
          <StyledBgChange className='bg-change' style={{ background: 'url(/images/landing/2.png)' }} />
          <StyledBgChange className='bg-change' style={{ background: 'black' }} />
          <StyledBgChange className='bg-change' style={{ background: 'black' }} />
          <StyledBgChange className='bg-change' style={{ background: 'black' }} />
          <StyledBgChange className='bg-change' style={{ background: 'black' }} />
          <section>
            <Flex justifyContent="center" alignItems="center" height="100vh" zIndex={10} position="relative"
              flexDirection="column" // paddingTop="12vh" // paddingBottom="14vh"
            >
              <StyledFirstSession>
                <Flex justifyContent="center" style={{ gridArea: "1/1/2/4" }} >
                  <TextWrapper style={{ alignSelf: "self-start" }}>
                    <StyledText fSize="clamp(8px, 2vw, 17px)" colorCode="var(--whiteColor)" fWeight="500" marginTop="10vh"
                      className='content-p' letterSpacing="clamp(0px, 8vw, 0.53em)" fFamily="var(--fontFamily2)" textTransform="uppercase"
                    >
                      <FormattedMessage
                        id='landing-sec1-subtitle1'
                        defaultMessage='Elevate Your <styledSpan>virtual Presence</styledSpan>'
                        values={{
                          styledSpan: chunks => <StyledSpan>{chunks}</StyledSpan>
                        }}
                      />
                    </StyledText>
                  </TextWrapper>
                </Flex>
                <Flex justifyContent="space-between" style={{ gridArea: "2/1/3/4" }}>
                  <TextWrapper style={{ alignSelf: "self-start" }}>
                    <StyledText fSize="clamp(30px, 6vw, 85px)" colorCode="var(--whiteColor)" fWeight="500" className="content-p"
                      textTransform='uppercase' letterSpacing="clamp(0px, 8vw, 1.5rem)" lineHeight={0.8} fFamily="var(--fontFamily2)"
                    >
                      <FormattedMessage
                        id='landing-sec1-title'
                        defaultMessage='JINKO.'
                      />
                    </StyledText>
                  </TextWrapper>
                  <TextWrapper style={{ alignSelf: "flex-end" }}>
                    <StyledText fSize="clamp(30px, 6vw, 85px)" colorCode="var(--whiteColor)" fWeight="500" className="content-p"
                      textTransform='uppercase' letterSpacing="clamp(0px, 8vw, 1.5rem)" lineHeight={0.8} fFamily="var(--fontFamily2)"
                    >
                      <FormattedMessage
                        id='landing-sec1-title'
                        defaultMessage='JINKO.'
                      />
                    </StyledText>
                  </TextWrapper>
                </Flex>
                <div style={{ display: 'grid', gridArea: "3/1/3/4" }}>
                  <Flex alignItems="center" style={{ gap: "1rem" }}>
                    <TextWrapper>
                      <div id='scroll-down-lottie' style={{ width: "23px", height: "38px", overflow: "hidden" }} className='content-p' />
                    </TextWrapper>
                    <TextWrapper>
                      <StyledText colorCode="var(--whiteColor)" fWeight="400" className='content-p' overflow="hidden"
                        lineHeight={0.9}
                      >
                        <FormattedMessage
                          id='landing-sec1-scrolldown'
                          defaultMessage='Scroll Down'
                        />
                      </StyledText>
                    </TextWrapper>
                    <TextWrapper>
                      <Divider className='sec1-content-line' color='var(--whiteColor)' size={1.2} style={{ width: '8vw', maxWidth: '123px' }} />
                    </TextWrapper>
                  </Flex>
                </div>
              </StyledFirstSession>
              {/* <div id='char-lottie' ref={characterLottieContainerRef} style={{ height: "100vh", position: "absolute", paddingTop: "8vh", zIndex: 10 }} /> */}

              {/* Section 2 Content */}
              <StyledSessionGrid id='sec2-grid'>
                <StyledSectionFlex justifyContent="space-evenly" alignItems="center" style={{ gridArea: '2/1/3/4', columnGap: "clamp(20vw, 8vw, 30vw)" }}>
                  {/* <StyledSectionFlex position="absolute" justifyContent="space-evenly" alignItems="center" padding="0 2vw" style={{ columnGap: "clamp(20vw, 8vw, 30vw)" }}> */}
                  <Flex flexDirection="column" style={{ gap: "clamp(1rem, 4vw, 2rem)" }}>
                    <TextWrapper>
                      <StyledText fSize="14px" colorCode="var(--whiteColor)" fWeight="700"
                        className='sec2-content' maxWidth='300px'
                      >
                        <FormattedMessage
                          id='landing-sec2-L-subtitle1'
                          defaultMessage='Powering the Next Generation of Social Media:'
                        />
                      </StyledText>
                    </TextWrapper>
                    <TextWrapper>
                      <StyledText fSize="clamp(28px, 4vw, 45px)" colorCode="var(--textYellow)" fFamily='var(--fontFamilyBold)' fWeight="800"
                        className='sec2-content' maxWidth='382px' lineHeight={1.25}
                      >
                        <FormattedMessage
                          id='landing-sec2-L-subtitle2'
                          defaultMessage='Unleashing The Potential Of AI Avatar'
                        />
                      </StyledText>
                    </TextWrapper>
                  </Flex>

                  <Flex flexDirection="column" alignItems="center">
                    <StyledBox flexDirection="column" alignSelf="flex-start" padding="clamp(25px, 4vw, 30px) 25px" className="sec2-content-box" margin="1rem"
                      maxWidth="380px">
                      <TextWrapper>
                        <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--textYellow)" fWeight="700" className="sec2-content"
                          fFamily="var(--fontFamilyBold)" maxWidth="400px" textTransform="uppercase"
                        >
                          <FormattedMessage
                            id='landing-sec2-R-subtitle1'
                            defaultMessage='Choose from our diverse range of AI avatars that can serve as:'
                          />
                        </StyledText>
                      </TextWrapper>
                      <TextWrapper>
                        <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec2-content"
                          fFamily="var(--fontFamily)" maxWidth="400px" marginTop="20px"
                        >
                          <Flex>
                            <div>·&nbsp;</div>
                            <div>
                              <FormattedMessage
                                id='landing-sec2-R-data1'
                                defaultMessage='Virtual Influencer'
                              />
                            </div>
                          </Flex>
                        </StyledText>
                      </TextWrapper>
                      <TextWrapper>
                        <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec2-content"
                          fFamily="var(--fontFamily)" maxWidth="400px"
                        >
                          <Flex>
                            <div>·&nbsp;</div>
                            <div>
                              <FormattedMessage
                                id='landing-sec2-R-data2'
                                defaultMessage='AI Chatbots'
                              />
                            </div>
                          </Flex>
                        </StyledText>
                      </TextWrapper>
                      <TextWrapper>
                        <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec2-content"
                          fFamily="var(--fontFamily)" maxWidth="400px"
                        >
                          <Flex>
                            <div>·&nbsp;</div>
                            <div>
                              <FormattedMessage
                                id='landing-sec2-R-data3'
                                defaultMessage='Personal Assistants'
                              />
                            </div>
                          </Flex>
                        </StyledText>
                      </TextWrapper>
                      <TextWrapper>
                        <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec2-content"
                          fFamily="var(--fontFamily)" maxWidth="400px"
                        >
                          <Flex>
                            <div>·&nbsp;</div>
                            <div>
                              <FormattedMessage
                                id='landing-sec2-R-data4'
                                defaultMessage='Digital Companions'
                              />
                            </div>
                          </Flex>
                        </StyledText>
                      </TextWrapper>
                      <TextWrapper>
                        <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec2-content"
                          fFamily="var(--fontFamily)" maxWidth="400px"
                        >
                          <Flex>
                            <div>·&nbsp;</div>
                            <div>
                              <FormattedMessage
                                id='landing-sec2-R-data5'
                                defaultMessage='Empowering Your Brand With Virtual Influencers'
                              />
                            </div>
                          </Flex>
                        </StyledText>
                      </TextWrapper>
                      <TextWrapper>
                        <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec2-content"
                          fFamily="var(--fontFamily)" maxWidth="400px"
                        >
                          <Flex>
                            <div>·&nbsp;</div>
                            <div>
                              <FormattedMessage
                                id='landing-sec2-R-data6'
                                defaultMessage='Exceptional Customer Service'
                              />
                            </div>
                          </Flex>
                        </StyledText>
                      </TextWrapper>
                      <TextWrapper>
                        <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec2-content"
                          fFamily="var(--fontFamily)" maxWidth="400px"
                        >
                          <Flex>
                            <div>·&nbsp;</div>
                            <div>
                              <FormattedMessage
                                id='landing-sec2-R-data7'
                                defaultMessage='Efficient Social Media Management'
                              />
                            </div>
                          </Flex>
                        </StyledText>
                      </TextWrapper>
                      <TextWrapper>
                        <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec2-content"
                          fFamily="var(--fontFamily)" maxWidth="400px"
                        >
                          <Flex>
                            <div>·&nbsp;</div>
                            <div>
                              <FormattedMessage
                                id='landing-sec2-R-data8'
                                defaultMessage='Personalized Support'
                              />
                            </div>
                          </Flex>
                        </StyledText>
                      </TextWrapper>
                    </StyledBox>
                    <TextWrapper id='sec2-button-wrapper' style={{ zIndex: 11, paddingBottom: "13px", position: "relative" }}>
                      <a href={`${process.env.REACT_APP_DEMO_LINK}?lang=${currentLanguage.locale}`} target='_self' rel='noopener noreferrer'>
                        <SubmitButton minWidth="185px" width="190px" className="sec2-content-box" borderRadius="20px" >
                          <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--blackColor)" fWeight="700"
                            fFamily="var(--fontFamilyBold)" textTransform="uppercase" height="auto"
                          >
                            <FormattedMessage
                              id='landing-sec2-R-btn1'
                              defaultMessage='Try Now{br}(Closed Beta)'
                              values={{ br: <br /> }}
                            />
                          </StyledText>
                        </SubmitButton>
                      </a>
                    </TextWrapper>
                  </Flex>
                </StyledSectionFlex>
              </StyledSessionGrid>  {/* Section 2 Content END */}

              {/* Section 3 Content */}
              <StyledSessionGrid>
                <StyledSectionFlex justifyContent="space-evenly" alignItems="center" style={{ gridArea: '2/1/3/4', columnGap: "clamp(20vw, 8vw, 30vw)" }}>
                  <Flex flexDirection="column" style={{ gap: "clamp(1rem, 4vw, 2rem)" }}>
                    <TextWrapper>
                      <StyledText fSize="clamp(28px, 4vw, 36px)" colorCode="var(--textYellow)" fFamily='var(--fontFamilyBold)' fWeight="700"
                        className='sec3-content' maxWidth='385px' lineHeight={1.25}
                      >
                        <FormattedMessage
                          id='landing-sec3-L-subtitle1'
                          defaultMessage='iNFT Protocol'
                        />
                      </StyledText>
                    </TextWrapper>
                    <TextWrapper>
                      <StyledText fSize="clamp(13px, 4vw, 20px)" colorCode="var(--whiteColor)" fWeight="400"
                        className='sec3-content' lineHeight={1}
                      >
                        <FormattedMessage
                          id='landing-sec3-L-subtitle2'
                          defaultMessage='Enables AI Assets to Work Interoperability'
                        />
                      </StyledText>
                    </TextWrapper>
                  </Flex>

                  <Flex flexDirection="column" alignItems="center">
                    <StyledBox flexDirection="column" alignSelf="flex-start" padding="clamp(20px, 4vw, 30px) 25px" className="sec3-content-box" margin="1rem"
                      maxWidth="380px">
                      <TextWrapper>
                        <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--textYellow)" fWeight="700" textTransform="uppercase"
                          maxWidth="400px" className='sec3-content' fFamily="var(--fontFamilyBold)"
                        >
                          <FormattedMessage
                            id='landing-sec3-R-subtitle1'
                            defaultMessage='Embark on a Journey of AI Empowerment with the iNFT Protocol.'
                          />
                        </StyledText>
                      </TextWrapper>
                      <TextWrapper>
                        <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec3-content"
                          fFamily="var(--fontFamily)" maxWidth="400px" margin="15px auto 10px"
                        >
                          <Flex>
                            <div>·&nbsp;</div>
                            <div>
                              <FormattedMessage
                                id='landing-sec3-R-data1'
                                defaultMessage='Unleash your creativity by creating and customizing your unique AI Avatar. (Body)'
                              />
                            </div>
                          </Flex>
                        </StyledText>
                      </TextWrapper>
                      <TextWrapper>
                        <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec3-content"
                          fFamily="var(--fontFamily)" maxWidth="400px" margin="0px auto 10px"
                        >
                          <Flex>
                            <div>·&nbsp;</div>
                            <div>
                              <FormattedMessage
                                id='landing-sec3-R-data2'
                                defaultMessage='Choose your AI&apos;s personality (Soul)'
                              />
                            </div>
                          </Flex>
                        </StyledText>
                      </TextWrapper>
                      <TextWrapper>
                        <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec3-content"
                          fFamily="var(--fontFamily)" maxWidth="400px"
                        >
                          <Flex>
                            <div>·&nbsp;</div>
                            <div>
                              <FormattedMessage
                                id='landing-sec3-R-data3'
                                defaultMessage='Earn as a provider of cutting-edge AI Services.'
                              />
                            </div>
                          </Flex>
                        </StyledText>
                      </TextWrapper>
                      <TextWrapper style={{ margin: "auto" }}>
                        <Divider className='sec3-content-line' color='var(--whiteColor)' size={1.2} style={{ width: '8vw', maxWidth: '94px', margin: "10px auto" }} />
                      </TextWrapper>
                      <TextWrapper>
                        <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--textYellow)" fWeight="700" className="sec3-content"
                          maxWidth="400px" textTransform="uppercase" fFamily="var(--fontFamilyBold)"
                        >
                          <FormattedMessage
                            id='landing-sec3-R-subtitle2'
                            defaultMessage='Experience a World of Possibilities with our Multifaceted Social Applications.'
                          />
                        </StyledText>
                      </TextWrapper>
                    </StyledBox>

                    <TextWrapper id='sec3-button-wrapper' style={{ zIndex: 11, paddingBottom: "13px" }}>
                      <SubmitButton minWidth="185px" width="190px" className="sec3-content-box" borderRadius="20px" >
                        <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--blackColor)" fWeight="700"
                          fFamily="var(--fontFamilyBold)" textTransform="uppercase" height="auto"
                        >
                          <FormattedMessage
                            id='landing-sec3-R-btn1'
                            defaultMessage='Create and mint (coming soon)'
                          />
                        </StyledText>
                      </SubmitButton>
                    </TextWrapper>
                  </Flex>
                </StyledSectionFlex>
              </StyledSessionGrid>  {/* Section 3 Content END */}
              {/* Section 4 Content */}
              <StyledSessionGrid>
                <StyledSectionFlex justifyContent="space-evenly" alignItems="center" style={{ gridArea: '2/1/3/4', columnGap: "clamp(20vw, 8vw, 30vw)" }}>
                  <Flex flexDirection="column" style={{ gap: "2rem" }}>
                    <TextWrapper>
                      <StyledText fSize="clamp(27px, 4vw, 40px)" colorCode="var(--textYellow)" fFamily='var(--fontFamilyBold)' fWeight="700"
                        className='sec4-content' maxWidth='385px' lineHeight={1.25}
                      >
                        <FormattedMessage
                          id='landing-sec4-L-subtitle1'
                          defaultMessage='Transform Your Social Media Strategy with Virtual Intelligent Automation'
                        />
                      </StyledText>
                    </TextWrapper>
                  </Flex>

                  <Flex flexDirection="column" alignItems="center">
                    <StyledBox flexDirection="column" alignSelf="flex-start" padding="0" className="sec4-content-box" margin="1rem"
                      maxWidth="380px">
                      <Flex alignItems="center" flexWrap="wrap">
                        <StyledPicLabel flexDirection="column" alignItems="center" flex="1 1 130px">
                          <img src="/images/landing/landing-personalized-content.png" alt="pc" style={{ maxWidth: "100px" }} />
                          <TextWrapper>
                            <StyledText fSize="clamp(12px, 1vw, 13px)" colorCode="var(--whiteColor)" fWeight="700" fFamily="var(--fontFamilyBold)"
                              maxWidth="400px" className='sec4-content' textTransform="uppercase" textAlign="center" marginTop={1} minHeight="42px"
                            >
                              <FormattedMessage
                                id='landing-sec4-R-data1'
                                defaultMessage='Personalized Content'
                              />
                            </StyledText>
                          </TextWrapper>
                        </StyledPicLabel>
                        <StyledPicLabel flexDirection="column" alignItems="center" flex="1 1 130px">
                          <img src="/images/landing/landing-enhanced-creativity.png" alt="ec" style={{ maxWidth: "100px" }} />
                          <TextWrapper>
                            <StyledText fSize="clamp(12px, 1vw, 13px)" colorCode="var(--whiteColor)" fWeight="700" fFamily="var(--fontFamilyBold)"
                              maxWidth="400px" className='sec4-content' textTransform="uppercase" textAlign="center" marginTop={1} minHeight="42px"
                            >
                              <FormattedMessage
                                id='landing-sec4-R-data2'
                                defaultMessage='Enhanced Creativity'
                              />
                            </StyledText>
                          </TextWrapper>
                        </StyledPicLabel>
                        <StyledPicLabel flexDirection="column" alignItems="center" flex="1 1 130px">
                          <img src="/images/landing/landing-improved-communication.png" alt="ic" style={{ maxWidth: "100px" }} />
                          <TextWrapper>
                            <StyledText fSize="clamp(12px, 1vw, 13px)" colorCode="var(--whiteColor)" fWeight="700" fFamily="var(--fontFamilyBold)"
                              maxWidth="400px" className='sec4-content' textTransform="uppercase" textAlign="center" marginTop={1} minHeight="42px"
                            >
                              <FormattedMessage
                                id='landing-sec4-R-data3'
                                defaultMessage='Improved Communication'
                              />
                            </StyledText>
                          </TextWrapper>
                        </StyledPicLabel>
                        <StyledPicLabel flexDirection="column" alignItems="center" flex="1 1 130px">
                          <img src="/images/landing/landing-smarter-social-media.png" alt="ssm" style={{ maxWidth: "100px" }} />
                          <TextWrapper>
                            <StyledText fSize="clamp(12px, 1vw, 13px)" colorCode="var(--whiteColor)" fWeight="700" fFamily="var(--fontFamilyBold)"
                              maxWidth="400px" className='sec4-content' textTransform="uppercase" textAlign="center" marginTop={1} minHeight="42px"
                            >
                              <FormattedMessage
                                id='landing-sec4-R-data4'
                                defaultMessage='Smarter Social Media'
                              />
                            </StyledText>
                          </TextWrapper>
                        </StyledPicLabel>
                      </Flex>
                    </StyledBox>
                  </Flex>
                </StyledSectionFlex>
              </StyledSessionGrid>  {/* Section 4 Content END */}
              {/* Section 5 Content */}
              <StyledSessionGrid>
                <StyledSectionFlex justifyContent="space-evenly" alignItems="center" style={{ gridArea: '2/1/3/4', columnGap: "clamp(20vw, 8vw, 30vw)" }}>
                  <StyledSection5LeftFlex flexDirection="column" flex="1 0 auto" minWidth="290px" style={{ gap: "2rem" }}>
                    <TextWrapper>
                      <StyledText fSize="clamp(30px, 4vw, 40px)" colorCode="var(--textYellow)" fFamily='var(--fontFamilyBold)' fWeight="700"
                        className='sec5-content' maxWidth='377px' lineHeight={1.25}
                      >
                        <FormattedMessage
                          id='landing-sec5-L-subtitle1'
                          defaultMessage='Ai.Chat'
                        />
                      </StyledText>
                    </TextWrapper>
                  </StyledSection5LeftFlex>

                  <Flex flexDirection="column" alignItems="center"flex="0 0 auto">
                    <StyledBox flexDirection="column" alignSelf="flex-start" padding="30px 20px" className="sec5-content-box" margin="1rem"
                      maxWidth="clamp(320px, 25vw, 380px)">
                      {/* <Flex alignItems="center" style={{ gap: "1rem" }}>
                        <TextWrapper>
                          <StyledText fSize="16px" colorCode="var(--textYellow)" fWeight="800" fFamily="var(--fontFamilyBold)"
                            maxWidth="400px" className='sec5-content-line' textTransform="uppercase"
                          >
                            <FormattedMessage
                              id='landing-sec5-R-subtitle1'
                              defaultMessage='AI Marketplace'
                            />
                          </StyledText>
                        </TextWrapper>
                      </Flex> */}
                      <TextWrapper>
                        <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec5-content"
                          maxWidth="400px" margin="0px auto 20px" textAlign="justify"
                        >
                          <FormattedMessage
                            id='landing-sec5-R-subtitle2'
                            defaultMessage="Jinko's Ai Chat offers users the ability to interact with diverse AI avatars, each with unique roles and personalities. It caters to various sectors, including virtual influencers, personal assistants, coaches, and customer service representatives."
                          />
                        </StyledText>
                      </TextWrapper>
                      <Flex justifyContent="center" flexWrap="wrap" style={{ gap: "5px" }}>
                        <Flex flexDirection="column">
                          <img src="/images/landing/nft1.png" alt='nft1' style={{ maxWidth: "clamp(90px, 8vw, 106px)" }} />
                          {/* <TextWrapper>
                            <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--textYellow)" fWeight="400" className="sec5-content"
                              maxWidth="400px" textAlign="center" marginTop={1}
                            >USD 0.123</StyledText>
                          </TextWrapper> */}
                        </Flex>
                        <Flex flexDirection="column">
                          <img src="/images/landing/nft2.png?v=2" alt='nft2' style={{ maxWidth: "clamp(90px, 8vw, 106px)" }} />
                          {/* <TextWrapper>
                            <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--textYellow)" fWeight="400" className="sec5-content"
                              maxWidth="400px" textAlign="center" marginTop={1}
                            >USD 0.231</StyledText>
                          </TextWrapper> */}
                        </Flex>
                        <Flex flexDirection="column">
                          <img src="/images/landing/nft3.png?v=2" alt='nft3' style={{ maxWidth: "clamp(90px, 8vw, 106px)" }} />
                          {/* <TextWrapper>
                            <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--textYellow)" fWeight="400" className="sec5-content"
                              maxWidth="400px" textAlign="center" marginTop={1}
                            >USD 0.321</StyledText>
                          </TextWrapper> */}
                        </Flex>
                      </Flex>
                    </StyledBox>
                    <TextWrapper id='sec5-button-wrapper' style={{ zIndex: 11, paddingBottom: "13px" }}>
                      <SubmitButton minWidth="185px" width="190px" className="sec5-content-box" borderRadius="20px">
                        <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--blackColor)" fWeight="800"
                          fFamily="var(--fontFamilyBold)" textTransform="uppercase"
                        >
                          <FormattedMessage
                            id='landing-sec5-R-btn1'
                            defaultMessage='Subscribe{br}(Coming Soon)'
                            values={{ br: <br/> }}
                          />
                        </StyledText>
                      </SubmitButton>
                    </TextWrapper>
                  </Flex>
                </StyledSectionFlex>
              </StyledSessionGrid>  {/* Section 5 Content END */}
              <div style={{ display: 'grid', position: 'absolute', gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)', width: '100vw', height: '100vh'
              }}>
                <Flex justifyContent='space-between' style={{ gridArea: '3/1/4/4' }} >
                  <TextWrapper>
                    <div id='side-data-lottie' style={{ width: "73%", overflow: "hidden" }} className='sec345-content-L-lottie' />
                  </TextWrapper>
                  {/* <TextWrapper>
                    <div id='setting-single-lottie' style={{ width: "85%", overflow: "hidden" }} className='sec345-content-R-lottie' />
                  </TextWrapper> */}
                </Flex>
              </div>

              {/* Section 6 Content */}
              <StyledSessionGrid>
                <StyledSectionFlex justifyContent="space-evenly" alignItems="center" style={{ gridArea: '2/1/3/4', columnGap: "clamp(20vw, 25vw, 30vw)" }}>
                  <Flex flexDirection="column" justifyContent="center" style={{ gap: "clamp(1rem, 4vw, 2rem)" }}>
                    {/* <img src="/images/landing/ellipse.svg" alt="ellipse" style={{ position: "absolute" }} /> */}
                    <TextWrapper>
                      <StyledText fSize="clamp(30px, 4vw, 40px)" colorCode="var(--textYellow)" fFamily='var(--fontFamilyBold)' fWeight="700"
                        className='sec6-content' maxWidth='385px' lineHeight={1.25}
                      >
                        <FormattedMessage
                          id='landing-sec6-L-subtitle1'
                          defaultMessage='AIO'
                        />
                      </StyledText>
                    </TextWrapper>
                    <TextWrapper>
                      <StyledText fSize="clamp(14px, 4vw, 20px)" colorCode="var(--whiteColor)" fWeight="400"
                        className='sec6-content' lineHeight={1}
                      >
                        <FormattedMessage
                          id='landing-sec6-L-subtitle2'
                          defaultMessage='(0xcomingsoon)'
                        />
                      </StyledText>
                    </TextWrapper>
                  </Flex>

                  <Flex flexDirection="column" alignItems="center" position="relative">
                    <CustomImgWrapper style={{ position: 'absolute' }}>
                      <img className="sec6-content" src="/images/landing/jinko-token.png" alt="jinko-token" style={{ maxWidth: "clamp(90px, 4vw, 120px)" }} />
                    </CustomImgWrapper>
                    <StyledBox flexDirection="column" alignSelf="flex-start" padding="clamp(25px, 4vw, 30px) 20px" className="sec6-content-box" margin="1rem"
                      maxWidth="380px">
                      <TextWrapper>
                        <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec6-content"
                          maxWidth="400px" marginTop="2rem"
                        >
                          ·&nbsp;
                          <FormattedMessage
                            id='landing-sec6-R-data1'
                            defaultMessage='<styledSpan>Symbol:</styledSpan>'
                            values={{
                              styledSpan: chunks => <StyledSpan>{chunks}</StyledSpan>
                            }}
                          /> JINKO
                        </StyledText>
                      </TextWrapper>
                      <TextWrapper>
                        <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec6-content"
                          maxWidth="400px" margin="10px auto"
                        >
                          ·&nbsp;
                          <FormattedMessage
                            id='landing-sec6-R-data2'
                            defaultMessage='<styledSpan>Decimals:</styledSpan>'
                            values={{
                              styledSpan: chunks => <StyledSpan>{chunks}</StyledSpan>
                            }}
                          /> 18
                        </StyledText>
                      </TextWrapper>
                      <TextWrapper>
                        <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec6-content"
                          maxWidth="400px" margin="10px auto"
                        >
                          ·&nbsp;
                          <FormattedMessage
                            id='landing-sec6-R-data3'
                            defaultMessage='<styledSpan>Initial Total Supply:</styledSpan>'
                            values={{
                              styledSpan: chunks => <StyledSpan>{chunks}</StyledSpan>
                            }}
                          /> 1,000,000,000 JINKO
                        </StyledText>
                      </TextWrapper>
                      <TextWrapper>
                        <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec6-content"
                          maxWidth="400px" margin="10px auto"
                        >
                          <Flex>
                            <div>·&nbsp;</div>
                            <div>
                              <FormattedMessage
                                id='landing-sec6-R-data4'
                                defaultMessage='<styledSpan>Utility:</styledSpan>'
                                values={{
                                  styledSpan: chunks => <StyledSpan>{chunks}</StyledSpan>
                                }}
                              />&nbsp;
                              <FormattedMessage
                                id='landing-sec6-R-data5'
                                defaultMessage='As rewards token, stake for train & earn, iNFT minting, 
                              AI services subscriptions, advanced tools subscriptions, marketplace fees, purchase of AI assets, 
                              governance, and trading purposes.'
                              />
                            </div>
                          </Flex>
                        </StyledText>
                      </TextWrapper>
                    </StyledBox>
                    <TextWrapper id='sec6-button-wrapper' style={{ zIndex: 11, paddingBottom: "13px" }}>
                      <a href={`${process.env.REACT_APP_TOKEN_SALES_LINK}?lang=${currentLanguage.locale}`} target="_blank" rel='noreferrer'>
                        <SubmitButton minWidth="185px" width="190px" className="sec6-content-box" borderRadius="20px">
                          <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--blackColor)" fWeight="800"
                            fFamily="var(--fontFamilyBold)" textTransform="uppercase"
                          >
                            <FormattedMessage
                              id='landing-sec6-R-btn1'
                              defaultMessage='Buy Now'
                            />
                          </StyledText>
                        </SubmitButton>
                      </a>
                    </TextWrapper>
                  </Flex>
                </StyledSectionFlex>
              </StyledSessionGrid>  {/* Section 6 Content END */}
              {/* <div style={{ display: 'grid', position: 'absolute', gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)', width: '100vw', height: '100vh'
              }}>
                <Flex justifyContent='space-between' style={{ gridArea: '3/1/4/4', maxHeight: "713px" }} >
                  <TextWrapper>
                    <EllipseSvg id="ellipse-svg" style={{ overflow: "hidden", maxWidth: "80%", maxHeight: "100%" }} />
                  </TextWrapper>
                </Flex>
              </div> */}
            </Flex>
          </section>
        </div>
        <div style={{ background: 'black' }}>
          <section id='section2' className='section' data-bg='2' style={{ height: "auto", marginTop: "-2px" }}>
            <StyledSectionFlex justifyContent="space-evenly" padding="0 2vw" alignItems="center" height="auto" >
              <Flex flexDirection="column" justifyContent="center" style={{ gap: "2rem" }}>
                <TextWrapper>
                  <StyledText fSize="clamp(30px, 4vw, 40px)" colorCode="var(--textYellow)" fFamily='var(--fontFamilyBold)' fWeight="700"
                    className='sec7-content' maxWidth='385px' lineHeight={1.25}
                  >
                    <FormattedMessage
                      id='landing-sec7-L-subtitle1'
                      defaultMessage='Ai.Studio'
                    />
                  </StyledText>
                </TextWrapper>
                <TextWrapper>
                  <StyledText fSize="clamp(14px, 4vw, 20px)" colorCode="var(--whiteColor)" fWeight="400"
                    className='sec7-content' maxWidth='320px' lineHeight={1.25}
                  >
                    <FormattedMessage
                      id='landing-sec7-L-subtitle2'
                      defaultMessage='Simplify Content Generation With Powerful AI Capabilities'
                    />
                  </StyledText>
                </TextWrapper>
              </Flex>

              <StyledVideoWrapper>
                <iframe width="560" height="315" ref={iframeRef}
                  src={iframeUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen style={{ border: 0 }}
                />
              </StyledVideoWrapper>

              <Flex flexDirection="column" alignItems="center">
                <StyledBox flexDirection="column" alignSelf="flex-start" padding="30px 25px" className="sec7-content-box" margin="1rem"
                  maxWidth="380px">
                  {/* <TextWrapper>
                  <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--textYellow)" fWeight="700" textTransform="uppercase"
                    maxWidth="400px" className='sec7-content' fFamily="var(--fontFamilyBold)"
                  >
                    <FormattedMessage
                      id='landing-sec7-R-subtitle1'
                      defaultMessage='The JINKO Token has the following technical details:'
                    />
                  </StyledText>
                </TextWrapper> */}
                  <TextWrapper>
                    <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec7-content"
                      fFamily="var(--fontFamily)" maxWidth="400px" margin="0px auto 10px"
                    >
                      <Flex>
                        <div>·&nbsp;</div>
                        <div>
                          <FormattedMessage
                            id='landing-sec7-R-data1'
                            defaultMessage='<styledSpan>AI Actors:</styledSpan>'
                            values={{
                              styledSpan: chunks => <StyledSpan>{chunks}</StyledSpan>
                            }}
                          />&nbsp;
                          <FormattedMessage
                            id='landing-sec7-R-data2'
                            defaultMessage='Choose favourite AI actor.'
                          />
                        </div>
                      </Flex>
                    </StyledText>
                  </TextWrapper>
                  <TextWrapper>
                    <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec7-content"
                      fFamily="var(--fontFamily)" maxWidth="400px" margin="0px auto 10px"
                    >
                      <Flex>
                        <div>·&nbsp;</div>
                        <div>
                          <FormattedMessage
                            id='landing-sec7-R-data3'
                            defaultMessage='<styledSpan>Voice Customization:</styledSpan>'
                            values={{
                              styledSpan: chunks => <StyledSpan>{chunks}</StyledSpan>
                            }}
                          />&nbsp;
                          <FormattedMessage
                            id='landing-sec7-R-data4'
                            defaultMessage='Modify voices for uniqueness.'
                          />
                        </div>
                      </Flex>
                    </StyledText>
                  </TextWrapper>
                  <TextWrapper>
                    <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec7-content"
                      fFamily="var(--fontFamily)" maxWidth="400px" margin="0px auto 10px"
                    >
                      <Flex>
                        <div>·&nbsp;</div>
                        <div>
                          <FormattedMessage
                            id='landing-sec7-R-data5'
                            defaultMessage='<styledSpan>Background Customization:</styledSpan>'
                            values={{
                              styledSpan: chunks => <StyledSpan>{chunks}</StyledSpan>
                            }}
                          />&nbsp;
                          <FormattedMessage
                            id='landing-sec7-R-data6'
                            defaultMessage='Create immersive scenes.'
                          />
                        </div>
                      </Flex>
                    </StyledText>
                  </TextWrapper>
                  <TextWrapper>
                    <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec7-content"
                      fFamily="var(--fontFamily)" maxWidth="400px" margin="0px auto 10px"
                    >
                      <Flex>
                        <div>·&nbsp;</div>
                        <div>
                          <FormattedMessage
                            id='landing-sec7-R-data7'
                            defaultMessage='<styledSpan>Content Insertion:</styledSpan>'
                            values={{
                              styledSpan: chunks => <StyledSpan>{chunks}</StyledSpan>
                            }}
                          />&nbsp;
                          <FormattedMessage
                            id='landing-sec7-R-data8'
                            defaultMessage='Seamlessly integrate text-to-speech.'
                          />
                        </div>
                      </Flex>
                    </StyledText>
                  </TextWrapper>
                  <TextWrapper>
                    <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec7-content"
                      fFamily="var(--fontFamily)" maxWidth="400px" margin="0px auto 10px"
                    >
                      <Flex>
                        <div>·&nbsp;</div>
                        <div>
                          <FormattedMessage
                            id='landing-sec7-R-data9'
                            defaultMessage='<styledSpan>Template Library:</styledSpan>'
                            values={{
                              styledSpan: chunks => <StyledSpan>{chunks}</StyledSpan>
                            }}
                          />&nbsp;
                          <FormattedMessage
                            id='landing-sec7-R-data10'
                            defaultMessage='Professional presentations made easy.'
                          />
                        </div>
                      </Flex>
                    </StyledText>
                  </TextWrapper>
                  <TextWrapper>
                    <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec7-content"
                      fFamily="var(--fontFamily)" maxWidth="400px" margin="0px auto 10px"
                    >
                      <Flex>
                        <div>·&nbsp;</div>
                        <div>
                          <FormattedMessage
                            id='landing-sec7-R-data11'
                            defaultMessage='<styledSpan>AI Animation Customization:</styledSpan>'
                            values={{
                              styledSpan: chunks => <StyledSpan>{chunks}</StyledSpan>
                            }}
                          />&nbsp;
                          <FormattedMessage
                            id='landing-sec7-R-data12'
                            defaultMessage='Bring your content to life.'
                          />
                        </div>
                      </Flex>
                    </StyledText>
                  </TextWrapper>
                  <TextWrapper>
                    <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec7-content"
                      fFamily="var(--fontFamily)" maxWidth="400px"
                    >
                      <Flex>
                        <div>·&nbsp;</div>
                        <div>
                          <FormattedMessage
                            id='landing-sec7-R-data13'
                            defaultMessage='<styledSpan>Voice Cloning:</styledSpan>'
                            values={{
                              styledSpan: chunks => <StyledSpan>{chunks}</StyledSpan>
                            }}
                          />&nbsp;
                          <FormattedMessage
                            id='landing-sec7-R-data14'
                            defaultMessage='Personalize with your own voice.'
                          />
                        </div>
                      </Flex>
                    </StyledText>
                  </TextWrapper>

                </StyledBox>
              </Flex>
            </StyledSectionFlex>
          </section>
          <section id='section2-5' className='section' style={{ height: 'auto' }}>
            <Flex alignItems='center' flexDirection='column' padding='2rem 1vw' backgroundImage='url("/images/landing/light-bg.png")'
              backgroundSize='contain' backgroundPosition='center center'
            >
              <StyledText fSize="clamp(30px, 4vw, 40px)" colorCode="var(--textYellow)" fFamily='var(--fontFamilyBold)' fWeight="700"
                  className='sec7-content' maxWidth='385px' lineHeight={1.25} marginTop='30px'
              >
                <FormattedMessage
                  id='landing-sec7-5-L-subtitle1'
                  defaultMessage='Powered By'
                /> :
              </StyledText>
              <Flex flexWrap='wrap' maxWidth={928} justifyContent='space-between' alignItems='center' marginTop='50px'
                style={{ gap: 'clamp(1rem, 4vw, 4rem)' }}
              >
                <Flex flexDirection='column' alignItems='center' style={{ gap: '10px' }}>
                  <img src='/images/landing/powered-by/ethereum.svg' alt='eth' style={{ maxWidth: 'clamp(100px, 4vw, 140px)' }} />
                  <StyledText fSize="clamp(14px, 4vw, 20px)" colorCode="var(--textYellow)" fWeight="900"
                    className='sec7-content'
                  >
                    <FormattedMessage
                      id='label-ethereum'
                      defaultMessage='Ethereum'
                    />
                  </StyledText>
                </Flex>
                <Flex flexDirection='column' alignItems='center' style={{ gap: '10px' }}>
                  <img src='/images/landing/powered-by/openai.svg' alt='openai' style={{ maxWidth: 'clamp(100px, 4vw, 140px)' }} />
                  <StyledText fSize="clamp(14px, 4vw, 20px)" colorCode="var(--textYellow)" fWeight="900"
                    className='sec7-content'
                  >
                    <FormattedMessage
                      id='label-openai'
                      defaultMessage='Open AI'
                    />
                  </StyledText>
                </Flex>
                <Flex flexDirection='column' alignItems='center' style={{ gap: '10px' }}>
                  <img src='/images/landing/powered-by/play-ht.svg' alt='playht' style={{ maxWidth: 'clamp(100px, 4vw, 140px)' }} />
                  <StyledText fSize="clamp(14px, 4vw, 20px)" colorCode="var(--textYellow)" fWeight="900"
                    className='sec7-content'
                  >
                    <FormattedMessage
                      id='label-playht'
                      defaultMessage='Play.HT'
                    />
                  </StyledText>
                </Flex>
              </Flex>
            </Flex>

            <Flex alignItems='center' flexDirection='column' paddingTop='2rem' backgroundImage='url("/images/landing/grid.png")'
              backgroundSize='cover' backgroundPosition='center center' paddingBottom='2rem' backgroundRepeat='no-repeat'
            >
              <StyledText fSize="clamp(30px, 4vw, 40px)" colorCode="var(--textYellow)" fFamily='var(--fontFamilyBold)' fWeight="700"
                  className='sec7-content' maxWidth='415px' lineHeight={1.25} marginTop='30px' textAlign='center'
              >
                <FormattedMessage
                  id='landing-sec7-5-L-subtitle4'
                  defaultMessage='Brand Engaged with Virtual Influencers'
                /> :
              </StyledText>

              <StyledShowcaseParent flexWrap='wrap' justifyContent='center' maxWidth={1000} marginTop='3rem' gutter='3rem'>
                {brandList.map(item => <StyledBrandShowcaseChild id={`brand-${item.id}`}>
                  <img src={item.path} alt={item.alt} />
                </StyledBrandShowcaseChild>)}
              </StyledShowcaseParent>
            </Flex>
          </section>
          <section id='section3' className='section' data-bg='3' style={{ marginTop: "2rem", height: "100%" }}>
            {/* style={{ columnGap: "30vw" }} */}
            <StyledJoinUsSectionFlex justifyContent="center" alignItems="center" position="relative" padding="0 2vw" maxWidth="1376px" margin="auto" height="100%" >
              <EllipseSvg id="ellipse-svg" style={{ position: "absolute", overflow: "hidden", maxWidth: "80%", maxHeight: "100%",
                // left: "clamp(-8vw, -4vw, -6vw)"
                // left: "clamp(-24vw, -23vw, -6vw)"
                // left: "clamp(-24vw, -12vw, -6vw)"
                left: "clamp(-24vw, -15vw, -6vw)",
                top: '-3vh'
              }} />
              <Flex flexDirection="column" position="relative" style={{ gap: "2rem" }}>
                {/* <img src="/images/landing/ellipse.svg" alt="ellipse" style={{ position: "absolute" }} /> */}
                <TextWrapper>
                  <StyledText fSize="clamp(30px, 4vw, 40px)" colorCode="var(--textYellow)" fFamily='var(--fontFamilyBold)' fWeight="800"
                    className='sec6-content' maxWidth='377px' lineHeight={1.2} textTransform="uppercase"
                  >
                    <FormattedMessage
                      id='landing-sec8-L-subtitle1'
                      defaultMessage='Join Us Now'
                    />
                  </StyledText>
                </TextWrapper>
                <TextWrapper>
                  <Divider className='sec6-content-line' color='var(--whiteColor)' size={1.2} style={{ maxWidth: '200px' }} />
                </TextWrapper>
                <TextWrapper>
                  <StyledText fSize="clamp(20px, 2vw, 20px)" colorCode="var(--whiteColor)" fWeight="400"
                    className='sec6-content' maxWidth='360px' lineHeight={1.2}
                  >
                    <FormattedMessage
                      id='landing-sec8-L-subtitle2'
                      defaultMessage='Unlock the potential of AI for enhanced Virtual User Experience & Business Solutions'
                    />
                  </StyledText>
                </TextWrapper>
              </Flex>

              <img src="/images/landing/character-static.png" alt="character-static" style={{ maxHeight: "78vh", zIndex: "10" }} />

              <Flex flexDirection="column" alignItems="center" marginBottom={5}>
                <StyledBox flexDirection="column" alignSelf="flex-start" padding="30px 25px" className="sec6-content-box" margin="1rem"
                  maxWidth="380px">
                  <TextWrapper>
                    <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--textYellow)" fWeight="700" className="sec6-content"
                      fFamily="var(--fontFamilyBold)" maxWidth="400px" textTransform="uppercase"
                    >
                      <FormattedMessage
                        id='landing-sec8-R-subtitle1'
                        defaultMessage='Join us on Jinko social media to stay connected and witness the exciting evolution of AI together.'
                      />
                    </StyledText>
                  </TextWrapper>
                  <TextWrapper>
                    <StyledText fSize="clamp(13px, 1vw, 14px)" colorCode="var(--whiteColor)" fWeight="400" className="sec6-content"
                      fFamily="var(--fontFamily)" maxWidth="400px" marginTop="20px"
                    >
                      <Flex>
                        <div>·&nbsp;</div>
                        <div>
                          <FormattedMessage
                            id='landing-sec8-R-subtitle2'
                            defaultMessage='Subscribe now and be part of our journey!'
                          />
                        </div>
                      </Flex>
                    </StyledText>
                  </TextWrapper>
                </StyledBox>

                <TextWrapper>
                  <Flex style={{ gap: "10px 15px" }} margin="1rem auto">
                    {socialLinks.instagram &&
                      <StyledSocialMediaIcon className="sec6-icon" href={socialLinks.instagram} target="_blank" rel="noreferrer noopener">
                        <img src="/images/social-icon/instagram.svg" alt="instagram" />
                      </StyledSocialMediaIcon>}
                    {socialLinks.twitter &&
                      <StyledSocialMediaIcon className="sec6-icon" href={socialLinks.twitter} target="_blank" rel="noreferrer noopener">
                        <img src="/images/social-icon/twitter.svg" alt="twitter" />
                      </StyledSocialMediaIcon>}
                    {socialLinks.telegram &&
                      <StyledSocialMediaIcon className="sec6-icon" href={socialLinks.telegram} target="_blank" rel="noreferrer noopener">
                        <img src="/images/social-icon/telegram.png" alt="telegram" />
                      </StyledSocialMediaIcon>}
                    {socialLinks.discord &&
                      <StyledSocialMediaIcon className="sec6-icon" href={socialLinks.discord} target="_blank" rel="noreferrer noopener">
                        <img src="/images/social-icon/telegram.png" alt="discord" />
                      </StyledSocialMediaIcon>}
                  </Flex>
                </TextWrapper>
              </Flex>
            </StyledJoinUsSectionFlex>
          </section>
        </div>
      </div>
    </>
  )
}

export default Home