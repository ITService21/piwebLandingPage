import Reveal from './Reveal'
import { accentAt } from '../lib/accentColors'

const principles = [
  {
    index: '01',
    title: 'Designed to convert',
    description: 'Every page is built around a clear customer journey — from first visit to enquiry.',
  },
  {
    index: '02',
    title: 'Built for speed',
    description: 'A slow website loses visitors. We build fast, optimized websites that work hard for you.',
  },
  {
    index: '03',
    title: 'Made for your brand',
    description: 'Custom design that represents your business — not another generic template.',
  },
  {
    index: '04',
    title: 'Ready to grow',
    description: 'Mobile-first, SEO-friendly and structured to scale as your business grows.',
  },
]

export default function WhyPiweb() {
  return (
    <section id="why" className="bg-white py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-6">Why Piweb</p>
          <h2 className="display-heading text-4xl sm:text-5xl lg:text-[3.75rem] max-w-4xl">
            Your website is not a brochure.
            <br />
            It&apos;s your <span className="gradient-text">best salesperson.</span>
          </h2>
          <p className="section-subheading max-w-xl mt-6">
            We start by understanding what your website needs to accomplish for your business — then
            design and build around that goal, not the other way around.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 mt-16 md:mt-20">
          {principles.map((p, i) => {
            const accent = accentAt(i)
            return (
              <Reveal key={p.index} delay={i * 90}>
                <div className={`border-t-[3px] ${accent.border} pt-5`}>
                  <span className={`font-display font-bold text-3xl block mb-4 ${accent.text}`}>{p.index}</span>
                  <h3 className="font-display font-bold text-lg text-secondary mb-2.5">{p.title}</h3>
                  <p className="text-sm text-secondary/55 leading-relaxed">{p.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
