"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useSpring } from "framer-motion";

export default function SlowSequence() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    const { scrollYProgress } = useScroll();

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Load images
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const totalFrames = 191;

            for (let i = 0; i <= totalFrames; i++) {
                const img = new Image();
                const filename = i.toString().padStart(3, '0') + '.jpg';
                // Add cache buster or ensure cache is valid
                img.src = `/coffee_frames/${filename}`;
                await new Promise((resolve) => {
                    // Simply continue, don't block too long
                    img.onload = () => resolve(true);
                    img.onerror = () => resolve(true);
                });
                loadedImages.push(img);
            }
            setImages(loadedImages);
        };

        loadImages();
    }, []);

    // Render frame based on scroll
    useEffect(() => {
        if (!canvasRef.current || images.length === 0) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Use the first image to set dimensions
        if (images[0]) {
            canvas.width = images[0].naturalWidth;
            canvas.height = images[0].naturalHeight;
        }

        const updateFrame = () => {
            const progress = smoothProgress.get();
            const frameIndex = Math.min(
                Math.max(Math.floor(progress * (images.length - 1)), 0),
                images.length - 1
            );
            const img = images[frameIndex];
            if (img) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0);
            }
        };

        const unsubscribe = smoothProgress.on("change", updateFrame);
        updateFrame();

        return () => unsubscribe();
    }, [images, smoothProgress]);

    return (
        <div ref={containerRef} className="sticky top-0 w-full h-screen flex items-center justify-center bg-black overflow-hidden pointer-events-none">
            <canvas
                ref={canvasRef}
                className="w-full h-full object-contain"
                style={{ opacity: images.length > 0 ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
            />
        </div>
    );
}
