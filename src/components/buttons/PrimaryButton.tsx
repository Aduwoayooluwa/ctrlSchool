import React from 'react'

type Props = {
    name: string
    onClick?: any
    className?: string
}

const PrimaryButton = ({ name, onClick, className }: Props) => {
    return (
        <button onClick={onClick} className={`focus:bg-[#FFB013] bg-[#003399] text-white w-[180px] py-4 rounded-[10px] ${className}`}>
            {name}
        </button>
    )
}

export default PrimaryButton