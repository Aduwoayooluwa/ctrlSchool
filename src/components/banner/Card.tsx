import React from 'react'

type Props = {
    title: string
    desc: string
    icon: any
}

const Card = ({ title, desc, icon }: Props) => {
    return (
        <div className=' w-[386px] py-3 px-2 flex h-[200px] items-center rounded-[15px] shadow'>
            <div className='mr-5'>
                <img className="" src={icon} alt="name" />
            </div>

            <div className='leading-11'>
                <p className='font-extrabold my-3'>{title}</p>
                <p >{desc}</p>
            </div>
        </div>
    )
}

export default Card