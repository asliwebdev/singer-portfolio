import Link from "next/link";
import { socialLinks } from "../lib";

const SocialLinks = ({ padding, margin }) => {
  return (
    <ul
      className={`flex items-center justify-center gap-8 ${margin && margin} ${
        padding && padding
      }`}
    >
      {socialLinks.map((link) => {
        return (
          <li key={link.id}>
            <Link
              href={link.url}
              className="text-brown text-3xl hover:text-white transition-colors duration-300"
              target="_blank"
            >
              {link.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
