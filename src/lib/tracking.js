// Google Ads / gtag conversion tracking.
// The base tag is loaded in index.html. Conversions are sent only when a conversion
// label is configured in .env (VITE_GADS_LABEL_*). No personal data is ever sent.

const ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID

const CONVERSIONS = {
  form: { label: import.meta.env.VITE_GADS_LABEL_FORM, event: 'generate_lead', dedupeMs: 30000 },
  whatsapp: { label: import.meta.env.VITE_GADS_LABEL_WHATSAPP, event: 'click_whatsapp', dedupeMs: 3000 },
  phone: { label: import.meta.env.VITE_GADS_LABEL_PHONE, event: 'click_phone', dedupeMs: 3000 },
}

const lastFired = {}

export function trackConversion(type) {
  const conversion = CONVERSIONS[type]
  if (!conversion || typeof window === 'undefined' || typeof window.gtag !== 'function') return

  const now = Date.now()
  if (lastFired[type] && now - lastFired[type] < conversion.dedupeMs) return
  lastFired[type] = now

  // Generic, non-PII event (visible in Tag Assistant / GA).
  window.gtag('event', conversion.event, { event_category: 'engagement', event_label: type })

  // Google Ads conversion — only once a real label has been supplied.
  if (ADS_ID && conversion.label) {
    window.gtag('event', 'conversion', { send_to: `${ADS_ID}/${conversion.label}` })
  }
}

export function trackFormSubmitted() {
  trackConversion('form')
}

// One delegated listener covers every tel: and WhatsApp link on the page.
export function initClickTracking() {
  document.addEventListener('click', (e) => {
    const link = e.target instanceof Element ? e.target.closest('a[href]') : null
    if (!link) return
    const href = link.getAttribute('href') || ''
    if (href.startsWith('tel:')) trackConversion('phone')
    else if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) trackConversion('whatsapp')
  })
}
