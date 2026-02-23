"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
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
