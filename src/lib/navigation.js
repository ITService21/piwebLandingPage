const THANK_YOU_HASH = '#thank-you'

export function homePath() {
  const base = import.meta.env.BASE_URL || '/'
  return base.endsWith('/') ? base : `${base}/`
}

export function thankYouPath() {
  return `${homePath()}${THANK_YOU_HASH}`
}

export function isThankYouPath(hash = window.location.hash) {
  return hash === THANK_YOU_HASH
}

export function goToThankYou() {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', {
      event_category: 'form',
      event_label: 'thank_you',
    })
  }
  window.location.hash = THANK_YOU_HASH
}

export function assetPath(path) {
  return `${homePath()}${path.replace(/^\/+/, '')}`
}
