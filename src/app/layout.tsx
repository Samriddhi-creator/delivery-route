import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
    title: "TEDx Checkout",
    description: "TEDx Ticket Checkout Wizard",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className={cn("font-sans", geist.variable)}>
            <body>{children}</body>
        </html>
    );
}
