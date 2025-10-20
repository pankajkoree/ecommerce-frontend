import Header from "@/components/Header";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        {/* fixed header */}
        <div className="sticky top-0 z-50 backdrop-blur-xl border-b border-purple-200 dark:border-zinc-800">
          <Header />
        </div>
        {children}
        {/* fixed footer */}
        <div className="sticky bottom-0 z-50 backdrop-blur-xl border-t border-purple-200 dark:border-zinc-800">
          <Footer />
        </div>
      </body>
    </html>
  );
}
