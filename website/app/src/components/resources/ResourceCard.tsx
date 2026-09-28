import type { Resource, ResourceCategory } from '@/data/resources'

interface ResourceCardProps {
  resource: Resource
}

const categoryChipClass: Record<ResourceCategory, string> = {
  Training:
    'border-[#7A5A00] bg-[rgba(122,90,0,0.1)] text-[#7A5A00]',
  Document:
    'border-[#564BE5] bg-[rgba(86,75,229,0.1)] text-[#564BE5]',
  Guide:
    'border-[#A61E7A] bg-[rgba(166,30,122,0.1)] text-[#A61E7A]',
  Checklist:
    'border-[#4A6B00] bg-[rgba(74,107,0,0.1)] text-[#4A6B00]',
}

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="h-3.5 w-3.5"
      fill="none"
    >
      <path
        d="M6.5 3.5H3.5A1.5 1.5 0 0 0 2 5v7.5A1.5 1.5 0 0 0 3.5 14H11a1.5 1.5 0 0 0 1.5-1.5V9.5M9 2h5v5M7.5 8.5 14 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function OpenResourceLabel() {
  return (
    <span
      className="
        mt-auto
        inline-flex
        items-center
        gap-[6px]
        pt-[20px]
        font-sans
        text-[14px]
        font-medium
        text-text-violet
      "
    >
      Open resource
      <ExternalLinkIcon />
    </span>
  )
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

        <span className="font-sans text-[12px] font-normal text-secondary">
          {resource.duration}
        </span>
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

      <OpenResourceLabel />
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
