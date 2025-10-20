import { useState } from "react";

const Intro = () => {
  const [status, setStatus] = useState(false);
  const [host, setHost] = useState(false);

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
  return (
    <div>
      {/* section for dummy intro */}
      <section>
        <header className="p-4 leading-relaxed text-2xl">
          <h1 className="text-3xl text-purple-600 dark:text-purple-400 font-bold mb-2">
            🛍️ DummyProducts - Docs
          </h1>
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
      <section className="text-xl p-4" id="status">
        <header>
          <h1>API Status</h1>
          <p>Check if internet is working 🫣 </p>
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
      <section className="text-xl p-4" id="host">
        <header>
          <h1>Get Host</h1>
          <p>Run this to see the host </p>
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

      <section className="bg-green-400 h-80" id="platform">
        <h2>local</h2>
      </section>
      <section id="browser" className="bg-red-400 h-80">
        <h3>local</h3>
      </section>
      <section id="userAgent" className="bg-blue-400 h-80">
        <h2>user agent</h2>
      </section>
    </div>
  );
};

export default Intro;
