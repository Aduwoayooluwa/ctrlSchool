import { useContext } from 'react'
import PrimaryButton from '../buttons/PrimaryButton'
import ModalContext from '../../context/ModalContext'
import ThankYouGIF from "../../assets/gifs/thank_you.gif"

export default function ThankyouModal() {
    const { setIsThankYouModal } = useContext(ModalContext)

    return (
        <main className={"w-[300px] md:w-[600px]  mx-5 md:mx-0 bg-white px-10 py-5 h-full md:h-[500px]"}>
            <div>
                <p className='text-[23px] md:text-[30px] font-bold text-center'>Thank You for Choosing ctrl Tech Academy!</p>

                <p className='text-sm md:text-[14px] mt-5 md:mt-10'>
                    Congratulations on taking the first step towards transforming your tech career. You'll receive an email with next steps shortly.
                    Get ready to embark on an exciting learning adventure with us. Welcome aboard!
                </p>



                <div className='flex items-center flex-col justify-center w-full'>
                    <img src={ThankYouGIF} alt="thank you gif" />

                    <PrimaryButton onClick={() => setIsThankYouModal(false)} className='mt-5 md:mt-10' name='Return Home' />
                </div>



            </div>
        </main>
    )
}