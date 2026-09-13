import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import deepLabLogo from '../imports/deep-lab-logo.png'

const RESEARCH_DROPDOWN = [
  { label: 'Overview', href: '/research' },
  { label: 'Equipment', href: '/equipment' },
]

const TEAM_DROPDOWN = [
  { label: 'PI', href: '/team?section=pi' },
  { label: 'Current Members', href: '/team?section=members' },
  { label: 'Alumni', href: '/team?section=alumni' },
]

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research', dropdown: RESEARCH_DROPDOWN },
  { label: 'Our Team', href: '/team', dropdown: TEAM_DROPDOWN },
  { label: 'Publications', href: '/publications' },
  { label: 'Gallery', href: '/news' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target as Element).closest?.('[data-nav-dropdown]')) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_1px_0_0_rgba(0,0,0,0.08)]' : ''
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">

            {/* Left: DEEP Lab logo image */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src={deepLabLogo}
                alt="DEEP Lab — Dr. Jung-Keun Yoo"
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Center: Nav links */}
            <div className="hidden lg:flex items-center gap-0">
              {NAV_LINKS.map((item) => {
                const isActive = location.pathname === item.href
                  || (item.href !== '/' && location.pathname.startsWith(item.href))
                  || (item.dropdown?.some((sub) => location.pathname === sub.href.split('?')[0]) ?? false)

                if (item.dropdown) {
                  const isOpen = openDropdown === item.label
                  return (
                    <div key={item.label} className="relative" data-nav-dropdown>
                      <button
                        className={`nav-link group flex items-center gap-1 px-4 py-2 text-[14px] font-medium transition-colors duration-150 ${
                          isActive ? 'text-[#003087]' : 'text-gray-600 hover:text-[#003087]'
                        }`}
                        onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                        onMouseEnter={() => setOpenDropdown(item.label)}
                      >
                        <span className="relative">
                          {item.label}
                          <span
                            className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-[#003087] transition-all duration-200 ${
                              isActive || isOpen ? 'w-full' : 'w-0 group-hover:w-full'
                            }`}
                          />
                        </span>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        >
                          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      {/* Dropdown */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-48 bg-white border border-gray-100 rounded-lg shadow-lg transition-all duration-200 ${
                          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
                        }`}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="py-1.5">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.href}
                              className="flex items-center px-4 py-2.5 text-sm text-gray-600 hover:text-[#003087] hover:bg-[#f0f4fb] transition-colors duration-100"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`group px-4 py-2 text-[14px] font-medium transition-colors duration-150 ${
                      isActive ? 'text-[#003087]' : 'text-gray-600 hover:text-[#003087]'
                    }`}
                  >
                    <span className="relative">
                      {item.label}
                      <span
                        className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-[#003087] transition-all duration-200 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </span>
                  </Link>
                )
              })}
            </div>

            {/* Right: CTA */}
            <div className="hidden lg:block flex-shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center px-5 py-2 text-[13px] font-semibold border-[1.5px] border-[#003087] text-[#003087] rounded hover:bg-[#003087] hover:text-white transition-all duration-200"
              >
                Collaboration
              </Link>
            </div>

            {/* Mobile: hamburger */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#003087] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                {mobileOpen ? (
                  <>
                    <path d="M4 4l14 14M18 4L4 18" />
                  </>
                ) : (
                  <>
                    <path d="M3 6h16M3 11h16M3 16h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden border-t border-gray-100 bg-white transition-all duration-300 overflow-hidden ${
            mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-4 flex flex-col gap-0.5">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="px-3 py-3 text-sm font-medium text-gray-700 hover:text-[#003087] hover:bg-[#f0f4fb] rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-3 w-full text-center px-5 py-2.5 text-sm font-semibold border-[1.5px] border-[#003087] text-[#003087] rounded hover:bg-[#003087] hover:text-white transition-all duration-200"
            >
              Collaboration
            </Link>
          </div>
        </div>
      </nav>
      {/* Spacer to prevent content going under fixed nav */}
      <div className="h-20" />
    </>
  )
}
