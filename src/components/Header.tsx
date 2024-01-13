"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { AiOutlineHome } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import { BsPlusSquareFill } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { RiSearchFill } from "react-icons/ri";

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <Link href="/">
        <h1>JJOIN</h1>
      </Link>
      <div>
        <nav>
          <Link href="/">
            {pathname === "/" ? <AiFillHome /> : <AiOutlineHome />}
          </Link>
          <Link href="/search">
            {pathname === "/search" ? <BsPlusSquareFill /> : <BsPlusSquare />}
          </Link>
          <Link href="/new">
            {pathname === "/new" ? <RiSearchFill /> : <RiSearchLine />}
          </Link>
        </nav>
        <button>Sign in</button>
      </div>
    </header>
  );
}
