type Props = { className?: string };

export function IconePao({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 26c0-8 6-16 16-16s16 8 16 16c0 6-3 9-9 9H17c-6 0-9-3-9-9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M14 22c2-1 4-1 6 0M20 22c2-1 4-1 6 0M26 22c2-1 4-1 6 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconeTabua({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="7" y="14" width="34" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="24" r="3.2" stroke="currentColor" strokeWidth="2" />
      <circle cx="26" cy="21" r="2.2" stroke="currentColor" strokeWidth="2" />
      <circle cx="32" cy="27" r="2.6" stroke="currentColor" strokeWidth="2" />
      <path d="M20 30h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconeSanduiche({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M8 24h32l-3 8H11l-3-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M10 24c0-7 6-10 14-10s14 3 14 10" stroke="currentColor" strokeWidth="2" />
      <path d="M9 24h30" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function IconeBolo({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M9 26h30v9a3 3 0 0 1-3 3H12a3 3 0 0 1-3-3v-9Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 26c0-5 4-8 15-8s15 3 15 8" stroke="currentColor" strokeWidth="2" />
      <path d="M24 18v-4M20 14c0-2 1.5-2 1.5-4S20 8 20 8M28 14c0-2 -1.5-2 -1.5-4S28 8 28 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconeXicara({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M11 18h20v11a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8V18Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M31 21h3a4 4 0 0 1 0 8h-3" stroke="currentColor" strokeWidth="2" />
      <path d="M16 12c0-1.5 1.5-1.5 1.5-3S16 6 16 6M23 12c0-1.5 1.5-1.5 1.5-3S23 6 23 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconePin({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function IconeRelogio({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconeTelefone({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.5 4.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3c0 1-1 1.8-2 1.7-6-.6-11-5.6-11.6-11.6-.1-1 .7-2 1.6-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconeAspas({ className }: Props) {
  return (
    <svg viewBox="0 0 32 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M0 24V14.4C0 6.4 4.267 1.067 12.8 0l1.6 4.267c-4.8 1.6-7.2 4.267-7.2 8h6.4V24H0Zm17.067 0V14.4c0-8 4.267-13.333 12.8-14.4l1.6 4.267c-4.8 1.6-7.2 4.267-7.2 8h6.4V24H17.067Z" />
    </svg>
  );
}
