import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./api/providers";
import Navbar from "@/components/navbar.js";
import Header from "@/components/header.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PetPal",
  description: "New freinds for your pets!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <AuthProvider>{children}</AuthProvider>
        <Navbar />
      </body>
    </html>
  );
}
