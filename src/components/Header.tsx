import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem("theme");
    const dark = storedTheme === "dark";
    document.documentElement.classList.toggle("dark", dark);
    setIsDark(dark);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark, isMounted]);

  const changeTheme = () => setIsDark((old) => !old);

  if (!isMounted) {
    return (
      <div className="h-6 w-6 rounded bg-gray-300 dark:bg-gray-600 animate-pulse" />
    );
  }

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
