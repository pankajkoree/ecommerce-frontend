const Intro = () => {
  return (
    <div>
      <h1 className="bg-green-200 h-60">Intro</h1>
      <div className="bg-purple-400 h-80" id="status">
        <h1>status</h1>
      </div>
      <div className="bg-yellow-400 h-80" id="host">
        <h1>host</h1>
      </div>

      <div className="bg-green-400 h-80" id="platform">
        <h2>local</h2>
      </div>
      <div id="browser" className="bg-red-400 h-80">
        <h3>local</h3>
      </div>
      <div id="userAgent" className="bg-blue-400 h-80">
        <h2>user agent</h2>
      </div>
    </div>
  );
};

export default Intro;
