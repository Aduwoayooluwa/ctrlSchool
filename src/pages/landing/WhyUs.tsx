import React, { useState } from 'react'
import Default from './whyus-sub/Default'
import ReactTick from "../../assets/icons/light_tick.png"
import Layout from './whyus-sub/Layout'
import ReactImage from "../../assets/whyus-sub/whyus-image.png"
type Props = {}

const WhyUs = (props: Props) => {
    const [active, setActive] = useState(false)

    return (
        <Layout active={false}>

        <section className='flex items-center flex-col md:flex-row justify-around w-full h-full'>
            
            <div className=''>
                {/* <Default /> */}
                <p className='font-semibold text-2xl text-center py-5'>Why Us</p>

                <p>
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
                </p>
                
            </div>
            <div className='ml-5'>
                    <img src={ReactImage} alt="why us ig"/>
            </div>
        </section>

       
        </Layout>
  )
}

export default WhyUs