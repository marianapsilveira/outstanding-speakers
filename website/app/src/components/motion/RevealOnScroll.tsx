import { type ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface RevealOnScrollProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  delay?: number
}

export function RevealOnScroll({
  children,
  delay = 0,
  className,
  ...props
}: RevealOnScrollProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: reducedMotion ? 0 : 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
