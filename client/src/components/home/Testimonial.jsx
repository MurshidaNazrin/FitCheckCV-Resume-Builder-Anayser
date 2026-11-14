import React from 'react';

function Testimonial() {
    const cardsData = [
        {
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
            name: 'Briar Martin',
            role: 'Frontend Developer',
            quote: 'My ATS score jumped from 54% to 92% in ten minutes. I landed three interviews the very next week!',
        },
        {
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
            name: 'Avery Johnson',
            role: 'Product Manager',
            quote: 'The AI bullet rewriter turned my vague job duties into strong metrics. Best resume tool I have used.',
        },
        {
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
            name: 'Jordan Lee',
            role: 'Data Analyst',
            quote: 'I had no idea my old PDF layout was breaking parser bots. Switched to a clean template here and got hired.',
        },
        {
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
            name: 'Samira Patel',
            role: 'UX Designer',
            quote: 'Super intuitive builder and instant keyword feedback. It saved me hours of tailoring resumes manually.',
        },
    ];

    const CreateCard = ({ card }) => (
        <div id='testimonials' className="p-5 rounded-xl mx-4 bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#31adcd]/50 transition-all duration-200 w-80 shrink-0">
            <div className="flex items-center gap-3">
                <img className="size-11 rounded-full object-cover" src={card.image} alt={card.name} />
                <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                        <p className="font-semibold text-sm text-slate-900">{card.name}</p>
                        <svg className="fill-[#31adcd]" width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" />
                        </svg>
                    </div>
                    <span className="text-xs text-slate-500">{card.role}</span>
                </div>
            </div>
            <p className="text-sm pt-4 text-slate-700 leading-relaxed">"{card.quote}"</p>
        </div>
    );

    return (
        <div>
            <style>{`
                @keyframes marqueeScroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }

                .marquee-inner {
                    animation: marqueeScroll 25s linear infinite;
                }

                .marquee-row:hover .marquee-inner {
                    animation-play-state: paused;
                }

                .marquee-reverse {
                    animation-direction: reverse;
                }
            `}</style>

            <section className="py-20 px-6 bg-white">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto">
                    <span className="inline-block font-semibold text-xs uppercase tracking-wider text-[#31adcd] px-4 py-1.5 rounded-full bg-[#E0F7FA] border border-[#31adcd]/30">
                        Success Stories
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 text-slate-900 tracking-tight">
                        Loved by job seekers who <span className="text-[#31adcd]">landed their dream roles.</span>
                    </h2>
                    <p className="mt-3 text-slate-600 text-base md:text-lg">
                        See how thousands of professionals used our AI resume analyzer to beat ATS filters and secure more interviews.
                    </p>
                </div>

                {/* Row 1 */}
                <div className="marquee-row w-full mx-auto max-w-6xl overflow-hidden relative mt-8">
                    <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-white to-transparent"></div>
                    <div className="marquee-inner flex transform-gpu w-max pt-4 pb-3">
                        {[...cardsData, ...cardsData].map((card, index) => (
                            <CreateCard key={`row1-${index}`} card={card} />
                        ))}
                    </div>
                    <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-white to-transparent"></div>
                </div>

                {/* Row 2 (Reverse) */}
                <div className="marquee-row w-full mx-auto max-w-6xl overflow-hidden relative">
                    <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-white to-transparent"></div>
                    <div className="marquee-inner marquee-reverse flex transform-gpu w-max pt-3 pb-6">
                        {[...cardsData, ...cardsData].map((card, index) => (
                            <CreateCard key={`row2-${index}`} card={card} />
                        ))}
                    </div>
                    <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-white to-transparent"></div>
                </div>
            </section>
        </div>
    );
}

export default Testimonial;

