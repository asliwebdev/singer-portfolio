"use client";

import { FormInput } from "../components";

const ContactForm = () => {
  const isSubmitting = false;
  return (
    <form>
      {/* NAME */}
      <FormInput label="Ismingiz:" type="text" name="name" />
      {/* PHONE NUMBER */}
      <FormInput label="Telefon raqamingiz:" type="tel" name="phone" />
      {/* EMAIL */}
      <FormInput label="E-mail:" type="email" name="email" />
      {/* DESCRIPTION */}
      <FormInput label="Xabar matni:" type="textarea" name="user_message" />
      <div className="mt-8 flex justify-start items-center">
        <button
          type="submit"
          className="py-3 px-6 bg-brown shadow-2 rounded-lg text-black border flex items-center justify-center 
          gap-x-2 max-lg:w-full border-none hover:bg-transparent hover:text-brown transition-colors duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="loading loading-spinner"></span>
              sending...
            </>
          ) : (
            "Yuborish"
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
