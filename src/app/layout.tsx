import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Import Outfit font
import "./globals.css";
import { Toaster } from "react-hot-toast";

// Configure the Outfit font
const outfit = Outfit({ 
  subsets: ["latin"], 
  weight: ["400", "700"] // Add font weights as needed
});

export const metadata: Metadata = {
  title: "Shafiq",
  description: "This is my personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}> {/* Apply Outfit font */}
        <Toaster />
        {children}
      </body>
    </html>
  );
}
