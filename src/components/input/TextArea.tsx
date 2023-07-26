import React from 'react'

type Props = {}

const TextArea = (props: Props) => {
    return (
        <div>
            <label className='font-semibold'>{"Message"}</label>
            <textarea
                className='focus:border border-gray-500 outline-none h-[188px] bg-[#F6F8FB] mt-5 w-full'
            ></textarea>
        </div>
    )
}

export default TextArea