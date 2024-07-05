import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Avatar } from "@radix-ui/react-avatar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="container">
          <div className="flex flex-col items-center gap-8 rounded-lg border bg-gray-50 px-8 py-12 lg:flex-row-reverse lg:border-none lg:bg-gray-50">
            <a href="#" className="font-display font-light">
              Documentation
            </a>
            <div className="flex gap-8 text-lg">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <a href="#" id="brand" className="flex flex-1 items-center gap-2">
              <span className="font-display text-lg font-medium">
                ToDesktop
              </span>
            </a>
          </div>
          <div
            id="sub-footer"
            className="my-12 flex flex-col items-center justify-center gap-6"
          >
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-600">A Y Combinator company.</p>
            </div>
            <p className="text-sm text-gray-400">
              © 2024 ToDesktop, Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
