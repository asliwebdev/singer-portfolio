import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Asadbek Odilov",
    default: "Asadbek Odilov",
  },
  description: "Asadbek Odilov, Uzbek professional singer.",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        {children}
        {modal}
        <div id="modal-root"></div>
        <Footer />
      </body>
    </html>
  );
}
