import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import '@liquidglassjs/core/css'
import './styles/tokens.css'
import './styles/base.css'
import './styles/sections.css'
import './styles/pages.css'
import Index from './pages/Index'
import OptionA from './pages/OptionA'
import OptionB from './pages/OptionB'
import OptionC from './pages/OptionC'
import Results from './pages/Results'
import ProductPage from './pages/site/ProductPage'
import AIPage from './pages/site/AIPage'
import MethodPage from './pages/site/MethodPage'
import HowPage from './pages/site/HowPage'
import WhoPage from './pages/site/WhoPage'
import { loadContent } from './sanity'

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
      if (!href || !href.startsWith('#') || href.length < 2) return
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

// Old review links used #/b style addresses. Send them to the real path.
if (location.hash.startsWith('#/')) {
  const path = location.hash.slice(1) === '/a' ? '/' : location.hash.slice(1)
  history.replaceState(null, '', path)
}

function render() {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<OptionA />} />
          <Route path="/a" element={<Navigate to="/" replace />} />
          <Route path="/options" element={<Index />} />
          <Route path="/b" element={<OptionB />} />
          <Route path="/c" element={<OptionC />} />
          <Route path="/results" element={<Results />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/method" element={<MethodPage />} />
          <Route path="/how-it-works" element={<HowPage />} />
          <Route path="/who" element={<WhoPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>,
  )
}

// Copy comes from Sanity when it answers quickly, otherwise from content.ts.
loadContent().finally(render)
