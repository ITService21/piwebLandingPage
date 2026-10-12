import Reveal from './Reveal'
import { accents } from '../lib/accentColors'

function CheckIcon({ className }) {
  return (
    <svg className={`w-4 h-4 shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

const plans = [
  {
    name: 'Starter Website',
    price: 'Starting from ₹8,799',
    subtitle: 'Perfect for small businesses and startups that need a professional online presence.',
    features: [
      'Up to 5 Pages',
      'Enquiry / Contact Form',
      'Mobile Responsive',
      'Free SSL Certificate',
      'WhatsApp Integration',
      'Google Maps Integration',
      'Social Media Integration',
      'Basic SEO Setup',
      'Custom Website Design',
      '6-Month Support'
    ],
    featured: false,
    accent: accents[1],
  },
  {
    name: 'Business Website',
    price: 'Starting from ₹14,799',
    subtitle: 'For established businesses that need a comprehensive website with advanced features.',
    features: [
      'Free landing page worth ₹7K',
      'Free .in domain for 1 year',
      'Free hosting for 1 year',
      'Up to 12 pages',
      'Custom website design',
      'Mobile-responsive design',
      'Enquiry / contact form',
      'WhatsApp integration',
      'Google Maps integration',
      'Social media integration',
      'Basic SEO setup',
      'Google Search Console setup',
      'Google Analytics setup',
      'Click-to-call integration',
      'Image & content optimization',
      'Fast-loading pages',
      'SSL security',
      'Free 1 year support'
    ],
    featured: true,
    accent: accents[0],
  },
  {
    name: 'Custom Website',
    price: "Starting from ₹24,799",
    subtitle: 'For businesses with specific requirements, custom functionality or complex integrations.',
    features: [
      'Unlimited products',
      'Product listing & categories',
      'Product detail pages',
      'Product search & filters',
      'Shopping cart',
      'Checkout page',
      'Multiple payment gateway integration',
      'Order confirmation',
      'Order tracking',
      'Customer account & login',
      'Order history',
      'Wishlist',
      'Coupon & discount codes',
      'Product reviews & ratings',
      'Inventory management',
      'Shipping & delivery integration',
      'Tax & pricing configuration',
      'WhatsApp integration',
      'Email notifications',
      'SMS notifications',
      'API integrations',
      'Advanced SEO',
      'Mobile-responsive design',
      'Admin dashboard',
      'Analytics & conversion tracking',
      'Security & SSL',
      'Performance optimization',
      'Free 1 Year support'
    ],
    featured: false,
    accent: accents[2],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Pricing</p>
            <h2 className="display-heading text-4xl sm:text-5xl mb-4">Website development packages</h2>
            <p className="section-subheading">
              Final pricing depends on project scope, pages, functionality and integrations.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-14 border-t border-l border-secondary/10">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 120}>
              <div
                className={`h-full p-8 border-r border-b border-secondary/10 relative overflow-hidden ${
                  plan.featured ? 'bg-secondary text-white' : 'bg-white'
                }`}
              >
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${plan.accent.gradient}`} />

                {plan.featured && (
                  <span className={`inline-block ${plan.accent.dot} text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5`}>
                    Most Popular
                  </span>
                )}

                <h3 className={`text-xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-secondary'}`}>{plan.name}</h3>
                <p className={`text-2xl font-display font-extrabold mb-3 ${plan.featured ? plan.accent.textLight : plan.accent.text}`}>
                  {plan.price}
                </p>
                <p className={`text-sm leading-relaxed mb-8 ${plan.featured ? 'text-white/55' : 'text-secondary/55'}`}>
                  {plan.subtitle}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex items-center gap-2.5 text-sm ${plan.featured ? 'text-white/80' : 'text-secondary/70'}`}>
                      <CheckIcon className={plan.featured ? plan.accent.textLight : plan.accent.text} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className={plan.featured ? 'btn-primary w-full' : 'btn-secondary w-full'}>
                  Get a Quote
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
