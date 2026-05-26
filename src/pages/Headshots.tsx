import { useState } from 'react'

// Replace these with actual headshot image paths placed in /public/headshots/
const headshots = [
  { id: 1, src: '/headshots/headshot-1.jpg', alt: 'Christopher Alvord – casual' },
  { id: 2, src: '/headshots/headshot-2.jpg', alt: 'Christopher Alvord – suit' },
  { id: 3, src: '/headshots/headshot-3.jpg', alt: 'Christopher Alvord – dramatic' },
  { id: 4, src: '/headshots/headshot-4.jpg', alt: 'Christopher Alvord – smiling' },
  { id: 5, src: '/headshots/headshot-5.jpg', alt: 'Christopher Alvord – commercial' },
  { id: 6, src: '/headshots/headshot-6.jpg', alt: 'Christopher Alvord – outdoor' },
]

export default function Headshots() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="font-serif text-4xl font-bold mb-2">Headshots</h1>
      <p className="text-gray-500 text-sm mb-8 uppercase tracking-widest">
         
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {headshots.map(shot => (
          <button
            key={shot.id}
            onClick={() => setLightbox(shot.src)}
            className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <img
              src={shot.src}
              alt={shot.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={e => {
                // Show placeholder if image not yet added
                const t = e.target as HTMLImageElement
                t.src = `https://placehold.co/400x530/e8e4df/1C1C1E?text=${encodeURIComponent(shot.alt)}`
              }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Headshot"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white text-3xl leading-none font-light hover:text-gold"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
}
