import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import '@liquidglassjs/core/css'
import './styles/tokens.css'
import './styles/base.css'
import './styles/sections.css'
import './styles/pages.css'
import Index from './pages/Index'
import OptionA from './pages/OptionA'
import OptionB from './pages/OptionB'
import OptionC from './pages/OptionC'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  // In-page links (#method, #access…) scroll instead of changing the hash route.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a')
      const href = a?.getAttribute('href')
      if (!href || !href.startsWith('#') || href.startsWith('#/')) return
      e.preventDefault()
      const el = document.getElementById(href.slice(1))
      if (el) {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const y = el.getBoundingClientRect().top + window.scrollY - 88
        window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' })
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return null
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/a" element={<OptionA />} />
        <Route path="/b" element={<OptionB />} />
        <Route path="/c" element={<OptionC />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
