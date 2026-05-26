import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

// Place resume PDF at /public/resume.pdf
const RESUME_URL = '/resume.pdf'
const PHONE = '+1-555-000-0000'

export default function Resume() {
  const [numPages, setNumPages] = useState<number>(0)
  const [shareOpen, setShareOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const shareViaEmail = () => {
    const subject = encodeURIComponent('Christopher Alvord – Actor Resume')
    const body = encodeURIComponent(
      `Hi,\n\nPlease find Christopher Alvord's resume here:\n${window.location.origin}${RESUME_URL}\n\nBest,`
    )
    window.open(`mailto:?subject=${subject}&body=${body}`)
  }

  const shareViaText = () => {
    window.open(`sms:${PHONE}?body=${encodeURIComponent(`Christopher Alvord's resume: ${window.location.origin}${RESUME_URL}`)}`)
  }

  const copyLink = async () => {
    await navigator.clipboard.writeText(`${window.location.origin}${RESUME_URL}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="font-serif text-4xl font-bold mb-1">Resume</h1>
          <p className="text-gray-500 text-sm uppercase tracking-widest">Christopher Alvord · Actor</p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <a
            href={RESUME_URL}
            download="ChristopherAlvord-Resume.pdf"
            className="px-5 py-2.5 rounded-full bg-charcoal text-cream text-sm font-medium hover:bg-gold transition-colors"
          >
            Download PDF
          </a>
          <button
            onClick={() => setShareOpen(o => !o)}
            className="px-5 py-2.5 rounded-full border border-charcoal text-charcoal text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Share
          </button>
        </div>
      </div>

      {/* Share panel */}
      {shareOpen && (
        <div className="mb-8 p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-wrap gap-3">
          <button
            onClick={shareViaEmail}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gold hover:text-white text-sm transition-colors"
          >
            <span>✉️</span> Email
          </button>
          <button
            onClick={shareViaText}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gold hover:text-white text-sm transition-colors"
          >
            <span>💬</span> Text Message
          </button>
          <button
            onClick={copyLink}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gold hover:text-white text-sm transition-colors"
          >
            <span>{copied ? '✅' : '🔗'}</span> {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
      )}

      {/* PDF Viewer */}
      <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg bg-white flex justify-center">
        <Document
          file={RESUME_URL}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={
            <div className="flex items-center justify-center h-64 text-gray-400 text-sm">
              Loading resume…
            </div>
          }
          error={
            <div className="flex flex-col items-center justify-center h-64 text-gray-400 text-sm gap-3 px-6 text-center">
              <p>Resume PDF not found. Place <code className="bg-gray-100 px-1 rounded">resume.pdf</code> in the <code className="bg-gray-100 px-1 rounded">/public</code> folder.</p>
            </div>
          }
        >
          {Array.from({ length: numPages }, (_, i) => (
            <Page
              key={i + 1}
              pageNumber={i + 1}
              className="mx-auto"
              width={Math.min(typeof window !== 'undefined' ? window.innerWidth - 64 : 700, 700)}
            />
          ))}
        </Document>
      </div>
    </div>
  )
}
