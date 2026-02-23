"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { mockPlaces, Category, Place } from "../data/places";
import PlaceCard from "./PlaceCard";
import PlaceDetailsModal from "./PlaceDetailsModal";

export default function PlacesGrid() {
    const [activeCategory, setActiveCategory] = useState<Category>("All");
    const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

    const categories: Category[] = ["All", "Cafe", "Restaurant", "Bar", "Karaoke", "Billiards"];

    const filteredPlaces = activeCategory === "All"
        ? mockPlaces
        : mockPlaces.filter(place => place.category === activeCategory);

    return (
        <section id="places" className="bg-black py-24 min-h-screen">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="mb-16 flex flex-col md:flex-row items-center md:items-end justify-between gap-12 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 flex flex-col items-start gap-8"
                    >
                        <div>
                            <h2 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl">THE CURATION</h2>
                            <p className="mt-4 max-w-xl text-neutral-400 font-light">
                                Discover spaces redefining local culture. Sorted meticulously for your convenience.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${activeCategory === category
                                        ? "text-black"
                                        : "text-neutral-400 hover:text-white"
                                        }`}
                                >
                                    {activeCategory === category && (
                                        <motion.div
                                            layoutId="activeCategoryIndicator"
                                            className="absolute inset-0 rounded-full bg-white z-0"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{category}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Weather-like Location Map Widget */}
                    <div className="w-full md:w-auto flex justify-center md:justify-end">
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                            className="w-full sm:w-80 rounded-[2rem] p-4 bg-gradient-to-b from-[#7A86B6]/20 to-[#5B6382]/20 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col group cursor-pointer hover:border-white/20 transition-all duration-500"
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
                            <div className="relative h-[180px] w-full rounded-[1.5rem] overflow-hidden bg-[#2A2D3A]">
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
                </div>

                {filteredPlaces.length === 0 ? (
                    <div className="flex h-64 items-center justify-center border border-dashed border-neutral-800">
                        <p className="text-neutral-500">No places found in this category.</p>
                    </div>
                ) : (
                    <motion.div
                        layout
                        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredPlaces.map((place, index) => (
                                <motion.div
                                    key={place.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    onClick={() => setSelectedPlace(place)}
                                >
                                    <PlaceCard place={place} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>

            <PlaceDetailsModal
                place={selectedPlace}
                isOpen={!!selectedPlace}
                onClose={() => setSelectedPlace(null)}
            />
        </section>
    );
}
