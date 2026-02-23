import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Naresh Ramamurthy",
  description: "Personal website of Naresh Ramamurthy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Navbar />
        <main>{children}</main>
        <footer className="bg-gray-900 text-white text-center py-6 mt-20">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Naresh Ramamurthy. Built with Next.js & Tailwind CSS.
          </p>
        </footer>
      </body>
    </html>
  );
}
