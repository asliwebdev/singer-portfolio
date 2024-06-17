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
      <div className="flex h-[60px] items-center justify-center bg-brown px-4 lg:px-36">
        <div className="flex w-full items-center justify-between">
          <Link
            href="/"
            className="text-lg font-medium text-black lg:text-[20px]"
          >
            Asadbek Odilov
          </Link>
          <ul className="hidden gap-8 lg:flex">
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
