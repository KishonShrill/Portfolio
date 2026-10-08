import Link from "vinext/shims/link";
import { RevealObserver } from "./components/RevealObserver";
import { NetworkAuthForm } from "./components/NetworkAuthForm";
import { AnimejsObserver } from "./components/AnimejsObserver";

export default function Home() {
    return (
        <>
            <RevealObserver />
            <AnimejsObserver />

            <header className="fixed top-0 left-0 w-full z-50 bg-ivory border-b-system flex flex-col">
                {/* Top Utility Bar */}
                <div className="select-none flex justify-between items-center px-4 py-2 border-b-system font-meta text-xs uppercase bg-cream">
                    <div className="flex gap-4">
                        <span className="flex items-center gap-1">
                            <span className="w-2 h-2 bg-accent-red rounded-full animate-blink" /> SYS.ONLINE
                        </span>
                        <span className="hidden sm:inline">LAT: 35.6762° N // LONG: 139.6503° E</span>
                    </div>
                    <div>VER. 2.4.9</div>
                </div>

                {/* Main Nav */}
                <nav className="flex justify-between items-stretch h-16">
                    {/* Logo */}
                    <a
                        href="#"
                        className="flex items-center px-6 border-r-system font-display text-2xl tracking-tighter uppercase hover:bg-charcoal hover:text-ivory transition-colors"
                    >
                        C/L/J/P<span className="text-accent-red animate-spin-slow ml-1">✧</span>
                    </a>

                    {/* Links (Desktop) */}
                    <div className="hidden md:flex flex-1">
                        <a
                            href="#overview"
                            className="flex-1 flex items-center justify-center border-r-system font-meta text-sm uppercase hover:bg-cream transition-colors"
                        >
                            Overview
                        </a>
                        <a
                            href="#database"
                            className="flex-1 flex items-center justify-center border-r-system font-meta text-sm uppercase hover:bg-cream transition-colors"
                        >
                            Database
                        </a>
                        <a
                            href="#archives"
                            className="flex-1 flex items-center justify-center border-r-system font-meta text-sm uppercase hover:bg-cream transition-colors"
                        >
                            Archives
                        </a>
                    </div>

                    {/* CTA */}
                    <a
                        href="#connect"
                        type="button"
                        className="w-fit px-8 bg-accent-red text-ivory flex items-center justify-center font-display text-xl uppercase tracking-tighter hover:bg-charcoal transition-colors border-l-system border-charcoal cursor-pointer"
                    >
                        Connect
                    </a>
                </nav>

                {/* Marquee Divider */}
                <div className="border-t-system bg-accent-mustard text-charcoal font-meta text-xs uppercase py-1 overflow-hidden">
                    <div className="ticker-container w-full select-none">
                        <div className="animate-marquee ticker-content">
                            /// DESIGN SYSTEM ENGAGED /// VISUAL HIERARCHY OVERRIDE /// EXPERIMENTAL PROTOCOL ACTIVE /// DESIGN SYSTEM ENGAGED /// VISUAL HIERARCHY OVERRIDE /// EXPERIMENTAL PROTOCOL ACTIVE{" "}
                        </div>
                        <div className="animate-marquee ticker-content" aria-hidden="true">
                            /// DESIGN SYSTEM ENGAGED /// VISUAL HIERARCHY OVERRIDE /// EXPERIMENTAL PROTOCOL ACTIVE /// DESIGN SYSTEM ENGAGED /// VISUAL HIERARCHY OVERRIDE /// EXPERIMENTAL PROTOCOL ACTIVE{" "}
                        </div>
                        <div className="animate-marquee ticker-content" aria-hidden="true">
                            /// DESIGN SYSTEM ENGAGED /// VISUAL HIERARCHY OVERRIDE /// EXPERIMENTAL PROTOCOL ACTIVE /// DESIGN SYSTEM ENGAGED /// VISUAL HIERARCHY OVERRIDE /// EXPERIMENTAL PROTOCOL ACTIVE{" "}
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-grow pt-[104px] pb-24 px-4 sm:px-8">
                {/* Hero Section */}
                <section className="lg:max-h-[calc(100dvh-123px)] relative flex flex-col justify-center py-8 lg:pb-12 lg:pt-16 overflow-hidden">
                    {/* Background Graphic Elements */}
                    <div className="absolute top-20 lg:top-10 right-10 w-32 h-32 border-system rounded-full opacity-15 pointer-events-none" />

                    {/* Central 4-Pointed Star & Animated Concentric Rings */}
                    <div className="max-lg:h-[70vh] absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none">
                        {/* Outer Big Circle (far away from the first circle) */}
                        <div className="absolute w-[440px] h-[440px] sm:w-[620px] sm:h-[620px] lg:w-[800px] lg:h-[800px] rounded-full border-3 border-charcoal/20 border-dashed animate-expand-retract" />

                        {/* Inner Circle surrounding the star */}
                        <div className="absolute w-36 h-36 rounded-full border-4 border-charcoal/30 animate-expand-retract" />

                        {/* Small 4-pointed Star */}
                        <svg
                            className="w-5 h-5 sm:w-7 sm:h-7 text-accent-red animate-spin-slow relative z-10 opacity-75"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 0C12 6.62742 6.62742 12 0 12C6.62742 12 12 17.3726 12 24C12 17.3726 17.3726 12 24 12C17.3726 12 12 6.62742 12 0Z" />
                        </svg>
                    </div>

                    <div className="h-full w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                        {/* Left: Massive Typography */}
                        <div className="h-full col-span-1 lg:col-span-7 flex flex-col items-start relative crosshair-tl crosshair-br p-4 sm:p-0">
                            <div className="select-none font-meta text-sm uppercase border-system px-3 py-1 mb-4 lg:mb-6 inline-flex items-center gap-2 bg-cream shadow-solid">
                                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C12 6.62742 6.62742 12 0 12C6.62742 12 12 17.3726 12 24C12 17.3726 17.3726 12 24 12C17.3726 12 12 6.62742 12 0Z" />
                                </svg>
                                Terminal Protocol
                            </div>

                            {/* Hero Text */}
                            <h1 className="mt-8 font-display text-[clamp(2.75rem,8.5vw,5.5rem)] lg:text-[clamp(3.5rem,5.8vw,6.5rem)] xl:text-[clamp(4.5rem,5.6vw,7.5rem)] leading-solid tracking-tighter uppercase flex flex-col select-none">
                                <span className="reveal-clip leading-10 md:leading-22 2xl:mb-4 tracking-tighter hover:tracking-wider cursor-pointer">
                                    THE
                                </span>
                                <span className="reveal-clip leading-10 md:leading-22 delay-100 flex items-center tracking-tighter hover:tracking-wider cursor-pointer">
                                    CODE
                                    <svg
                                        className="w-[0.8em] h-[0.8em] ml-4 text-accent-red animate-spin-slow inline-block shrink-0"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 0C12 6.62742 6.62742 12 0 12C6.62742 12 12 17.3726 12 24C12 17.3726 17.3726 12 24 12C17.3726 12 12 6.62742 12 0Z" />
                                    </svg>
                                </span>
                                <span className="reveal-clip leading-16 lg:leading-22 delay-200 text-accent-red flex! items-center gap-4">
                                    <span className="word-roller">
                                        <span className="word-roller-inner animate-roll-up pr-1">
                                            <span>IS</span>
                                            <span aria-hidden="true">IS</span>
                                        </span>
                                    </span>
                                    <span className="word-roller">
                                        <span className="word-roller-inner animate-roll-down">
                                            <span aria-hidden="true">TALKING.</span>
                                            <span>TALKING.</span>
                                        </span>
                                    </span>
                                </span>
                            </h1>

                            <ul className="lg:ml-8 mt-8 mb-16 pl-1 reveal-clip max-lg:w-full pr-4">
                                <li className="flex gap-8 py-4 border-b border-accent-red group cursor-pointer">
                                    <span className="text-accent-red font-black font-display">01</span>
                                    <div className="flex flex-col">
                                        <span className="text-4xl font-light font-meta leading-none group-hover:text-accent-red group-hover:translate-x-4 transition-transform">MY SOCIALS</span>
                                        <span className="text-sm mt-1">FIELD NOTE / 01</span>
                                    </div>
                                </li>
                                <Link href={"/chriscent_resume.pdf"} target="_blank" className="flex gap-8 py-4 border-b border-accent-red group cursor-pointer">
                                    <span className="text-accent-red font-black font-display">02</span>
                                    <div className="flex flex-col">
                                        <span className="text-4xl font-light font-meta leading-none group-hover:text-accent-red group-hover:translate-x-4 transition-transform">RESUME</span>
                                        <span className="text-sm mt-1">FIELD NOTE / 02</span>
                                    </div>
                                </Link>
                                <Link href={"/chriscent_resume.pdf"} target="_blank" download className="flex gap-8 py-4 border-b border-accent-red group cursor-pointer">
                                    <span className="text-accent-red font-black font-display">03</span>
                                    <div className="flex flex-col">
                                        <span className="text-4xl font-light font-meta leading-none group-hover:text-accent-red group-hover:translate-x-4 transition-transform">DOWNLOAD</span>
                                        <span className="text-sm mt-1">FIELD NOTE / 03</span>
                                    </div>
                                </Link>
                            </ul>

                            <div className="w-full mt-auto">
                                <div className="mt-4 font-meta text-accent-blue opacity-50 text-sm pointer-events-none scramble-text">
                                    [ SECTION // 00 ]
                                </div>
                                <div className="mt-4 max-w-lg w-full border-t-system pt-4 reveal-up delay-300">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-meta text-xs text-gray-500 uppercase">Input Node</p>
                                            <p className="font-meta font-bold scramble-text">A-77.X</p>
                                        </div>
                                        <div>
                                            <p className="font-meta text-xs text-gray-500 uppercase">Status</p>
                                            <p className="font-meta font-bold scramble-text">AWAITING COMMAND</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Editorial Image */}
                        <div className="max-lg:mx-4 col-span-1 lg:col-span-5 relative reveal-up delay-200 mt-8 lg:mt-0 flex justify-center lg:justify-end">
                            <div className="w-full max-w-170 relative">
                                {/* Decorative Brackets */}
                                <div className="absolute -top-4 -left-4 w-8 h-8 border-t-system border-l-system" />
                                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-system border-r-system" />

                                {/* Framed Image Component */}
                                <div className="border-system bg-white p-2 sm:p-4 shadow-solid-accent relative z-10 group">
                                    <div className="border-system overflow-hidden aspect-[4/5] bg-cream relative">
                                        {/* Placeholder simulating an urban structural photo */}
                                        <img
                                            //src="https://placehold.co/800x1000/cccccc/1a1a18?text=STRUCTURAL%5CnASSET"
                                            src="me.jpg"
                                            alt="Urban structural asset"
                                            className="img-editorial group-hover:scale-105 transition-transform duration-700 ease-out"
                                            draggable="false"
                                        />

                                        {/* Image Overlay UI */}
                                        <div className="absolute top-2 left-2 flex gap-1">
                                            <span className="w-8 h-2 bg-accent-mustard border-system block" />
                                            <span className="w-4 h-2 bg-accent-blue border-system block" />
                                        </div>
                                        <div className="absolute bottom-2 right-2 bg-ivory border-system font-meta text-[10px] px-1">
                                            FIG. 01
                                        </div>
                                    </div>
                                    {/* Caption Bar */}
                                    <div className="mt-2 flex justify-between items-center font-meta text-xs uppercase border-t-system pt-2">
                                        <span>Sector 4 Environment</span>
                                        <span className="flex items-center gap-1">
                                            View <span className="text-xl leading-none">→</span>
                                        </span>
                                    </div>
                                </div>

                                {/* Floating Graphic */}
                                <div className="absolute bottom-[-48px] left-1/2 max-lg:-translate-x-1/2 lg:top-1/2 lg:-left-12 transform lg:-translate-y-1/2 w-24 h-24 border-system rounded-full flex items-center justify-center bg-cream z-20 shadow-solid hidden sm:flex">
                                    <span className="select-none font-meta text-xs lg:rotate-[-90deg] uppercase tracking-widest text-center">
                                        Scan
                                        <br />
                                        Data
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Overview Section */}
                <section id="overview" className="scroll-mt-30 py-24 border-t-system relative">
                    <div className="grid grid-cols-1 auto-rows-auto md:grid-cols-12 gap-y-12 gap-x-8">
                        {/* Massive Number Marker */}
                        <div className="col-span-1 md:col-span-12 xl:col-span-3 flex flex-col justify-start reveal-up">
                            <span className="font-display text-[15vw] md:text-[8vw] leading-solid text-charcoal opacity-10">
                                01
                            </span>

                            <h2 className="font-display text-4xl uppercase mt-2">ARCHITECTURE</h2>
                            <div className="w-full h-2 bg-charcoal mt-4 mb-2" />
                            <p className="font-meta text-xs uppercase">Documenting the grid collapse.</p>
                        </div>

                        {/* Text Composition */}
                        <div className="col-span-1 md:col-span-9 xl:col-span-6 flex flex-col gap-8 reveal-up delay-100 font-meta">
                            <p className="text-lg leading-relaxed bg-cream p-6 border-system shadow-solid relative">
                                <span className="absolute top-0 left-0 bg-charcoal text-ivory text-xs px-2 py-1 transform -translate-y-full border-system border-b-0">
                                    LOG ENTRY
                                </span>
                                <span className="scramble-text">
                                    A Full-Stack Web Developer and Researcher with hands-on experience building responsive web applications,
                                    civic tech platforms, and AI-driven systems. Proficient in React, Next.js, Python, and MongoDB. Passionate about
                                    clean UI/UX, open-source collaboration, and leveraging technology to improve public services and solve
                                    real-world problems.
                                </span>
                            </p>

                            <div className="flex gap-4 items-center">
                                <div className="flex-1 border-t-system border-dashed" />
                                <div className="w-4 h-4 rounded-full border-system flex items-center justify-center">
                                    <div className="w-1 h-1 bg-charcoal rounded-full" />
                                </div>
                                <div className="flex-1 border-t-system border-dashed" />
                            </div>

                            <div className="columns-1 sm:columns-2 gap-8 text-sm">
                                <p className="mb-4 scramble-text">
                                    Avoid generic solutions. The composition demands visual tension. Typography acts as structural elements rather than mere content delivery vehicles.
                                </p>
                                <p className="scramble-text">
                                    We embrace the noise. The subtle grain of printed matter, the misalignment of registration marks. These imperfections ground the digital experience in tactile reality.
                                </p>
                            </div>
                        </div>

                        {/* Right Sidebar Graphics */}
                        <div className="col-span-1 md:col-span-3 flex flex-col gap-4 reveal-up delay-200">
                            <div className="border-system aspect-square bg-accent-blue relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMODggWk04IDBMMCA4IFoiIHN0cm9rZT0iIzFBMUExOCIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==')] opacity-50 mix-blend-multiply group-hover:scale-150 transition-transform duration-1000" />
                                <div className="absolute inset-0 flex items-center justify-center font-display text-ivory text-3xl mix-blend-difference">
                                    DATA_
                                </div>
                            </div>

                            {/* Data list */}
                            <ul className="border-system bg-ivory font-meta text-xs uppercase divide-y-2 divide-charcoal">
                                <li className="p-2 flex justify-between">
                                    <span>Vector</span> <span>[ACTIVE]</span>
                                </li>
                                <li className="p-2 flex justify-between">
                                    <span>Raster</span> <span>[OFFLINE]</span>
                                </li>
                                <li className="p-2 flex justify-between text-accent-red font-bold">
                                    <span>Motion</span> <span>[ENGAGED]</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Kinetic Banner Strip between Overview and Database */}
                <div className="relative -mx-4 sm:-mx-8 overflow-hidden select-none">
                    <div className="flex w-max animate-banner-roll">
                        {/* Set 1 */}
                        <div className="flex items-center shrink-0">
                            <div className="w-dvw banner-tail-mask flex items-center justify-between sm:gap-10 pl-6 sm:pl-10 pr-[40dvw] py-4 lg:py-8 bg-banner-gradient relative shrink-0">
                                {/* 5 Stars Olympic W-Formation */}
                                <svg
                                    className="w-16 h-8 sm:w-22 sm:h-11 shrink-0 rotate-270 
                                    max-[800px]:scale-65 max-[1150px]:scale-75 max-[1400px]:scale-100 max-[1750px]:scale-125 min-[1750px]:scale-150
                                    "
                                    viewBox="0 0 96 44"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M10 0C10 5.523 5.523 10 0 10C5.523 10 10 14.477 10 20C10 14.477 14.477 10 20 10C14.477 10 10 5.523 10 0Z"
                                        transform="translate(4, 2)"
                                        className="text-ivory"
                                    />
                                    <path
                                        d="M10 0C10 5.523 5.523 10 0 10C5.523 10 10 14.477 10 20C10 14.477 14.477 10 20 10C14.477 10 10 5.523 10 0Z"
                                        transform="translate(21, 22)"
                                        className="text-ivory"
                                    />
                                    <path
                                        d="M10 0C10 5.523 5.523 10 0 10C5.523 10 10 14.477 10 20C10 14.477 14.477 10 20 10C14.477 10 10 5.523 10 0Z"
                                        transform="translate(38, 2)"
                                        className="text-ivory"
                                    />
                                    <path
                                        d="M10 0C10 5.523 5.523 10 0 10C5.523 10 10 14.477 10 20C10 14.477 14.477 10 20 10C14.477 10 10 5.523 10 0Z"
                                        transform="translate(55, 22)"
                                        className="text-ivory"
                                    />
                                    <path
                                        d="M10 0C10 5.523 5.523 10 0 10C5.523 10 10 14.477 10 20C10 14.477 14.477 10 20 10C14.477 10 10 5.523 10 0Z"
                                        transform="translate(72, 2)"
                                        className="text-ivory"
                                    />
                                </svg>

                                {/* Middle Text */}
                                <span className="
                                    font-display 
                                    max-[700px]:text-lg max-[1150px]:text-3xl max-[1400px]:text-7xl max-[1750px]:text-8xl min-[1750px]:text-9xl 
                                    tracking-widest uppercase text-ivory font-black whitespace-nowrap
                                    "
                                >
                                    KISHON_SHRILL
                                </span>
                            </div>
                        </div>

                        {/* Set 2 (Seamless Duplicate) */}
                        <div className="flex items-center shrink-0">
                            <div className="w-dvw banner-tail-mask flex items-center justify-between sm:gap-10 pl-6 sm:pl-10 pr-[40dvw] py-4 lg:py-8 bg-banner-gradient relative shrink-0">
                                {/* 5 Stars Olympic W-Formation */}
                                <svg
                                    className="w-16 h-8 sm:w-22 sm:h-11 shrink-0 rotate-270 
                                    max-[800px]:scale-65 max-[1150px]:scale-75 max-[1400px]:scale-100 max-[1750px]:scale-125 min-[1750px]:scale-150
                                    "
                                    viewBox="0 0 96 44"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M10 0C10 5.523 5.523 10 0 10C5.523 10 10 14.477 10 20C10 14.477 14.477 10 20 10C14.477 10 10 5.523 10 0Z"
                                        transform="translate(4, 2)"
                                        className="text-ivory"
                                    />
                                    <path
                                        d="M10 0C10 5.523 5.523 10 0 10C5.523 10 10 14.477 10 20C10 14.477 14.477 10 20 10C14.477 10 10 5.523 10 0Z"
                                        transform="translate(21, 22)"
                                        className="text-ivory"
                                    />
                                    <path
                                        d="M10 0C10 5.523 5.523 10 0 10C5.523 10 10 14.477 10 20C10 14.477 14.477 10 20 10C14.477 10 10 5.523 10 0Z"
                                        transform="translate(38, 2)"
                                        className="text-ivory"
                                    />
                                    <path
                                        d="M10 0C10 5.523 5.523 10 0 10C5.523 10 10 14.477 10 20C10 14.477 14.477 10 20 10C14.477 10 10 5.523 10 0Z"
                                        transform="translate(55, 22)"
                                        className="text-ivory"
                                    />
                                    <path
                                        d="M10 0C10 5.523 5.523 10 0 10C5.523 10 10 14.477 10 20C10 14.477 14.477 10 20 10C14.477 10 10 5.523 10 0Z"
                                        transform="translate(72, 2)"
                                        className="text-ivory"
                                    />
                                </svg>

                                {/* Middle Text */}
                                <span className="
                                    font-display 
                                    max-[700px]:text-lg max-[1150px]:text-3xl max-[1400px]:text-7xl max-[1750px]:text-8xl min-[1750px]:text-9xl 
                                    tracking-widest uppercase text-ivory font-black whitespace-nowrap
                                    "
                                >
                                    KISHON_SHRILL
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Database Section */}
                <section
                    id="database"
                    className="py-24 scroll-mt-16 border-b-system relative bg-cream -mx-4 px-4 sm:-mx-8 sm:px-8"
                >
                    <div className="flex justify-between items-end mb-12 reveal-up">
                        <h2 className="font-display text-5xl sm:text-7xl uppercase leading-none tracking-tighter">
                            Visual
                            <br />
                            Database
                        </h2>
                        <div className="hidden sm:block font-meta text-right">
                            <div className="text-3xl font-bold">04</div>
                            <div className="text-xs uppercase">Items Indexed</div>
                        </div>
                    </div>

                    {/* Asymmetrical Grid Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10">
                        {/* Item 1 */}
                        <Link
                            className="md:col-span-5 flex flex-col group reveal-up"
                            href={"https://betteriligancity.org"}
                            target="_blank"
                        >
                            <div className="border-system bg-white p-2 shadow-solid relative">
                                <div className="absolute top-0 right-0 bg-charcoal text-ivory font-meta text-xs px-2 py-1 z-10">
                                    #001
                                </div>
                                <div className="border-system overflow-hidden bg-ivory aspect-square">
                                    <img
                                        //src="https://placehold.co/600x600/e0a938/1a1a18?text=WARNING"
                                        src="betteriligan-logo4.svg"
                                        alt="Warning Label Graphic"
                                        className="img-editorial group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className="mt-3 flex justify-between items-start font-meta uppercase">
                                <div>
                                    <h3 className="font-bold text-2xl md:text-lg leading-tight">BetterIliganCity.org</h3>
                                    <p className="text-sm md:text-xs text-gray-600 mt-1 scramble-text">a volunteer-led civic tech initiative to digitalize and streamline access to local governance, policies, and open data for Iligan City</p>
                                </div>
                                <div className="w-8 h-8 rounded-full border-system flex items-center justify-center transform -rotate-45 group-hover:bg-accent-red group-hover:text-ivory transition-colors">
                                    →
                                </div>
                            </div>
                        </Link>

                        {/* Item 2 (Offset) */}
                        <Link
                            className="md:col-span-7 md:mt-24 flex flex-col group reveal-up delay-100"
                            href={"https://citifix.betteriligancity.org"}
                            target="_blank"
                        >
                            <div className="border-system bg-white p-2 shadow-solid relative">
                                <div className="absolute top-0 left-0 bg-accent-blue text-ivory font-meta text-xs px-2 py-1 z-10 border-system border-t-0 border-l-0">
                                    #002
                                </div>
                                <div className="border-system overflow-hidden bg-ivory aspect-video">
                                    <img
                                        //src="https://placehold.co/800x450/5c748c/f4f1ea?text=INTERFACE"
                                        src="citifix.png"
                                        alt="Interface mockup"
                                        className="img-editorial group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className="mt-3 flex justify-between items-start font-meta uppercase">
                                <div>
                                    <h3 className="font-bold text-2xl md:text-lg leading-tight">CitiFIX BetterIliganCity</h3>
                                    <p className="text-sm md:text-xs text-gray-600 mt-1 scramble-text">A civic reporting platform for Iligan City that enables citizens to report infrastructure issues, view them on a map, and track resolution progress.</p>
                                </div>
                                <div className="w-8 h-8 rounded-full border-system flex items-center justify-center transform -rotate-45 group-hover:bg-accent-red group-hover:text-ivory transition-colors">
                                    →
                                </div>
                            </div>
                        </Link>

                        {/* Item 3 */}
                        <Link
                            className="md:col-span-8 flex flex-col group reveal-up"
                            href={"https://budgetbuddy.betteriligacity.org"}
                            target="_blank"
                        >
                            <div className="border-system bg-white p-2 shadow-solid relative">
                                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-90 origin-center bg-charcoal text-ivory font-meta text-xs px-2 py-1 z-10 tracking-widest">
                                    RESTRICTED
                                </div>
                                <div className="border-system overflow-hidden bg-ivory aspect-[2/1]">
                                    <img
                                        //src="https://placehold.co/1000x500/d34a36/f4f1ea?text=CORRIDOR"
                                        src="budgetbuddy.png"
                                        alt="Corridor shot"
                                        className="img-editorial group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className="mt-3 flex justify-between items-start font-meta uppercase">
                                <div>
                                    <h3 className="font-bold text-2xl md:text-lg leading-tight">Budget Buddy</h3>
                                    <p className="text-sm md:text-xs text-gray-600 mt-1 scramble-text">A budget expense tracker, budgeting, and price checking to enhance the livelihood and habits of the Iligan city people</p>
                                </div>
                                <div className="w-8 h-8 rounded-full border-system flex items-center justify-center transform -rotate-45 group-hover:bg-accent-red group-hover:text-ivory transition-colors">
                                    →
                                </div>
                            </div>
                        </Link>

                        {/* Text Block replacing Item 4 */}
                        <div
                            id="archives"
                            className="scroll-mt-40 target:ring-4 target:ring-blue-500 target:bg-blue-50 md:col-span-4 flex items-center justify-center border-system bg-ivory p-8 shadow-solid reveal-up delay-100"
                        >
                            <div className="font-display text-3xl uppercase text-center flex flex-col gap-4">
                                <svg className="w-12 h-12 rotate-45 mx-auto animate-spin-slow text-accent-mustard" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C12 6.62742 6.62742 12 0 12C6.62742 12 12 17.3726 12 24C12 17.3726 17.3726 12 24 12C17.3726 12 12 6.62742 12 0Z" />
                                </svg>
                                <span>
                                    Access
                                    <br />
                                    Full
                                    <br />
                                    Archive
                                </span>
                                <button
                                    type="button"
                                    className="font-meta text-sm border-system py-2 px-4 hover:bg-charcoal hover:text-ivory transition-colors mt-4 bg-white shadow-solid cursor-pointer"
                                >
                                    Initiate Sequence
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Network Section */}
                <section id="connect" className="py-32 relative flex flex-col items-center justify-center bg-charcoal text-ivory mt-24 border-system -mx-4 px-4 sm:-mx-8 sm:px-8 overflow-hidden crosshair-tl crosshair-br">
                    {/* Graphic Background elements */}
                    <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                        <svg
                            className="w-[150vw] h-[150vw] animate-spin-slow"
                            viewBox="0 0 100 100"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5"
                        >
                            <circle cx="50" cy="50" r="40" strokeDasharray="2 4" />
                            <circle cx="50" cy="50" r="20" />
                            <line x1="0" y1="50" x2="100" y2="50" />
                            <line x1="50" y1="0" x2="50" y2="100" />
                        </svg>
                    </div>

                    <div className="relative z-10 text-center flex flex-col items-center reveal-up">
                        <div className="font-meta text-xs uppercase text-accent-mustard mb-6 tracking-widest border border-accent-mustard px-4 py-1">
                            System Override Required
                        </div>

                        <h2 className="font-display text-[10vw] sm:text-[8vw] leading-none uppercase tracking-tighter mb-12">
                            Enter
                            <br />
                            The Network
                        </h2>

                        <NetworkAuthForm />
                    </div>

                    {/* Corner decorative tags */}
                    <div className="absolute bottom-4 left-4 font-meta text-[10px] text-gray-500">SEC: ZERO</div>
                    <div className="absolute bottom-4 right-4 font-meta text-[10px] text-gray-500">AUTH: PENDING</div>
                </section>
            </main >

            <footer className="border-t-system bg-cream px-4 sm:px-8 py-8 md:py-12 mt-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 font-meta text-sm uppercase">
                    {/* Logo area */}
                    <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
                        <div>
                            <span className="font-display text-4xl tracking-tighter">
                                C/H/R/I/S/C/E/N/T<span className="text-accent-red">✧</span>
                            </span>
                            <p className="mt-2 text-xs text-gray-600 max-w-xs scramble-text">
                                An experimental visual design system heavily inspired by urban editorial, motion graphics, and print media paradigms.
                            </p>
                        </div>
                        <div className="mt-8">&copy; 2024 / PROTOCOL ACTIVE</div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-2">
                        <p className="font-bold border-b-system pb-1 mb-2">Index</p>
                        <a href="#" className="hover:text-accent-red transition-colors flex justify-between">
                            <span>Manifesto</span> <span className="text-gray-400">01</span>
                        </a>
                        <a href="#" className="hover:text-accent-red transition-colors flex justify-between">
                            <span>Assets</span> <span className="text-gray-400">02</span>
                        </a>
                        <a href="#" className="hover:text-accent-red transition-colors flex justify-between">
                            <span>Network</span> <span className="text-gray-400">03</span>
                        </a>
                    </div>

                    {/* Social/Contact */}
                    <div className="flex flex-col gap-2">
                        <p className="font-bold border-b-system pb-1 mb-2">Comms</p>
                        <a
                            href="#"
                            className="hover:bg-charcoal hover:text-ivory border border-transparent px-1 -ml-1 transition-colors"
                        >
                            Twitter (X)
                        </a>
                        <a
                            href="#"
                            className="hover:bg-charcoal hover:text-ivory border border-transparent px-1 -ml-1 transition-colors"
                        >
                            Facebook
                        </a>
                        <a
                            href="#"
                            className="hover:bg-charcoal hover:text-ivory border border-transparent px-1 -ml-1 transition-colors"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
