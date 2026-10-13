import { useState, useEffect, useRef } from 'react'
import { goToThankYou } from '../lib/navigation'

const requirements = ['Business Website', 'Corporate Website', 'E-commerce', 'Landing Page', 'Website Redesign', 'Custom Website', 'Other']
const budgets = ['Less than ₹15,000', '₹15,000 – ₹25,000', '₹25,000 – ₹50,000', '₹50,000 – ₹1,00,000', 'Above ₹1,00,000', 'Not Sure']

const FIRST_OPEN_DELAY = 5000
const REOPEN_INTERVAL = 90000

export default function LeadModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', businessName: '', requirement: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [phoneError, setPhoneError] = useState('')
  const hasOpenedRef = useRef(false)

  useEffect(() => {
    const handler = () => setIsOpen(true)
    window.addEventListener('openCallPopup', handler)
    return () => window.removeEventListener('openCallPopup', handler)
  }, [])

  useEffect(() => {
    if (isOpen) {
      hasOpenedRef.current = true
      return
    }
    const delay = hasOpenedRef.current ? REOPEN_INTERVAL : FIRST_OPEN_DELAY
    const timer = setTimeout(() => setIsOpen(true), delay)
    return () => clearTimeout(timer)
  }, [isOpen])

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const close = () => {
    setIsOpen(false)
    setSubmitted(false)
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '')
    if (value.length <= 10) {
      setForm({ ...form, phone: value })
      setPhoneError(value.length > 0 && value.length < 10 ? 'Enter 10-digit number' : '')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.phone.length !== 10) { setPhoneError('Please enter a valid 10-digit phone number'); return }
    setSending(true)
    try {
      await fetch('https://piwebtechnology.com/send-form-mail?company=piweb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'info@piwebtechnology.com',
          subject: 'Website Inquiry — Popup Form',
          fields: {
            Name: form.name, Phone: form.phone, Email: form.email,
            'Business Name': form.businessName, Requirement: form.requirement,
            Budget: form.budget, Message: form.message || 'Interested in website development.',
          },
        }),
      })
    } catch { /* continue */ }
    setSending(false)
    goToThankYou()
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-secondary/60 backdrop-blur-sm" onClick={close} />
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx- 4 max-h-[92vh] overflow-y-auto animate-[popupIn_0.35s_cubic-bezier(0.16,1,0.3,1)]"
        onClick={(e) => e.stopPropagation()}
        >
        <button
          onClick={close}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-secondary/40 hover:text-secondary hover:bg-secondary/5 transition-colors z-10"
          aria-label="Close"
         >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Thank you!</h3>
              <p className="text-secondary/55 text-sm mb-5">We&apos;ll get back to you within 24 hours.</p>
              <button onClick={close} className="btn-primary text-sm">Close</button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <span className="eyebrow">Don&apos;t hesitate</span>
                <h3 className="font-display font-extrabold text-2xl text-secondary mt-2">Let&apos;s talk about your website</h3>
                <p className="text-secondary/55 text-sm mt-1">Call us now, message us on WhatsApp, or send a few details below.</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <a href="tel:+919351870445" className="btn-primary py-3.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
                <a href="https://wa.me/919351870445" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-secondary/15 text-secondary font-semibold py-3.5 rounded-full hover:border-secondary hover:bg-secondary hover:text-white transition-all text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                  WhatsApp
                </a>
              </div>

              <p className="text-xs font-semibold uppercase tracking-widest text-secondary/35 mb-4">Or send us a quick enquiry</p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your name *" className="input-field text-sm py-3" />
                  </div>
                  <div>
                    <input type="tel" value={form.phone} onChange={handlePhoneChange} placeholder="10-digit phone *" className={`input-field text-sm py-3 ${phoneError ? 'border-red-300' : ''}`} required inputMode="numeric" pattern="[0-9]{10}" maxLength={10} />
                    {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="input-field text-sm py-3" />
                  <input type="text" name="businessName" value={form.businessName} onChange={handleChange} placeholder="Business name" className="input-field text-sm py-3" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <select name="requirement" value={form.requirement} onChange={handleChange} className="input-field text-sm py-3">
                    <option value="">What do you need?</option>
                    {requirements.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                  <select name="budget" value={form.budget} onChange={handleChange} className="input-field text-sm py-3">
                    <option value="">Budget range</option>
                    {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <button type="submit" disabled={sending} className="btn-primary w-full py-3.5">
                  {sending ? 'Sending...' : 'Send Enquiry →'}
                </button>
                <p className="text-xs text-secondary/35 text-center">No spam. Just a conversation about your website needs.</p>
              </form>
            </>
          )}
        </div>
      </div>
      <style>{`@keyframes popupIn { from { opacity:0; transform:translateY(20px) scale(0.97); } to { opacity:1; transform:translateY(0) scale(1); } }`}</style>
    </div>
  )
}
