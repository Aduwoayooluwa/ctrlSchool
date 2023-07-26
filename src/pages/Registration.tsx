import React from 'react'
import TextField from '../components/input/TextField'
import PrimaryButton from '../components/buttons/PrimaryButton'
import BgImage from "../assets/course_slider.png"
import SelectOption from '../components/input/DropDown'
import RadioOption from '../components/input/RadioDropDown'
import TextArea from '../components/input/TextArea'
import SupportBanner from '../components/banner/SupportBanner'
type Props = {}

const people = [
    { id: 1, name: 'Durward Reynolds' },
    { id: 2, name: 'Kenton Towne' },
    { id: 3, name: 'Therese Wunsch' },
    { id: 4, name: 'Benedict Kessler' },
    { id: 5, name: 'Katelyn Rohan' },
]

const RegistrationForm = (props: Props) => {
    return (
        <div className='w-full'>
            <div>
                {/* bg image */}
                <div className='bg-cover course_bg bg-center relative' style={{ backgroundImage: 'course_slider.png' }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <img src={BgImage} alt="bg-img" className='' />
                    <p className="text-white text-center w-full text-5xl font-extrabold top-28 right-1/4 absolute">Contact</p>

                </div>
            </div>

            <div className='px-20'>

                <p className="font-bold text-[30px] my-6">Get in Touch</p>

                <form className='w-full flex items-start'>
                    <section className='w-5/6  py-10'>
                        <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-4 '>
                            <TextField placeholder='Enter first Name' label="first name" type="text" />
                            <TextField className='' placeholder='Enter last Name' label="last name" type="text" />
                        </div>

                        <div className='my-7 grid grid-cols-1 w-full md:grid-cols-2'>
                            <TextField placeholder='Enter valid number' label="Enter phone number" type="text" />
                            <TextField placeholder='Enter email address' label="Email address" type="email" />
                        </div>

                        <div>
                            <TextArea />
                        </div>

                        <PrimaryButton className='mt-5' name='Send' />
                    </section>

                    <div className='ml-10 flex items-center justify-center'>
                        <SupportBanner />
                    </div>
                </form>
            </div>



        </div>
    )
}

export default RegistrationForm