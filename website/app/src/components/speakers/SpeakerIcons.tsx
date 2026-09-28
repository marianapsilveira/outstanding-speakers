export function LocationIcon({ className = 'h-[16px] w-[16px] shrink-0' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

export function LanguageIcon({ className = 'h-[16px] w-[16px] shrink-0' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        d="M4 5h10M9 3v2M6 9c1.5 2.2 3.5 3.9 6 5M12 9c-1.3 2.2-3.3 4.2-6 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m14 20 3.3-8 3.3 8M15.2 17h4.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
