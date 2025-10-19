"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";
import { Parkinsans } from "next/font/google";

const parkinsans = Parkinsans({
  subsets: ["latin"],
  weight: "500",
});

const Docs = () => {
  const [intro, setIntro] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  return (
    <div
      className={`flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-zinc-900 dark:to-zinc-950 border-8 border-purple-300 ${parkinsans.className}`}
    >
      {/* fixed header */}
      <div className="sticky top-0 z-50 backdrop-blur-xl border-b border-purple-200 dark:border-zinc-800">
        <Header />
      </div>

      {/* content for docs */}
      <section className="p-4 flex max-w-full gap-2">
        <nav className="w-[15%] border p-2 flex flex-col gap-2">
          {/* intro navigation */}
          <div className="flex flex-col gap-2 hover:text-purple-600">
            <div
              className="flex items-center justify-between hover:cursor-pointer"
              onClick={() => setIntro(!intro)}
            >
              <div className="flex gap-2 hover:text-purple-600">
                <Image src="/svg/home.svg" alt="home" width={32} height={32} />
                <button className="text-left text-2xl hover:cursor-pointer">
                  Intro
                </button>
              </div>
              {/* arrow div */}
              <div>
                {intro ? (
                  <svg
                    fill="currentColor"
                    className="w-6 h-6 hover:text-purple-600"
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
                    className="w-6 h-6 hover:text-purple-600"
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
              </div>
            </div>
            {/* menu shown below intro */}
            {intro && (
              <div className="flex flex-col gap-2 ml-2 animate-fadeIn">
                <button className="text-left">Status</button>
                <button className="text-left">Host</button>
                <button className="text-left">Platform</button>
                <button className="text-left">Browser</button>
                <button className="text-left">User Agent</button>
              </div>
            )}
          </div>

          {/* products navigation */}
          <div className="flex flex-col gap-2 hover:text-purple-600">
            <div
              className="flex items-center justify-between hover:cursor-pointer"
              onClick={() => setShowProduct(!showProduct)}
            >
              <div className="flex gap-2 hover:text-purple-600">
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
              <div>
                {showProduct ? (
                  <svg
                    fill="currentColor"
                    className="w-6 h-6 hover:text-purple-600"
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
                    className="w-6 h-6 hover:text-purple-600"
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
              </div>
            </div>
            {/* products menu */}
            {showProduct && (
              <div className="flex flex-col gap-2 ml-2 animate-fadeIn">
                <button className="text-left">All products</button>
                <button className="text-left">Single product with Id</button>
                <button className="text-left">Search product</button>
                <button className="text-left">Limit products quantity</button>
                <button className="text-left">Limit and skip products</button>
                <button className="text-left">Products categories</button>
              </div>
            )}
          </div>
        </nav>

        <article>
          <p>Content on the basis of the side bar navigation</p>
        </article>
      </section>

      {/* content for docs end */}

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Docs;
