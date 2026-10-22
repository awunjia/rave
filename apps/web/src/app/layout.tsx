
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "Rave | Travel & Consular Assistance",
        template: "%s | Rave",
    },
    description:
        "Travel consultations, visa information, and consular assistance.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning >
            <body>{children} </body>
        </html>
    );
}
