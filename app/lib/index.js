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

export const videos = [
  {
    index: 1,
    src: "https://www.youtube.com/embed/9VlRFwMDbac?modestbranding=0?si=8c9Q0j2jGVcuJGag",
    title: "Asadbek Odilov - Ishonmay qo'ydim (audio 2023)",
    channel: "NevoMusic",
    thumbnail: "https://img.youtube.com/vi/9VlRFwMDbac/maxresdefault.jpg",
  },
  {
    index: 2,
    src: "https://www.youtube.com/embed/uNn_pXTpUck?si=hPjJva51x5-Qk4EY",
    title: "Asadbek Odilov - Maftunam (audio 2024)",
    channel: "NevoMusic",
    thumbnail: "https://img.youtube.com/vi/uNn_pXTpUck/maxresdefault.jpg",
  },
  {
    index: 3,
    src: "https://www.youtube.com/embed/G8bZ4V52GB0?si=0FCduA1IzTEvsqyN",
    title: "Asadbek Odilov - Yig'lasam (audio 2023)",
    channel: "NevoMusic",
    thumbnail: "https://img.youtube.com/vi/G8bZ4V52GB0/maxresdefault.jpg",
  },
  {
    index: 4,
    src: "https://www.youtube.com/embed/nCm_GU5pxvs?si=xTBIWPUVCHARsRqU",
    title: "Asadbek Odiljonov - ONAM BO'LSAYDI",
    channel: "Zo'rTv",
    thumbnail: "https://img.youtube.com/vi/nCm_GU5pxvs/maxresdefault.jpg",
  },
  {
    index: 5,
    src: "https://www.youtube.com/embed/3JtRJ6fsyBY?si=qsi1Lq-iWf7pwAbn",
    title:
      "Elyor Meliboyev feat Asadbek Odilov - Giybatchilar xormanglar jonli ijro",
    channel: "OBUNA BO'LING",
    thumbnail: "https://img.youtube.com/vi/3JtRJ6fsyBY/maxresdefault.jpg",
  },
];
