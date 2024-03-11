import { LiaTelegramPlane } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { FaHome, FaMusic } from "react-icons/fa";
import { FaCircleInfo, FaVideo } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";

export const navLinks = [
  {
    text: "home",
    url: "/",
    icon: <FaHome />,
  },
  {
    text: "about",
    url: "/about",
    icon: <FaCircleInfo />,
  },
  {
    text: "music",
    url: "/music",
    icon: <FaMusic />,
  },
  {
    text: "videos",
    url: "/videos",
    icon: <FaVideo />,
  },
  {
    text: "contact",
    url: "/contact",
    icon: <IoIosContact />,
  },
];

export const socialLinks = [
  {
    id: 1,
    url: "/",
    icon: <LiaTelegramPlane />,
  },
  {
    id: 2,
    url: "https://www.instagram.com/asadbekodilov1",
    icon: <FaInstagram />,
  },
  {
    id: 3,
    url: "https://open.spotify.com/artist/7uqisBAuFsJFShQECrcQDX",
    icon: <FaSpotify />,
  },
];
