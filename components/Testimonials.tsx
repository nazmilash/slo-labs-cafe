export default function Testimonials() {
    const reviews = [
        { text: "It's not just coffee. It's a reset button for my entire day.", author: "Sarah Jenkins", role: "Creative Director" },
        { text: "Finally, a cold brew that understands the difference between strength and bitterness.", author: "Marcus Thorne", role: "Architect" },
        { text: "I stopped going to coffee shops. This is better, and it's in my fridge.", author: "Elena Rodriguez", role: "Software Engineer" },
    ];

    return (
        <div className="w-full max-w-6xl mx-auto px-8">
            <div className="grid md:grid-cols-3 gap-12">
                {reviews.map((review, i) => (
                    <div key={i} className="flex flex-col space-y-6">
                        <div className="flex items-center space-x-2 text-subtle">
                            <span className="text-amber-500 text-xs">★★★★★</span>
                            <span className="text-[10px] uppercase tracking-wider text-neutral-500">Verified Buyer</span>
                        </div>
                        <p className="font-sans text-lg text-neutral-200 leading-relaxed font-light">
                            "{review.text}"
                        </p>
                        <div>
                            <p className="font-sans text-sm text-white font-medium">{review.author}</p>
                            <p className="font-sans text-xs text-neutral-500">{review.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
