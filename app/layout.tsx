import "./globals.scss";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import styles from "./page.module.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "My homepage",
    template: "%s | Simon",
  },
  description: "Generated by create next app",
  verification: {
    google: "google-site-verification=123",
  },
  // openGraph: { images: "/abc.png" },
};

//EVERYTHING IN THE MAIN LAYOUT FILE IS APPLIED TO THE WHOLE WEBSITE

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* APPLY THE FONT FOR THE WHOLE WEBSITE HERE */}
      <body className={inter.className}>
        <div className={styles.header}>
          <h1>Header</h1>
        </div>
        {children}
        <div className={styles.header}>
          <h1>Footer</h1>
        </div>
      </body>
    </html>
  );
}
