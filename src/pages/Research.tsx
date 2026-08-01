import { useEffect } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import { RESEARCH_AREAS } from '../data'

function PageHeader() {
  return (
    <section
      className="py-20"
      style={{ background: 'linear-gradient(135deg, #001f5a 0%, #003087 100%)' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-blue-300 mb-3">ABMP Laboratory</p>
        <h1 className="text-4xl font-bold text-white mb-4">Research Areas</h1>
        <p className="text-blue-200 max-w-2xl leading-relaxed">
          Our interdisciplinary research spans electrode fabrication, computational modeling, and materials
          characterization — united by the mission of advancing sustainable, high-performance energy storage.
        </p>
      </div>
    </section>
  )
}

function ResearchAreaBlock({ area, index }: { area: (typeof RESEARCH_AREAS)[0]; index: number }) {
  const { ref, visible } = useFadeIn()
  const isReversed = index % 2 === 1

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300`}
      >
        {/* Image */}
        <div className={`relative h-72 lg:h-auto bg-gray-100 ${isReversed ? 'lg:order-last' : ''}`}>
          <img
            src={area.image}
            alt={area.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(180deg, transparent 50%, ${area.color}99 100%)` }}
          />
          <div className="absolute bottom-5 left-5">
            <span className="text-[11px] font-bold tracking-widest uppercase text-white/80">
              {area.subtitle}
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
          <div
            className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded mb-5"
            style={{ backgroundColor: `${area.color}12`, color: area.color }}
          >
            {area.subtitle}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ color: area.color }}>
            {area.title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">{area.description}</p>
          <ul className="space-y-2.5">
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
          <div className="space-y-8">
            {RESEARCH_AREAS.map((area, i) => (
              <ResearchAreaBlock key={area.id} area={area} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
