import { useEffect } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import HeroPattern from '../components/HeroPattern'
import equipmentOverviewFull from '../imports/equipment-overview-full.jpg'

// ── Equipment data ────────────────────────────────────────────────────────
// Named placeholders for now — fill in photo / description per item as
// they're finalized. The grid below (auto-fill) expands to any count.

interface EquipmentItem {
  name: string
  description?: string
}

const EQUIPMENT: EquipmentItem[] = [
  { name: 'Dry Room' },
  { name: 'Pouch Cell Assembly' },
  { name: 'Powder Mixer' },
  { name: '3 Roll Mill' },
  { name: 'Wet Mixer' },
  { name: 'Rheometer' },
  { name: 'Coater' },
  { name: 'Powder Resistivity' },
]

// ── Page header ───────────────────────────────────────────────────────────

function PageHeader() {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{ background: 'linear-gradient(135deg, #001f5a 0%, #003087 100%)' }}
    >
      <HeroPattern />
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10">
        <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-blue-300 mb-3">ABMP Laboratory</p>
        <h1 className="text-4xl font-bold text-white mb-4">Equipment & Facilities</h1>
        <p className="text-blue-200 max-w-2xl leading-relaxed">
          Key instrumentation available to the ABMP Laboratory for electrode fabrication and characterization.
        </p>
      </div>
    </section>
  )
}

// ── Infrastructure overview ──────────────────────────────────────────────

function OverviewSection() {
  const { ref, visible } = useFadeIn()

  return (
    <section className="pt-16 bg-white">
      <div
        ref={ref}
        className={`max-w-screen-xl mx-auto px-6 lg:px-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <img
            src={equipmentOverviewFull}
            alt="KIST Energy Storage Research Center infrastructure overview"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}

// ── Equipment card ────────────────────────────────────────────────────────

function EquipmentCard({ item }: { item: EquipmentItem }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-3">
      {/* Photo placeholder */}
      <div className="w-full aspect-square rounded-lg bg-[#f0f4fb] border border-gray-100 flex flex-col items-center justify-center gap-2">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-[#003087]/20">
          <rect x="3" y="7" width="22" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="14" cy="14.5" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9 7l1.5-2.5h7L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[10px] font-medium text-[#003087]/30 tracking-wide uppercase">TBD</span>
      </div>

      {/* Name & description */}
      <div className="text-center">
        <p className="font-bold text-gray-900 text-[14px] leading-tight">
          {item.name}
        </p>
        <p className="text-[12px] text-gray-400 mt-1.5">
          {item.description ?? 'Details coming soon'}
        </p>
      </div>
    </div>
  )
}

// ── Equipment grid section ───────────────────────────────────────────────

function EquipmentSection() {
  const { ref, visible } = useFadeIn()

  return (
    <section className="py-16 bg-white">
      <div
        ref={ref}
        className={`max-w-screen-xl mx-auto px-6 lg:px-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* auto-fill grid: adds rows automatically as EQUIPMENT grows, no column-count edits needed */}
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}
        >
          {EQUIPMENT.map((item, i) => (
            <EquipmentCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────

export default function Equipment() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <PageHeader />
      <OverviewSection />
      <EquipmentSection />
    </>
  )
}
