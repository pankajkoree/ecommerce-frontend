import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);

    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (error) {
      console.warn("unable to access localstorage : ", error);
    }
    const appliedTheme = localStorage.getItem("theme");
    if (appliedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, [isDark]);

  const changeTheme = () => setIsDark((old) => !old);
  return (
    <div className="flex justify-between">
      <h1>DummyProducts</h1>
      <nav className="flex gap-8">
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/docs">
          <p>Docs</p>
        </Link>
        <Link href="https://github.com/pankajkoree/ecommerce-frontend">
          <p>Github</p>
        </Link>
        <Image
          src="/theme.png"
          width={20}
          height={20}
          alt="theme"
          className="hover:cursor-pointer"
          onClick={changeTheme}
        />
      </nav>
    </div>
  );
};

export default Header;
