"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = (categoryName: string) => {
    router.push(
      `https://ecommerce-backend-r0s1.onrender.com/api/products/category/${categoryName}`
    );
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-purple-50 to-white dark:from-zinc-900 dark:to-zinc-950">
      {/* main content */}
      <div className="flex flex-col items-center max-w-full md:max-w-full lg:w-[70%] text-center mt-4 md:mt-8 lg:mt-16">
        <h1 className="text-xl md:text-5xl font-bold">
          REST API for Ecommerce Products Data
        </h1>

        <p className="mt-4 text-sm md:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl">
          Develop, Build, and Test your front-end instantly with our dummy
          e-commerce API. Get ready-to-use JSON data for products, users, carts,
          and more — no backend setup required.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 font-bold">
          <a
            href="/docs"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white  dark:bg-zinc-900 shadow shadow-gray-600 hover:shadow-lg transition-all duration-300"
          >
            Read Docs
          </a>
          <a
            href="https://github.com/pankajkoree/ecommerce-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white dark:bg-zinc-900 shadow shadow-gray-600 hover:shadow-lg transition-all duration-300"
          >
            View Github
          </a>
        </div>

        <section className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 font-bold md:mb-8 lg:mb-0">
          {[
            { name: "Smartphone", svg: "/svg/smartphones.svg" },
            { name: "Laptop", svg: "/svg/laptops.svg" },
            { name: "Groceries", svg: "/svg/groceries.svg" },
            { name: "Beauty", svg: "/svg/beauty.svg" },
            { name: "Shoes", svg: "/svg/shoes.svg" },
            { name: "Watch", svg: "/svg/watch.svg" },
            { name: "Furniture", svg: "/svg/furniture.svg" },
            { name: "Accessories", svg: "/svg/accessories.svg" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow shadow-gray-600 hover:shadow-xl transition-all duration-300 hover:cursor-pointer gap-4"
              onClick={() => handleClick(item.name)}
            >
              <Image
                src={item.svg}
                alt={item.name}
                width={100}
                height={100}
                className="object-contain"
              />
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                {item.name}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
