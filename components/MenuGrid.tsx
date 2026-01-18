"use client";

import clsx from "clsx";

const MENU_ITEMS = [
    {
        symbol: "Cb",
        name: "Cold Brew",
        notes: "Chocolatey, Nutty, Smooth",
        acidity: 20,
        body: 80,
        sweetness: 60,
        description: "18-hour cold extraction.",
    },
    {
        symbol: "Ep",
        name: "Espresso",
        notes: "Bright, Citrus, Floral",
        acidity: 80,
        body: 50,
        sweetness: 40,
        description: "Double shot standard.",
    },
    {
        symbol: "Po",
        name: "Pour Over",
        notes: "Tea-like, Clean, Complex",
        acidity: 70,
        body: 30,
        sweetness: 50,
        description: "V60 Hand Brew.",
    },
    {
        symbol: "La",
        name: "Latte",
        notes: "Creamy, Sweet, Comfort",
        acidity: 30,
        body: 70,
        sweetness: 70,
        description: "Silky steamed milk.",
    },
    {
        symbol: "Am",
        name: "Americano",
        notes: "Bold, Crisp, Classic",
        acidity: 50,
        body: 40,
        sweetness: 10,
        description: "Espresso over water.",
    },
    {
        symbol: "Ma",
        name: "Matcha",
        notes: "Umami, Vegetal, Rich",
        acidity: 10,
        body: 60,
        sweetness: 40,
        description: "Ceremonial grade Uji.",
    },
];

export default function MenuGrid() {
    return (
        <section className="py-24 px-4 bg-charcoal relative w-full">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="font-display text-4xl text-white mb-2">Periodic Flavors</h2>
                    <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-sunset-red to-transparent mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 persp-1000">
                    {MENU_ITEMS.map((item, idx) => (
                        <FlipCard key={idx} item={item} />
                    ))}
                </div>
            </div>
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none bg-radial-sunset opacity-10" />
        </section>
    );
}

function FlipCard({ item }: { item: any }) {
    return (
        <div className="group relative h-80 w-full perspective-1000">
            <div className="relative h-full w-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
                {/* Front */}
                <div className="absolute inset-0 h-full w-full backface-hidden bg-white/5 backdrop-blur-md border border-white/10 p-8 flex flex-col justify-between rounded-sm">
                    <div className="absolute top-4 right-4 text-xs font-mono text-white/40">{item.description}</div>

                    <div className="mt-8">
                        <h3 className="font-display text-6xl text-white group-hover:text-sunset-yellow transition-colors">{item.symbol}</h3>
                        <p className="font-mono text-sm text-sunset-orange mt-2 tracking-widest uppercase">{item.name}</p>
                    </div>

                    {/* Corner decoration */}
                    <div className="absolute bottom-0 left-0 w-8 h-[1px] bg-white/20" />
                    <div className="absolute bottom-0 left-0 w-[1px] h-8 bg-white/20" />
                </div>

                {/* Back */}
                <div className="absolute inset-0 h-full w-full backface-hidden rotate-y-180 bg-black/90 border border-sunset-red/30 p-8 flex flex-col justify-center rounded-sm">
                    <h4 className="font-display text-2xl text-white mb-4">{item.name}</h4>
                    <p className="font-sans text-sm text-white/70 mb-6 italic">"{item.notes}"</p>

                    {/* Pseudo chart bars */}
                    <div className="space-y-3 font-mono text-xs text-white/50">
                        <div className="flex items-center gap-2">
                            <span className="w-16">Acidity</span>
                            <div className="flex-1 h-1 bg-white/10 overflow-hidden">
                                <div style={{ width: `${item.acidity}%` }} className="h-full bg-sunset-yellow" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-16">Body</span>
                            <div className="flex-1 h-1 bg-white/10 overflow-hidden">
                                <div style={{ width: `${item.body}%` }} className="h-full bg-sunset-orange" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-16">Sweet</span>
                            <div className="flex-1 h-1 bg-white/10 overflow-hidden">
                                <div style={{ width: `${item.sweetness}%` }} className="h-full bg-sunset-red" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
