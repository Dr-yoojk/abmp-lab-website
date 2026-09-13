import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useFadeIn } from '../hooks/useFadeIn'
import { PUBLICATIONS } from '../data'
import { getFeaturedImage } from '../utils/featuredImages'
import Authors from '../components/Authors'
import HeroPattern from '../components/HeroPattern'
import heroSlide1Electrode from '../imports/hero-slide-1-electrode.jpg'
import heroSlide2DigitalTwin from '../imports/hero-slide-2-digital-twin.jpg'

const SLIDES = [
  {
    label: 'ELECTRODE PROCESSING',
    title: 'Engineering the Electrode.',
    subtitle: 'Dry and wet process research for high-loading thick electrodes — LFP, NCM, and beyond.',
    button: 'Explore Research →',
    link: '/research',
    image: heroSlide1Electrode,
    imagePosition: '80% center',
  },
  {
    label: 'DIGITAL TWIN',
    title: 'Simulate Before You Build',
    subtitle: 'GeoDict and EDEM-based microstructure modeling to predict electrode performance before fabrication.',
    button: 'Learn More →',
    link: '/research',
    image: heroSlide2DigitalTwin,
    imagePosition: '75% center',
  },
  {
    label: 'JOIN US',
    title: 'Research With Purpose.',
    subtitle: 'We welcome student researchers, research interns, Ph.D. candidates, and postdoctoral fellows passionate about battery manufacturing.',
    button: 'View Openings →',
    link: '/contact',
    image: undefined as string | undefined,
    imagePosition: undefined as string | undefined,
  },
]

// ── Hero Slider ────────────────────────────────────────────────────────────────
function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true)
      setTimeout(() => {
        setCurrent((c) => (c + 1) % SLIDES.length)
        setTransitioning(false)
      }, 400)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (i: number) => {
    if (i === current) return
    setTransitioning(true)
    setTimeout(() => {
      setCurrent(i)
      setTransitioning(false)
    }, 300)
  }

  const goPrev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length)
  const goNext = () => goTo((current + 1) % SLIDES.length)

  const slide = SLIDES[current]

  return (
    <div className="relative w-full overflow-hidden bg-gray-900" style={{ height: '560px' }}>
      {/* Background */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${transitioning ? 'opacity-0' : 'opacity-100'}`}
      >
        {slide.image ? (
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: slide.imagePosition }}
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <span className="text-white/30 text-sm font-medium tracking-wide uppercase">Image coming soon</span>
          </div>
        )}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(0,32,96,0.82) 0%, rgba(0,48,135,0.60) 50%, rgba(0,20,60,0.40) 100%)',
          }}
        />
      </div>

      <HeroPattern />

      {/* Arrow navigation */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white shadow-md flex items-center justify-center text-xl font-medium transition-colors duration-150"
      >
        ‹
      </button>
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white shadow-md flex items-center justify-center text-xl font-medium transition-colors duration-150"
      >
        ›
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 w-full">
          <div
            className={`max-w-2xl transition-all duration-500 ${
              transitioning ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
            }`}
          >
            <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-[#c8a84b] mb-4 px-3 py-1 border border-[#c8a84b]/40 rounded">
              {slide.label}
            </span>
            <h1 className="text-white font-bold mb-4 leading-tight" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
              {slide.title}
            </h1>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">{slide.subtitle}</p>
            <Link
              to={slide.link}
              className="inline-flex items-center px-7 py-3 bg-white text-[#003087] text-sm font-semibold rounded hover:bg-blue-50 transition-all duration-200 shadow-lg"
            >
              {slide.button}
            </Link>
          </div>
        </div>
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-7 right-10 text-xs text-white/50 font-medium tabular-nums z-20">
        {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
      </div>
    </div>
  )
}

// ── Welcome Section ────────────────────────────────────────────────────────────
function WelcomeSection() {
  const { ref, visible } = useFadeIn()

  return (
    <section className="py-24 bg-white">
      <div
        ref={ref}
        className={`max-w-screen-xl mx-auto px-6 lg:px-10 text-center transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#003087] mb-4">Welcome</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-3 relative inline-block">
          Digital Engineering for
          <span
            className="block h-[3px] w-16 mx-auto mt-3 rounded"
            style={{ backgroundColor: '#003087' }}
          />
        </h2>
        <h2 className="text-4xl font-bold text-[#003087] mb-8">Electrode Processing</h2>
        <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed mb-4">
          DEEP Laboratory at KIST is a process-focused research group specializing in thick electrode fabrication
          for next-generation lithium-ion batteries. We pursue both dry (solvent-free) and wet (slurry-based)
          electrode processing — covering LFP and NCM cathode systems, silicon-based anodes, and full electrode
          stack engineering including conductive additives, binders, dispersants, and current collectors.
        </p>
        <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed mb-10">
          We integrate digital twin simulation — GeoDict and EDEM — to connect microstructure with electrochemical
          performance, and apply systematic Design of Experiments (DoE) to accelerate process optimization. Our
          mission is to bridge fundamental science and scalable industrial manufacturing.
        </p>
        <Link
          to="/research"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-[1.5px] border-[#003087] text-[#003087] text-sm font-semibold hover:bg-[#003087] hover:text-white transition-all duration-200"
        >
          Read More
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

// ── Work With Us ───────────────────────────────────────────────────────────────
function WorkWithUs() {
  const { ref, visible } = useFadeIn()

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div
        ref={ref}
        className={`max-w-screen-xl mx-auto px-6 lg:px-10 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: text ── */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#003087] mb-3">Join Our Group</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-1">대학원생 및 박사후연구원 모집</h2>
            <p className="text-base text-gray-400 font-medium mb-7">Graduate &amp; Postdoctoral Recruitment</p>

            <div className="space-y-4 text-[15px] text-gray-600 leading-relaxed mb-8">
              <p>
                한국과학기술연구원(KIST) 에너지저장연구센터 DEEP 연구실에서
                함께 연구할 대학원생 및 박사후연구원을 모집합니다.
              </p>
              <div className="space-y-2 pl-1">
                <p>
                  <span className="font-semibold text-gray-800">1. 모집 분야:</span>{' '}
                  학생연구원(석사), 석/박사통합과정, 박사과정, 인턴 연구원, Postdoc 연구원
                </p>
                <p>
                  <span className="font-semibold text-gray-800">2. 근무지:</span>{' '}
                  한국과학기술연구원 에너지저장연구센터 (서울시 성북구)
                </p>
                <p>
                  <span className="font-semibold text-gray-800">3. 지원 분야:</span>{' '}
                  재료, 화공, 기계, 화학, 물리 등 관련 학과, 이차전지 전극 공정 관련 연구
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#003087] text-white text-sm font-semibold rounded hover:bg-[#001f5a] transition-all duration-200"
              >
                Apply Now →
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center px-6 py-2.5 border-[1.5px] border-gray-300 text-gray-700 text-sm font-semibold rounded hover:border-[#003087] hover:text-[#003087] transition-all duration-200"
              >
                Meet the Team
              </Link>
            </div>
          </div>

          {/* ── Right: position cards + info boxes ── */}
          <div className="space-y-3">
            {[
              {
                num: '1',
                title: '학생연구원 / Student Researcher',
                desc: '석사과정, 석박통합과정, 박사과정 지원 가능. KIST와 협약된 국내 대학의 학연 연계 프로그램으로 참여할 수 있습니다.',
              },
              {
                num: '2',
                title: '석사 후 연구원 / Research Intern',
                desc: '석사 졸업 후 위탁 파견 인턴 연구원 직위로 참여하는 과정입니다.',
              },
              {
                num: '3',
                title: '박사후연구원 / Postdoctoral Fellow',
                desc: 'KIST 에너지저장연구센터 소속 박사후연구원으로 참여하는 과정입니다.',
              },
            ].map((card) => (
              <div
                key={card.num}
                className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:border-[#003087]/25 hover:shadow-sm transition-all duration-200 bg-white"
              >
                <div
                  className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold text-white mt-0.5"
                  style={{ backgroundColor: '#003087' }}
                >
                  {card.num}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1 leading-snug">{card.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}

            {/* Research areas info box */}
            <div className="p-5 rounded-xl bg-[#f0f4fb] border border-[#003087]/10">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#003087] mb-2">주요 연구 분야</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                후막 전극 공정 (건식/습식) · 디지털 트윈 시뮬레이션 · 비불소계 바인더 · CNT 도전재 분산
              </p>
            </div>

            {/* Contact info box */}
            <div className="p-5 rounded-xl border border-gray-200 bg-white">
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="font-semibold text-gray-700">지원 문의:</span>{' '}
                <a href="mailto:yoojk@kist.re.kr" className="text-[#003087] hover:underline">yoojk@kist.re.kr</a>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                이력서(CV) 및 자기소개서를 이메일로 송부해 주시기 바랍니다.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ── Featured Publications ──────────────────────────────────────────────────────
function FeaturedPublications() {
  const { ref, visible } = useFadeIn()
  const featured = PUBLICATIONS.slice(0, 4)

  return (
    <section className="py-24 bg-white">
      <div
        ref={ref}
        className={`max-w-screen-xl mx-auto px-6 lg:px-10 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#003087] mb-3">Latest Research</p>
            <h2 className="text-3xl font-bold text-gray-900">Featured Publications</h2>
          </div>
          <Link
            to="/publications"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[#003087] hover:gap-3 transition-all duration-200"
          >
            View All
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((pub, i) => {
            const coverImage = pub.coverImage ?? getFeaturedImage(i + 1)
            return (
              <a
                key={pub.id}
                href={`https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Journal cover */}
                <div className="relative h-44 bg-gray-100 overflow-hidden">
                  {coverImage ? (
                    <img
                      src={coverImage}
                      alt={pub.journal}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#f0f4fb] to-[#dde6f5] flex items-center justify-center">
                      <span className="text-[11px] font-medium text-[#003087]/30 tracking-wide uppercase">Journal Cover</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded text-white" style={{ backgroundColor: '#003087' }}>
                      {pub.year}
                    </span>
                    {pub.isCoverArticle && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#c8a84b] text-white">
                        Cover
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <p className="text-[11px] text-[#003087] font-semibold mb-2 italic">{pub.journal}</p>
                  <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-3 flex-1 group-hover:text-[#003087] transition-colors duration-150 line-clamp-3">
                    {pub.title}
                  </h3>
                  <p className="text-xs text-gray-400"><Authors text={pub.authors} /></p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ── Publication List by Year ───────────────────────────────────────────────────
function PublicationsByYear() {
  const { ref, visible } = useFadeIn()
  // Teaser for the home page — most recent 3 years only; the full archive lives on /publications.
  const years = [...new Set(PUBLICATIONS.map((p) => p.year))].sort((a, b) => b - a).slice(0, 3)

  return (
    <section style={{ backgroundColor: '#F8F9FA' }} className="py-24">
      <div
        ref={ref}
        className={`max-w-screen-xl mx-auto px-6 lg:px-10 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#003087] mb-3">Archive</p>
            <h2 className="text-3xl font-bold text-gray-900">Publications by Year</h2>
          </div>
        </div>

        <div className="space-y-12">
          {years.map((year) => {
            const pubs = PUBLICATIONS.filter((p) => p.year === year)
            if (!pubs.length) return null
            return (
              <div key={year}>
                <div className="flex items-center gap-4 mb-5">
                  <h3 className="text-2xl font-bold text-[#003087]">{year}</h3>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
                <div className="space-y-3">
                  {pubs.map((pub) => (
                    <a
                      key={pub.id}
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-100 hover:border-[#003087]/20 hover:shadow-md transition-all duration-200"
                    >
                      {/* Journal thumbnail */}
                      <div className="w-12 h-14 rounded overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
                        {pub.coverImage ? (
                          <img src={pub.coverImage} alt={pub.journal} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-[8px] font-medium text-[#003087]/30 uppercase text-center leading-tight px-0.5">Cover</span>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#003087] transition-colors duration-150 leading-snug mb-1">
                          {pub.title}
                        </h4>
                        <p className="text-xs text-gray-500 mb-1.5"><Authors text={pub.authors} /></p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs italic text-gray-500">{pub.journal}</span>
                          {pub.volume && (
                            <>
                              <span className="text-gray-300">·</span>
                              <span className="text-xs text-gray-400">{pub.volume}</span>
                            </>
                          )}
                          {pub.isCorresponding && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded border border-[#003087]/30 text-[#003087] font-medium">
                              Corresponding Author
                            </span>
                          )}
                          {pub.impactFactor && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 font-medium">
                              IF {pub.impactFactor}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Arrow */}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        className="flex-shrink-0 mt-0.5 text-gray-300 group-hover:text-[#003087] transition-all duration-200 group-hover:translate-x-0.5"
                      >
                        <path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/publications"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#003087] text-white text-sm font-semibold rounded hover:bg-[#001f5a] transition-all duration-200"
          >
            View All Publications
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── Main Export ────────────────────────────────────────────────────────────────
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroSlider />
      <WelcomeSection />
      <WorkWithUs />
      <FeaturedPublications />
      <PublicationsByYear />
    </>
  )
}
