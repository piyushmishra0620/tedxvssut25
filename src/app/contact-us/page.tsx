import config from '../config';
import { MdPhoneInTalk } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";
import PolicyLinks from '@/components/PolicyLinks';
import InfoElem from '@/components/InfoElem';

const Index = () => {
    return (
        <div className="flex justify-center bg-black h-[75vh] py-30">
            <div className='pt-30 flex flex-col items-center gap-5 px-6 md:px-0'>
                <h1 className="uppercase text-5xl md:text-6xl text-center">Get&nbsp;in&nbsp;touch with us</h1>

                <InfoElem text="Phone Number" info={config.organizerContact} icon={<MdPhoneInTalk size={36} />} />
                <InfoElem text="Email Address" info={config.officialEmail} icon={<IoMailSharp size={36} />} />

                <PolicyLinks />
            </div>
        </div>
    )
}

export default Index;
