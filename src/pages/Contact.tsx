const contacts = [
  {
    role: 'Business Inquiries',
    agency: 'Engage Artists Agency',
    email: 'EngageArtistsAgency@gmail.com',
  },
  {
    role: 'Business Inquiries',
    agency: 'Avail Artist Management',
    email: 'AvailArtistManagement@gmail.com',
  },
]

const socials = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/christopheralvord',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.226 7.149 2.163 8.415 2.105 8.795 2.163 12 2.163zm0-2.163c-3.259 0-3.667.014-4.947.072-1.585.073-3.31.516-4.54 1.747C1.283 2.999.84 4.724.767 6.309.71 7.589.695 7.997.695 12c0 4.003.014 4.411.072 5.691.073 1.585.516 3.31 1.747 4.54 1.23 1.231 2.955 1.674 4.54 1.747 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.585-.073 3.31-.516 4.54-1.747 1.231-1.23 1.674-2.955 1.747-4.54.058-1.28.072-1.688.072-5.691 0-4.003-.014-4.411-.072-5.691-.073-1.585-.516-3.31-1.747-4.54C19.257.84 17.532.397 15.947.324 14.667.266 14.259.252 12 .252zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@christopheralvord',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-serif text-4xl font-bold mb-2">Contact</h1>
      <p className="text-gray-500 text-sm uppercase tracking-widest mb-10">Get in touch</p>

      {/* Representation */}
      <section className="mb-12">
        <h2 className="font-serif text-xl font-semibold mb-5 text-charcoal">Representation</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {contacts.map(c => (
            <div key={c.agency} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-xs uppercase tracking-widest text-gold font-medium mb-1">{c.role}</p>
              <p className="font-semibold text-charcoal mb-3">{c.agency}</p>
              <a
                href={`mailto:${c.email}`}
                className="flex items-center gap-2 text-sm text-charcoal hover:text-gold transition-colors"
              >
                <span>✉</span> {c.email}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Socials */}
      <section>
        <h2 className="font-serif text-xl font-semibold mb-5 text-charcoal">Follow Me</h2>
        <div className="flex flex-wrap gap-3">
          {socials.map(s => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 bg-white text-sm font-medium text-charcoal hover:bg-charcoal hover:text-cream hover:border-charcoal transition-all shadow-sm"
            >
              {s.icon}
              {s.name}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
