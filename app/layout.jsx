import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Header } from "@/layout/header";
import { Footer } from "@/layout/footer";
import "bootstrap/dist/css/bootstrap.css";
import { AosInit } from "@/components/AOS";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "White Diamond",
  description: "A Construction Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AosInit />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" />
    </html>
  );
}
