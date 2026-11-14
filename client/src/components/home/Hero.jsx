import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';

function Hero() {
    const [menuOpen, setMenuOpen] = React.useState(false);
    return (
        <>
            <style>
                {`
                    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
                    * {
                        font-family: "Poppins", sans-serif;
                    }
                `}
            </style>

            <section className='w-full bg-[url("https://assets.prebuiltui.com/components/hero-section/hero-grid-gradient-img.png")] bg-cover bg-center bg-no-repeat px-4 pb-10'>
                <nav className='flex items-center justify-between w-full md:px-16 lg:px-24 xl:px-32 py-4'>
                    <a href='https://prebuiltui.com' aria-label='Prebuilt UI Logo'>
                        <img src="/logo.png" alt="logo" width={130} />
                    </a>

                    {/* MENU LINKS */}
                    <div className={`max-md:fixed max-md:inset-0 max-md:bg-white/50 max-md:overflow-hidden max-md:transition-[width] max-md:duration-300 max-md:top-0 max-md:left-0 max-md:flex-col max-md:justify-center max-md:text-lg max-md:backdrop-blur flex items-center gap-8 ${menuOpen ? 'max-md:w-full' : 'max-md:w-0'}`} >
                        <a className='text-sm text-neutral-800' href='#'>Home</a>
                        <a className='text-sm text-neutral-800' href='#features'>Features</a>
                        <a className='text-sm text-neutral-800' href='#testimonials'>Testimonials</a>
                        <a className='text-sm text-neutral-800' href='#contact'>Contact</a>

                        <div className='flex flex-col items-center gap-3 md:hidden mt-2'>
                            <Link
                                to="/app?state=register"
                                onClick={() => setMenuOpen(false)}
                                className='px-6 py-2.5 bg-[#31adcd] hover:bg-[#3ccef6] active:scale-95 rounded-full text-white text-sm'
                            >
                                Get Started
                            </Link>
                            <Link
                                // to="/app?state=login"
                                to="/login"
                                onClick={() => setMenuOpen(false)}
                                className='px-6 py-2.5 border border-neutral-300 text-neutral-700 hover:bg-[#31adcd] hover:border-[#31adcd] hover:text-white active:scale-95 rounded-full text-sm transition'
                            >
                                Login
                            </Link>
                        </div>
                        <button aria-label='close menu' className='size-6 md:hidden' onClick={() => setMenuOpen(false)}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-x'>
                                <path d='M18 6 6 18M6 6l12 12' />
                            </svg>
                        </button>
                    </div>

                   
                    <div className='max-md:hidden flex items-center gap-3'>
                        <Link
                            to="/app?state=register"
                            className='px-6 py-2.5 bg-[#31adcd] hover:bg-[#3ccef6] active:scale-95 rounded-full text-white text-sm cursor-pointer transition'
                        >
                            Get Started
                        </Link>
                        <Link
                            // to="/app?state=login"
                            to="/login"
                            className='px-6 py-2.5 border border-neutral-300 text-neutral-700 hover:bg-[#31adcd] hover:border-[#31adcd] hover:text-white active:scale-95 rounded-full text-sm cursor-pointer transition'
                        >
                            Login
                        </Link>
                    </div>

                    {/* BURGER MENU */}
                    <button aria-label='menu burger' className='size-6 md:hidden' onClick={() => setMenuOpen(true)}>
                        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-align-justify'>
                            <path d='M3 12h18M3 18h18M3 6h18' />
                        </svg>
                    </button>
                </nav>


                <div className='w-full md:px-16 lg:px-24 xl:px-32 mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-8 pt-2 pb-10 md:py-10'>
                    {/* Left */}
                    <div className='flex flex-col items-center md:items-start'>

                        <h1 className="text-center md:text-left text-neutral-900 text-3xl md:text-4xl lg:text-[50px]/16 leading-tight font-semibold max-w-125 mt-2 md:mt-4">
                            Build a resume that beats the bots and wins the room.
                        </h1>
                        <p className="text-center md:text-left text-base/7 text-neutral-600 max-w-md mt-4 mx-auto md:mx-0">
                            Upload your current resume for instant ATS feedback, or build a recruiter-ready version from scratch in minutes.
                        </p>

                        <div className="flex items-center border gap-2 border-neutral-300 h-13 max-w-110 w-full rounded-full overflow-hidden mt-6 mx-auto md:mx-0">
                            <input type="email" placeholder="Enter your email" className="w-full h-full pl-6 outline-none text-sm bg-transparent text-neutral-600" required />
                            <button type="submit" className="bg-indigo-600 hover:bg-indigo-600 w-56 h-10 rounded-full text-sm text-slate-50 cursor-pointer mr-1.5">Subscribe now</button>
                        </div>

                        {/* Avatars + Stars */}
                        <div className="flex items-center mt-10 mx-auto md:mx-0">
                            <div className="flex -space-x-3 pr-3">
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" alt="user3" className="size-9 object-cover rounded-full border border-slate-50 hover:-translate-y-0.5 transition" />
                                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="user1" className="size-9 object-cover rounded-full border border-slate-50 hover:-translate-y-0.5 transition" />
                                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="user2" className="size-9 object-cover rounded-full border border-slate-50 hover:-translate-y-0.5 transition" />
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" alt="user3" className="size-9 object-cover rounded-full border border-slate-50 hover:-translate-y-0.5 transition" />
                            </div>

                            <div>
                                <div className="flex ">
                                    {Array(5).fill(0).map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-transparent fill-[#FF8F20]" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                    ))}
                                </div>
                                <p className="text-xs text-neutral-600">Used by 10,000+ users</p>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className='w-full max-w-95 sm:max-w-112.5 md:max-w-135 aspect-square mx-auto md:mx-0 flex justify-center items-center -mt-4 md:mt-0'>
                        <DotLottieReact
                            src="https://lottie.host/e38bbe62-d5f8-47f9-b99f-389c20935f69/tWJ0sG4qZu.lottie"
                            loop
                            autoplay
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero


