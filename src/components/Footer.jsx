import NetworkBackground from './NetworkBackground'
import WaveDivider from './WaveDivider'

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
    </svg>
  )
}

const quickLinks = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#why' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const services = ['Business Websites', 'Corporate Websites', 'Landing Pages', 'E-commerce', 'Website Redesign', 'Custom Development']

const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative bg-secondary-800 overflow-hidden">
      <WaveDivider fromClassName="text-white" className="relative -mb-px" />

      <NetworkBackground
        className="opacity-70"
        dotColors={['255, 255, 255', '233, 30, 99', '129, 140, 248']}
        lineColor="255, 255, 255"
        linkDistance={130}
        maxSpeed={0.4}
        glow
      />

      <div className="container-page relative pt-4 md:pt-8">
        <a href="#contact" className="group block">
          <h2 className="font-display font-extrabold text-white text-[2.4rem] sm:text-6xl lg:text-7xl leading-[0.98] tracking-tightest">
            Let&apos;s build something
            <br />
            worth <span className="gradient-text">clicking.</span>
          </h2>
        </a>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-20 pt-12 border-t border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Piweb Technology" className="h-8 w-auto rounded-lg" />
              <span className="text-base font-display font-bold text-white">Piweb</span>
            </div>
            <p className="mt-4 text-sm text-white/45 leading-relaxed max-w-[220px]">
              Professional website development for businesses that want to grow online.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white text-sm mb-4">Navigate</h3>
            <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-white/50 hover:text-white transition-colors w-fit">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-white text-sm mb-4">Services</h3>
            <ul className="flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service} className="text-sm text-white/50">{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-sm mb-4">Contact</h3>
            <ul className="flex flex-col gap-2.5">
              <li><a href="tel:+919351870445" className="text-sm text-white/50 hover:text-white transition-colors">+91 93518 70445</a></li>
              <li>
                <a href="https://wa.me/919351870445" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors w-fit">
                  <WhatsAppIcon /> WhatsApp
                </a>
              </li>
              <li className="text-sm text-white/50">Jaipur, Rajasthan, India</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 py-8 mt-12 border-t border-white/10">
          <p className="text-xs text-white/35">&copy; 2026 Piweb Technology. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} className="text-xs text-white/40 hover:text-white transition-colors">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
