"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { mockPlaces, Place } from "../data/places";
import PlaceCard from "./PlaceCard";
import PlaceDetailsModal from "./PlaceDetailsModal";

export default function FeaturedPlaces() {
    // Select the top 3 highest-rated places
    const featured = [...mockPlaces]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

    return (
        <section id="featured" className="bg-neutral-950 py-24 border-y border-neutral-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">EDITOR'S PICKS</h2>
                    <p className="mt-4 text-neutral-400 font-light max-w-2xl mx-auto">
                        A curated selection of the absolute best venues for those who refuse to compromise on aesthetics and atmosphere.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {featured.map((place, index) => (
                        <motion.div
                            key={`featured-${place.id}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            onClick={() => setSelectedPlace(place)}
                        >
                            <PlaceCard place={place} />
                        </motion.div>
                    ))}
                </div>
            </div>

            <PlaceDetailsModal
                place={selectedPlace}
                isOpen={!!selectedPlace}
                onClose={() => setSelectedPlace(null)}
            />
        </section>
    );
}
