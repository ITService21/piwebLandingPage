import Reveal from './Reveal'

const genericItems = ['Generic template', 'Desktop-first', 'Basic pages', 'Unclear customer journey', 'Limited enquiry options', 'Launch and forget']
const piwebItems = ['Business-focused design', 'Mobile-first experience', 'Structured around your services', 'Clear customer journey', 'Multiple enquiry paths', 'Post-launch support']

export default function ProblemSolution() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <h2 className="display-heading text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
            Don&apos;t just get a website.
            <br />
            Get one built <span className="text-primary">around your business.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-16 border-t border-secondary/10">
          <Reveal delay={80}>
            <div className="p-8 md:p-10 md:border-r border-secondary/10 h-full">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary/35 mb-6">The Old Way</p>
              <ul className="space-y-4">
                {genericItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-secondary/45 line-through decoration-secondary/25">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="p-8 md:p-10 h-full">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">The Piweb Way</p>
              <ul className="space-y-4">
                {piwebItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-secondary font-medium">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
