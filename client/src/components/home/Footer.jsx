import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id='footer' className="bg-linear-to-t from-[#E0F7FA]/50 to-white border-t border-slate-200/80 pt-16 pb-10 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Top Grid: Brand + Navigation Columns */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200/70">

                    {/* Brand Column */}
                    <div className="md:col-span-1 space-y-4">
                        <div className="flex items-center gap-2.5">
                            <div className="size-9 rounded-xl bg-linear-to-br from-[#31adcd] to-[#2693b0] flex items-center justify-center text-white shadow-md shadow-[#31adcd]/25">
                                <img src="/logo2.png" alt="logo" />
                            </div>
                            <span className="text-xl font-bold text-slate-900 tracking-tight">
                                FitCheck<span className="text-[#31adcd]">CV</span>
                            </span>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Build recruiter-approved resumes and beat ATS filters with instant AI-powered feedback.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wider mb-4">
                            Product
                        </h4>
                        <ul className="space-y-2.5 text-sm text-slate-600">
                            <li><a href="#analyzer" className="hover:text-[#31adcd] transition-colors">ATS Resume Analyzer</a></li>
                            <li><a href="#builder" className="hover:text-[#31adcd] transition-colors">AI Resume Builder</a></li>
                            <li><a href="#templates" className="hover:text-[#31adcd] transition-colors">Resume Templates</a></li>
                            <li><a href="#rewriter" className="hover:text-[#31adcd] transition-colors">Bullet Point Rewriter</a></li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wider mb-4">
                            Resources
                        </h4>
                        <ul className="space-y-2.5 text-sm text-slate-600">
                            <li><a href="#guide" className="hover:text-[#31adcd] transition-colors">ATS Optimization Guide</a></li>
                            <li><a href="#examples" className="hover:text-[#31adcd] transition-colors">Resume Examples</a></li>
                            <li><a href="#tips" className="hover:text-[#31adcd] transition-colors">Interview Prep Tips</a></li>
                            <li><a href="#faq" className="hover:text-[#31adcd] transition-colors">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Legal & Support Links */}
                    <div>
                        <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wider mb-4">
                            Company
                        </h4>
                        <ul className="space-y-2.5 text-sm text-slate-600">
                            <li><a href="#about" className="hover:text-[#31adcd] transition-colors">About Us</a></li>
                            <li><a href="#privacy" className="hover:text-[#31adcd] transition-colors">Privacy Policy</a></li>
                            <li><a href="#terms" className="hover:text-[#31adcd] transition-colors">Terms of Service</a></li>
                            <li><a href="#contact" className="hover:text-[#31adcd] transition-colors">Contact Support</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Social Icons */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p>&copy; {currentYear} ResumeAI. All rights reserved.</p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a href="#twitter" aria-label="Twitter" className="p-2 rounded-lg text-slate-500 hover:text-[#31adcd] hover:bg-[#E0F7FA]/70 transition-colors">
                            <svg xmlns="http://w3.org" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                            </svg>
                        </a>
                        <a href="#linkedin" aria-label="LinkedIn" className="p-2 rounded-lg text-slate-500 hover:text-[#31adcd] hover:bg-[#E0F7FA]/70 transition-colors">
                            <svg xmlns="http://w3.org" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                        <a href="#github" aria-label="GitHub" className="p-2 rounded-lg text-slate-500 hover:text-[#31adcd] hover:bg-[#E0F7FA]/70 transition-colors">
                            <svg xmlns="http://w3.org" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
