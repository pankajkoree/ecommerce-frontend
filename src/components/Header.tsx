import Image from "next/image";

const Header = () => {
  return (
    <nav className="flex justify-between">
      <h1>DummyProducts</h1>
      <ul className="flex gap-8">
        <link href="/">Home</link>
        <link href="/docs">Docs</link>
        <link href="">Github</link>
        <li>
          <Image
            src="/theme.png"
            width={20}
            height={20}
            alt="theme"
            className="hover:cursor-pointer"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
