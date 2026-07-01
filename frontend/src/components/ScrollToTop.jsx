import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scroll to the top whenever the route changes (default browser behaviour
// for SPAs keeps the old scroll position, which feels broken on a marketing site).
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}
