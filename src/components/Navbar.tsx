"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useSession, signIn, signOut } from "next-auth/react";

import HomeIcon from "./ui/icons/HomeIcon";
import HomeFillIcon from "./ui/icons/HomeFillIcon";
import SearchIcon from "./ui/icons/SearchIcon";
import SearchFillIcon from "./ui/icons/SearchFillIcon";
import NewIcon from "./ui/icons/NewIcon";
import NewFillIcon from "./ui/icons/NewFillIcon";
import ColorButton from "./ui/ColorButton";

import Avatar from "./Avatar";

const menu = [
  { href: "/", icon: <HomeIcon />, clickedIcon: <HomeFillIcon /> },
  { href: "/search", icon: <SearchIcon />, clickedIcon: <SearchFillIcon /> },
  { href: "/new", icon: <NewIcon />, clickedIcon: <NewFillIcon /> },
];

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <div className="flex justify-between items-center px-6 ">
      <Link href="/">
        <h1 className="text-3xl font-bold">JJOIN</h1>
      </Link>
      <nav>
        <ul className="flex gap-4 items-center p-4">
          {menu.map(({ href, icon, clickedIcon }) => (
            <li key={href}>
              <Link href={href}>{pathname === href ? clickedIcon : icon}</Link>
            </li>
          ))}
          <Avatar url={session?.user?.image} />
          {session ? (
            <ColorButton text="Sign Out" onClick={() => signOut()} />
          ) : (
            <ColorButton text="Sign In" onClick={() => signIn()} />
          )}
        </ul>
      </nav>
    </div>
  );
}
