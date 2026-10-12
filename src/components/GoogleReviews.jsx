import Reveal from './Reveal'
import WaveDivider from './WaveDivider'

const reviews = [
  '/reviews/review-1.png',
  '/reviews/review-2.png',
  '/reviews/review-3.png',
  '/reviews/review-4.png',
  '/reviews/review-5.png',
  '/reviews/review-6.png',
  '/reviews/review-7.png',
  '/reviews/review-8.png',
]

function GoogleG() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.53 5.53 0 01-2.4 3.63v3h3.88c2.27-2.09 3.57-5.17 3.57-8.82z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.88-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.1A12 12 0 0012 24z" />
      <path fill="#FBBC05" d="M5.27 14.28A7.2 7.2 0 014.9 12c0-.79.14-1.56.37-2.28v-3.1H1.27A12 12 0 000 12c0 1.94.46 3.77 1.27 5.38l4-3.1z" />
      <path fill="#EA4335" d="M12 4.77c1.77 0 3.35.6 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0A12 12 0 001.27 6.62l4 3.1C6.22 6.88 8.87 4.77 12 4.77z" />
    </svg>
  )
}

export default function GoogleReviews() {
  return (
    <section className="relative bg-paper overflow-hidden">
      <WaveDivider fromClassName="text-secondary" className="relative z-10 -mt-px" />

      <div className="container-page relative pt-2 pb-14 md:pb-16">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <GoogleG />
                <p className="eyebrow mb-0">Real Google Reviews</p>
              </div>
              <h2 className="display-heading text-3xl sm:text-4xl lg:text-5xl max-w-xl">
                What clients say, <span className="gradient-text">unedited.</span>
              </h2>
            </div>
            <a
              href="https://www.google.com/maps/search/Piweb+Technology+Jaipur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-secondary hover:text-primary transition-colors link-underline w-fit"
            >
              See all reviews on Google →
            </a>
          </div>
        </Reveal>

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {reviews.map((src, i) => (
            <Reveal key={src} delay={i * 50} className="break-inside-avoid mb-4">
              <div className="rounded-xl overflow-hidden border border-secondary/10 bg-white shadow-[0_10px_25px_-15px_rgba(11,14,26,0.2)] transition-transform duration-300 hover:-translate-y-1">
                <img
                  src={src}
                  alt="Real Google review for Piweb Technology"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
