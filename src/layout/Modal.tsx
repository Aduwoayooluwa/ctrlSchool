import React from "react";
import { createPortal } from "react-dom";

export const BlurModal = ({ isModalOpen, onClose, children }: any) => {
    if (!isModalOpen) {
        return null;
    }

    return createPortal(
        <section className="  ">
            <div
                className="fixed h-screen w-screen z-[52] top-0 left-0  backdrop-blur-[5px] backdrop-brightness-50 overflow-hidden"
                onClick={onClose}
            ></div>
            <div

                className="overflow-y-scroll max-h-screen fixed z-[55] md:top-1/2 top-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-72 md:w-auto w-full
        "
            >
                {children}
            </div>
        </section>,
        document.getElementById("modal-root")!
    );
};

