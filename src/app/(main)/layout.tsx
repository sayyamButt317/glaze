// app/(main)/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header"; // Header for main site
import { AOSInit } from '../(main)/aos'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pony Party | IV Hydration",
  description: "IV Hydration Services Delivered to Your Doorstep",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
       {/* <AOSInit /> */}
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        {/* <Header />  */}
      {children}
      </body>
    </html>
  );
}
