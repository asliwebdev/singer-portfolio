import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="bg-brown h-[60px] px-4 lg:px-36 flex items-center justify-center">
      <div className="flex justify-between items-center w-full">
        <Link href="/" className="text-black text-lg font-medium">
          Asadbek Odilov
        </Link>
        <ul className="hidden lg:flex gap-8">
          <NavLinks />
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-brown rounded-box w-52"
          >
            <NavLinks />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
