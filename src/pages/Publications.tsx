import { useEffect, useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

// ── Real publication data ──────────────────────────────────────────────────

interface Pub {
  id: string
  year: number
  title: string
  authors: string
  journal: string
  journalDisplay: string
}

const PUBS: Pub[] = [
  {
    id: 'p1',
    year: 2026,
    title: 'Concurrently Achieving 10 mAh cm⁻² and Ultralow Binder Content via Active-Surface-Guided Fibrillation for Fab-Scale Dry-Processed Lithium-ion Batteries',
    authors: 'J. Park, H. Oh, J.H. Lim, S. Jung, N. Yoo, J.K. Yoo, K.M. Jeong, K.Y. Park',
    journal: 'Advanced Energy Materials',
    journalDisplay: 'ADVANCED ENERGY MATERIALS',
  },
  {
    id: 'p2',
    year: 2026,
    title: 'Ultrahigh-Mass-Loading Electrodes With Enhanced Homogeneity Using a High-Concentration Slurry for Lithium-Ion Batteries',
    authors: 'J.K. Park, W. Shin, W. Jo, H.J. Lee, W.Y. Jeon, J. Ahn, J. Yoon, Y.J. Jeong, J. Oh, J.K. Yoo',
    journal: 'Carbon Energy',
    journalDisplay: 'CARBON ENERGY',
  },
  {
    id: 'p3',
    year: 2025,
    title: 'Enhancing Structural Flexibility in P2-type Ni-Mn-based Na-layered Cathodes for High Power-Capability and Fast Charging/Discharging Performance',
    authors: 'B. Ku, J. Ahn, H. Lee, H. Ahn, J. Lee, H. Kweon, M. Choi, H.G. Jung, K. Ihm, E. Sim, J.K. Yoo, J. Kim',
    journal: 'Energy Storage Materials',
    journalDisplay: 'ENERGY STORAGE MATERIALS',
  },
  {
    id: 'p4',
    year: 2024,
    title: 'A Fluorine-Free Binder with Organic-Inorganic Crosslinked Networks Enabling Structural Stability of Ni-Rich Layered Cathodes in Lithium-Ion Batteries',
    authors: 'J. Jang, J. Ahn, J. Ahn, U. Jeong, J. Yoon, J.K. Park, W. Shin, M.J. Kang, M. Cho, J.K. Yoo',
    journal: 'Advanced Functional Materials',
    journalDisplay: 'ADVANCED FUNCTIONAL MATERIALS',
  },
]

const YEARS = [2026, 2025, 2024]

// ── Page header ───────────────────────────────────────────────────────────

function PageHeader() {
  return (
    <section
      className="py-20"
      style={{ background: 'linear-gradient(135deg, #001f5a 0%, #003087 100%)' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-blue-300 mb-3">ABMP Laboratory</p>
        <h1 className="text-4xl font-bold text-white mb-4">Publications</h1>
        <p className="text-blue-200 max-w-2xl leading-relaxed">
          Peer-reviewed research from the ABMP Laboratory. For a complete list, visit our Google Scholar profile
          or ORCID page.
        </p>
        <div className="flex gap-3 mt-8">
          {[
            { label: 'Google Scholar', href: '#' },
            { label: 'ORCID', href: '#' },
            { label: 'ResearchGate', href: '#' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white border border-white/25 hover:border-white/50 px-4 py-1.5 rounded transition-all duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Cover image placeholder ───────────────────────────────────────────────

function CoverPlaceholder({ size }: { size: 'large' | 'small' }) {
  if (size === 'large') {
    return (
      <div className="w-full h-56 bg-gradient-to-br from-[#f0f4fb] to-[#dde6f5] flex flex-col items-center justify-center gap-2 border-b border-gray-100">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#003087]/25">
          <rect x="4" y="3" width="18" height="24" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M9 9h8M9 13h8M9 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M22 10l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-[11px] font-medium text-[#003087]/30 tracking-wide uppercase">Journal Cover</span>
      </div>
    )
  }
  return (
    <div
      className="w-14 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-[#f0f4fb] to-[#dde6f5] flex items-center justify-center border border-gray-100"
      style={{ height: '72px' }}
    >
      <svg width="18" height="18" viewBox="0 0 32 32" fill="none" className="text-[#003087]/30">
        <rect x="4" y="3" width="18" height="24" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 9h8M9 13h8M9 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  )
}

// ── Featured publications (4 cards) ──────────────────────────────────────

function FeaturedPublications() {
  const { ref, visible } = useFadeIn()

  return (
    <section className="py-20 bg-white">
      <div
        ref={ref}
        className={`max-w-screen-xl mx-auto px-6 lg:px-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 whitespace-nowrap">Featured Publications</h2>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PUBS.map((pub) => (
            <div
              key={pub.id}
              className="group rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col bg-white"
            >
              {/* Cover image placeholder */}
              <CoverPlaceholder size="large" />

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                {/* Year badge */}
                <span className="inline-block self-start mb-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide bg-[#003087]/8 text-[#003087]">
                  {pub.year}
                </span>

                {/* Title */}
                <h3 className="text-[13.5px] font-semibold text-gray-900 leading-snug mb-3 flex-1 group-hover:text-[#003087] transition-colors duration-150">
                  {pub.title}
                </h3>

                {/* Authors */}
                <p className="text-[11.5px] text-gray-400 leading-relaxed mb-3 line-clamp-2">
                  {pub.authors}
                </p>

                {/* Journal */}
                <p className="text-[10.5px] font-bold tracking-[0.08em] text-[#003087] uppercase">
                  {pub.journalDisplay}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Year section row ──────────────────────────────────────────────────────

function YearSection({ year, pubs }: { year: number; pubs: Pub[] }) {
  const { ref, visible } = useFadeIn()

  if (!pubs.length) return null

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Year header */}
      <div className="flex items-center gap-4 mb-5">
        <h3 className="text-xl font-bold text-[#003087] tabular-nums">{year}</h3>
        <div className="flex-1 h-[2px] rounded-full bg-[#003087]/15" />
        <span className="text-xs text-gray-400 font-medium">
          {pubs.length} paper{pubs.length !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="space-y-2.5">
        {pubs.map((pub) => (
          <div
            key={pub.id}
            className="group flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-[#003087]/20 hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            {/* Small thumbnail placeholder */}
            <CoverPlaceholder size="small" />

            {/* Text */}
            <div className="flex-1 min-w-0">
              <h4 className="text-[15px] font-semibold text-gray-900 group-hover:text-[#003087] transition-colors duration-150 leading-snug mb-1.5">
                {pub.title}
              </h4>
              <p className="text-sm text-gray-400 mb-1.5 truncate">{pub.authors}</p>
              <p className="text-[11px] font-bold tracking-[0.07em] text-[#003087] uppercase">
                {pub.journal}
              </p>
            </div>

            {/* Arrow */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="flex-shrink-0 text-gray-200 group-hover:text-[#003087] transition-all duration-200 group-hover:translate-x-0.5"
            >
              <path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Publications by year ──────────────────────────────────────────────────

function PublicationList() {
  const [filter, setFilter] = useState<number | 'all'>('all')
  const years = filter === 'all' ? YEARS : [filter as number]

  return (
    <section className="py-20" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-12">
          <h2 className="text-2xl font-bold text-gray-900">Publications by Year</h2>
          {/* Year filter pills */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded text-sm font-medium transition-all duration-150 ${
                filter === 'all'
                  ? 'bg-[#003087] text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-[#003087]/30 hover:text-[#003087]'
              }`}
            >
              All
            </button>
            {YEARS.map((y) => (
              <button
                key={y}
                onClick={() => setFilter(y)}
                className={`px-4 py-1.5 rounded text-sm font-medium transition-all duration-150 ${
                  filter === y
                    ? 'bg-[#003087] text-white'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-[#003087]/30 hover:text-[#003087]'
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        {/* Year sections */}
        <div className="space-y-12">
          {years.map((year) => (
            <YearSection key={year} year={year} pubs={PUBS.filter((p) => p.year === year)} />
          ))}
        </div>

        {/* View All button */}
        <div className="mt-14 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#003087] text-white text-sm font-semibold rounded hover:bg-[#002070] transition-colors duration-200"
          >
            View All Publications
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────

export default function Publications() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <PageHeader />
      <FeaturedPublications />
      <PublicationList />
    </>
  )
}
