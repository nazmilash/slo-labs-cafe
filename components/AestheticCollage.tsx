"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

// Grouping images into rows of 3
const rows = [
    [
        {
            src: "/images/barista_pour.jpeg",
            alt: "Extraction",
            caption: "Pour Over",
        },
        {
            src: "/images/crema_por.jpeg",
            alt: "Crema",
            caption: "Crema",
        },
        {
            src: "/images/barista_pour_2.jpeg",
            alt: "Pour",
            caption: "Precision",
        },
    ],
    [
        {
            src: "/images/matcha.png",
            alt: "Matcha and Double Baked Almond Croissant",
            caption: "Matcha and Frangipane",
        },
        {
            src: "/images/ice_latte.png",
            alt: "Iced",
            caption: "Iced Latte",
        },
        {
            src: "/images/crois_sando.png",
            alt: "Slow-cooked Beef Croissant Sandwich",
            caption: "Slow-cooked Beef Croissant Sandwich",
        }
    ]
];

export default function AestheticCollage({ subset = 'top' }: { subset?: 'top' | 'bottom' }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Select row based on subset
    const displayRows = subset === 'top' ? [rows[0]] : [rows[1]];

    return (
        <section ref={containerRef} className={clsx("relative w-full bg-charcoal", subset === 'top' ? "pt-24 pb-12" : "py-12")}>
            <div className="flex flex-col gap-0 md:gap-0">
                {subset === 'top' && (
                    <div className="mb-12 px-6 text-center">
                        <h2 className="font-display text-4xl md:text-6xl text-white mb-4">The Lab Specials</h2>
                        <p className="font-mono text-sunset-yellow text-xs tracking-widest uppercase opacity-80">Visual Evidence</p>
                    </div>
                )}

                {displayRows.map((row, rowIdx) => (
                    <div key={rowIdx} className="w-full flex flex-col md:flex-row h-[50vh] md:h-[80vh]">
                        {row.map((img, colIdx) => (
                            <div key={colIdx} className="relative flex-1 h-full w-full group overflow-hidden border-r border-charcoal/20">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="33vw"
                                />
                                <div className="absolute bottom-6 left-6 z-10">
                                    <span className="font-mono text-xs text-white/90 uppercase bg-black/50 backdrop-blur-md px-3 py-1">
                                        {img.caption}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
