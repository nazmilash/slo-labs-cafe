"use client";

import { MapPin, FileText, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-charcoal pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left: Info & Map */}
                <div className="space-y-8">
                    <div>
                        <h3 className="font-display text-3xl text-white mb-2">Visit The Lab</h3>
                        <p className="font-mono text-white/60">London, UK</p>
                    </div>

                    {/* Dark Map Embed */}
                    <div className="w-full h-64 relative overflow-hidden rounded-sm filter grayscale invert contrast-125 opacity-80 hover:opacity-100 transition-opacity">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.18237072596!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1705600000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

                {/* Right: Actions */}
                <div className="flex flex-col items-start md:items-end space-y-6">
                    <a
                        href="#" // PDF Link would go here
                        className="group flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 hover:border-sunset-yellow/50 transition-all duration-300"
                    >
                        <FileText className="w-5 h-5 text-sunset-yellow" />
                        <span className="font-mono text-xs tracking-widest text-white group-hover:text-sunset-yellow uppercase">View Full Menu (PDF)</span>
                    </a>

                    <div className="flex gap-4">
                        <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-white/10 hover:text-sunset-orange transition-colors text-white/50">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-white/10 hover:text-sunset-orange transition-colors text-white/50">
                            <MapPin className="w-5 h-5" />
                        </a>
                    </div>

                    <p className="font-sans text-xs text-white/30 pt-12">
                        © 2026 Slow Labs. Engineered for silence.
                    </p>
                </div>
            </div>
        </footer>
    );
}
