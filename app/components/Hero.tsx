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
                className="absolute right-6 bottom-6 md:right-12 md:bottom-12 z-20 w-64 md:w-72 rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl flex flex-col group cursor-pointer hover:border-white/20 transition-colors"
                whileHover={{ y: -5 }}
            >
                {/* Map Image container */}
                <div className="relative h-32 w-full overflow-hidden">
                    <Image
                        src="/map.png"
                        alt="Location Map"
                        fill
                        className="object-cover opacity-70 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100"
                    />
                    {/* Gradient overlay for blending */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                    {/* Location Pin or Badge floating */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                        <div className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                        </div>
                        <span className="text-[10px] font-bold text-white tracking-widest uppercase shadow-sm">Near You</span>
                    </div>
                </div>

                {/* Info Section */}
                <div className="p-4 flex items-center justify-between bg-gradient-to-br from-white/5 to-transparent">
                    <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 flex-shrink-0 drop-shadow-md transition-transform duration-500 group-hover:scale-110">
                            <Image
                                src="/logo.png"
                                alt="blüm logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-white leading-none tracking-tight">Blüm</span>
                            <span className="text-xs text-neutral-400 font-medium mt-1">Ulaanbaatar, UB</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-xl font-light text-white tracking-tighter">HQ</span>
                        <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Location</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
