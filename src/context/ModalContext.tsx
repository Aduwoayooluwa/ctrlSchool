import { createContext, useState } from "react";
import { BlurModal } from "../layout/Modal";
import ThankyouModal from "../components/dialog/ThankyouModal";


const ModalContext = createContext<any>({});
export const ModalProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const [isThankYouModal, setIsThankYouModal] = useState(false);


    return (
        <ModalContext.Provider
            value={{
                isThankYouModal,
                setIsThankYouModal
            }}
        >
            {/* register modal */}
            <BlurModal
                isModalOpen={isThankYouModal}
                onClose={() => {
                    setIsThankYouModal(false);
                }}
            >
                <ThankyouModal />
            </BlurModal>

            {children}
        </ModalContext.Provider>
    );
};

export default ModalContext;
