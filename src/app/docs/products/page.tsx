"use client";

import { useState } from "react";

const Products = () => {
  const [copyProducts, setCopyProducts] = useState(false);
  const [copyProductWithId, setCopyProductWithId] = useState(false);
  const [copySearchProduct, setCopySearchProduct] = useState(false);
  const [copyLimitedProducts, setCopyLimitedProducts] = useState(false);
  const [copyLimtiedSkippedProducts, setCopyLimitedSkippedProducts] =
    useState(false);
  const [copyProductCategories, setCopyProductCategories] = useState(false);

  // codes for all intro menus
  const getProductsCode = `
  fetch('https://ecommerce-backend-r0s1.onrender.com/api/products')
  .then(res => res.json())
  .then(console.log);

`;

  const getProductWithIdCode = `
  fetch('https://ecommerce-backend-r0s1.onrender.com/api/products/id/12')
  .then(res => res.json())
  .then(console.log);

`;

  const getSearchProductCode = `
  fetch('https://ecommerce-backend-r0s1.onrender.com/api/products/name/apple')
  .then(res => res.json())
  .then(console.log);

`;

  const getLimitedProductsCode = `
  fetch('https://ecommerce-backend-r0s1.onrender.com/api/products/limit/5')
  .then(res => res.json())
  .then(console.log);

`;

  const getLimitedSkippedProductsCode = `
  fetch('https://ecommerce-backend-r0s1.onrender.com/api/products/limit/5/5')
  .then(res => res.json())
  .then(console.log);

`;

  const getProductCategoriesCode = `
  fetch('https://ecommerce-backend-r0s1.onrender.com/api/products/categories')
  .then(res => res.json())
  .then(console.log);

`;
  // end codes for all intro menus

  // handle Click for all intro menus
  const copyProductsCode = async () => {
    try {
      await navigator.clipboard.writeText(getProductsCode);
      setCopyProducts(true);
      setTimeout(() => setCopyProducts(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const copyProductWIthIdCode = async () => {
    try {
      await navigator.clipboard.writeText(getProductWithIdCode);
      setCopyProductWithId(true);
      setTimeout(() => setCopyProductWithId(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const copySearchProductCode = async () => {
    try {
      await navigator.clipboard.writeText(getSearchProductCode);
      setCopySearchProduct(true);
      setTimeout(() => setCopySearchProduct(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const copyLimitedProductsCode = async () => {
    try {
      await navigator.clipboard.writeText(getLimitedProductsCode);
      setCopyLimitedProducts(true);
      setTimeout(() => setCopyLimitedProducts(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const copyLimitedSkippedProductsCode = async () => {
    try {
      await navigator.clipboard.writeText(getLimitedSkippedProductsCode);
      setCopyLimitedSkippedProducts(true);
      setTimeout(() => setCopyLimitedSkippedProducts(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const copyProductCategoresCode = async () => {
    try {
      await navigator.clipboard.writeText(getProductCategoriesCode);
      setCopyProductCategories(true);
      setTimeout(() => setCopyProductCategories(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };
  // end handle Click for all intro menus

  return (
    <div
      className={`flex flex-col justify-center items-center bg-gradient-to-b from-purple-50 to-white dark:from-zinc-900 dark:to-zinc-950`}
    >
      <div className="flex flex-col mt-2 md:mt-0 px-4 md:px-4 lg:px-8 max-w-full md:max-w-full lg:w-[70%] overflow-x-hidden">
        {/* section for dummy intro */}
        <section className="max-w-full mb-12">
          <header className="p-4 leading-relaxed text-2xl">
            {/* heading div */}
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M16.5 9.4 7.5 4.21" />
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
              <h1 className="text-3xl font-bold mb-2">Products - Docs</h1>
            </div>
            {/* end heading div */}

            {/* heading content */}
            <p>
              The <strong>Products API</strong> offers structured access to
              detailed product data, enabling seamless integration for inventory
              management, e-commerce platforms, and analytics dashboards. It
              provides key fields such as <strong>product name</strong>,{" "}
              <strong>pricing</strong>, <strong>category</strong>,{" "}
              <strong>description</strong>, and <strong>media assets</strong>,
              helping developers build dynamic, data-driven shopping experiences
              with ease.
            </p>
            {/* end heading content */}
          </header>
        </section>
        {/* end section for dummy intro */}

        {/* get Prodcuts */}
        <section className="p-0 md:p-4 max-w-full mb-12" id="getAllProducts">
          <header>
            <h1 className="text-xl">Get all products</h1>
            <p className="text-sm">
              To fetch all the products with their details{" "}
            </p>
            {/* code div */}
            <div className="relative top-2 bg-[#263238] text-green-300 px-4 rounded-lg">
              <pre>
                <code>{getProductsCode}</code>
              </pre>
              <button
                onClick={copyProductsCode}
                className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600 transition"
              >
                {copyProducts ? "Copied!" : "Copy"}
              </button>
            </div>
            {/* code div end */}
          </header>

          {/* div to add a line below to declare as a border */}
          <p className="bg-[#e8eded] h-1 flex mt-8"></p>
          {/* div to add a line below to declare as a border */}
        </section>
        {/* end get products */}

        {/* get single product with id */}
        <section
          className="p-0 md:p-4 max-w-full mb-12"
          id="getSingleProductWithId"
        >
          <header>
            <h1 className="text-xl">Get single product with id</h1>
            <p className="text-sm">
              To get the products with id, add the{" "}
              <span className="text-blue-500">
                <em>id</em>
              </span>{" "}
              at the end of the url , as in the url, 12 is considered as the id,
              replace the 12 with the id of the product you want the details
              for.
            </p>
            {/* code div */}
            <div className="relative top-2 bg-[#263238] text-green-300 px-4 rounded-lg">
              <pre>
                <code>{getProductWithIdCode}</code>
              </pre>
              <button
                onClick={copyProductWIthIdCode}
                className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600 transition"
              >
                {copyProductWithId ? "Copied!" : "Copy"}
              </button>
            </div>
            {/* code div end */}
          </header>

          {/* div to add a line below to declare as a border */}
          <p className="bg-[#e8eded] h-1 flex mt-8"></p>
          {/* div to add a line below to declare as a border */}
        </section>
        {/* end get single product with id */}

        {/* get search product */}
        <section className="p-0 md:p-4 max-w-full mb-12" id="getSearchProduct">
          <header>
            <h1 className="text-xl">Search product with name</h1>
            <p className="text-sm">
              To get the products with product name, add the{" "}
              <span className="text-blue-500">
                <em>name</em>
              </span>{" "}
              at the end of the url , as in the url apple is the name of the
              product, replace that apple with the product name you want to
              search for.
            </p>
            {/* code div */}
            <div className="relative top-2 bg-[#263238] text-green-300 px-4 rounded-lg">
              <pre>
                <code>{getSearchProductCode}</code>
              </pre>
              <button
                onClick={copySearchProductCode}
                className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600 transition"
              >
                {copySearchProduct ? "Copied!" : "Copy"}
              </button>
            </div>
            {/* code div end */}
          </header>

          {/* div to add a line below to declare as a border */}
          <p className="bg-[#e8eded] h-1 flex mt-8"></p>
          {/* div to add a line below to declare as a border */}
        </section>
        {/* end get search product */}

        {/* get limited products */}
        <section
          className="p-0 md:p-4 max-w-full mb-12"
          id="getLimitedProducts"
        >
          <header>
            <h1 className="text-xl">Get products in limited quantity</h1>
            <p className="text-sm">
              To get the products with limited quantity, add the{" "}
              <span className="text-blue-500">
                <em>number</em>
              </span>{" "}
              at the end of the url , so that the quantity of the products get
              limited to that number, as in the url, 5 at the last is the number
              of products.
            </p>
            {/* code div */}
            <div className="relative top-2 bg-[#263238] text-green-300 px-4 rounded-lg">
              <pre>
                <code>{getLimitedProductsCode}</code>
              </pre>
              <button
                onClick={copyLimitedProductsCode}
                className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600 transition"
              >
                {copyLimitedProducts ? "Copied!" : "Copy"}
              </button>
            </div>
            {/* code div end */}
          </header>

          {/* div to add a line below to declare as a border */}
          <p className="bg-[#e8eded] h-1 flex mt-8"></p>
          {/* div to add a line below to declare as a border */}
        </section>
        {/* end get limited products */}

        {/* get limtied skipped products */}
        <section
          className="p-0 md:p-4 max-w-full mb-12"
          id="getLimitedSkippedProducts"
        >
          <header>
            <h1 className="text-xl">
              Get skipped products in limited quantity
            </h1>
            <p className="text-sm">
              To get the products after skipping the{" "}
              <span className="text-blue-500">
                <em>number</em>
              </span>{" "}
              of sequence of products in limted quantity. The number in skipped
              and limited can be different. The{" "}
              <span className="text-blue-500">
                <em>number</em>
              </span>{" "}
              after the word limit is the skipping one and the last number is
              for limited quantity of products.
            </p>
            {/* code div */}
            <div className="relative top-2 bg-[#263238] text-green-300 px-4 rounded-lg">
              <pre>
                <code>{getLimitedSkippedProductsCode}</code>
              </pre>
              <button
                onClick={copyLimitedSkippedProductsCode}
                className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600 transition"
              >
                {copyLimtiedSkippedProducts ? "Copied!" : "Copy"}
              </button>
            </div>
            {/* code div end */}
          </header>

          {/* div to add a line below to declare as a border */}
          <p className="bg-[#e8eded] h-1 flex mt-8"></p>
          {/* div to add a line below to declare as a border */}
        </section>
        {/* end get limtied skipped products */}

        {/* get product categories */}
        <section
          className="p-0 md:p-4 max-w-full mb-16"
          id="getProductsCategories"
        >
          <header>
            <h1 className="text-xl">Get product categories</h1>
            <p className="text-sm">To get the categories of the products</p>
            {/* code div */}
            <div className="relative top-2 bg-[#263238] text-green-300 px-4 rounded-lg">
              <pre>
                <code>{getProductCategoriesCode}</code>
              </pre>
              <button
                onClick={copyProductCategoresCode}
                className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600 transition"
              >
                {copyProductCategories ? "Copied!" : "Copy"}
              </button>
            </div>
            {/* code div end */}
          </header>
        </section>
        {/* end get product categories */}
      </div>
    </div>
  );
};

export default Products;
