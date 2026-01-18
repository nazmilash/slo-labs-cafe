export default function PeriodicTable() {
    const elements = [
        { symbol: "Pb", name: "Pour Over", details: "Delicate & Floral" },
        { symbol: "Ep", name: "Espresso", details: "Rich & Syrupy" },
        { symbol: "Cb", name: "Cold Brew", details: "Smooth & Chocolatey" },
        { symbol: "Ae", name: "Aeropress", details: "Clean & Sweet" },
        { symbol: "V6", name: "V60", details: "Bright & Complex" },
        { symbol: "Ch", name: "Chemex", details: "Crisp & Clear" },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto px-8">
            <div className="grid md:grid-cols-3 gap-px bg-neutral-900/50">
                {elements.map((el) => (
                    <div key={el.symbol} className="bg-black p-12 flex flex-col items-center text-center space-y-4 hover:bg-neutral-900 transition-colors duration-500 cursor-pointer group">
                        <div className="font-sans text-4xl font-light text-neutral-400 group-hover:text-white transition-colors">
                            {el.symbol}
                        </div>
                        <div className="space-y-1">
                            <div className="font-sans text-sm font-medium text-white tracking-wide uppercase">
                                {el.name}
                            </div>
                            <div className="font-sans text-xs text-neutral-600">
                                {el.details}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
