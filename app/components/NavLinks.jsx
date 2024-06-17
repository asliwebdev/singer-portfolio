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
          <li
            key={index}
            className={`${
              link.url === pathname ? "active-link" : "nav-link"
            } text-black`}
          >
            <Link
              href={link.url}
              className="text-[16px] font-medium capitalize"
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
