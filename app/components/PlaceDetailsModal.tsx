"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Place } from "../data/places";
import { X, MapPin, Star, Clock, Phone, Globe, ChevronRight } from "lucide-react";

interface PlaceDetailsModalProps {
    place: Place | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function PlaceDetailsModal({ place, isOpen, onClose }: PlaceDetailsModalProps) {
    if (!place) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.4, type: "spring", bounce: 0.25 }}
                        className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-neutral-950 border border-neutral-800 shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh]"
                    >
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black md:bg-white/10"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        {/* Image Section */}
                        <div className="relative h-64 w-full md:h-auto md:w-5/12 flex-shrink-0">
                            <img
                                src={place.imageUrl}
                                alt={place.name}
                                className="h-full w-full object-cover grayscale opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 md:bg-gradient-to-r md:from-transparent md:to-neutral-950" />
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col p-6 md:p-10 w-full md:w-7/12 overflow-y-auto custom-scrollbar">
                            <div className="mb-4 flex items-center justify-between">
                                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                                    {place.category}
                                </span>
                                <div className="flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-sm font-semibold text-white">
                                    <Star className="h-4 w-4 fill-white" />
                                    {place.rating}
                                </div>
                            </div>

                            <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                                {place.name}
                            </h2>
                            <p className="mb-8 text-neutral-400 font-light leading-relaxed">
                                {place.description}
                                {" "}Experience the epitome of aesthetic design and cultural resonance in the heart of the city. We redefine expectations through curated sensory experiences.
                            </p>

                            {/* Contact & Info Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                <div className="flex items-start gap-4 p-4 rounded-xl border border-neutral-800/50 bg-neutral-900/30">
                                    <MapPin className="h-5 w-5 text-neutral-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">Location</p>
                                        <p className="text-sm text-neutral-200">{place.fullLocation}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-start gap-4 p-4 rounded-xl border border-neutral-800/50 bg-neutral-900/30 flex-1">
                                        <Clock className="h-5 w-5 text-neutral-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">Hours</p>
                                            <p className="text-sm text-neutral-200">{place.hours}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 rounded-xl border border-neutral-800/50 bg-neutral-900/30 flex-1">
                                        <Phone className="h-5 w-5 text-neutral-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">Contact</p>
                                            <p className="text-sm text-neutral-200">{place.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Menu / Offerings Section */}
                            <div className="mb-10">
                                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                    Signature Offerings
                                </h3>
                                <div className="space-y-6">
                                    {place.menu.map((item, index) => (
                                        <div key={index} className="group">
                                            <div className="flex items-baseline justify-between mb-1">
                                                <h4 className="text-base font-semibold text-neutral-200 group-hover:text-white transition-colors">{item.name}</h4>
                                                <div className="flex-1 mx-4 border-b border-dotted border-neutral-800 group-hover:border-neutral-600 transition-colors"></div>
                                                <span className="text-base font-medium text-white">{item.price}</span>
                                            </div>
                                            <p className="text-sm text-neutral-500 font-light pr-12">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto pt-4 flex gap-4 border-t border-neutral-800/50">
                                <button className="flex-1 rounded-full bg-white py-3.5 text-sm font-bold text-black transition-transform hover:scale-[1.02] flex items-center justify-center gap-2">
                                    Book Reservation
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                                <button className="flex h-[48px] px-6 items-center justify-center rounded-full border border-neutral-700 bg-transparent text-sm font-bold text-white transition-colors hover:bg-neutral-800">
                                    Directions
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
