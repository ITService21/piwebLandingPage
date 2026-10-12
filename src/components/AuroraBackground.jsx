// Slow-drifting gradient aurora — a distinct backdrop theme from the Hero's
// constellation network, used for the Enquiry section.
export default function AuroraBackground({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <div className="absolute -top-1/3 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-500/35 to-fuchsia-500/20 blur-[110px] animate-aurora-1" />
      <div className="absolute top-1/4 -right-1/4 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-indigo-500/30 to-blue-400/15 blur-[120px] animate-aurora-2" />
      <div className="absolute -bottom-1/3 left-1/4 w-[560px] h-[560px] rounded-full bg-gradient-to-br from-primary/25 to-purple-500/15 blur-[120px] animate-aurora-3" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M40 0H0v40' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  )
}
