import Reveal from './Reveal'
import { accentAt } from '../lib/accentColors'

const steps = [
  { index: '01', title: 'Discover', description: 'We understand your business, goals, brand and requirements.' },
  { index: '02', title: 'Design', description: 'We create a modern, responsive visual direction for your website.' },
  { index: '03', title: 'Build', description: 'We develop the website and test it thoroughly across devices.' },
  { index: '04', title: 'Launch', description: 'We deploy your website and stay on for ongoing support.' },
]

export default function Process() {
  return (
    <section id="process" className="bg-paper py-20 md:py-28">
      <div className="container-page">
        <div className="lg:grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow mb-4">Our Process</p>
              <h2 className="display-heading text-4xl sm:text-5xl mb-6">A clear path from idea to launch.</h2>
              <p className="section-subheading mb-8">
                No surprises. Clear milestones and regular communication at every stage.
              </p>
              <a href="#contact" className="btn-primary">
                Get a Free Consultation <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-8 mt-14 lg:mt-0 relative">
            <div
              className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-primary via-violet-500 to-blue-500 opacity-25 hidden sm:block"
              aria-hidden="true"
            />
            {steps.map((step, i) => {
              const accent = accentAt(i)
              return (
                <Reveal key={step.index} delay={i * 100}>
                  <div className="group relative flex gap-6 md:gap-10 py-8 border-b border-secondary/10 first:pt-0 last:border-0">
                    <div className="relative w-16 shrink-0 flex items-start justify-center">
                      <span className={`relative z-10 font-display font-bold text-4xl sm:text-5xl ${accent.text} opacity-40 group-hover:opacity-100 transition-opacity duration-300`}>
                        {step.index}
                      </span>
                      <span
                        className={`absolute top-3 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full ${accent.dot} ring-4 ring-paper z-10 hidden sm:block`}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-secondary mb-2">{step.title}</h3>
                      <p className="text-secondary/55 leading-relaxed max-w-md">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
