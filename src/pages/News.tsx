import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFadeIn } from '../hooks/useFadeIn'
import { NEWS } from '../data'
import HeroPattern from '../components/HeroPattern'

const CATEGORIES = ['All', 'Research', 'Awards', 'Lab life']

const CATEGORY_COLORS: Record<string, string> = {
  Research: '#003087',
  Awards: '#c8a84b',
  'Lab life': '#c0392b',
}

function PageHeader() {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{ background: 'linear-gradient(135deg, #001f5a 0%, #003087 100%)' }}
    >
      <HeroPattern />
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10">
        <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-blue-300 mb-3">ABMP Laboratory</p>
        <h1 className="text-4xl font-bold text-white mb-4">Gallery</h1>
        <p className="text-blue-200 max-w-2xl leading-relaxed">
          Moments from the Advanced Battery Materials & Process Laboratory — publications, awards,
          team milestones, and lab life.
        </p>
      </div>
    </section>
  )
}

function NewsGrid({ items }: { items: typeof NEWS }) {
  const { ref, visible } = useFadeIn()

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {items.map((item) => {
        const color = CATEGORY_COLORS[item.category] ?? '#003087'
        return (
          <Link
            key={item.id}
            to={`/news/${item.slug}`}
            className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
          >
            {/* Photo */}
            <div className="relative h-48 bg-gray-100 overflow-hidden">
              {item.photos[0] ? (
                <img
                  src={item.photos[0]}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-[11px] font-medium text-gray-400 tracking-wide uppercase">Photo coming soon</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-3 left-3">
                <span
                  className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
                  style={{ backgroundColor: color }}
                >
                  {item.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              <p className="text-[11px] text-gray-400 font-medium mb-2">{item.date}</p>
              <h3
                className="text-sm font-semibold text-gray-900 leading-snug mb-3 flex-1 transition-colors duration-150"
                style={{ color: undefined }}
              >
                <span className="group-hover:text-[#003087] transition-colors duration-150">{item.title}</span>
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{item.excerpt}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-[#003087] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Read more
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? NEWS : NEWS.filter((n) => n.category === activeCategory)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <PageHeader />
      <section className="py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          {/* Category filter */}
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-gray-400">
              {filtered.length} item{filtered.length !== 1 ? 's' : ''}
            </p>
            <div className="flex gap-2 flex-wrap">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded text-sm font-medium transition-all duration-150 ${
                    activeCategory === cat
                      ? 'bg-[#003087] text-white shadow-sm'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-[#003087]/30 hover:text-[#003087]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filtered.length > 0 ? (
            <NewsGrid items={filtered} />
          ) : (
            <div className="text-center py-20 text-gray-400 text-sm">No news in this category yet.</div>
          )}
        </div>
      </section>
    </>
  )
}
