import kistLogo from '../imports/image-1.png'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100" style={{ backgroundColor: 'rgb(255,255,255)' }}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8">

          {/* Center: all text content */}
          <div className="flex flex-col items-center lg:items-center text-center flex-1">
            <p className="text-[13px] font-bold tracking-[0.12em] text-[#003087] uppercase mb-2">
              Advanced Battery Materials &amp; Process Laboratory
            </p>
            <p className="text-sm text-gray-600 mb-0.5">Korea Institute of Science and Technology (KIST)</p>
            <p className="text-sm text-gray-500 mb-5">Energy Storage Research Center</p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#003087] flex-shrink-0">
                  <rect x="1" y="3" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M1 5l6 3 6-3" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                <a href="mailto:yoojk@kist.re.kr" className="hover:text-[#003087] transition-colors">
                  yoojk@kist.re.kr
                </a>
              </span>
              <span className="hidden sm:block text-gray-200">|</span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#003087] flex-shrink-0">
                  <path d="M7 1a4 4 0 0 1 4 4c0 3-4 8-4 8S3 8 3 5a4 4 0 0 1 4-4z" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="7" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                <span>5, Hwarang-ro 14-gil, Seongbuk-gu, Seoul, Republic of Korea</span>
              </span>
            </div>

            <p className="text-xs text-gray-400">© 2026 ABMP Laboratory. All Rights Reserved.</p>
          </div>

          {/* Right: KIST logo */}
          <div className="flex-shrink-0">
            <img
              src={kistLogo}
              alt="Korea Institute of Science and Technology"
              className="h-20 w-auto object-contain"
            />
          </div>

        </div>
      </div>
    </footer>
  )
}
