import React from 'react'

type Props = {
    type: string
    className?: string
    placeholder?: string
    label: string
}

const TextField = ({ type, placeholder, className, label }: Props) => {
    return (
        <div>
            <label className='font-semibold'>{label}</label>
            <div className='bg-[#F6F8FB] mt-5 w-[393px]'>

                <input type={type} placeholder={placeholder} className={`${className} bg-transparent w-full py-3 outline-none focus:border-gray-500 focus:border rounded-sm placeholder:text-sm placeholder:text-gray-700 px-3`} />
            </div>
        </div>

    )
}

export default TextField