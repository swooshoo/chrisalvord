import { useState } from 'react'

type Page = 'reel' | 'headshots' | 'resume' | 'contact'

interface Props {
  current: Page
  onChange: (page: Page) => void
}

const tabs: { id: Page; label: string }[] = [
  { id: 'reel', label: 'Reel' },
  { id: 'headshots', label: 'Headshots' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav({ current, onChange }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={() => onChange('reel')}
          className="font-serif text-xl font-bold tracking-wide text-charcoal hover:text-gold transition-colors"
        >
          Christopher Alvord
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium uppercase tracking-widest transition-all ${
                current === tab.id
                  ? 'bg-charcoal text-cream'
                  : 'text-charcoal hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-charcoal mb-1" />
          <span className="block w-5 h-0.5 bg-charcoal mb-1" />
          <span className="block w-5 h-0.5 bg-charcoal" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-cream">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => { onChange(tab.id); setMenuOpen(false) }}
              className={`w-full text-left px-6 py-4 text-sm font-medium uppercase tracking-widest transition-colors ${
                current === tab.id
                  ? 'text-gold font-semibold'
                  : 'text-charcoal hover:text-gold'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
