import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useFadeIn } from '../hooks/useFadeIn'

// ── PI data ────────────────────────────────────────────────────────────────

const PI_DATA = {
  name: 'Jung-Keun Yoo, Ph.D.',
  title: 'Principal Investigator / 책임연구원',
  affiliation: 'Korea Institute of Science and Technology (KIST)',
  division: 'Energy Storage Research Center',
  email: 'jgyoo@kist.re.kr',
  googleScholar: 'https://scholar.google.com/citations?user=tZx98QoAAAAJ&hl=ko&oi=ao',
  orcid: 'https://orcid.org/0000-0002-9693-649X',
  bio: `Dr. Jung-Keun Yoo is a Principal Investigator at the Energy Storage Research Center, Korea Institute of Science and Technology (KIST). He received his B.S. in Metallurgical Systems Engineering from Yonsei University (2009), and his M.S. and Ph.D. in Materials Science and Engineering from KAIST (2011, 2015) under Prof. Yeon-Sik Jung and Prof. Kisuk Kang. Following his doctorate, he worked at LG Chem Battery Division (2015–2017) as a Senior Researcher responsible for conductive additive and binder development, and subsequently at the Korea Institute of Materials Science (KIMS, 2017–2024) as a Principal Researcher. His research currently focuses on dry/wet thick electrode processing, digital twin simulation, and fluorine-free binder development for next-generation energy storage systems.`,
  education: [
    { period: '2002.03 – 2009.08', degree: 'B.S. Metallurgical Systems Engineering', institution: 'Yonsei University' },
    { period: '2009.09 – 2011.08', degree: 'M.S. Materials Science & Engineering', institution: 'KAIST' },
    { period: '2011.09 – 2015.02', degree: 'Ph.D. Materials Science & Engineering', institution: 'KAIST' },
  ],
  awards: [
    { text: 'Minister Award, Ministry of Science and ICT', year: '2022' },
    { text: 'Chairman Award, National Research Council of Science & Technology (NST)', year: '2021' },
    { text: 'Technology Transfer — Binder Technology for Lithium-Ion Batteries', year: '2023' },
    { text: 'Technology Transfer — Carbon Nanotube (CNT) Conductive Additive Technology', year: '2021' },
  ],
  interests: [
    'Dry Electrode Processing',
    'Thick Electrode Manufacturing',
    'Carbon Nanotechnology',
    'Digital Twin Simulation',
    'Fluorine-Free Binders',
  ],
  stats: [
    { value: '60+', label: 'Publications' },
    { value: '25', label: 'H-index' },
    { value: '2,664+', label: 'Citations' },
    { value: '4', label: 'Tech Transfers' },
  ],
}

// ── Member data ────────────────────────────────────────────────────────────

interface Member {
  nameKo: string
  nameEn: string
  role: string
}

const POSTDOC: Member[] = [
  { nameKo: '신우현', nameEn: 'Woohyun Shin', role: 'Postdoctoral Researcher' },
]

const RESEARCHERS: Member[] = [
  { nameKo: '권다솔', nameEn: 'Dasol Kwon', role: 'Researcher' },
]

const INTERNS: Member[] = [
  { nameKo: '김민솔', nameEn: 'Minsol Kim', role: 'Research Intern' },
  { nameKo: '김민정', nameEn: 'Minjeong Kim', role: 'Research Intern' },
  { nameKo: '박병진', nameEn: 'Byungjin Park', role: 'Research Intern' },
  { nameKo: '박준규', nameEn: 'Junkyu Park', role: 'Research Intern' },
]

const STUDENTS: Member[] = [
  { nameKo: '정현지', nameEn: 'Hyunji Jung', role: 'Student Researcher' },
  { nameKo: '우지원', nameEn: 'Jiwon Woo', role: 'Student Researcher' },
  { nameKo: '이상원', nameEn: 'Sangwon Lee', role: 'Student Researcher' },
  { nameKo: '양준혁', nameEn: 'Junhyuk Yang', role: 'Student Researcher' },
  { nameKo: '이민수', nameEn: 'Minsoo Lee', role: 'Student Researcher' },
  { nameKo: '송한빈', nameEn: 'Hanbin Song', role: 'Student Researcher' },
]

// ── Shared components ──────────────────────────────────────────────────────

function PhotoPlaceholder({ size }: { size: 'pi' | 'member' }) {
  if (size === 'pi') {
    return (
      <div className="w-full aspect-square rounded-2xl bg-[#f0f4fb] border border-gray-200 flex flex-col items-center justify-center gap-2">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-[#003087]/20">
          <circle cx="20" cy="15" r="7" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M6 36c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span className="text-[10px] text-[#003087]/25 font-medium tracking-wide uppercase">Photo</span>
      </div>
    )
  }
  return (
    <div className="w-full aspect-square rounded-lg bg-[#f0f4fb] border border-gray-100 flex items-center justify-center">
      <svg width="24" height="24" viewBox="0 0 40 40" fill="none" className="text-[#003087]/20">
        <circle cx="20" cy="15" r="7" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 36c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  )
}

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-3">
      {/* Photo placeholder */}
      <div className="w-full max-w-[80px] mx-auto">
        <PhotoPlaceholder size="member" />
      </div>

      {/* Name & role */}
      <div className="text-center">
        <p className="font-bold text-gray-900 text-[13px] leading-tight">
          {member.nameKo} ({member.nameEn})
        </p>
        <p className="text-[#003087] text-[11px] font-medium mt-0.5">{member.role}</p>
      </div>

      {/* Research interest placeholder */}
      <div className="text-center">
        <p className="text-[11px] text-gray-300 italic">Research interest TBD</p>
      </div>

      {/* Email placeholder */}
      <div className="text-center">
        <span className="text-[10.5px] text-gray-300">—</span>
      </div>
    </div>
  )
}

function MemberGroup({ title, members }: { title: string; members: Member[] }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <h3 className="text-[13px] font-bold tracking-widest uppercase text-[#003087] whitespace-nowrap">
          {title}
        </h3>
        <div className="flex-1 h-px bg-[#003087]/12" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {members.map((m) => (
          <MemberCard key={m.nameEn} member={m} />
        ))}
      </div>
    </div>
  )
}

// ── Page header ────────────────────────────────────────────────────────────

function PageHeader() {
  return (
    <section
      className="py-20"
      style={{ background: 'linear-gradient(135deg, #001f5a 0%, #003087 100%)' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-blue-300 mb-3">ABMP Laboratory</p>
        <h1 className="text-4xl font-bold text-white mb-4">Our Team</h1>
        <p className="text-blue-200 max-w-2xl leading-relaxed">
          A community of researchers from diverse backgrounds, united by curiosity and the drive to advance
          sustainable energy storage technology.
        </p>
      </div>
    </section>
  )
}

// ── PI section ─────────────────────────────────────────────────────────────

function PISection() {
  const { ref, visible } = useFadeIn()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    try {
      navigator.clipboard.writeText(PI_DATA.email).catch(() => {
        const el = document.createElement('textarea')
        el.value = PI_DATA.email
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
      })
    } catch {
      // silent fallback
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="pi" className="py-24 bg-white scroll-mt-20">
      <div
        ref={ref}
        className={`max-w-screen-xl mx-auto px-6 lg:px-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-2xl font-bold text-gray-900">Principal Investigator</h2>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Photo placeholder */}
          <div className="lg:col-span-3">
            <PhotoPlaceholder size="pi" />
          </div>

          {/* Bio column */}
          <div className="lg:col-span-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{PI_DATA.name}</h3>
            <p className="text-[#003087] font-semibold mb-0.5">{PI_DATA.title}</p>
            <p className="text-gray-500 text-sm mb-1">{PI_DATA.affiliation}</p>
            <p className="text-gray-400 text-sm mb-6">{PI_DATA.division}</p>

            {/* Bio */}
            <p className="text-gray-600 leading-relaxed text-[15px] mb-8">{PI_DATA.bio}</p>

            {/* Education */}
            <div className="mb-8">
              <p className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-4">Education</p>
              <div className="space-y-3">
                {PI_DATA.education.map((edu) => (
                  <div key={edu.degree} className="flex items-baseline gap-3 text-sm">
                    <span className="text-gray-400 tabular-nums font-medium text-[12px] flex-shrink-0 min-w-[130px]">
                      {edu.period}
                    </span>
                    <span className="text-gray-700">
                      <span className="font-medium">{edu.degree}</span>
                      <span className="text-gray-400"> · {edu.institution}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards & Tech Transfer */}
            <div className="mb-8">
              <p className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-4">Awards &amp; Technology Transfer</p>
              <div className="space-y-2.5">
                {PI_DATA.awards.map((a) => (
                  <div key={a.text} className="flex items-baseline gap-3 text-sm">
                    <span className="text-[#003087] font-bold tabular-nums text-[12px] flex-shrink-0 min-w-[36px]">{a.year}</span>
                    <span className="text-gray-600">{a.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Research interests */}
            <div className="mb-8">
              <p className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-3">Research Interests</p>
              <div className="flex flex-wrap gap-2">
                {PI_DATA.interests.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[12px] font-medium bg-[#003087]/8 text-[#003087] border border-[#003087]/12"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-2 flex-wrap">
              {/* Email — copy to clipboard */}
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded border-[1.5px] border-[#003087] text-[#003087] text-[12px] font-semibold hover:bg-[#003087] hover:text-white transition-all duration-200"
              >
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="3" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M1 5l6 3.5L13 5" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                {copied ? 'Copied!' : 'E-MAIL'}
              </button>

              <a
                href="https://www.kist.re.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded border border-gray-200 text-gray-600 text-[12px] font-medium hover:border-[#003087]/30 hover:text-[#003087] transition-all duration-200"
              >
                KIST
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded border border-gray-200 text-gray-600 text-[12px] font-medium hover:border-[#003087]/30 hover:text-[#003087] transition-all duration-200"
              >
                SCOPUS
              </a>

              <a
                href={PI_DATA.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded border border-gray-200 text-gray-600 text-[12px] font-medium hover:border-[#003087]/30 hover:text-[#003087] transition-all duration-200"
              >
                ORCID
              </a>

              <a
                href={PI_DATA.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded border border-gray-200 text-gray-600 text-[12px] font-medium hover:border-[#003087]/30 hover:text-[#003087] transition-all duration-200"
              >
                G.SCHOLAR
              </a>
            </div>
          </div>

          {/* Stats card */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
              <p className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-5">Research Impact</p>
              <div className="space-y-5">
                {PI_DATA.stats.map((stat) => (
                  <div key={stat.label} className="border-b border-gray-50 pb-5 last:border-0 last:pb-0">
                    <div className="text-3xl font-bold text-[#003087] mb-0.5">{stat.value}</div>
                    <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ── Current members section ────────────────────────────────────────────────

function CurrentMembersSection() {
  const { ref, visible } = useFadeIn()

  return (
    <section id="members" className="py-24 scroll-mt-20" style={{ backgroundColor: '#F8F9FA' }}>
      <div
        ref={ref}
        className={`max-w-screen-xl mx-auto px-6 lg:px-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-2xl font-bold text-gray-900">Current Members</h2>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <MemberGroup title="Postdoctoral Researcher" members={POSTDOC} />
        <MemberGroup title="Researcher (Ph.D. / 석박통합)" members={RESEARCHERS} />
        <MemberGroup title="Research Intern" members={INTERNS} />
        <MemberGroup title="Student Researcher" members={STUDENTS} />
      </div>
    </section>
  )
}

// ── Alumni section ─────────────────────────────────────────────────────────

function AlumniSection() {
  const { ref, visible } = useFadeIn()

  return (
    <section id="alumni" className="py-24 bg-white scroll-mt-20">
      <div
        ref={ref}
        className={`max-w-screen-xl mx-auto px-6 lg:px-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-2xl font-bold text-gray-900">Alumni</h2>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Placeholder cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col gap-3 opacity-40"
            >
              <div className="w-full max-w-[80px] mx-auto aspect-square rounded-lg bg-[#f0f4fb] border border-gray-100" />
              <div className="text-center space-y-1.5">
                <div className="h-3 bg-gray-200 rounded-full w-3/4 mx-auto" />
                <div className="h-2.5 bg-gray-100 rounded-full w-1/2 mx-auto" />
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm">Alumni information coming soon.</p>
      </div>
    </section>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function Team() {
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const section = searchParams.get('section')
    if (section) {
      setTimeout(() => {
        const el = document.getElementById(section)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    } else {
      window.scrollTo(0, 0)
    }
  }, [searchParams])

  return (
    <>
      <PageHeader />
      <PISection />
      <CurrentMembersSection />
      <AlumniSection />
    </>
  )
}
