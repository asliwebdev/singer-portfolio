"use client";

import { FormInput } from "../components";
import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";
import { Toaster, toast } from "sonner";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mzbnqyza");
  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const nameInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const submitForm = (e) => {
    handleSubmit(e);
    emailInputRef.current.value = "";
    nameInputRef.current.value = "";
    phoneInputRef.current.value = "";
    messageInputRef.current.value = "";
  };

  return (
    <form onSubmit={submitForm}>
      <Toaster />
      {/* NAME */}
      <FormInput
        label="Ismingiz:"
        type="text"
        name="name"
        inputRef={nameInputRef}
      />
      {/* PHONE NUMBER */}
      <FormInput
        label="Telefon raqamingiz:"
        type="tel"
        name="phone"
        inputRef={phoneInputRef}
      />
      <ValidationError prefix="phone" field="tel" errors={state.errors} />
      {/* EMAIL */}
      <FormInput
        label="E-mail:"
        type="email"
        name="email"
        inputRef={emailInputRef}
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      {/* DESCRIPTION */}
      <FormInput
        label="Xabar matni:"
        type="textarea"
        name="user_message"
        inputRef={messageInputRef}
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div className="mt-8 flex justify-start items-center">
        <button
          type="submit"
          className="py-3 px-6 bg-brown shadow-2 rounded-lg text-black border flex items-center justify-center 
          gap-x-2 max-lg:w-full border-none hover:bg-transparent hover:text-brown transition-colors duration-300"
          disabled={state.submitting}
        >
          {state.submitting ? (
            <>
              <span className="loading loading-spinner"></span>
              sending...
            </>
          ) : (
            "Yuborish"
          )}
        </button>
      </div>
      <div className="hidden">
        {state.succeeded &&
          toast.message("Form is submitted successfully", {
            description: "We'll contact with you soon.",
          })}
      </div>
    </form>
  );
};

export default ContactForm;
