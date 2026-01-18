import type { Metadata } from "next";
import { Inter, Syne, Roboto_Mono } from "next/font/google"; // Switched to Inter
import "./globals.css";
import clsx from "clsx";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const syne = Syne({
    subsets: ["latin"],
    variable: "--font-syne",
    display: "swap",
});

const robotoMono = Roboto_Mono({
    subsets: ["latin"],
    variable: "--font-roboto-mono",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Slow Labs | The Science of Slow",
    description: "Precision coffee. Engineered for silence.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={clsx(inter.variable, syne.variable, robotoMono.variable)}>
            <body className="font-sans bg-charcoal text-white antialiased overflow-x-hidden selection:bg-sunset-red selection:text-white">
                {children}
            </body>
        </html>
    );
}
