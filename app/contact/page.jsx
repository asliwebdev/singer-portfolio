import Link from "next/link";
import { MdMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import { fjalla } from "../lib/fonts";

const Contact = () => {
  return (
    <div className="px-4 pt-16 pb-12 lg:px-16 lg:py-28 grid lg:grid-cols-2 gap-8 lg:gap-20">
      <div>
        <h2
          className={`${fjalla.className} text-brown font-bold text-4xl sm:text-clampH2 leading-[43.2px] lg:leading-[57.6px]`}
        >
          Murojaat uchun
        </h2>
        <p className="mt-6 max-w-[30rem]">
          Do you have an event ? If yes and you need a singer don't hesitate to
          contact using the contact informations below!
        </p>
        <div className="mt-8 py-2 flex flex-col gap-y-4">
          <Link
            href="mailto:asadbek@gmail.com"
            className="flex gap-x-4 items-center text-brown"
          >
            <MdMail className="text-2xl" /> asadbek@gmail.com
          </Link>
          <Link
            href="tel:+998 (90) 123-45-67"
            className="flex gap-x-4 items-center text-brown"
          >
            <FaPhone className="text-xl" /> +998 (90) 123-45-67
          </Link>
        </div>
      </div>
      <div className="border-t pt-8 lg:pt-0 lg:border-transparent">
        <h6 className="text-brown lg:hidden mb-8 font-bold text-2xl sm:text-3xl md:text-4xl leading-[28.8px]">
          Xabar qoldirish
        </h6>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
