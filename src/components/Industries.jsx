import Reveal from './Reveal'
import { accentAt } from '../lib/accentColors'

const industries = [
  'Local Businesses',
  'Professional Services',
  'B2B',
  'Manufacturing',
  'Real Estate',
  'Healthcare',
  'Education',
  'Retail & E-commerce',
  'Financial Services',
  'NGOs',
]

export default function Industries() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <p className="eyebrow mb-4">Industries</p>
              <h2 className="display-heading text-4xl sm:text-5xl max-w-xl">
                Built for businesses across sectors.
              </h2>
            </div>
            <p className="section-subheading max-w-sm">
              Every website is designed around your specific business needs — not a one-size-fits-all template.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-wrap gap-3 mt-12">
            {industries.map((industry, i) => {
              const accent = accentAt(i)
              return (
                <span
                  key={industry}
                  className={`text-sm font-semibold ${accent.text} ${accent.soft} rounded-full px-5 py-2.5 cursor-default transition-transform hover:-translate-y-0.5`}
                >
                  {industry}
                </span>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
