/** 80px horizontal padding on desktop — matches Figma full-width sections. */
export const pagePaddingX = 'px-5 sm:px-8 lg:px-20'

/** 1320px content column — matches Figma main content width. */
export const contentMax = 'mx-auto w-full max-w-[1320px]'

/** Combined wrapper for centred content areas. */
export const contentArea = `${contentMax}`

/**
 * Editorial column. Uses the same side padding as eyebrows so they
 * line up on small screens; drops that padding once the 1320px column
 * already has an 80px gutter (1480px viewport).
 */
export const editorialContent =
  `${contentMax} ${pagePaddingX} min-[1480px]:px-0`

/** Pair of typewriter eyebrows: one row when they fit, wrap only if needed. */
export const typewriterEyebrowRow =
  'flex w-full flex-row flex-wrap items-baseline justify-between gap-x-4 gap-y-2'
