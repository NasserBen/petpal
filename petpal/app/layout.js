import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./api/providers";
import Navbar from "@/components/navbar";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PetPal",
  description: "New freinds for your pets!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          {children}
          <Navbar />
        </AuthProvider>
      </body>
    </html>
  );
}
