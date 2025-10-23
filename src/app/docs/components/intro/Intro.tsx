import { useState } from "react";

const Intro = () => {
  const [status, setStatus] = useState(false);
  const [host, setHost] = useState(false);
  const [platform, setPlatform] = useState(false);
  const [browser, setBrowser] = useState(false);
  const [userAgent, setUserAgent] = useState(false);

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

  // end codes for all intro menus

  // handle Click for all intro menus
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

  // end handle Click for all intro menus

  return (
    <div className="flex flex-col mt-6 md:mt-0 p-4 md:p-6 lg:p-8 max-w-full overflow-x-hidden">
      {/* section for dummy intro */}
      <section className="max-w-full">
        <header className="p-0 mt-4 md:mt-0 md:p-4 leading-relaxed text-base md:text-xl lg:text-2xl">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
            🛍️ DummyProducts - Docs
          </h1>
          <p className="break-words">
            <span>
              DummyProducts is a free and lightweight mock API built for
              developers who need realistic eCommerce data for their front-end
              projects. You can use it to quickly prototype, build, or test
              applications without setting up a real database. It provides
              ready-to-use endpoints for ecommerce products in clean JSON
              format. <br />
            </span>
            <span>
              Use the examples below to explore how DummyProducts works and
              integrate it easily to the projects. <br />
            </span>
            <span>
              ⚡ Perfect for React, Next.js, Vue, Angular, or any
              REST-compatible frontend. <br />
            </span>
            <span>
              Enjoy developing with DummyProducts — your ultimate dummy
              eCommerce data source! 🚀
            </span>
          </p>
        </header>
      </section>
      {/* send ection for dummy intro */}

      {/* get status */}
      <section className="p-0 mt-4 md:mt-0 md:p-4 max-w-full" id="status">
        <header className="max-w-full">
          <h1 className="text-lg md:text-xl lg:text-2xl break-words">API Status</h1>
          <p className="text-sm md:text-base break-words">Check if internet is working 🫣 </p>
          {/* code div */}
          <div className="relative top-0 md:top-2 text-xs md:text-sm bg-[#263238] text-green-300 p-2 md:p-4 lg:px-4 rounded-lg w-full overflow-x-auto">
            <pre className="min-w-max md:min-w-0">{getStatusCode}</pre>

            <button
              onClick={copyStatusCode}
              className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600 transition"
            >
              {status ? "Copied!" : "Copy"}
            </button>
          </div>
          {/* Mobile scroll hint */}
          <p className="md:hidden text-xs text-gray-400 text-center mt-2">
            ← Scroll to see full code →
          </p>
          {/* code div end */}
        </header>

        {/* div to add a line below to declare as a border */}
        <p className="bg-[#e8eded] h-1 flex mt-8"></p>
        {/* div to add a line below to declare as a border */}
      </section>
      {/* end get status */}

      {/* get host */}
      <section className="p-0 md:p-4 max-w-full" id="host">
        <header className="max-w-full">
          <h1 className="text-lg md:text-xl lg:text-2xl break-words">Get Host</h1>
          <p className="text-sm md:text-base break-words">Run this to see the host </p>
          {/* code div */}
          <div className="relative top-2 text-xs md:text-sm bg-[#263238] text-green-300 p-2 md:px-4 lg:px-4 rounded-lg w-full overflow-x-auto">
            <pre className="min-w-max md:min-w-0">
              <code>{getHostCode}</code>
            </pre>
            <button
              onClick={copyHostCode}
              className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600 transition"
            >
              {host ? "Copied!" : "Copy"}
            </button>
          </div>
          {/* Mobile scroll hint */}
          <p className="md:hidden text-xs text-gray-400 text-center mt-2">
            ← Scroll to see full code →
          </p>
          {/* code div end */}
        </header>

        {/* div to add a line below to declare as a border */}
        <p className="bg-[#e8eded] h-1 flex mt-8"></p>
        {/* div to add a line below to declare as a border */}
      </section>
      {/* end get host */}

      {/* get platform */}
      <section className="p-0 md:p-4 max-w-full" id="platform">
        <header className="max-w-full">
          <h1 className="text-lg md:text-xl lg:text-2xl break-words">Get Platform</h1>
          <p className="text-sm md:text-base break-words">
            Run this to see on which platform of OS you are running on{" "}
          </p>
          {/* code div */}
          <div className="relative top-2 text-xs md:text-sm bg-[#263238] text-green-300 p-2 md:px-4 lg:px-4 rounded-lg w-full overflow-x-auto">
            <pre className="min-w-max md:min-w-0">
              <code>{getPlatformCode}</code>
            </pre>
            <button
              onClick={copyPlatformCode}
              className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600 transition"
            >
              {platform ? "Copied!" : "Copy"}
            </button>
          </div>
          {/* Mobile scroll hint */}
          <p className="md:hidden text-xs text-gray-400 text-center mt-2">
            ← Scroll to see full code →
          </p>
          {/* code div end */}
        </header>

        {/* div to add a line below to declare as a border */}
        <p className="bg-[#e8eded] h-1 flex mt-8"></p>
        {/* div to add a line below to declare as a border */}
      </section>
      {/* end get platform */}

      {/* get browser */}
      <section id="browser" className="p-0 md:p-4">
        <header>
          <h1 className="text-lg md:text-xl">Get Browser Info</h1>
          <p className="text-sm">
            Run this to see on which browser you are running on{" "}
          </p>
          {/* code div */}
          <div className="relative top-2 text-xs md:text-sm bg-[#263238] text-green-300 p-2 md:px-4 lg:px-4 rounded-lg w-full overflow-x-auto">
            <pre className="min-w-max md:min-w-0">
              <code>{getBrowserCode}</code>
            </pre>
            <button
              onClick={copyBrowserCode}
              className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600 transition"
            >
              {browser ? "Copied!" : "Copy"}
            </button>
          </div>
          {/* Mobile scroll hint */}
          <p className="md:hidden text-xs text-gray-400 text-center mt-2">
            ← Scroll to see full code →
          </p>
          {/* code div end */}
        </header>

        {/* div to add a line below to declare as a border */}
        <p className="bg-[#e8eded] h-1 flex mt-8"></p>
        {/* div to add a line below to declare as a border */}
      </section>
      {/* end get browser */}

      {/* user Agent */}
      <section id="userAgent" className="p-0 md:p-4">
        <header>
          <h1 className="text-lg md:text-xl">Get userAgent Info</h1>
          <p className="text-sm">Run this to see the user agent info </p>
          {/* code div */}
          <div className="relative top-2 text-xs md:text-sm bg-[#263238] text-green-300 p-2 md:px-4 lg:px-4 rounded-lg w-full overflow-x-auto">
            <pre className="min-w-max md:min-w-0">
              <code>{getUserAgentCode}</code>
            </pre>
            <button
              onClick={copyUserAgentCode}
              className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600 transition"
            >
              {userAgent ? "Copied!" : "Copy"}
            </button>
          </div>
          {/* Mobile scroll hint */}
          <p className="md:hidden text-xs text-gray-400 text-center mt-2">
            ← Scroll to see full code →
          </p>
          {/* code div end */}
        </header>
      </section>
      {/* end user agent */}
    </div>
  );
};

export default Intro;