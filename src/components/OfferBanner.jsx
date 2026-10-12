export default function OfferBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-9 bg-secondary text-white flex items-center">
      <a
        href="#contact"
        className="container-page w-full flex items-center justify-center gap-2 text-center text-[11px] sm:text-[13px] font-medium tracking-wide hover:bg-white/5 transition-colors h-full"
      >
        <span className="hidden sm:inline-flex items-center justify-center w-4 h-4 rounded-full bg-primary text-white text-[9px] font-bold shrink-0">%</span>
        <span>
          <span className="font-bold text-primary-300">Limited-time offer</span> — get a FREE Landing Page worth{' '}
          <span className="font-bold">₹7,000</span> with every new website project
        </span>
        <span aria-hidden="true" className="font-bold">→</span>
      </a>
    </div>
  )
}
