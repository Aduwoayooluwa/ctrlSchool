import React from 'react'
import Card from '../../components/banner/Card'
import ExploreIcon from "../../assets/icons/explore_icon.png"
import SupportIcon from "../../assets/icons/support_icon.png"
import ScheduleIcon from "../../assets/icons/schedule_icon.png"

type Props = {}

interface CardPageInt {
    title: string
    icon: any
    desc: string
}

const CardsPage: CardPageInt[] = [
    {
        title: "Exclusive personal 1 on 1 session with mentors",
        desc: "Schedule 1-on-1 appointments with your mentor to work through any current challenges",
        icon: ExploreIcon
    },
    {
        title: "Completely flexible schedule",
        desc: "The lessons, projects, exercises, and results can all be scheduled according to your availability and ease",
        icon: ScheduleIcon
    },
    {
        title: "Fully equipped support system",
        desc: "We got your back! our chat portal is always there to answer all your questions, review your tasks, and provide feedback.",
        icon: SupportIcon
    }
]

const Cards = (props: Props) => {
    return (
        <div className='grid place-items-center px-20 my-10 grid-cols-1 md:grid-cols-3'>

            {
                CardsPage.map((data, index) => {
                    return (
                        <Card title={data.title} icon={data.icon} desc={data.desc} />
                    )
                })
            }
        </div>
    )
}

export default Cards