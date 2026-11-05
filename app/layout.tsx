import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 title: "Chawla Plywood — Christmas Offer",
 description: "Bring warmth and celebration home with Chawla Plywood. Explore plywood, laminates, boards, veneers, doors, flooring and festive offer details.",
};
export default function RootLayout({children}: {children: React.ReactNode}) {
 return <html lang="en"><body>{children}</body></html>;
}

