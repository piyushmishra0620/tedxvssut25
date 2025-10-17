import PolicyLinks from "@/components/PolicyLinks";
import { Stars } from "lucide-react";
import { TbShirtFilled } from "react-icons/tb";
import InfoElem from "@/components/InfoElem";

const Index = () => {
    return (
        <div className="flex justify-center bg-black h-screen md:h-[80vh] py-30">
            <div className="pt-20 flex flex-col gap-5 items-center px-6 md:px-0">
                <h1 className="text-5xl text-red-500 text-center">Book your Tickets now!</h1>
                <p className="text-xl p-4 text-center text-gray-200">Just a little more wait...Ticket booking will be live soon!</p>

                <InfoElem text="T-Shirt" info="Get exclusive TEDxVSSUT themed T-Shirt" icon={<TbShirtFilled size={36} />} />
                <InfoElem text="Goodies" info="TEDxVSSUT Premium goodies" icon={<Stars size={36} />} />

                <PolicyLinks />
            </div>
        </div>
    )
}

export default Index;