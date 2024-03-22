import Link from "next/link";
import { LiaTimesSolid } from "react-icons/lia";
import { navLinks } from "../lib";
import { usePathname } from "next/navigation";
import SocialLinks from "./SocialLinks";

const SmallSidebar = ({ isSidebarOpen, toggle }) => {
  const pathname = usePathname();
  return (
    <div
      className={`fixed inset-0 z-50 min-h-screen min-w-full ${
        isSidebarOpen ? "visible" : "invisible"
      } 
    backdrop-blur-sm transition-all duration-300`}
      onClick={toggle}
    >
      <div
        className={`fixed z-50 top-0 left-0 h-full p-6 w-3/4 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }
       bg-gradient transition-all duration-300`}
        onClick={(e) => e.stopPropagation()}
      >
        <Link href="/" className="text-[24.85px] text-brown" onClick={toggle}>
          Asadbek Odilov
        </Link>
        <div className="flex flex-col justify-between h-[calc(100vh-60px)]">
          <div className="flex flex-1 flex-col gap-6 pt-16 h-full">
            {navLinks.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.url}
                  onClick={toggle}
                  className={`text-brown capitalize flex gap-4 items-center text-[1.125rem] p-4 leading-[25.2px] rounded-lg hover:bg-black hover:pl-6 transition-all duration-300 ${
                    pathname === link.url && "bg-black"
                  }`}
                >
                  {link.icon}
                  {link.text}
                </Link>
              );
            })}
          </div>
          <SocialLinks padding="py-12 px-4" />
        </div>
        <button
          type="button"
          className="absolute right-4 top-4"
          onClick={toggle}
        >
          <LiaTimesSolid />
        </button>
      </div>
    </div>
  );
};

export default SmallSidebar;
