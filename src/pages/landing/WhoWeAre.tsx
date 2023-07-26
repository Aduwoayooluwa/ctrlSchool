import React from 'react'
import WWAImage from "../../assets/wwa_setup.png"
import ReactTick from "../../assets/icons/tick.png"
type Props = {}

const WhoWeAre = (props: Props) => {
    return (
        <div className='bg-gray-100 grid grid-cols-1 md:grid-cols-2 place-items-center h-[600px] w-full'>
            <div>
                <img src={WWAImage} alt="wwa" />
            </div>

            <div>
                <h2 className='text-3xl mb-4  font-extrabold text-[#141517]'>
                    Who We Are
                </h2>

                <p className=' text-[#575757] leading-7 w-[510px] text-[16px] mt-3'>
                    At Meld Tech Academy, we are passionate about empowering individuals with the knowledge
                    and skills to thrive in the ever-evolving tech industry.
                    Our team of experienced instructors is committed to providing high-quality,
                    hands-on training that prepares you for real-world challenges.
                </p>

                <ul className='text-[#575757]'>
                    <li className='flex my-7'>
                        <img className='mr-2' src={ReactTick} alt="" />
                        Industry-Leading Instructors
                    </li>

                    <li className='flex'>
                        <img className='mr-2' src={ReactTick} alt="" />
                        Diverse Course Offerings
                    </li>

                    <li className='flex my-7'>
                        <img className='mr-2' src={ReactTick} alt="" />
                        Hands-On Learning Experience
                    </li>

                    <li className='flex'>
                        <img className='mr-2' src={ReactTick} alt="" />
                        Supportive Learning Community
                    </li>



                </ul>
            </div>

        </div>
    )
}

export default WhoWeAre
