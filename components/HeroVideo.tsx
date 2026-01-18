"use client";

import { motion } from "framer-motion";

export default function HeroVideo() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-charcoal">
            {/* Cinematic Video Background - Removed mix-blend for visibility */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover opacity-80"
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
            </video>

            {/* Gradient Overlay for Vignette/Mood */}
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-transparent to-charcoal" />

            {/* Text Reveal Container */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center mix-blend-difference">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                >
                    <h1 className="font-display text-4xl md:text-9xl font-bold tracking-tight text-white uppercase text-center leading-none">
                        Brewing<br />Imminently<span className="animate-pulse text-sunset-yellow">_</span>
                    </h1>
                </motion.div>

                {/* Optional: Subtle Glow Accents */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sunset-red/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            </motion.div>
        </section>
    );
}
