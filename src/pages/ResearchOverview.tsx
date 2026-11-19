import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useFadeIn } from '../hooks/useFadeIn'
import HeroPattern from '../components/HeroPattern'
// Inlined (not <img>) so the figure uses the site's Inter font.
// Source is a hand-built vector — edit the SVG file directly to change labels.
import overviewFigure from '../imports/research-overview.svg?raw'

const PILLARS = [
  {
    num: '01',
    title: 'Materials',
    body: 'Active materials, conductive additives (SWCNT, GMS) and fluorine-free binders designed for dense, well-connected electrodes.',
    area: 'cnt',
  },
  {
    num: '02',
    title: 'Process',
    body: 'Solvent-free dry processing by PTFE fibrillation, and high-solids wet slurries that cut solvent use while keeping coatings uniform.',
    area: 'dry-electrode',
  },
  {
    num: '03',
    title: 'Digital Twin',
    body: 'GeoDict / EDEM microstructure models that predict transport and performance, feeding back into process design.',
    area: 'geodict',
  },
]

function PageHeader() {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{ background: 'linear-gradient(135deg, #001f5a 0%, #003087 100%)' }}
    >
      <HeroPattern />
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10">
        <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-blue-300 mb-3">DEEP Laboratory</p>
        <h1 className="text-4xl font-bold text-white mb-4">Research Overview</h1>
        <p className="text-blue-200 max-w-2xl leading-relaxed">
          We engineer high-loading thick electrodes from materials to manufacturing, and use digital twins to
          predict performance before a single cell is built.
        </p>
      </div>
    </section>
  )
}

function Figure() {
  const { ref, visible } = useFadeIn()
  return (
    <section className="py-16 bg-white">
      <div
        ref={ref}
        className={`max-w-screen-xl mx-auto px-6 lg:px-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <figure className="rounded-2xl border border-gray-100 shadow-sm bg-white p-4 sm:p-8">
          <div className="overflow-x-auto -mx-2 px-2">
            <div
              className="min-w-[760px] [&>svg]:w-full [&>svg]:h-auto"
              dangerouslySetInnerHTML={{ __html: overviewFigure }}
            />
          </div>
          <figcaption className="mt-5 pt-5 border-t border-gray-100 text-[13px] text-gray-500 leading-relaxed">
            <span className="font-bold text-[#003087]">Figure 1 | </span>
            Research framework of the DEEP Laboratory. Electrode materials are processed through solvent-free dry
            or high-solids wet routes into thick electrodes, while a digital twin of the electrode microstructure
            predicts transport behavior and feeds back into process design.
            <span className="sm:hidden block mt-2 text-gray-400">← Swipe to see the full figure →</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

function Pillars() {
  return (
    <section className="pb-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((p) => (
            <Link
              key={p.num}
              to={`/research/areas?area=${p.area}`}
              className="group rounded-xl border border-gray-100 bg-[#f8fafc] p-7 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <p className="text-[12px] font-bold tracking-[0.14em] text-[#06b6d4] mb-2">{p.num}</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-5">{p.body}</p>
              <span className="text-[13px] font-semibold text-[#003087] group-hover:underline">Learn more →</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/research/areas"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#003087] text-white text-sm font-bold rounded hover:bg-[#001f5a] transition-colors"
          >
            See all research areas →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function ResearchOverview() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <PageHeader />
      <Figure />
      <Pillars />
    </>
  )
}
