import PolicyLinks from "@/components/PolicyLinks";
import { Stars } from "lucide-react";
import { TbShirtFilled } from "react-icons/tb";
import { MdLunchDining } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import InfoElem from "@/components/InfoElem";
import Link from "next/link";
import Image from "next/image";

const ticketOptions = [
  {
    title: "Executive Pass",
    description: "T-Shirt + Executive Lunch + Goodies",
    price: "₹700",
    audience: "For VSSUT Students",
    icon: <FaUsers size={32} />,
    link: "https://rzp.io/rzp/F9boP7p",
  },
  {
    title: "Only Merchandise",
    description: "TEDxVSSUT T-Shirt + Goodies",
    price: "₹520",
    audience: "For VSSUT Students",
    icon: <TbShirtFilled size={32} />,
    link: "https://rzp.io/rzp/O0vsJYvg",
  },
  {
    title: "Outsider Pass",
    description: "T-Shirt + Executive Lunch + Goodies",
    price: "₹800",
    audience: "For Non-VSSUT Attendees",
    icon: <MdLunchDining size={32} />,
    link: "https://rzp.io/rzp/DKIs4xkd",
  },
];

const Index = () => {
  return (
    <div className="flex justify-center bg-black min-h-screen py-20">
      <div className="pt-10 flex flex-col gap-8 items-center px-6 md:px-0 w-full max-w-4xl">
        <h1 className="text-5xl text-red-500 text-center font-bold">
          Book Your Passes Now!
        </h1>


        <div className="text-center">
          <h3 className="text-lg text-gray-300 font-light mb-4">Powered By</h3>
          <div className="flex justify-center items-center gap-6">
            
            {/* Logo 1   */}
            <div className="animated-border-wrapper">
              <div className="bg-white rounded-md p-3 flex items-center justify-center h-16">
                <Image
                  src="/sponsors_image/sbi-yono-app-icon.png"
                  alt="YONO SBI Logo"
                  width={55}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Logo 2   */}
            <div className="animated-border-wrapper">
              <div className="bg-white rounded-md p-3 flex items-center justify-center h-16">
                <Image
                  src="/sponsors_image/hycred_logo.png"
                  alt="Hycred Logo"
                  width={55}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </div>
        

        <p className="text-xl p-4 text-center text-gray-200">
          Choose your pass below and secure your spot at TEDxVSSUT!
        </p>

        {/* Ticket Options */}
        <div className="w-full grid md:grid-cols-3 gap-8">
          {ticketOptions.map((ticket, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#1d1d1d] rounded-2xl p-6 shadow-lg border border-gray-700"
            >
              <div className="text-red-400 mb-3">{ticket.icon}</div>
              <h2 className="text-2xl text-white font-semibold text-center">
                {ticket.title}
              </h2>
              <p className="text-gray-300 text-center mt-2">
                {ticket.description}
              </p>
              <p className="text-gray-400 text-sm mt-1">{ticket.audience}</p>
              <p className="text-3xl text-red-500 font-bold mt-4">
                {ticket.price}
              </p>
              <Link
                href={ticket.link}
                className="mt-5 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition hover:scale-110 transition-all"
              >
                Proceed
              </Link>
            </div>
          ))}
        </div>
        {/* Policy Links */}
        <PolicyLinks />
      </div>
    </div>
  );
};

export default Index;