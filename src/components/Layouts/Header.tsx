import Link from 'next/link'

const Header = () => {
  return (
    <>
      <header className="flex w-full p-4 md:px-8">
        <Link href="/">
          <a className="text-2xl font-bold cursor-pointer">MarkBlog</a>
        </Link>
        <ul className="ml-auto flex gap-8">
          <li>
            <Link href="/">
              <a className="cursor-pointer">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="cursor-pointer">About</a>
            </Link>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header
