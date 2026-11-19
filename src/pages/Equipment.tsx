// Parked: removed from the nav/routes on 2026-11-19 at the lab's request.
// To restore, add `<Route path="/equipment" ...>` in App.tsx and a link in Nav.tsx.
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
  photo?: string // 장비 사진을 src/imports에 넣고 import한 뒤 여기 지정하면 카드에 표시됨
}

const EQUIPMENT: EquipmentItem[] = [
  { name: 'Dry Room', description: 'Low-humidity environment for moisture-sensitive electrode and cell handling' },
  { name: 'Pouch Cell Assembly', description: 'Stacking, sealing and degassing of pouch-type cells' },
  { name: 'Powder Mixer', description: 'Dry mixing of active material, conductive additive and binder' },
  { name: '3 Roll Mill', description: 'High-shear dispersion and kneading of electrode pastes' },
  { name: 'Wet Mixer', description: 'Slurry preparation for wet-processed electrodes' },
  { name: 'Rheometer', description: 'Viscosity and viscoelastic analysis of electrode slurries' },
  { name: 'Coater', description: 'Electrode slurry coating onto current-collector foil' },
  { name: 'Powder Resistivity', description: 'Electrical conductivity of powders under controlled pressure' },
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
        <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-blue-300 mb-3">DEEP Laboratory</p>
        <h1 className="text-4xl font-bold text-white mb-4">Equipment & Facilities</h1>
        <p className="text-blue-200 max-w-2xl leading-relaxed">
          Key instrumentation available to the DEEP Laboratory for electrode fabrication and characterization.
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
      {/* Photo (placeholder until a photo is added) */}
      {item.photo ? (
        <img src={item.photo} alt={item.name} className="w-full aspect-square rounded-lg object-cover border border-gray-100" loading="lazy" />
      ) : (
        <div className="w-full aspect-square rounded-lg bg-[#f0f4fb] border border-gray-100 flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-[#003087]/20">
            <rect x="3" y="7" width="22" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="14" cy="14.5" r="4" stroke="currentColor" strokeWidth="1.5" />
            <path d="M9 7l1.5-2.5h7L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}

      {/* Name & description */}
      <div className="text-center">
        <p className="font-bold text-gray-900 text-[14px] leading-tight">
          {item.name}
        </p>
        {item.description && (
          <p className="text-[12px] text-gray-500 mt-1.5 leading-snug">{item.description}</p>
        )}
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
