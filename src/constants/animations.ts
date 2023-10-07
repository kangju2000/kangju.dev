import type { Variants } from 'framer-motion'

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
}

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 20,
  },
}

export const fadeInRight: Variants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -20,
  },
}

export const staggerOne: Variants = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
}

export const staggerTwo: Variants = {
  animate: {
    transition: { staggerChildren: 0.2 },
  },
}
