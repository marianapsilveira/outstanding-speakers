import {
  TypewriterLabel,
  getSequentialTypingDelay,
} from '@/components/motion/TypewriterLabel'
import { FaqCategoryList } from '@/components/faq/FaqCategoryList'
import { faqCategories } from '@/data/faq'
import {
  editorialContent,
  pagePaddingX,
  typewriterEyebrowRow,
} from '@/constants/layout'
import { eyebrowText } from '@/constants/typography'

const sectionLabels = [
  'The questions behind',
  'the conversation',
]

const typingSpeed = 30
const typingGap = 80

export function FaqContentSection() {
  return (
    <section
      className="
        relative
        z-10
        w-full
        bg-surface-light
        pb-[160px]
        pt-[48px]
      "
    >
      <div
        className="
          pointer-events-none
          absolute inset-0 z-0
          overflow-hidden
        "
        aria-hidden="true"
      >
        <div className="absolute left-[-3%] top-[7%] h-[260px] w-[320px] rotate-[-10deg] rounded-[48%] bg-[#FFE8A8] opacity-45 blur-[95px]" />
        <div className="absolute left-[25%] top-[10%] h-[230px] w-[280px] rotate-[14deg] rounded-[46%] bg-[#FFC6FA] opacity-38 blur-[90px]" />
        <div className="absolute right-[-2%] top-[8%] h-[300px] w-[360px] rotate-[12deg] rounded-[50%] bg-[#A9D9FF] opacity-40 blur-[105px]" />
        <div className="absolute left-[8%] top-[48%] h-[270px] w-[330px] rotate-[8deg] rounded-[48%] bg-[#FFD5AC] opacity-32 blur-[100px]" />
        <div className="absolute right-[6%] top-[52%] h-[280px] w-[340px] rotate-[10deg] rounded-[48%] bg-[#BDF3CC] opacity-34 blur-[100px]" />
      </div>

      <div
        className={`
          relative z-20
          ${typewriterEyebrowRow}
          ${pagePaddingX}
        `}
      >
        {sectionLabels.map((label, index) => {
          const delay = getSequentialTypingDelay(
            sectionLabels,
            index,
            typingSpeed,
            typingGap,
          )

          return (
            <TypewriterLabel
              key={label}
              delay={delay}
              speed={typingSpeed}
              once={false}
              className={`${eyebrowText} text-text-violet`}
            >
              {label}
            </TypewriterLabel>
          )
        })}
      </div>

      <div
        className={`
          relative z-10
          mt-[72px]
          w-full
          ${editorialContent}
        `}
      >
        <div className="mx-auto flex w-full max-w-[920px] flex-col gap-[88px]">
          {faqCategories.map((category) => (
            <FaqCategoryList
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
