import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-center gap-7 text-white max-w-5xl mx-auto mt-5 bg-transparent">
      <Link href="/">
        <a className="hover:text-pink-500 duration-300">Home</a>
      </Link>

      <Link href="/about">
        <a className="hover:text-pink-500 duration-300">About</a>
      </Link>

      <Link href="/projects">
        <a className="hover:text-pink-500 duration-300">Projects</a>
      </Link>
    </header>
  );
};

export default Header;
