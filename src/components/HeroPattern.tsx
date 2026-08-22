import { useId } from 'react'

// Subtle dot-grid overlay for navy hero sections. Absolutely positioned —
// the parent section needs `relative overflow-hidden`, and its content
// needs `relative z-10` to sit above this layer.
export default function HeroPattern() {
  const patternId = `hero-dot-grid-${useId().replace(/[^a-zA-Z0-9]/g, '')}`

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
      <defs>
        <pattern id={patternId} width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.3" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} opacity="0.07" />
    </svg>
  )
}
