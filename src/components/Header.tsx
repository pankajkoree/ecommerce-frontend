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
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0  z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Sliding Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`fixed top-0 right-0 ${
                isOpen ? "h-80" : "h-60"
              } w-2/4 sm:w-1/2 bg-[#faf5ff] dark:bg-[#19191c] border-l border-purple-200 dark:border-zinc-800 z-50 md:hidden shadow-sm shadow-zinc-300`}
            >
              {/* Close (X) Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-purple-200 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Navigation Links */}
              <nav className="flex flex-col items-start gap-4 py-10 px-6 text-lg font-medium text-zinc-700 dark:text-zinc-200">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className={`${
                    pathname === "/" ? "text-blue-500" : "hover:text-blue-400"
                  }`}
                >
                  Home
                </Link>

                {/* Docs with Submenu */}
                <div className="flex flex-col w-full">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`text-left ${
                      pathname.startsWith("/docs")
                        ? "text-blue-500"
                        : "hover:text-blue-400"
                    }`}
                  >
                    Docs
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-blue-300 pl-3"
                      >
                        <Link
                          href="/docs/intro"
                          onClick={() => {
                            setMenuOpen(false);
                            setIsOpen(false);
                          }}
                          className="hover:text-blue-500"
                        >
                          Intro
                        </Link>
                        <Link
                          href="/docs/products"
                          onClick={() => {
                            setMenuOpen(false);
                            setIsOpen(false);
                          }}
                          className="hover:text-blue-500"
                        >
                          Products
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="https://github.com/pankajkoree/ecommerce-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-400"
                >
                  <Image
                    src="/github.svg"
                    width={20}
                    height={20}
                    alt="github"
                  />
                  Github
                </Link>

                <button
                  onClick={changeTheme}
                  className="flex items-center gap-2 rounded-full p-2 bg-purple-100 dark:bg-zinc-800 hover:scale-105 transition-transform"
                >
                  <Image src="/theme.png" width={20} height={20} alt="theme" />
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
