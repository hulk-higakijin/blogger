import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="flex w-full px-8 py-4">
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer">MarkBlog</span>
        </Link>
        <ul className="ml-auto flex gap-8">
          <Link href="/">
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link href="/about">
            <li className="cursor-pointer">About</li>
          </Link>
        </ul>
      </header>
    </>
  );
};

export default Header;
