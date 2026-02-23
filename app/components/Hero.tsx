"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <div className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-black py-20">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black z-10" />
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070"
                    alt="Atmospheric Restaurant"
                    className="h-full w-full object-cover grayscale"
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="z-10 mx-auto max-w-4xl px-4 text-center"
            >
                <motion.h1 variants={itemVariants} className="mb-6 text-6xl font-extrabold tracking-tighter text-white sm:text-7xl lg:text-8xl">
                    DISCOVER<br />THE <span className="text-neutral-500 italic font-serif">AESTHETIC.</span>
                </motion.h1>
                <motion.p variants={itemVariants} className="mx-auto mb-10 max-w-2xl text-lg text-neutral-400 sm:text-xl font-light">
                    Curated collection of the finest cafes, restaurants, bars, karaoke, and billiards. Found locally, designed globally.
                </motion.p>
                <motion.div variants={itemVariants} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                        href="#places"
                        className="rounded-full bg-white px-8 py-4 text-sm font-bold tracking-wide text-black transition-transform hover:scale-105"
                    >
                        Explore Places
                    </a>
                    <a
                        href="#about"
                        className="rounded-full border border-neutral-700 bg-transparent px-8 py-4 text-sm font-bold tracking-wide text-white transition-colors hover:bg-neutral-800"
                    >
                        Our Mission
                    </a>
                </motion.div>
            </motion.div>

            {/* Weather-like Location Widget */}
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                className="absolute right-6 bottom-6 md:right-12 md:bottom-12 z-20 w-72 md:w-[320px] rounded-[2rem] p-4 bg-gradient-to-b from-[#7A86B6]/60 to-[#5B6382]/60 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col group cursor-pointer hover:border-white/30 transition-all duration-500"
                whileHover={{ y: -5, scale: 1.02 }}
            >
                {/* Header */}
                <div className="flex items-center gap-1.5 mb-3 px-1 opacity-70">
                    <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12A10.06 10.06 0 0 0 12 2 10 10 0 0 0 2 12h20z" />
                        <path d="M12 12v8a2 2 0 0 0 4 0" />
                    </svg>
                    <span className="text-[11px] font-semibold text-white tracking-widest uppercase">Precipitation</span>
                </div>

                {/* Map Area */}
                <div className="relative h-[220px] w-full rounded-[1.5rem] overflow-hidden bg-[#454A5F]">
                    <Image
                        src="/map.png"
                        alt="Location Map"
                        fill
                        className="object-cover mix-blend-overlay opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80 group-hover:mix-blend-normal grayscale group-hover:grayscale-0"
                    />

                    {/* Map Content Overlay */}
                    <div className="absolute inset-0 z-10">
                        {/* Temperature Pin */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                            <div className="bg-[#8A95C5] border-[2px] border-white rounded-full w-[38px] h-[38px] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                                <span className="text-white text-[15px] font-bold tracking-tighter">-16</span>
                            </div>
                            <span className="text-white font-medium text-[10px] mt-1.5 drop-shadow-md">My Location</span>
                        </div>

                        {/* Cities */}
                        {/* Krasnoyarsk */}
                        <div className="absolute top-4 left-4 flex items-center gap-[3px] opacity-90">
                            <div className="w-[3px] h-[3px] rounded-full border-[0.5px] border-white bg-transparent"></div>
                            <span className="text-[9px] text-white font-semibold drop-shadow-md">Krasnoyarsk</span>
                        </div>

                        {/* Irkutsk */}
                        <div className="absolute top-[35%] left-[40%] flex items-center gap-[3px] opacity-90">
                            <div className="w-[3px] h-[3px] rounded-full border-[0.5px] border-white bg-transparent"></div>
                            <span className="text-[9px] text-white font-semibold drop-shadow-md">Irkutsk</span>
                        </div>

                        {/* Beijing */}
                        <div className="absolute bottom-6 right-4 flex items-center gap-[3px] opacity-90">
                            <div className="w-[3px] h-[3px] rounded-full border-[0.5px] border-white bg-transparent"></div>
                            <span className="text-[9px] text-white font-semibold drop-shadow-md">Beijing</span>
                        </div>

                        {/* Datong */}
                        <div className="absolute bottom-6 right-20 flex items-center gap-[3px] opacity-90">
                            <span className="text-[9px] text-white font-semibold drop-shadow-md">Datong</span>
                            <div className="w-[3px] h-[3px] rounded-full border-[0.5px] border-white bg-transparent"></div>
                        </div>

                        {/* Taiyuan */}
                        <div className="absolute bottom-2 right-12 flex items-center gap-[3px] opacity-90">
                            <div className="w-[3px] h-[3px] rounded-full border-[0.5px] border-white bg-transparent"></div>
                            <span className="text-[9px] text-white font-semibold drop-shadow-md">Taiyuan</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
