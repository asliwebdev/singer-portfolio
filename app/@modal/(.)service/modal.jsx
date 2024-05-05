"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";

export function Modal({ children }) {
  const router = useRouter();
  const dialogRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  if (typeof window !== "undefined") {
    return createPortal(
      <div className="min-h-screen min-w-full fixed inset-0 bg-black opacity-70 grid place-items-center z-50">
        <dialog
          ref={dialogRef}
          className="bg-gradient w-[90%] lg:w-[80%] max-w-[900px] border-none rounded-xl fixed z-[55] grid place-items-center"
          onClose={onDismiss}
        >
          {children}
          <button
            onClick={onDismiss}
            className="absolute top-2.5 right-2.5 bg-transparent text-2xl"
          >
            <RxCross2 />
          </button>
        </dialog>
      </div>,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}
