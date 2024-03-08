import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Asadbek Odilov",
  description: "Uzbek professional singer",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        {children}
        {modal}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
