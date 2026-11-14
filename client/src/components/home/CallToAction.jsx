import React from 'react'

function CallToAction() {
  return (
   <section id='cta' className="py-20 px-6 bg-white">
            <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl bg-linear-to-br from-[#2693b0] via-[#31adcd] to-[#5ec6de] p-8 md:p-16 text-center shadow-2xl shadow-[#31adcd]/25">
                
                {/* Subtle Decorative Background Circles */}
                <div className="absolute -top-24 -left-24 size-72 rounded-full bg-white/15 blur-2xl pointer-events-none"></div>
                <div className="absolute -bottom-24 -right-24 size-72 rounded-full bg-[#E0F7FA]/25 blur-2xl pointer-events-none"></div>

                <div className="relative z-10 max-w-2xl mx-auto">
                    {/* Pill Badge */}
                    <span className="inline-block font-semibold text-xs uppercase tracking-wider text-white px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-xs border border-white/30">
                        Start For Free Today
                    </span>

                    {/* Main Headline */}
                    <h2 className="text-3xl md:text-5xl font-bold mt-5 text-white tracking-tight leading-tight">
                        Ready to turn your resume into interviews?
                    </h2>

                    {/* Supporting Subheadline */}
                    <p className="mt-4 text-[#E0F7FA] text-base md:text-lg leading-relaxed">
                        Upload your resume for a free instant ATS score, or build a recruiter-approved resume from scratch in under 5 minutes.
                    </p>

                    {/* Dual Action Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-[#2693b0] font-bold text-sm md:text-base shadow-lg hover:bg-[#F0F9FF] hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer">
                            <svg xmlns="http://w3.org" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="17 8 12 3 7 8" />
                                <line x1="12" x2="12" y1="3" y2="15" />
                            </svg>
                            <span>Analyze My Resume</span>
                        </button>

                        <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900/20 hover:bg-slate-900/30 text-white font-semibold text-sm md:text-base border border-white/40 backdrop-blur-xs hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer">
                            <span>Build From Scratch</span>
                            <svg xmlns="http://w3.org" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Micro-Trust Line */}
                    <p className="mt-6 text-xs text-white/90 font-medium">
                        No credit card required &bull; Instant PDF export &bull; 100% ATS-friendly
                    </p>
                </div>
            </div>
        </section>
  )
}

export default CallToAction
