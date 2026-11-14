import React from 'react';

function Features() {
    const featuresData = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-[#31adcd] transition-transform duration-300 group-hover:scale-110">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="m9 15 2 2 4-4" />
                </svg>
            ),
            badge: "ATS Scanner",
            title: "Instant ATS Score & Audit",
            description: "Upload your resume to uncover missing keywords, formatting errors, and recruiter red flags in seconds.",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-[#31adcd] transition-transform duration-300 group-hover:scale-110">
                    <path d="M12 3v3m6.36-.64-2.12 2.12M21 12h-3m.64 6.36-2.12-2.12M12 21v-3m-6.36.64 2.12-2.12M3 12h3m-.64-6.36 2.12 2.12" />
                </svg>
            ),
            badge: "Most Popular",
            title: "AI Impact Rewriter",
            description: "Turn weak job duties into metric-driven bullet points tailored to your exact target role.",
            featured: true,
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-[#31adcd] transition-transform duration-300 group-hover:scale-110">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                </svg>
            ),
            badge: "Smart Builder",
            title: "Recruiter-Tested Templates",
            description: "Export clean, parser-friendly PDFs designed to pass automated filters and impress hiring managers.",
        }
    ];

    return (
        <section id='features' className="py-20 px-6 bg-linear-to-t from-[#E0F7FA]/60 via-white to-white">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto">
                <span className="inline-block font-semibold text-xs uppercase tracking-wider text-[#31adcd] px-4 py-1.5 rounded-full bg-[#E0F7FA] border border-[#31adcd]/30">
                    Powerful Features
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 text-slate-900 tracking-tight">
                    Everything you need to <span className="text-[#31adcd]">land the interview</span>
                </h2>
                <p className="mt-3 text-slate-600 text-base md:text-lg">
                    Stop guessing what hiring managers want. Analyze, optimize, and build a standout resume in minutes.
                </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-14">
                {featuresData.map((feature, index) => (
                    <div
                        key={index}
                        className={`group relative rounded-2xl transition-all duration-300 hover:-translate-y-1.5 ${
                            feature.featured
                                ? 'p-0.5 bg-linear-to-t from-[#31adcd] to-[#7bc0c5] shadow-xl shadow-[#31adcd]/15'
                                : 'border border-slate-200/80 hover:border-[#31adcd]/50 shadow-sm hover:shadow-xl hover:shadow-[#31adcd]/10'
                        }`}
                    >
                        <div className="h-full p-8 rounded-[14px] bg-white hover:bg-[#F0F9FF]/60 transition-colors duration-300 flex flex-col justify-between">
                            <div>
                                {/* Icon + Mini Tag Row */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="p-3 rounded-xl bg-[#E0F7FA]/80 border border-[#31adcd]/20">
                                        {feature.icon}
                                    </div>
                                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                                        feature.featured
                                            ? 'bg-[#31adcd] text-white'
                                            : 'bg-slate-100 text-slate-600'
                                    }`}>
                                        {feature.badge}
                                    </span>
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#2693b0] transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Subtle Interactive Footer Link */}
                            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-sm font-semibold text-[#31adcd]">
                                <span>Try this feature</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features;

