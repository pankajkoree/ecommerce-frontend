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
    <div>
      {/* section for dummy intro */}
      <section>
        <header className="p-4 leading-relaxed text-2xl">
          <h1 className="text-3xl font-bold mb-2">🛍️ DummyProducts - Docs</h1>
          <p>
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
      <section className="p-4" id="status">
        <header>
          <h1 className="text-xl">API Status</h1>
          <p className="text-sm">Check if internet is working 🫣 </p>
          {/* code div */}
          <div className="relative top-2 bg-[#263238] text-green-300 px-4 rounded-lg">
            <pre>
              <code>{getStatusCode}</code>
            </pre>
            <button
              onClick={copyStatusCode}
              className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600 transition"
            >
              {status ? "Copied!" : "Copy"}
            </button>
          </div>
          {/* code div end */}
        </header>

        {/* div to add a line below to declare as a border */}
        <p className="bg-[#e8eded] h-1 flex mt-8"></p>
        {/* div to add a line below to declare as a border */}
      </section>
      {/* end get status */}

      {/* get host */}
      <section className="p-4" id="host">
        <header>
          <h1 className="text-xl">Get Host</h1>
          <p className="text-sm">Run this to see the host </p>
          {/* code div */}
          <div className="relative top-2 bg-[#263238] text-green-300 px-4 rounded-lg">
            <pre>
              <code>{getHostCode}</code>
            </pre>
            <button
              onClick={copyHostCode}
              className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600 transition"
            >
              {host ? "Copied!" : "Copy"}
            </button>
          </div>
          {/* code div end */}
        </header>

        {/* div to add a line below to declare as a border */}
        <p className="bg-[#e8eded] h-1 flex mt-8"></p>
        {/* div to add a line below to declare as a border */}
      </section>
      {/* end get host */}

      {/* get platform */}
      <section className="p-4" id="platform">
        <header>
          <h1 className="text-xl">Get Platform</h1>
          <p className="text-sm">
            Run this to see on which platform of OS you are running on{" "}
          </p>
          {/* code div */}
          <div className="relative top-2 bg-[#263238] text-green-300 px-4 rounded-lg">
            <pre>
              <code>{getPlatformCode}</code>
            </pre>
            <button
              onClick={copyPlatformCode}
              className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600 transition"
            >
              {platform ? "Copied!" : "Copy"}
            </button>
          </div>
          {/* code div end */}
        </header>

        {/* div to add a line below to declare as a border */}
        <p className="bg-[#e8eded] h-1 flex mt-8"></p>
        {/* div to add a line below to declare as a border */}
      </section>
      {/* end get platform */}

      {/* get browser */}
      <section id="browser" className="p-4">
        <header>
          <h1 className="text-xl">Get Browser Info</h1>
          <p className="text-sm">
            Run this to see on which browser you are running on{" "}
          </p>
          {/* code div */}
          <div className="relative top-2 bg-[#263238] text-green-300 px-4 rounded-lg">
            <pre>
              <code>{getBrowserCode}</code>
            </pre>
            <button
              onClick={copyBrowserCode}
              className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600 transition"
            >
              {browser ? "Copied!" : "Copy"}
            </button>
          </div>
          {/* code div end */}
        </header>

        {/* div to add a line below to declare as a border */}
        <p className="bg-[#e8eded] h-1 flex mt-8"></p>
        {/* div to add a line below to declare as a border */}
      </section>
      {/* end get browser */}

      {/* user Agent */}
      <section id="userAgent" className="p-4">
        <header>
          <h1 className="text-xl">Get userAgent Info</h1>
          <p className="text-sm">Run this to see the user agent info </p>
          {/* code div */}
          <div className="relative top-2 bg-[#263238] text-green-300 px-4 rounded-lg">
            <pre>
              <code>{getUserAgentCode}</code>
            </pre>
            <button
              onClick={copyUserAgentCode}
              className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600 transition"
            >
              {userAgent ? "Copied!" : "Copy"}
            </button>
          </div>
          {/* code div end */}
        </header>
      </section>
      {/* end user agent */}
    </div>
  );
};

export default Intro;
