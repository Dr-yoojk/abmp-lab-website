import { useEffect, useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'
import contactDirections from '../imports/contact-directions.avif'
import HeroPattern from '../components/HeroPattern'

function PageHeader() {
  return (
    <section
      className="relative overflow-hidden py-20"
      style={{ background: 'linear-gradient(135deg, #001f5a 0%, #003087 100%)' }}
    >
      <HeroPattern />
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-10">
        <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-blue-300 mb-3">ABMP Laboratory</p>
        <h1 className="text-4xl font-bold text-white mb-4">Contact</h1>
        <p className="text-blue-200 max-w-2xl leading-relaxed">
          We welcome inquiries from prospective students, postdocs, and industry partners.
        </p>
      </div>
    </section>
  )
}

function RecruitmentBanner() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #f1f3f6 0%, #e4e8ee 100%)' }} className="py-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#003087] mb-3">Open Positions</p>
            <h2 className="text-3xl font-bold text-[#1a1f2e] mb-4">We Are Recruiting</h2>
            <p className="text-[#1a1f2e]/70 leading-relaxed mb-5 text-[15px]">
              We are looking for motivated students and postdoctoral researchers to join our group.
              Backgrounds in materials science, chemical engineering, electrochemistry, or computational
              modeling are welcome.
            </p>
            <ul className="space-y-2">
              {[
                'Competitive stipend and research support',
                'Access to state-of-the-art characterization facilities at KIST',
                'Opportunities for industry collaboration and technology transfer',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#1a1f2e]/70">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0">
                    <path d="M3 8l4 4 6-7" stroke="#003087" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <a
              href="mailto:jkyoo@kist.re.kr"
              className="w-full text-center py-3.5 bg-[#003087] text-white text-sm font-bold rounded shadow-sm hover:bg-[#001f5a] transition-all duration-200"
            >
              Apply by Email
            </a>
            <a
              href="#inquiry"
              className="w-full text-center py-3.5 border-[1.5px] border-[#003087] text-[#003087] text-sm font-semibold rounded hover:bg-[#003087] hover:text-white transition-all duration-200"
            >
              Inquiry Form
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function LocationSection() {
  const { ref, visible } = useFadeIn()

  return (
    <section className="py-20 bg-white">
      <div
        ref={ref}
        className={`max-w-screen-xl mx-auto px-6 lg:px-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Location</h2>
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm" style={{ height: '380px' }}>
              <iframe
                src="https://www.google.com/maps?q=한국과학기술연구원&output=embed"
                title="KIST location map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://www.google.com/maps/place/%ED%95%9C%EA%B5%AD%EA%B3%BC%ED%95%99%EA%B8%B0%EC%88%A0%EC%97%B0%EA%B5%AC%EC%9B%90+(KIST)/data=!4m6!3m5!1s0x357cbb7cd6ae2e13:0x6ad590233985143c!8m2!3d37.6006918!4d127.046371!16zL20vMDZzal94?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-1.5 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:border-[#003087]/30 hover:text-[#003087] transition-all duration-200"
            >
              View larger map
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M5.5 2h6.5v6.5M12 2 6 8M10 8v3.5a1 1 0 01-1 1H2.5a1 1 0 01-1-1V4a1 1 0 011-1H6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Getting Here</h2>
            <p className="text-sm text-gray-400 mb-6">오시는 길</p>

            {/* Address */}
            <div className="bg-gray-50 rounded-xl p-6 mb-5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Address</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Advanced Battery Materials & Process Laboratory (L5 Building)<br />
                Korea Institute of Science and Technology<br />
                5 Hwarang-ro 14-gil, Seongbuk-gu<br />
                Seoul 02792, Republic of Korea
              </p>
            </div>

            {/* Contact details */}
            <div className="bg-gray-50 rounded-xl p-6 mb-5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Contact</h3>
              <div className="space-y-2.5 text-sm">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#003087] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <a href="mailto:jkyoo@kist.re.kr" className="text-[#003087] hover:underline">jkyoo@kist.re.kr</a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#003087] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span className="text-gray-600">Office: +82-2-958-5264</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#003087] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                  <span className="text-gray-600">Mobile: +82-10-9454-1358</span>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Transportation</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex gap-3">
                  <span className="font-bold text-[#003087] flex-shrink-0 w-28">지하철 / Subway</span>
                  <span>6호선 상월곡역 (한국과학기술연구원역) 4번 출구에서 도보 약 10분 소요 (후문 방향)</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-[#003087] flex-shrink-0 w-28">버스 / Bus</span>
                  <span>201, 273, 1224번 버스 이용, KIST 앞 정류장 하차</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-[#003087] flex-shrink-0 w-28">자가용 / By Car</span>
                  <span>내비게이션에 '한국과학기술연구원' 또는 '화랑로 14길 5' 입력. 내부 주차 가능 (방문객 주차장 이용)</span>
                </div>
              </div>
            </div>

            {/* Directions image */}
            <div className="mt-5 rounded-xl overflow-hidden border border-gray-100">
              <img
                src={contactDirections}
                alt="KIST directions and campus map"
                className="w-full h-56 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const INQUIRY_TYPES = [
  { value: 'joint-research', label: '공동연구 Joint Research' },
  { value: 'tech-transfer', label: '기술이전 Technology Transfer' },
  { value: 'equipment', label: '장비 활용 Equipment Access' },
  { value: 'other', label: '기타 Other' },
]

function InquiryForm() {
  const { ref, visible } = useFadeIn()
  const [form, setForm] = useState({
    name: '', email: '', org: '', types: [] as string[], message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const toggleType = (value: string) => {
    setForm((f) => ({
      ...f,
      types: f.types.includes(value) ? f.types.filter((t) => t !== value) : [...f.types, value],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', email: '', org: '', types: [], message: '' })
    }, 5000)
  }

  return (
    <section id="inquiry" className="py-20 scroll-mt-20" style={{ backgroundColor: '#F8F9FA' }}>
      <div
        ref={ref}
        className={`max-w-screen-xl mx-auto px-6 lg:px-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#003087] mb-3">Get in Touch</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Collaboration Inquiry / 협력 문의</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              공동연구, 기술이전 등 협력을 원하시면 아래 양식을 작성해 주세요.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#003087' }}
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M6 14l6 6 10-12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent</h3>
                <p className="text-gray-500 text-sm">
                  Thank you for reaching out. We will get back to you within 2–3 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField label="이름 / Name" required>
                    <input
                      type="text"
                      required
                      placeholder="홍길동"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="form-input"
                    />
                  </FormField>
                  <FormField label="이메일 / Email" required>
                    <input
                      type="email"
                      required
                      placeholder="example@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="form-input"
                    />
                  </FormField>
                </div>

                <FormField label="소속 기관 / Organization">
                  <input
                    type="text"
                    placeholder="소속 기관명을 입력해주세요"
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                    className="form-input"
                  />
                </FormField>

                <FormField label="문의 유형 / Inquiry Type" required>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {INQUIRY_TYPES.map((t) => (
                      <label
                        key={t.value}
                        className="flex items-center gap-2.5 px-3.5 py-2.5 border-[1.5px] border-gray-200 rounded-lg text-sm text-gray-700 cursor-pointer hover:border-[#003087]/40 transition-colors duration-150 has-[:checked]:border-[#003087] has-[:checked]:bg-[#003087]/5"
                      >
                        <input
                          type="checkbox"
                          checked={form.types.includes(t.value)}
                          onChange={() => toggleType(t.value)}
                          className="w-4 h-4 accent-[#003087] flex-shrink-0"
                        />
                        {t.label}
                      </label>
                    ))}
                  </div>
                </FormField>

                <FormField label="간단한 용무 / Brief Message" required>
                  <textarea
                    required
                    rows={5}
                    placeholder="Please briefly describe your background and the nature of your inquiry…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="form-input resize-none"
                  />
                </FormField>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#003087] text-white text-sm font-bold rounded hover:bg-[#001f5a] active:scale-[0.99] transition-all duration-200"
                >
                  문의 보내기 / Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function FormField({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <PageHeader />
      <RecruitmentBanner />
      <LocationSection />
      <InquiryForm />
    </>
  )
}
