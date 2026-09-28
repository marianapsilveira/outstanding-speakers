import type { SpeakerTestimonial } from '@/data/speakers'

interface TestimonialCardProps {
  testimonial: SpeakerTestimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article
      className="
        flex
        h-full
        flex-col
        rounded-[12px]
        border
        border-[#D9D7E3]
        bg-white
        px-[24px]
        py-[28px]
      "
    >
      <blockquote className="font-sans text-[15px] font-normal italic leading-[1.65] text-text-dark/80">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <footer className="mt-[20px]">
        <p className="font-sans text-[14px] font-semibold leading-[1.4] text-text-dark">
          {testimonial.author}
        </p>
        <p className="mt-[2px] font-sans text-[13px] font-normal leading-[1.4] text-secondary">
          {testimonial.role}
        </p>
      </footer>
    </article>
  )
}
