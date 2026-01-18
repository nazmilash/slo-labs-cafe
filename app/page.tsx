"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import HeroVideo from "@/components/HeroVideo";
import AestheticCollage from "@/components/AestheticCollage";
import MenuGrid from "@/components/MenuGrid";
import Footer from "@/components/Footer";

export default function Home() {

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <main className="flex min-h-screen flex-col bg-charcoal text-white overflow-hidden">
            <HeroVideo />
            <AestheticCollage subset="top" />
            <MenuGrid />
            <AestheticCollage subset="bottom" />
            <Footer />

            {/* Grain Overlay for Noir Vibe */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numJan=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
        </main>
    );
}
