const Intro = () => {
  return (
    <div>
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
      <section className="bg-purple-400 h-80 text-xl  " id="status">
        <header>
          <h1>API Status</h1>
          <p>Check if internet is working 🫣 </p>
        </header>
      </section>
      <section className="bg-yellow-400 h-80" id="host">
        <h1>host</h1>
      </section>

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
