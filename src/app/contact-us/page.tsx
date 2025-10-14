import config from '../config';
import Link from 'next/link';
import { MdPhoneInTalk } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";

const InfoElem = ({text, info, icon}: any) => {
    return <div className='w-full flex items-center justify-between bg-[#2a2a2a] p-4 rounded-lg hover:bg-[#4a4a4a] hover:scale-105 transition-all'>
        {icon}
        <div className='text-right'>
            <h1 className='text-xl text-red-500'>{text}</h1>
            <p>{info}</p>
        </div>
    </div>;
}

const linksCN = "text-red-500 hover:text-red-300"

const Index = () => {
    return (
        <div className="flex justify-center bg-black h-[75vh] py-30">
            <div className='pt-30 flex flex-col items-center gap-5'>
                <h1 className="uppercase text-6xl">Get in touch with us</h1>

                <InfoElem text="Phone Number" info={config.organizerContact} icon={<MdPhoneInTalk size={36} />} />
                <InfoElem text="Email Address" info={config.officialEmail} icon={<IoMailSharp size={36} />} />

                <div className='flex gap-4'>
                    <Link href="https://merchant.razorpay.com/policy/RT2HVLMPPsKnOw/refund" target='_blank' className={linksCN}>Refund Policy</Link> |
                    <Link href="https://merchant.razorpay.com/policy/RT2HVLMPPsKnOw/terms" target='_blank' className={linksCN}>Terms and Conditions</Link> |
                    <Link href="https://merchant.razorpay.com/policy/RT2HVLMPPsKnOw/shipping" target='_blank' className={linksCN}>Shipping Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Index;
