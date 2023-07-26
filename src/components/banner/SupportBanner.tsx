import React from 'react'
import PhoneIcon from "../../assets/icons/phone.png"
import LocationIcon from "../../assets/icons/location.png"
import EmailIcon from "../../assets/icons/mail.png"
// type Props = {}

function SupportBanner() {
    return (
        <div className='bg-[#F6F8FB] flex flex-col justify-center  shadow p-4 w-[393px] h-[404px]'>
            <p className='text-[#003399] text-center font-bold text-[28px]'>HQ Support Contact</p>

            <div className='my-5 flex items-center'>
                <img src={PhoneIcon} alt="phone icon" />

                <div className='ml-4'>
                    <p className='font-semibold'>Phone</p>
                    <p className='text-sm'>+2347034171896</p>
                </div>
            </div>

            <div className='flex items-center'>
                <img src={EmailIcon} alt="email icon" />

                <div className='ml-4'>
                    <p className='font-semibold'>Email</p>
                    <p className='text-sm'>meldtechofficial@gmail.com</p>
                </div>
            </div>

            <div className='my-5 flex items-center'>
                <img src={LocationIcon} alt="location icon" />

                <div className='ml-4'>
                    <p>Loaction</p>
                    <p className='text-sm'>Abbot Kinney Blvd. New York, USA-5785</p>
                </div>
            </div>
        </div>
    )
}

export default SupportBanner