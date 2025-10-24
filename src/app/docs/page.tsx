"use client";

import Intro from "./test/page";

const Docs = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center bg-gradient-to-b from-purple-50 to-white dark:from-zinc-900 dark:to-zinc-950 hover:bg-red`}
    >
      <Intro />
    </div>
  );
};

export default Docs;
