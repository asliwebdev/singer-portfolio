import Link from "next/link";
import { navLinks } from "../lib";

const NavLinks = ({ pathname }) => {
  return (
    <>
      {navLinks.map((link, index) => {
        return (
          <li key={index} className="nav-links">
            <Link
              href={link.url}
              className={`capitalize ${
                link.url === pathname
                  ? "text-[#50C878]"
                  : "text-neutral-content"
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
