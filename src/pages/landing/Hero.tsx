import React from 'react'
import ReactHeroImg from "../../assets/hero_setup.png"
import PrimaryButton from '../../components/buttons/PrimaryButton'
import AvatarImage from "../../assets/avatar_hero.png"
import { useNavigate } from 'react-router-dom'
type Props = {}

const Hero = (props: Props) => {
    const router = useNavigate()
    return (
        <section className='h-full md:h-[600px] p-3 md:px-20 pt-10 md:pt-20'>
            <section className='flex flex-col md:flex-row justify-around items-center w-full'>
                <div className=' w-full md:w-1/3'>
                    <p className='font-extrabold text-[#003399] text-sm'>Unlock your potential</p>
                    <p className='text-[28px] md:text-[38px] lg:text-[48px] font-[900] w-full md:w-[450px]'>
                        Unlock Your Potential with Ctrl Tech Academy
                    </p>
                    <p className='my-4 w-full md:w-[496px]'>
                        Learn in-demand tech skills from industry experts and build a successful career in software engineering.
                    </p>

                    <PrimaryButton className='my-7' onClick={() => {
                        router('/apply')
                    }} name='Apply Now' />
                </div>

                <div className='w-1/2'>

                    <img className='z-20' src={ReactHeroImg} alt="hero-img" />

                    {/* banner */}
                    <div className=' absoulte -z-20 -mt-10'>
                        <div className='shadow rounded-[15px] flex items-center justify-center -z-10 w-[182px] h-[200px] bg-white  relative'>
                            <div className='absolute -top-20'>
                                <img src={AvatarImage} alt="avatar" />
                            </div>

                            <p className='font-bold w-2/3 text-sm text-center'>Top rated instructors</p>
                        </div>
                    </div>


                </div>
            </section>


        </section>
    )
}

export default Hero