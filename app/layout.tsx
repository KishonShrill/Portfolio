import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://chriscent.is-a.dev"),
    title: "Chriscent's Web Portfolio | KishonShrill (Github)",
    description:
        "An experimental visual design system heavily inspired by urban editorial, motion graphics, and print media paradigms.",
    openGraph: {
        siteName: "Chriscent Louis June Pingol",
        locale: "en_PH",
        type: "website",
        url: "https://chriscent.is-a.dev",
    },
    twitter: {
        card: "summary_large_image",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased flex flex-col min-h-screen">
                <div className="texture-overlay" aria-hidden="true" />
                {children}
            </body>
        </html>
    );
}
