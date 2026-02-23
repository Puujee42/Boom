"use client";

import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
    return (
        <main className="min-h-screen bg-black overflow-x-hidden selection:bg-white selection:text-black">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]">
                        The Art of <br />
                        <span className="text-neutral-500">Curation.</span>
                    </h1>
                </motion.div>
            </section>

            {/* Image & Manifesto Section */}
            <section className="py-20 md:py-32 border-t border-neutral-900 bg-neutral-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/2 relative aspect-[4/5] overflow-hidden"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2000"
                                alt="Minimalist Architecture"
                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
                            />
                        </motion.div>

                        {/* Text Content */}
                        <div className="w-full lg:w-1/2 space-y-10">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-neutral-500 mb-4">Our Philosophy</h2>
                                <p className="text-2xl sm:text-3xl font-light leading-snug text-white">
                                    We believe that spaces shape experiences. blüm was founded on the principle that aesthetics and atmosphere are not secondary to service—they are the service.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <p className="text-lg text-neutral-400 font-light leading-relaxed">
                                    Our directory is not for everyone. It is a meticulously filtered collection of environments that understand the assignment: monochrome elegance, intentional design, and an unwavering commitment to quality. Whether it's the stark acoustics of a private karaoke suite or the brutalist concrete of a basement espresso bar, every location in blüm has earned its place.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principles Section */}
            <section className="py-24 md:py-40 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-16 text-center uppercase"
                    >
                        Core Principles
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-neutral-800 pt-16">
                        {[
                            { title: "Aesthetic Rigor", desc: "No compromises on visual identity. We prioritize spaces that understand the power of restraint." },
                            { title: "Curated Excellence", desc: "Quality over quantity. We reject the noise to bring you only the definitive cultural hubs." },
                            { title: "Sensory Design", desc: "Lighting, sound, and texture must align flawlessly to create an immersive, unforgettable atmosphere." }
                        ].map((principle, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="space-y-4"
                            >
                                <div className="text-4xl font-light text-neutral-700">0{index + 1}</div>
                                <h3 className="text-xl font-bold tracking-tight text-white">{principle.title}</h3>
                                <p className="text-neutral-400 font-light leading-relaxed">{principle.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-white text-black text-center border-b border-neutral-300">
                <div className="max-w-3xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 uppercase">Join the Network.</h2>
                        <p className="text-lg text-neutral-600 mb-10 font-medium">Experience the city through our lens.</p>
                        <a href="/sign-up" className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold tracking-wide hover:scale-105 transition-transform">
                            Apply for Access
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
