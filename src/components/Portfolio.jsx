import Reveal from './Reveal'
import { accents, accentAt } from '../lib/accentColors'

const projects = [
  {
    index: '01',
    name: 'GrowMoreLoan',
    url: 'https://growmoreloan.in/',
    image: '/portfolio/growmoreloan.jpg',
    industry: 'Financial Services / Loans',
    location: 'Ahmedabad, Rajkot',
    description:
      'A loan discovery and advisory platform connecting borrowers with financing options — built for scale, speed and trust.',
    visitors: '3,00,000+',
    visitorLabel: 'visitors / month',
  },
  {
    index: '02',
    name: 'GS Brand Works',
    url: 'https://growstartupbrandworks.com/',
    image: '/portfolio/gsbrandworks.jpg',
    industry: 'IT Services & Branding',
    location: 'Ahmedabad',
    description:
      'Premium IT services company delivering 360° digital solutions — web, mobile, branding and marketing for businesses across India.',
    visitors: '280K+',
    visitorLabel: 'visitors / month',
  },
  {
    index: '03',
    name: 'Refubished.in',
    url: 'https://refubished.in/',
    image: '/portfolio/refubished.jpg',
    industry: 'E-commerce',
    location: 'Jaipur, Gurgaon',
    description:
      "India's trusted marketplace for certified refurbished laptops with quality assurance, warranty and nationwide delivery.",
    visitors: '200K+',
    visitorLabel: 'visitors / month',
  },
  {
    index: '04',
    name: 'Grow Startup',
    url: 'https://growstartup.in/',
    image: '/portfolio/growstartup.png',
    industry: 'Startup Advisory',
    location: 'Ahmedabad',
    description:
      'Startup advisory and growth platform helping entrepreneurs with mentorship, funding guidance and strategic business planning.',
    visitors: '150K+',
    visitorLabel: 'visitors / month',
  },
  {
    index: '05',
    name: 'Aarohan College',
    url: 'https://www.arohancollege.com/',
    image: '/portfolio/arohan.jpg',
    industry: 'Education',
    location: 'Odisha',
    description:
      'Modern educational institution with comprehensive course details, admissions portal and student resource management.',
    visitors: '120K+',
    visitorLabel: 'visitors / month',
  },
  {
    index: '06',
    name: 'Optimal Classes',
    url: 'https://optimalclasses.in/home',
    image: '/portfolio/optimalclasses.jpg',
    industry: 'Education',
    location: 'Varanasi, UP',
    description: 'Top-rated coaching institute offering result-oriented coaching for IIT-JEE, NEET and Foundation preparation.',
    visitors: '90K+',
    visitorLabel: 'visitors / month',
  },
  {
    index: '07',
    name: 'Viradiya Associates',
    url: 'https://www.viradiyaassociates.co.in/',
    image: '/portfolio/viradiya.jpg',
    industry: 'Financial Services',
    location: 'Ahmedabad',
    description: "Gujarat's trusted financial partner delivering transparent and customized loan solutions with leading bank partners.",
    visitors: '65K+',
    visitorLabel: 'visitors / month',
  },
  {
    index: '08',
    name: 'Pitama India',
    url: 'https://pitamaindia.org/',
    image: '/portfolio/pitama.jpg',
    industry: 'NGO & Environment',
    location: 'Jaipur, Gurgaon',
    description: 'Environmental initiative focused on greening India and empowering lives through sustainable development programs.',
    visitors: '45K+',
    visitorLabel: 'visitors / month',
  },
]

function ExternalLinkIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function PinIcon({ className = 'w-3 h-3' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function TrendIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  )
}

function ProjectCard({ project, accent, delay }) {
  return (
    <Reveal delay={delay}>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group/card relative flex flex-col h-full rounded-2xl overflow-hidden border border-secondary/10 bg-white shadow-[0_10px_30px_-15px_rgba(11,14,26,0.15)] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_25px_45px_-15px_rgba(11,14,26,0.25)]"
      >
        <div className={`h-[3px] bg-gradient-to-r ${accent.gradient} shrink-0`} />

        <div className="aspect-[16/10] overflow-hidden relative bg-secondary/5 shrink-0">
          <img
            src={project.image}
            alt={`${project.name} — website built by Piweb Technology`}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/card:scale-[1.08]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-400" />

          {/* Visitor highlight — revealed on hover */}
          <div className="absolute inset-x-0 bottom-0 p-3 flex items-center justify-between opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-400">
            <div className="flex items-center gap-1.5 text-white">
              <TrendIcon className="w-4 h-4" />
              <span className="font-display font-extrabold text-sm leading-none">{project.visitors}</span>
              <span className="text-[10px] text-white/70">{project.visitorLabel}</span>
            </div>
            <span className={`w-8 h-8 rounded-full ${accent.dot} flex items-center justify-center text-white shadow-lg shrink-0`}>
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        <div className="flex flex-col flex-1 p-4">
          <h3 className="font-display font-bold text-base text-secondary">{project.name}</h3>

          <div className="flex items-center gap-1.5 mt-2 flex-wrap">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${accent.soft} ${accent.text}`}>
              {project.industry}
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] text-secondary/45 font-medium">
              <PinIcon className="w-2.5 h-2.5" />
              {project.location}
            </span>
          </div>

          <p className="text-xs text-secondary/55 leading-relaxed mt-2 line-clamp-2 flex-1">{project.description}</p>

          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-secondary/8">
            <span className={`inline-flex items-center justify-center w-7 h-7 rounded-lg ${accent.soft} ${accent.text} shrink-0`}>
              <TrendIcon />
            </span>
            <div className="leading-none">
              <p className="text-sm font-display font-extrabold text-secondary">{project.visitors}</p>
              <p className="text-[9px] text-secondary/40 mt-0.5">{project.visitorLabel}</p>
            </div>
          </div>
        </div>
      </a>
    </Reveal>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-14 md:py-16 bg-white">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="eyebrow mb-3">Selected Work</p>
            <h2 className="display-heading text-3xl sm:text-4xl lg:text-5xl max-w-2xl">
              Real projects. <span className="gradient-text">Real growth.</span>
            </h2>
            <div className="flex items-center gap-1.5 mt-3">
              {accents.map((a) => (
                <span key={a.name} className={`w-2 h-2 rounded-full ${a.dot}`} />
              ))}
            </div>
          </div>
          <p className="section-subheading max-w-xs text-sm">
            Every project below is a live business website — built around real goals, not templates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} accent={accentAt(i)} delay={i * 40} />
          ))}
        </div>
      </div>
    </section>
  )
}
