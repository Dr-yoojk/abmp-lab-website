import { useEffect, useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

function PageHeader() {
  return (
    <section
      className="py-20"
      style={{ background: 'linear-gradient(135deg, #001f5a 0%, #003087 100%)' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-blue-300 mb-3">ABMP Laboratory</p>
        <h1 className="text-4xl font-bold text-white mb-4">Contact</h1>
        <p className="text-blue-200 max-w-2xl leading-relaxed">
          We welcome inquiries from prospective students, postdoctoral candidates, and industry partners.
        </p>
      </div>
    </section>
  )
}

function RecruitmentBanner() {
  return (
    <section style={{ backgroundColor: '#003087' }} className="py-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-blue-300 mb-3">Open Positions</p>
            <h2 className="text-3xl font-bold text-white mb-4">We Are Recruiting</h2>
            <p className="text-blue-100 leading-relaxed mb-5 text-[15px]">
              The ABMP Laboratory has open positions for Ph.D. students (KIST-School & UST programs) and
              postdoctoral researchers. We seek motivated individuals with a strong background in materials
              science, chemical engineering, electrochemistry, or computational modeling.
            </p>
            <ul className="space-y-2">
              {[
                'Ph.D. fellowship covers tuition + competitive stipend',
                'Access to state-of-the-art characterization facilities at KIST',
                'International collaboration network (MIT, TU Delft, Fraunhofer ISC)',
                'Opportunities for industry internship and technology transfer',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-blue-100">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0">
                    <path d="M3 8l4 4 6-7" stroke="#c8a84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <a
              href="mailto:jkyoo@kist.re.kr"
              className="w-full text-center py-3.5 bg-white text-[#003087] text-sm font-bold rounded hover:bg-blue-50 transition-all duration-200"
            >
              Apply by Email
            </a>
            <a
              href="#inquiry"
              className="w-full text-center py-3.5 border border-white/30 text-white text-sm font-semibold rounded hover:bg-white/10 transition-all duration-200"
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
          {/* Map placeholder */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Location</h2>
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm relative" style={{ height: '380px' }}>
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&h=500&fit=crop&auto=format"
                alt="Seoul map"
                className="w-full h-full object-cover opacity-70"
              />
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: 'rgba(0,32,96,0.08)' }}
              >
                <div className="text-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 shadow-xl"
                    style={{ backgroundColor: '#003087' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div
                    className="text-sm font-bold px-4 py-2 rounded-lg text-white shadow-lg"
                    style={{ backgroundColor: 'rgba(0,48,135,0.90)' }}
                  >
                    KIST · Seongbuk-gu, Seoul
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Interactive map: 37.6047°N, 127.0252°E
            </p>
          </div>

          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Getting Here</h2>

            {/* Address */}
            <div className="bg-gray-50 rounded-xl p-6 mb-5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Address</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Advanced Battery Materials & Process Laboratory (W4-105)<br />
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
                  <span className="text-gray-600">+82-2-958-5441</span>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Transportation</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex gap-3">
                  <span className="font-bold text-[#003087] flex-shrink-0 w-20">Subway</span>
                  <span>Line 6, Hwarangdae Station (화랑대역), Exit 1 — 10 min walk</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-[#003087] flex-shrink-0 w-20">Bus</span>
                  <span>Bus 1221, 1224, 108 — KIST 정문 stop</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-bold text-[#003087] flex-shrink-0 w-20">From Airport</span>
                  <span>Incheon Airport → AREX → Seoul Station → Line 1 → Line 6 (approx. 1 hr)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InquiryForm() {
  const { ref, visible } = useFadeIn()
  const [form, setForm] = useState({
    name: '', email: '', org: '', type: '', subject: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', email: '', org: '', type: '', subject: '', message: '' })
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
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Collaboration Inquiry</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Fill out this form and we will respond within 2–3 business days. For urgent inquiries,
              please email directly at{' '}
              <a href="mailto:jkyoo@kist.re.kr" className="text-[#003087] underline underline-offset-2">
                jkyoo@kist.re.kr
              </a>
              .
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
                  <FormField label="Full Name" required>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Jane Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="form-input"
                    />
                  </FormField>
                  <FormField label="Email Address" required>
                    <input
                      type="email"
                      required
                      placeholder="j.smith@mit.edu"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="form-input"
                    />
                  </FormField>
                </div>

                <FormField label="Organization / Institution">
                  <input
                    type="text"
                    placeholder="MIT · Department of Materials Science"
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                    className="form-input"
                  />
                </FormField>

                <FormField label="Inquiry Type" required>
                  <select
                    required
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="form-input bg-white"
                  >
                    <option value="">Select type…</option>
                    <option value="phd">Ph.D. Application</option>
                    <option value="postdoc">Postdoctoral Position</option>
                    <option value="research">Research Collaboration</option>
                    <option value="industry">Industry Partnership</option>
                    <option value="visit">Research Visit / Exchange</option>
                    <option value="other">Other</option>
                  </select>
                </FormField>

                <FormField label="Message" required>
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
                  Send Inquiry
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
