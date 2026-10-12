import { accentAt } from '../lib/accentColors'

const items = [
  'Mobile Responsive',
  'SEO-Friendly Structure',
  'Fast Performance',
  'Custom Design',
  'Secure Development',
  'Post-Launch Support',
]

export default function TrustStrip() {
  const items = [
    'SEO-Friendly Structure',
    'Fast Performance',
    'Custom Design',
    'Secure Development',
    'Post-Launch Support',
    'Mobile Responsive',
  ]

  const renderItems = (track) =>
    items.map((item, i) => {
      const accent = accentAt(i)

      return (
        <div
          key={`${track}-${i}`}
          className="flex shrink-0 items-center"
        >
          <div className="group flex items-center gap-2.5 px-5 sm:px-7">

            {/* Bubbling beacon */}
            <span className="relative flex h-3 w-3 shrink-0 items-center justify-center">

              {/* Expanding pulse */}
              <span
                className={`
                  absolute h-3 w-3 rounded-full
                  ${accent.dot}
                  animate-beacon-pulse
                `}
                style={{
                  animationDelay: `${(i % 4) * 0.35}s`,
                }}
              />

              {/* Soft surrounding glow */}
              <span
                className={`
                  absolute h-4 w-4 rounded-full
                  ${accent.dot}
                  blur-[4px]
                  animate-beacon-glow
                `}
                style={{
                  animationDelay: `${(i % 4) * 0.35}s`,
                }}
              />

              {/* Bright center */}
              <span
                className={`
                  relative h-1.5 w-1.5 rounded-full
                  ${accent.dot}
                  shadow-[0_0_8px_currentColor]
                `}
              />
            </span>

            {/* Text */}
            <span
              className="
                text-xs
                font-medium
                tracking-[0.03em]
                text-white/55
                transition-colors
                duration-300
                group-hover:text-white/90
                sm:text-sm
              "
            >
              {item}
            </span>

            {/* Arrow */}
            <svg
              className="
                h-3 w-3
                text-white/20
                transition-all
                duration-300
                group-hover:translate-x-0.5
                group-hover:text-pink-300/70
              "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m-5-5 5 5-5 5"
              />
            </svg>
          </div>

          {/* Separator */}
          <span className="h-px w-8 bg-white/[0.08] sm:w-12" />
        </div>
      )
    })

  return (
    <section
      className="
        relative
        overflow-hidden
        border-y border-white/[0.08]
        bg-[#0B0E1A]
        py-3.5
      "
    >

      {/* =========================================================
          AMBIENT POLYMORPHIC GLOW
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-24
          top-1/2
          h-32
          w-80
          -translate-y-1/2
          rounded-full
          bg-pink-500/[0.08]
          blur-3xl
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          top-1/2
          h-32
          w-80
          -translate-y-1/2
          rounded-full
          bg-purple-500/[0.08]
          blur-3xl
        "
        aria-hidden="true"
      />

      {/* Center blue/purple ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-20
          w-[28rem]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/[0.035]
          blur-3xl
        "
        aria-hidden="true"
      />

      {/* =========================================================
          EDGE FADE
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-10
          w-20
          bg-gradient-to-r
          from-[#0B0E1A]
          to-transparent
          sm:w-28
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          z-10
          w-20
          bg-gradient-to-l
          from-[#0B0E1A]
          to-transparent
          sm:w-28
        "
        aria-hidden="true"
      />

      {/* =========================================================
          CONTINUOUS MARQUEE
      ========================================================= */}

      <div className="relative overflow-hidden">
        <div className="flex w-max animate-services-marquee">

          {/* First track */}
          <div className="flex shrink-0 items-center">
            {renderItems('first')}
          </div>

          {/* Exact duplicate for seamless infinite movement */}
          <div className="flex shrink-0 items-center">
            {renderItems('second')}
          </div>

        </div>
      </div>
    </section>
  )
}

