"use client";

import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import NavLinks from "./NavLinks";
import { useState } from "react";
import SmallSidebar from "./SmallSidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div className="bg-brown h-[60px] px-4 lg:px-36 flex items-center justify-center">
        <div className="flex justify-between items-center w-full">
          <Link href="/" className="text-black text-lg font-medium">
            Asadbek Odilov
          </Link>
          <ul className="hidden lg:flex gap-8">
            <NavLinks />
          </ul>
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <FiMenu className="h-6 w-6 text-black" />
          </button>
        </div>
      </div>
      <SmallSidebar
        isSidebarOpen={isSidebarOpen}
        toggle={() => setIsSidebarOpen(false)}
      />
    </>
  );
};

export default Navbar;
