"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-[#DFE399] px-4 lg:px-16 h-[60px] flex items-center">
      <div className="w-full flex justify-between items-center">
        <Link href="/" className="text-black text-lg font-medium">
          Asadbek Odilov
        </Link>
        <ul className="hidden lg:flex gap-8">
          <NavLinks pathname={pathname} />
        </ul>
        <div className="dropdown dropdown-end lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost transition-colors duration-300"
          >
            <FiMenu className="h-6 w-6 text-black" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#DFE399] rounded-box w-52"
          >
            <NavLinks pathname={pathname} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
