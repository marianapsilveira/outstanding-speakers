import type { Resource, ResourceCategory } from '@/data/resources'

interface ResourceCardProps {
  resource: Resource
}

const categoryChipClass: Record<ResourceCategory, string> = {
  Training:
    'border-[#7A5A00] bg-[rgba(122,90,0,0.1)] text-[#7A5A00]',
  Document:
    'border-[#564BE5] bg-[rgba(86,75,229,0.1)] text-[#564BE5]',
  Video:
    'border-[#564BE5] bg-[rgba(86,75,229,0.1)] text-[#564BE5]',
  Guide:
    'border-[#A61E7A] bg-[rgba(166,30,122,0.1)] text-[#A61E7A]',
  Checklist:
    'border-[#4A6B00] bg-[rgba(74,107,0,0.1)] text-[#4A6B00]',
  Toolkit:
    'border-[#0B4F9C] bg-[rgba(11,79,156,0.1)] text-[#0B4F9C]',
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const content = (
    <>
      <div className="flex items-center justify-between gap-3">
        <span
          className={`
            inline-flex
            items-center
            rounded-full
            border
            px-[12px]
            py-[4px]
            font-sans
            text-[12px]
            font-normal
            leading-[1]
            tracking-normal
            ${categoryChipClass[resource.category]}
          `}
        >
          {resource.category}
        </span>

        {resource.duration && (
          <span className="font-sans text-[12px] font-normal text-secondary">
            {resource.duration}
          </span>
        )}
      </div>

      <h3
        className="
          mt-[20px]
          font-sans
          text-[18px]
          font-semibold
          leading-[1.25]
          tracking-normal
          text-text-dark
        "
      >
        {resource.title}
      </h3>

      <p
        className="
          mt-[8px]
          font-sans
          text-[14px]
          font-normal
          leading-[1.5]
          text-secondary
        "
      >
        {resource.description}
      </p>
    </>
  )

  const cardClass = `
    group/resource
    flex
    h-full
    min-w-0
    flex-col
    rounded-[12px]
    border
    border-[#D9D7E3]
    bg-white
    p-[24px]
    text-left
    transition-shadow
    duration-300
    ${
      resource.href
        ? 'hover:shadow-[0_10px_28px_rgba(9,9,11,0.06)]'
        : ''
    }
  `

  if (resource.href) {
    const isExternal = resource.href.startsWith('http')

    return (
      <a
        href={resource.href}
        className={`${cardClass} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-text-violet`}
        {...(isExternal
          ? {
              target: '_blank',
              rel: 'noopener noreferrer',
            }
          : {})}
      >
        {content}
      </a>
    )
  }

  return <article className={cardClass}>{content}</article>
}
