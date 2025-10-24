"use client";

import { div } from "framer-motion/client";
import { useState, useEffect, useRef } from "react";

const Intro = () => {
  const [status, setStatus] = useState(false);
  const [host, setHost] = useState(false);
  const [platform, setPlatform] = useState(false);
  const [browser, setBrowser] = useState(false);
  const [userAgent, setUserAgent] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // codes for all intro menus
  const getStatusCode = `
  fetch('https://ecommerce-backend-r0s1.onrender.com/')
  .then(res => res.json())
  .then(console.log);
  
`;

  const getHostCode = `
  fetch('https://ecommerce-backend-r0s1.onrender.com/host')
  .then(res => res.json())
  .then(console.log);

  `;

  const getPlatformCode = `
  fetch('https://ecommerce-backend-r0s1.onrender.com/platform')
  .then(res => res.json())
  .then(console.log);

`;

  const getBrowserCode = `
  fetch('https://ecommerce-backend-r0s1.onrender.com/browser')
  .then(res => res.json())
  .then(console.log);

`;

  const getUserAgentCode = `
  fetch('https://ecommerce-backend-r0s1.onrender.com/userAgent')
  .then(res => res.json())
  .then(console.log);

`;

  // Copy functions
  const copyStatusCode = async () => {
    try {
      await navigator.clipboard.writeText(getStatusCode);
      setStatus(true);
      setTimeout(() => setStatus(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const copyHostCode = async () => {
    try {
      await navigator.clipboard.writeText(getHostCode);
      setHost(true);
      setTimeout(() => setHost(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const copyPlatformCode = async () => {
    try {
      await navigator.clipboard.writeText(getPlatformCode);
      setPlatform(true);
      setTimeout(() => setPlatform(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const copyBrowserCode = async () => {
    try {
      await navigator.clipboard.writeText(getBrowserCode);
      setBrowser(true);
      setTimeout(() => setBrowser(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const copyUserAgentCode = async () => {
    try {
      await navigator.clipboard.writeText(getUserAgentCode);
      setUserAgent(true);
      setTimeout(() => setUserAgent(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  // Scroll function for internal sections
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const element = e.target as HTMLElement;
      const id = element.getAttribute("data-scroll-id");
      if (id && contentRef.current) {
        const section = contentRef.current.querySelector<HTMLElement>(`#${id}`);
        if (section) {
          const yOffset = -72;
          const y = section.offsetTop + yOffset;
          contentRef.current.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    };

    const buttons = document.querySelectorAll("[data-scroll-id]");
    buttons.forEach((btn) => btn.addEventListener("click", handleScroll));

    return () => {
      buttons.forEach((btn) => btn.removeEventListener("click", handleScroll));
    };
  }, []);

  return (
    <div
      className={`flex flex-col justify-center items-center bg-gradient-to-b from-purple-50 to-white dark:from-zinc-900 dark:to-zinc-950 hover:bg-red`}
    >
      <div
        ref={contentRef}
        className="flex flex-col mt-2 md:mt-0 px-4 md:px-4 lg:px-8 max-w-full md:max-w-full lg:w-[70%] overflow-x-hidden"
      >
        {/* Main intro section */}
        <section className="max-w-full mb-12">
          <header className="p-0 mt-4 md:mt-0 md:p-4 leading-relaxed">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl md:text-4xl">🛍️</span>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                DummyProducts - Docs
              </h1>
            </div>
            <p className="break-words text-sm md:text-base lg:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              <span>
                DummyProducts is a free and lightweight mock API built for
                developers who need realistic eCommerce data for their front-end
                projects. You can use it to quickly prototype, build, or test
                applications without setting up a real database. It provides
                ready-to-use endpoints for ecommerce products in clean JSON
                format. <br />
              </span>
              <br />
              <span>
                Use the examples below to explore how DummyProducts works and
                integrate it easily to the projects. <br />
              </span>
              <br />
              <span>
                ⚡ Perfect for React, Next.js, Vue, Angular, or any
                REST-compatible frontend. <br />
              </span>
              <br />
              <span>
                Enjoy developing with DummyProducts — your ultimate dummy
                eCommerce data source! 🚀
              </span>
            </p>
          </header>
        </section>

        {/* API Status */}
        <section className="p-0 md:p-4 max-w-full mb-12" id="status">
          <header className="max-w-full">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🔍</span>
              <h1 className="text-lg md:text-xl lg:text-2xl font-semibold break-words">
                API Status
              </h1>
            </div>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 break-words">
              Check if internet is working 🫣
            </p>

            {/* Code block */}
            <div className="relative bg-gradient-to-r from-[#263238] to-[#2a3236] text-green-300 p-4 md:p-5 rounded-lg w-full overflow-x-auto shadow-lg border border-gray-700">
              <pre className="min-w-max md:min-w-0 text-xs md:text-sm">
                {getStatusCode}
              </pre>

              <button
                onClick={copyStatusCode}
                className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs px-3 py-1.5 rounded-md hover:from-green-600 hover:to-green-700 transition-all shadow-md"
              >
                {status ? "✓ Copied!" : "Copy"}
              </button>
            </div>

            {/* Mobile scroll hint */}
            <p className="md:hidden text-xs text-gray-400 text-center mt-2">
              ← Scroll to see full code →
            </p>
          </header>

          <div className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 h-[2px] flex mt-8 md:mt-10"></div>
        </section>

        {/* Get Host */}
        <section className="p-0 md:p-4 max-w-full mb-12" id="host">
          <header className="max-w-full">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🌐</span>
              <h1 className="text-lg md:text-xl lg:text-2xl font-semibold break-words">
                Get Host
              </h1>
            </div>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 break-words">
              Run this to see the host
            </p>

            {/* Code block */}
            <div className="relative bg-gradient-to-r from-[#263238] to-[#2a3236] text-green-300 p-4 md:p-5 rounded-lg w-full overflow-x-auto shadow-lg border border-gray-700">
              <pre className="min-w-max md:min-w-0 text-xs md:text-sm">
                {getHostCode}
              </pre>
              <button
                onClick={copyHostCode}
                className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs px-3 py-1.5 rounded-md hover:from-green-600 hover:to-green-700 transition-all shadow-md"
              >
                {host ? "✓ Copied!" : "Copy"}
              </button>
            </div>

            <p className="md:hidden text-xs text-gray-400 text-center mt-2">
              ← Scroll to see full code →
            </p>
          </header>

          <div className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 h-[2px] flex mt-8 md:mt-10"></div>
        </section>

        {/* Get Platform */}
        <section className="p-0 md:p-4 max-w-full mb-12" id="platform">
          <header className="max-w-full">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">💻</span>
              <h1 className="text-lg md:text-xl lg:text-2xl font-semibold break-words">
                Get Platform
              </h1>
            </div>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 break-words">
              Run this to see on which platform of OS you are running on
            </p>

            {/* Code block */}
            <div className="relative bg-gradient-to-r from-[#263238] to-[#2a3236] text-green-300 p-4 md:p-5 rounded-lg w-full overflow-x-auto shadow-lg border border-gray-700">
              <pre className="min-w-max md:min-w-0 text-xs md:text-sm">
                {getPlatformCode}
              </pre>
              <button
                onClick={copyPlatformCode}
                className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs px-3 py-1.5 rounded-md hover:from-green-600 hover:to-green-700 transition-all shadow-md"
              >
                {platform ? "✓ Copied!" : "Copy"}
              </button>
            </div>

            <p className="md:hidden text-xs text-gray-400 text-center mt-2">
              ← Scroll to see full code →
            </p>
          </header>

          <div className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 h-[2px] flex mt-8 md:mt-10"></div>
        </section>

        {/* Get Browser */}
        <section id="browser" className="p-0 md:p-4 mb-12">
          <header>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🌐</span>
              <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
                Get Browser Info
              </h1>
            </div>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4">
              Run this to see on which browser you are running on
            </p>

            {/* Code block */}
            <div className="relative bg-gradient-to-r from-[#263238] to-[#2a3236] text-green-300 p-4 md:p-5 rounded-lg w-full overflow-x-auto shadow-lg border border-gray-700">
              <pre className="min-w-max md:min-w-0 text-xs md:text-sm">
                {getBrowserCode}
              </pre>
              <button
                onClick={copyBrowserCode}
                className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs px-3 py-1.5 rounded-md hover:from-green-600 hover:to-green-700 transition-all shadow-md"
              >
                {browser ? "✓ Copied!" : "Copy"}
              </button>
            </div>

            <p className="md:hidden text-xs text-gray-400 text-center mt-2">
              ← Scroll to see full code →
            </p>
          </header>

          <div className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 h-[2px] flex mt-8 md:mt-10"></div>
        </section>

        {/* User Agent */}
        <section id="userAgent" className="p-0 md:p-4 mb-8">
          <header>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🔐</span>
              <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
                Get userAgent Info
              </h1>
            </div>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4">
              Run this to see the user agent info
            </p>

            {/* Code block */}
            <div className="relative bg-gradient-to-r from-[#263238] to-[#2a3236] text-green-300 p-4 md:p-5 rounded-lg w-full overflow-x-auto shadow-lg border border-gray-700 mb-8">
              <pre className="min-w-max md:min-w-0 text-xs md:text-sm">
                {getUserAgentCode}
              </pre>
              <button
                onClick={copyUserAgentCode}
                className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs px-3 py-1.5 rounded-md hover:from-green-600 hover:to-green-700 transition-all shadow-md"
              >
                {userAgent ? "✓ Copied!" : "Copy"}
              </button>
            </div>

            <p className="md:hidden text-xs text-gray-400 text-center mt-2">
              ← Scroll to see full code →
            </p>
          </header>
        </section>
      </div>
    </div>
  );
};

export default Intro;
