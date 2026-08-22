import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { NEWS } from '../data'

const CATEGORY_COLORS: Record<string, string> = {
  Research: '#003087',
  Awards: '#c8a84b',
  'Lab life': '#c0392b',
}

function PhotoSlider({ photos, title }: { photos: string[]; title: string }) {
  const [index, setIndex] = useState(0)
  const hasMultiple = photos.length > 1

  const goPrev = () => setIndex((i) => (i - 1 + photos.length) % photos.length)
  const goNext = () => setIndex((i) => (i + 1) % photos.length)

  if (photos.length === 0) {
    return (
      <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
        <span className="text-[13px] font-medium text-gray-400 tracking-wide uppercase">Photo coming soon</span>
      </div>
    )
  }

  return (
    <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
      <img src={photos[index]} alt={`${title} — photo ${index + 1}`} className="w-full h-full object-cover" />

      {hasMultiple && (
        <>
          <button
            onClick={goPrev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-700 shadow-md flex items-center justify-center text-lg font-medium transition-colors duration-150"
          >
            ‹
          </button>
          <button
            onClick={goNext}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-700 shadow-md flex items-center justify-center text-lg font-medium transition-colors duration-150"
          >
            ›
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {photos.map((_, i) => (
              <span
                key={i}
                className={`rounded-full transition-all duration-200 ${
                  i === index ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function NewsDetail() {
  const { slug } = useParams<{ slug: string }>()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const index = NEWS.findIndex((n) => n.slug === slug)
  const item = index >= 0 ? NEWS[index] : undefined
  const prevItem = index > 0 ? NEWS[index - 1] : undefined
  const nextItem = index >= 0 && index < NEWS.length - 1 ? NEWS[index + 1] : undefined

  if (!item) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-screen-md mx-auto px-6 lg:px-10 text-center">
          <p className="text-gray-500 mb-6">This news item could not be found.</p>
          <Link to="/news" className="text-[#003087] font-semibold hover:underline">
            ← Back to Gallery
          </Link>
        </div>
      </section>
    )
  }

  const color = CATEGORY_COLORS[item.category] ?? '#003087'

  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-md mx-auto px-6 lg:px-10">
        <Link
          to="/news"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-[#003087] transition-colors duration-150 mb-8"
        >
          ← Back to Gallery
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span
            className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
            style={{ backgroundColor: color }}
          >
            {item.category}
          </span>
          <p className="text-[13px] text-gray-400 font-medium">{item.date}</p>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{item.title}</h1>
        <p className="text-gray-600 text-[15px] leading-relaxed mb-8">{item.excerpt}</p>

        <PhotoSlider photos={item.photos} title={item.title} />

        <div className="mt-14 pt-8 border-t border-gray-100 flex items-center justify-between text-sm font-medium">
          {prevItem ? (
            <Link to={`/news/${prevItem.slug}`} className="text-[#003087] hover:underline">
              ← Previous
            </Link>
          ) : (
            <span className="text-gray-300 cursor-not-allowed">← Previous</span>
          )}

          {nextItem ? (
            <Link to={`/news/${nextItem.slug}`} className="text-[#003087] hover:underline">
              Next →
            </Link>
          ) : (
            <span className="text-gray-300 cursor-not-allowed">Next →</span>
          )}
        </div>
      </div>
    </section>
  )
}
