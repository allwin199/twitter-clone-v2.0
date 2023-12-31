import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import LeftSidebar from "@/components/left-sidebar";
import RightSection from "@/components/right-sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Twitter Clone",
    description: "Cloning Twitter Clone for Learning",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className="w-full h-full flex justify-center items-center relative bg-black text-white">
                    <div className="xl:max-w-[70vw] w-full h-full flex relative">
                        <LeftSidebar />
                        {children}
                        <RightSection />
                    </div>
                </div>
            </body>
        </html>
    );
}
