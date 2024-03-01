"use client";

import Link from "next/link";
import { navLinks } from "../lib";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map((link, index) => {
        return (
          <li key={index} className="nav-links">
            <Link
              href={link.url}
              className={`capitalize ${
                link.url === pathname ? "text-green" : "text-black"
              } text-[16px]`}
            >
              {link.text}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
