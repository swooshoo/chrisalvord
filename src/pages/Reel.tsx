export default function Reel() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2 text-charcoal">
        Christopher Alvord
      </h1>
      <p className="text-gold text-sm uppercase tracking-widest mb-10 font-medium">
        Actor
      </p>

      <div>
        <h2 className="font-serif text-2xl font-semibold mb-1">Theatrical Reel</h2>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src="https://player.vimeo.com/video/1157965041?h=06a6dc4d74"
            title="Theatrical Reel"
            className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
