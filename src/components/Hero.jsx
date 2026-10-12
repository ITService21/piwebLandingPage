import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import NetworkBackground from "./NetworkBackground";
import { accentAt } from "../lib/accentColors";

function TypewriterWord({ word, className = "" }) {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(word);
      return;
    }

    let timeout;
    if (phase === "typing") {
      if (text.length < word.length) {
        timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), 130);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), 1600);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(word.slice(0, text.length - 1)), 70);
      } else {
        timeout = setTimeout(() => setPhase("typing"), 500);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, phase, word]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span aria-hidden="true">
        {text}
        <span className="inline-block w-[3px] ml-0.5 h-[0.8em] -mb-[0.1em] bg-current animate-pulse" />
      </span>
      <span className="sr-only">{word}</span>
    </span>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function handlePhoneClick() {
  window.dispatchEvent(new Event("openCallPopup"));
}

const stats = [
  {
    label: "Websites delivered",
    value: "180+",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
        />
      </svg>
    ),
  },
  {
    label: "Years of experience",
    value: "6+",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    label: "Mobile-first builds",
    value: "100%",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: "Free landing page",
    value: "₹7,000",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
];

function LayeredShowcase() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto aspect-[4/5.4] sm:aspect-[5/5.6]">
      <div
        className="absolute inset-[-10%] rounded-full bg-primary/20 blur-[100px]"
        aria-hidden="true"
      />

      {/* Mini peek — Aarohan College */}
      <div className="absolute -top-[2%] left-[16%] w-[30%] -rotate-[9deg] rounded-lg overflow-hidden border border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] bg-white z-0 hidden sm:block">
        <div className="h-[2px] bg-gradient-to-r from-emerald-400 to-teal-500" />
        <div className="aspect-[16/11] overflow-hidden">
          <img src="/portfolio/arohan.jpg" alt="Aarohan College website" className="w-full h-full object-cover object-top" loading="eager" />
        </div>
      </div>

      {/* Mini peek — Pitama India */}
      <div className="absolute top-[42%] -right-[5%] w-[26%] rotate-[11deg] rounded-lg overflow-hidden border border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] bg-white z-0 hidden sm:block">
        <div className="h-[2px] bg-gradient-to-r from-lime-400 to-green-500" />
        <div className="aspect-[16/11] overflow-hidden">
          <img src="/portfolio/pitama.jpg" alt="Pitama India website" className="w-full h-full object-cover object-top" loading="eager" />
        </div>
      </div>

      {/* Mini peek — Optimal Classes */}
      <div className="absolute bottom-[4%] -left-[6%] w-[28%] -rotate-[12deg] rounded-lg overflow-hidden border border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] bg-white z-0 hidden sm:block">
        <div className="h-[2px] bg-gradient-to-r from-sky-400 to-blue-500" />
        <div className="aspect-[16/11] overflow-hidden">
          <img src="/portfolio/optimalclasses.jpg" alt="Optimal Classes website" className="w-full h-full object-cover object-top" loading="eager" />
        </div>
      </div>

      {/* Back frame */}
      <div className="absolute top-[10%] right-0 w-[68%] rotate-[4deg] rounded-xl overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-white z-10">
        <div className="h-[3px] bg-gradient-to-r from-violet-500 to-purple-600" />
        <div className="flex items-center gap-1.5 px-3 py-2 bg-secondary/5 border-b border-secondary/10">
          <span className="w-2 h-2 rounded-full bg-secondary/15" />
          <span className="w-2 h-2 rounded-full bg-secondary/15" />
          <span className="w-2 h-2 rounded-full bg-secondary/15" />
        </div>
        <div className="aspect-[16/11] overflow-hidden">
          <img
            src="/portfolio/viradiya.jpg"
            alt="Viradiya Associates website"
            className="w-full h-full object-cover object-top"
            loading="eager"
          />
        </div>
      </div>

      {/* Middle frame */}
      <div className="absolute top-[28%] left-0 w-[62%] -rotate-[3deg] rounded-xl overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-white z-20">
        <div className="h-[3px] bg-gradient-to-r from-orange-400 to-amber-500" />
        <div className="flex items-center gap-1.5 px-3 py-2 bg-secondary/5 border-b border-secondary/10">
          <span className="w-2 h-2 rounded-full bg-secondary/15" />
          <span className="w-2 h-2 rounded-full bg-secondary/15" />
          <span className="w-2 h-2 rounded-full bg-secondary/15" />
        </div>
        <div className="aspect-[16/11] overflow-hidden">
          <img
            src="/portfolio/growstartup.png"
            alt="Grow Startup website"
            className="w-full h-full object-cover object-top"
            loading="eager"
          />
        </div>
      </div>

      {/* Front, primary frame */}
      <div className="absolute bottom-[10%] right-[4%] w-[72%] rotate-[1.5deg] rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] bg-white z-30">
        <div className="h-[3px] bg-gradient-to-r from-primary via-fuchsia-500 to-blue-500" />
        <div className="flex items-center gap-2 px-4 py-2.5 bg-secondary/5 border-b border-secondary/10">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-secondary/15" />
            <span className="w-2.5 h-2.5 rounded-full bg-secondary/15" />
          </div>
          <div className="flex-1 mx-2">
            <div className="bg-white rounded-md px-3 py-1 text-[10px] text-secondary/40 text-center border border-secondary/10">
              growstartupbrandworks.com
            </div>
          </div>
        </div>
        <div className="aspect-[16/11] overflow-hidden">
          <img
            src="/portfolio/gsbrandworks.jpg"
            alt="A website built by Piweb Technology"
            className="w-full h-full object-cover object-top"
            loading="eager"
          />
        </div>
      </div>

      {/* Stat chip */}
      <div className="absolute -bottom-4 left-0 sm:-left-6 z-20 bg-white border border-secondary/10 rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] px-4 py-3 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-violet-500 to-blue-500" />
        <p className="font-display font-extrabold text-xl gradient-text leading-none">
          3,00,000+
        </p>
        <p className="text-[11px] text-secondary/50 mt-1 tracking-wide">
          monthly visitors on client sites
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-40 md:pt-48 pb-20 md:pb-28 bg-secondary overflow-hidden"
    >
      {/* Gradient glow orbs */}
      <div
        className="absolute -top-40 -left-40 w-[550px] h-[550px] rounded-full bg-primary/25 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 -right-40 w-[480px] h-[480px] rounded-full bg-blue-500/20 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-violet-500/15 blur-[120px]"
        aria-hidden="true"
      />

      {/* Floating outline shapes */}
      <div
        className="absolute top-[16%] left-[6%] w-12 h-12 border border-white/10 rotate-45 hidden sm:block"
        aria-hidden="true"
      />
      <div
        className="absolute top-[70%] left-[12%] w-7 h-7 rounded-full border border-primary/30 hidden sm:block"
        aria-hidden="true"
      />
      <div
        className="absolute top-[10%] right-[34%] w-9 h-9 border border-white/10 hidden lg:block"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        aria-hidden="true"
      />

      <NetworkBackground
        className="opacity-80"
        dotColors={["255, 255, 255", "233, 30, 99", "129, 140, 248"]}
        lineColor="255, 255, 255"
        linkDistance={140}
        maxSpeed={0.5}
        glow
      />

      <div className="container-page relative">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-sm pl-1.5 pr-4 py-1.5 mb-8">
            <span className="rounded-full bg-primary text-white text-[10px] font-bold px-2 py-0.5 tracking-wide">
              FREE
            </span>
            <span className="text-xs sm:text-[13px] font-semibold text-white/85">
              Landing page worth ₹7,000 — included with every project
            </span>
          </div>
        </Reveal>

        <div className="lg:grid lg:grid-cols-[1.15fr_0.85fr] gap-16 xl:gap-20 items-end">
          <Reveal>
            <h1 className="display-heading text-white text-[2.75rem] sm:text-6xl lg:text-[4.5rem] xl:text-[5.25rem]">
              We build websites
              <br />
              that move <span className="gradient-text">businesses</span>
              <br />
              <TypewriterWord word="forward" />.
            </h1>

            <p className="text-base sm:text-lg text-white/55 leading-relaxed max-w-lg mt-8">
              We design and develop high-performance websites for businesses
              that want to look credible, convert visitors and grow online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-9">
              <a href="#contact" className="btn-primary">
                Enquiry Now <span aria-hidden="true">→</span>
              </a>
              <a href="#portfolio" className="btn-outline-white">
                View Our Work
              </a>
            </div>

            <button
              type="button"
              onClick={handlePhoneClick}
              className="inline-flex items-center gap-2 text-white/55 font-medium hover:text-primary-300 transition-colors cursor-pointer mt-8 text-sm"
            >
              <PhoneIcon />
              <span>
                Prefer to talk?{" "}
                <span className="text-white font-semibold">
                  +91 93518 70445
                </span>
              </span>
            </button>
          </Reveal>

          <Reveal delay={150} className="mt-16 lg:mt-0">
            <LayeredShowcase />
          </Reveal>
        </div>

        <Reveal delay={250}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-16 md:mt-20">
            {stats.map((stat, i) => {
              const accent = accentAt(i);
              return (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-sm px-4 py-4 sm:px-5 sm:py-5 transition-all duration-400 ease-out hover:scale-[1.06] hover:bg-transparent hover:border-white/25 hover:shadow-[0_25px_45px_-15px_rgba(0,0,0,0.5)] cursor-default"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${accent.gradient} opacity-0 group-hover:opacity-25 transition-opacity duration-400`}
                    aria-hidden="true"
                  />
                  <span
                    className={`relative inline-flex w-8 h-8 rounded-lg items-center justify-center ${accent.soft} ${accent.text} mb-3 transition-transform duration-400 group-hover:scale-110`}
                  >
                    {stat.icon}
                  </span>
                  <p className="relative font-display font-extrabold text-lg sm:text-xl text-white leading-none">
                    {stat.value}
                  </p>
                  <p className="relative text-[11px] sm:text-xs text-white/45 mt-1.5 group-hover:text-white/70 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
