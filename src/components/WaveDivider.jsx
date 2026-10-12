// Layered wave shapes used as a soft transition into a dark section.
export default function WaveDivider({ fromClassName = 'text-paper', className = '' }) {
  return (
    <div className={`relative w-full overflow-hidden leading-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[70px] sm:h-[100px] block"
      >
        <path
          d="M0,40 C240,90 480,10 720,40 C960,70 1200,20 1440,50 L1440,120 L0,120 Z"
          className={fromClassName}
          fill="currentColor"
          opacity="0.35"
        />
        <path
          d="M0,60 C240,20 480,100 720,60 C960,30 1200,90 1440,60 L1440,120 L0,120 Z"
          className={fromClassName}
          fill="currentColor"
        />
      </svg>
    </div>
  )
}
