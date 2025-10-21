"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Intro from "./components/intro/Intro";
import Products from "./components/products/Products";

const Docs = () => {
  const [intro, setIntro] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [selectedPage, setSelectedPage] = useState("intro");
  const contentRef = useRef<HTMLDivElement>(null);

  const handleIntro = () => {
    setIntro(!intro);
    setSelectedPage("intro");
  };

  const handleProducts = () => {
    setShowProduct(!showProduct);
    setSelectedPage("products");
  };

  const scrollToSection = (id: string) => {
    const section = contentRef.current?.querySelector<HTMLElement>(`#${id}`);
    if (section && contentRef.current) {
      const yOffset = -72;
      const y = section.offsetTop + yOffset;
      contentRef.current.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-zinc-900 dark:to-zinc-950`}
    >
      {/* content for docs */}
      <section className="flex max-w-full">
        {/* side bar navigation */}
        <nav className="w-[15%] text-lg ml-2 mt-2 p-2 flex flex-col gap-2 fixed bg-white dark:bg-[#16161a] shadow-lg shadow-purple-200 z-50">
          {/* intro navigation */}
          <div className="flex flex-col gap-4">
            <div
              className="flex items-center justify-between hover:cursor-pointer"
              onClick={handleIntro}
            >
              <div className="flex gap-4 hover:text-blue-400 w-[90%]">
                <Image src="/svg/home.svg" alt="home" width={32} height={32} />
                <button className="text-left text-2xl hover:cursor-pointer">
                  Intro
                </button>
              </div>
              {/* arrow div */}
              {/* <div>
                {intro ? (
                  <svg
                    fill="currentColor"
                    className="w-6 h-6 hover:text-blue-400"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 511.735 511.735"
                  >
                    <g>
                      <g>
                        <path
                          d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04
			c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213
			C512.734,381.753,512.734,375.247,508.788,371.087z"
                        />
                      </g>
                    </g>
                  </svg>
                ) : (
                  <svg
                    fill="currentColor"
                    className="w-6 h-6 hover:text-blue-400"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 511.787 511.787"
                  >
                    <g>
                      <g>
                        <path
                          d="M508.667,125.707c-4.16-4.16-10.88-4.16-15.04,0L255.76,363.573L18,125.707c-4.267-4.053-10.987-3.947-15.04,0.213
			c-3.947,4.16-3.947,10.667,0,14.827L248.293,386.08c4.16,4.16,10.88,4.16,15.04,0l245.333-245.333
			C512.827,136.693,512.827,129.867,508.667,125.707z"
                        />
                      </g>
                    </g>
                  </svg>
                )}
              </div> */}
            </div>

            {/* menu shown below intro */}
            <div className="flex flex-col gap-4 ml-12 animate-fadeIn">
              <button
                className="text-left hover:text-blue-400 hover:cursor-pointer"
                onClick={() => scrollToSection("status")}
              >
                Status
              </button>
              <button
                className="text-left hover:text-blue-400 hover:cursor-pointer"
                onClick={() => scrollToSection("host")}
              >
                Host
              </button>
              <button
                className="text-left hover:text-blue-400 hover:cursor-pointer"
                onClick={() => scrollToSection("platform")}
              >
                Platform
              </button>
              <button
                className="text-left hover:text-blue-400 hover:cursor-pointer"
                onClick={() => scrollToSection("browser")}
              >
                Browser
              </button>
              <button
                className="text-left hover:text-blue-400 hover:cursor-pointer"
                onClick={() => scrollToSection("userAgent")}
              >
                User Agent
              </button>
            </div>
          </div>

          {/* products navigation */}
          <div className="flex flex-col mt-12 gap-4">
            <div
              className="flex items-center justify-between hover:cursor-pointer"
              onClick={handleProducts}
            >
              <div className="flex gap-4 hover:text-blue-400 w-[90%]">
                <Image
                  src="/svg/products.svg"
                  alt="products"
                  width={32}
                  height={32}
                />
                <button className="text-left text-2xl hover:cursor-pointer">
                  Products
                </button>
              </div>
              {/* arrow div */}
              {/* <div>
                {showProduct ? (
                  <svg
                    fill="currentColor"
                    className="w-6 h-6 hover:text-blue-400"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 511.735 511.735"
                  >
                    <g>
                      <g>
                        <path
                          d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04
			c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213
			C512.734,381.753,512.734,375.247,508.788,371.087z"
                        />
                      </g>
                    </g>
                  </svg>
                ) : (
                  <svg
                    fill="currentColor"
                    className="w-6 h-6 hover:text-blue-400"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 511.787 511.787"
                  >
                    <g>
                      <g>
                        <path
                          d="M508.667,125.707c-4.16-4.16-10.88-4.16-15.04,0L255.76,363.573L18,125.707c-4.267-4.053-10.987-3.947-15.04,0.213
			c-3.947,4.16-3.947,10.667,0,14.827L248.293,386.08c4.16,4.16,10.88,4.16,15.04,0l245.333-245.333
			C512.827,136.693,512.827,129.867,508.667,125.707z"
                        />
                      </g>
                    </g>
                  </svg>
                )}
              </div> */}
            </div>
            {/* products menu */}

            <div className="flex flex-col gap-4 ml-12 animate-fadeIn">
              <button
                className="text-left hover:text-blue-400 hover:cursor-pointer"
                onClick={() => scrollToSection("getAllProducts")}
              >
                All products
              </button>
              <button
                className="text-left hover:text-blue-400 hover:cursor-pointer"
                onClick={() => scrollToSection("getSingleProductWithId")}
              >
                Single product with Id
              </button>
              <button
                className="text-left hover:text-blue-400 hover:cursor-pointer"
                onClick={() => scrollToSection("getSearchProduct")}
              >
                Search product
              </button>
              <button
                className="text-left hover:text-blue-400 hover:cursor-pointer"
                onClick={() => scrollToSection("getLimitedProducts")}
              >
                Limit products quantity
              </button>
              <button
                className="text-left hover:text-blue-400 hover:cursor-pointer"
                onClick={() => scrollToSection("getLimitedSkippedProducts")}
              >
                Limit and skip products
              </button>
              <button
                className="text-left hover:text-blue-400 hover:cursor-pointer"
                onClick={() => scrollToSection("getProductsCategories")}
              >
                Products categories
              </button>
            </div>
          </div>
        </nav>

        {/* content loader for the sidebar */}
        <article
          ref={contentRef}
          className="flex-1 ml-[16%] mt-2 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 80px)" }}
        >
          {selectedPage === "intro" && <Intro />}
          {selectedPage === "products" && <Products />}
        </article>
      </section>

      {/* content for docs end */}
    </div>
  );
};

export default Docs;
