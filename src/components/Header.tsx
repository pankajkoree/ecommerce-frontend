"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem("theme");
    const dark = storedTheme === "dark";
    document.documentElement.classList.toggle("dark", dark);
    setIsDark(dark);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark, isMounted]);

  const changeTheme = () => setIsDark((old) => !old);

  if (!isMounted) {
    return <div className="h-6 w-6 rounded animate-pulse" />;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-200 dark:border-zinc-800 backdrop-blur-xl">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link href="/" className={`text-2xl lg:text-4xl font-extrabold`}>
          DummyProducts
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8 items-center text-zinc-700 dark:text-zinc-200 text-lg font-medium">
          <Link
            href="/"
            className={`transition-colors ${
              pathname === "/" ? "text-blue-500" : "hover:text-blue-400"
            }`}
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {/* Main Docs Link */}
            <Link
              href="/docs"
              className={`transition-colors ${
                pathname.startsWith("/docs")
                  ? "text-blue-500"
                  : "hover:text-blue-400"
              }`}
            >
              Docs
            </Link>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 top-full mt-5 -translate-x-1/2 flex items-center gap-4 shadow-lg shadow-gray-600 border px-4 py-2 z-50"
                >
                  <Link
                    href="/docs/intro"
                    className="hover:text-blue-500  shadow shadow-gray-600 hover:shadow-lg px-4 py-1"
                  >
                    Intro
                  </Link>
                  <Link
                    href="/docs/products"
                    className="hover:text-blue-500  shadow shadow-gray-600 hover:shadow-lg px-4 py-1"
                  >
                    Products
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="https://github.com/pankajkoree/ecommerce-frontend"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github.svg"
              width={20}
              height={20}
              alt="github"
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
            Github
          </Link>

          <button
            onClick={changeTheme}
            className="flex items-center justify-center rounded-full"
            aria-label="Toggle Theme"
          >
            <Image src="/theme.png" width={32} height={20} alt="theme" />
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-purple-100 dark:hover:bg-zinc-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6 text-zinc-700 dark:text-zinc-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-t border-purple-200 dark:border-zinc-800">
          <nav className="flex flex-col items-center gap-4 py-4 text-lg font-medium text-zinc-700 dark:text-zinc-200">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`${
                pathname === "/" ? "text-blue-500" : "hover:text-blue-400"
              }`}
            >
              Home
            </Link>

            <Link
              href="/docs"
              onClick={() => setMenuOpen(false)}
              className={`${
                pathname.startsWith("/docs")
                  ? "text-blue-500"
                  : "hover:text-blue-400"
              }`}
            >
              Docs
            </Link>

            <Link
              href="https://github.com/pankajkoree/ecommerce-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400"
            >
              <Image src="/github.svg" width={20} height={20} alt="github" />
              Github
            </Link>

            <button
              onClick={changeTheme}
              className="flex items-center gap-2 rounded-full p-2 bg-purple-100 dark:bg-zinc-800 hover:scale-105 transition-transform"
            >
              <Image src="/theme.png" width={20} height={20} alt="theme" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
