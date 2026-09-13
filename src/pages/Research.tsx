import { useEffect } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { RESEARCH_AREAS } from '../data'
import HeroPattern from '../components/HeroPattern'

function PageHeader() {
  const scrollToArea = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      className="relative overflow-hidden py-20"
      style={{ background: 'linear-gradient(135deg, #001f5a 0%, #003087 100%)' }}
    >
      <HeroPattern />
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10">
        <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-blue-300 mb-3">DEEP Laboratory</p>
        <h1 className="text-4xl font-bold text-white mb-4">Research Areas</h1>
        <p className="text-blue-200 max-w-2xl leading-relaxed mb-8">
          Our interdisciplinary research spans electrode fabrication, computational modeling, and materials
          characterization — united by the mission of advancing sustainable, high-performance energy storage.
        </p>

        {/* Jump navigation */}
        <div className="flex flex-wrap gap-2">
          {RESEARCH_AREAS.map((area) => (
            <button
              key={area.id}
              onClick={() => scrollToArea(area.id)}
              className="px-4 py-1.5 rounded text-sm font-medium bg-white/10 text-white/90 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-150"
            >
              {area.navLabel}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function ResearchAreaBlock({ area }: { area: (typeof RESEARCH_AREAS)[0] }) {
  const { ref, visible } = useFadeIn()

  return (
    <div
      id={area.id}
      ref={ref}
      className={`scroll-mt-24 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="flex flex-col h-full rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
        {/* Image */}
        <div className="relative h-52 bg-gray-100 flex items-center justify-center flex-shrink-0">
          {area.image ? (
            <img src={area.image} alt={area.title} className="w-full h-full object-cover" />
          ) : (
            <span className="text-[13px] font-medium text-gray-400 tracking-wide uppercase">Image update pending</span>
          )}
        </div>

        {/* Text */}
        <div className="bg-white p-8 flex flex-col flex-1">
          <div
            className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded mb-5 self-start"
            style={{ backgroundColor: `${area.color}12`, color: area.color }}
          >
            {area.subtitle}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: area.color }}>
            {area.title}
          </h2>
          <div className="space-y-3 mb-6">
            {area.description.map((paragraph, i) => (
              <p key={i} className="text-gray-600 leading-relaxed text-[15px]">{paragraph}</p>
            ))}
          </div>
          <ul className="space-y-2.5 mt-auto">
            {area.details.map((detail) => (
              <li key={detail} className="flex items-start gap-3 text-sm text-gray-600">
                <span
                  className="mt-1.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: `${area.color}18` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: area.color }} />
                </span>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Research() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <PageHeader />
      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {RESEARCH_AREAS.map((area) => (
              <ResearchAreaBlock key={area.id} area={area} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
