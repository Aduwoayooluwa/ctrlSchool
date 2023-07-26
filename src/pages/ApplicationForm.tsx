import React from 'react'
import TextField from '../components/input/TextField'
import PrimaryButton from '../components/buttons/PrimaryButton'
import BgImage from "../assets/course_slider.png"
import SelectOption from '../components/input/DropDown'
import RadioOption from '../components/input/RadioDropDown'
import ThankyouModal from '../components/dialog/ThankyouModal'
import ModalContext from '../context/ModalContext'
type Props = {}

const people = [
    { id: 1, name: 'Durward Reynolds' },
    { id: 2, name: 'Kenton Towne' },
    { id: 3, name: 'Therese Wunsch' },
    { id: 4, name: 'Benedict Kessler' },
    { id: 5, name: 'Katelyn Rohan' },
]

const ApplicationForm = (props: Props) => {

    const { isThankYouModal, setIsThankYouModal } = React.useContext(ModalContext)
    return (
        <div className=''>
            <div>
                {/* bg image */}
                <div className='bg-cover course_bg bg-center relative' style={{ backgroundImage: 'course_slider.png' }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <img src={BgImage} alt="bg-img" className='' />
                    <p className="text-white text-center w-full text-5xl font-extrabold top-28 right-1/4 absolute">Application Form</p>

                </div>
            </div>

            <section className='w-4/5 px-40 py-10'>
                <p className="font-bold text-[30px] my-6">Fill in your details</p>

                <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-4 '>
                    <TextField placeholder='Enter first Name' label="first name" type="text" />
                    <TextField placeholder='Enter last Name' label="last name" type="text" />
                </div>

                <div className='my-7 grid grid-cols-1 w-full md:grid-cols-2'>
                    <TextField placeholder='Enter valid number' label="Enter phone number" type="text" />
                    <TextField placeholder='Enter email address' label="Email address" type="email" />
                </div>

                <div className='my-7 grid grid-cols-1 md:grid-cols-2'>
                    <TextField placeholder='mm/dd//yy' label="Date of Birth" type="date" />
                    <RadioOption label={"Gender"} placeholder={"Select Gender"} options={people} />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <RadioOption label={"Educational Level"} placeholder={"Select level of education"} options={people} />
                    <RadioOption label={"Employment status"} placeholder={"Select employment status"} options={people} />
                </div>

                <div className='grid my-7  grid-cols-1 md:grid-cols-2'>
                    <SelectOption label={"Choose course of Study"} placeholder={"Select Course (choose what you want)"} options={people} />
                    <RadioOption label={"How did you hear about us?"} placeholder={"Choose Channel"} options={people} />
                </div>



                <p className='my-5'>By clicking submit, I agree to Terms of Use and acknowledge that I have read the Privacy Policy.</p>
                <PrimaryButton name='Submit' onClick={() => {
                    setIsThankYouModal(true)
                }} />
            </section>


        </div>
    )
}

export default ApplicationForm