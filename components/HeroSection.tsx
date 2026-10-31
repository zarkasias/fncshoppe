"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const sequenceVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.14,
    },
  },
};

const riseVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 42,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const eyebrowVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const ruleVariants: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasAnimationStarted, setHasAnimationStarted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      setHasAnimationStarted(true);
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (shouldReduceMotion) {
      video.pause();
      video.currentTime = 0;
      return;
    }

    void video.play().catch(() => {
      // Some browsers wait for interaction before allowing autoplay.
    });
  }, [shouldReduceMotion]);

  const scrollToShop = () => {
    document.getElementById("shoppe")?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const animationState =
    hasAnimationStarted || shouldReduceMotion ? "visible" : "hidden";

  return (
    <section
      className="relative isolate min-h-[calc(100svh-6rem)] overflow-hidden bg-[#DCEEFF] text-white"
      aria-labelledby="fnc-hero-heading"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[60%_center] md:object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/videos/fnc-pottery-hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/fnc-pottery-hero.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 -z-20 bg-gradient-to-r from-[#172554]/2å0 via-[#1E40AF]/25 to-transparent"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 -z-20 bg-gradient-to-t from-[#0F2A5F]/65 via-[#2563EB]/10 to-transparent"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_42%,rgba(125,211,252,0.14),transparent_12%)]"
        aria-hidden="true"
      />

      <motion.div
        variants={sequenceVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        animate={animationState}
        className="flex min-h-[calc(100svh-6rem)] w-full items-end px-6 pt-14 pb-32 sm:px-10 sm:pb-36 lg:px-16 lg:pb-40 xl:px-20"
      >
        <div className="w-full max-w-[46rem]">
          <motion.div
            variants={eyebrowVariants}
            className="mb-6 flex items-center gap-3"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#7DD3FC]/35 bg-[#38BDF8]/10 backdrop-blur-sm">
              <Sparkles
                className="h-3.5 w-3.5 text-[#38BDF8]"
                aria-hidden="true"
              />
            </span>

            <p className="font-jost text-[0.67rem] font-semibold uppercase tracking-[0.26em] text-white sm:text-xs">
              Handmade originals · FNC Shoppe
            </p>
          </motion.div>

          <h1
            id="fnc-hero-heading"
            className="font-cormorant text-[clamp(3.4rem,7.5vw,6.8rem)] font-light leading-[0.86] tracking-[-0.035em]"
          >
            <span className="block overflow-hidden pb-2">
              <motion.span variants={riseVariants} className="block text-white">
                Original work.
              </motion.span>
            </span>

            <span className="block overflow-hidden pb-3">
              <motion.span
                variants={riseVariants}
                className="block text-balance italic text-[#7DD3FC]"
              >
                One-of-a-kind pieces.
              </motion.span>
            </span>
          </h1>

          <motion.div
            variants={ruleVariants}
            className="my-6 h-px w-28 origin-left bg-gradient-to-r from-[#38BDF8] via-[#BAE6FD] to-transparent sm:my-8"
            aria-hidden="true"
          />

          <motion.p
            variants={riseVariants}
            className="max-w-xl font-jost text-base font-light leading-7 text-white/85 sm:text-lg sm:leading-8"
          >
            Handmade art and crafts, designed with intention. Original designs
            created to bring something meaningful to the everyday.
          </motion.p>

          <motion.div
            variants={riseVariants}
            className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7"
          >
            <button
              type="button"
              onClick={scrollToShop}
              className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-md bg-[#38BDF8] px-7 py-4 font-jost text-xs font-semibold uppercase tracking-[0.16em] text-[#080C35] shadow-[0_12px_35px_rgba(56,189,248,0.28)] transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_16px_45px_rgba(56,189,248,0.4)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none motion-reduce:transition-none sm:w-auto"
            >
              Browse the shop
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                aria-hidden="true"
              />
            </button>

            <span className="flex flex-col border-l border-[#7DD3FC]/40 pl-4 font-jost text-[0.64rem] uppercase leading-5 tracking-[0.14em] text-sky-100/65">
              Created with care
              <strong className="font-normal text-white/95">
                Designed by FNC Shoppe
              </strong>
            </span>
          </motion.div>
        </div>
      </motion.div>

      <motion.button
        type="button"
        onClick={scrollToShop}
        initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
        animate={
          hasAnimationStarted || shouldReduceMotion
            ? {
                opacity: 1,
                y: 0,
              }
            : {
                opacity: 0,
                y: -8,
              }
        }
        transition={{
          delay: shouldReduceMotion ? 0 : 1.2,
          duration: 0.6,
        }}
        className="absolute right-6 bottom-6 flex flex-col items-center gap-1.5 border-0 bg-transparent p-2 font-jost text-sky-100/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:right-10 lg:right-16 xl:right-20"
        aria-label="Scroll to the shop"
      >
        <span className="text-[0.58rem] uppercase tracking-[0.26em]">
          Discover
        </span>

        <motion.span
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, 7, 0],
                }
          }
          transition={{
            delay: 1.4,
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="h-4 w-4 text-[#38BDF8]" aria-hidden="true" />
        </motion.span>
      </motion.button>

      <span
        id="shoppe"
        className="pointer-events-none absolute -bottom-px left-0"
        aria-hidden="true"
      />
    </section>
  );
}
