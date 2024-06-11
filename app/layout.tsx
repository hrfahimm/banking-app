import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { IBM_Plex_Serif } from '@next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

const ibmPlexSerif = IBM_Plex_Serif({
    weight: ['400', '700'],
    subsets: ["latin"],
    variable: '--font-ibm-plex-serif',// Specify the correct weights here
});


export const metadata: Metadata = {
    title: "Banking App",
    description: "Banking app",
    icons: {
        icon: '/icons/logo.png'
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${ibmPlexSerif.variable} `} >
                {children}</body>
        </html>
    );
}
