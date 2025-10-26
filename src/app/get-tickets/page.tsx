"use client";

import PolicyLinks from "@/components/PolicyLinks";
import { Stars } from "lucide-react";
import { TbShirtFilled } from "react-icons/tb";
import { MdLunchDining } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import InfoElem from "@/components/InfoElem";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ticketOptions = [
  {
    title: "Executive Pass",
    description: "T-Shirt + Executive Lunch + Goodies + Certificate",
    price: "₹700",
    audience: "For VSSUT Students and Alumni",
    icon: <FaUsers size={32} />,
    link: "https://rzp.io/rzp/F9boP7p",
  },
  {
    title: "Only Merchandise",
    description: "TEDxVSSUT T-Shirt (This is NOT a pass to attend the event)",
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
    <div className="flex justify-center bg-[#000000] min-h-screen py-20">
      <div className="pt-10 flex flex-col gap-8 items-center px-6 md:px-0 w-full max-w-4xl">
        <h1 className="text-5xl text-[#E62B1E] text-center font-bold">
          Book Your Passes Now!
        </h1>

        <div className="text-center">
          <h3 className="text-lg text-[#BDBDBD] font-light mb-4">Powered By</h3>
          <div className="flex justify-center items-center gap-6">
            {/* Logo 1   */}
            <div className="animated-border-wrapper">
              <div className="bg-[#FFFFFF] rounded-md p-3 flex items-center justify-center h-16">
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
              <div className="bg-[#FFFFFF] rounded-md p-3 flex items-center justify-center h-16">
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

        <section className="w-full flex justify-center py-12 bg-gradient-to-b text-[#FFFFFF]">
          <div className="w-full max-w-xl text-center px-4">
            <motion.h3
              className="text-2xl md:text-3xl font-semibold mb-6 tracking-wide"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Just look at our{" "}
              <span className="text-[#E62B1E]">Official Merchandise</span> 👕
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-2xl shadow-2xl border border-[#333333]"
            >
              <Image
                src="/images/merchandise_img/TEDxVSSUT_official_merchandise.jpg"
                alt="TEDxVSSUT Official Merchandise"
                width={1800}
                height={1800}
                className="rounded-2xl w-full h-auto"
              />
            </motion.div>

            <motion.p
              className="text-[#BDBDBD] mt-4 text-sm md:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Represent the spirit of{" "}
              <span className="text-[#E62B1E] font-semibold">TEDxVSSUT</span>.
            </motion.p>
          </div>
        </section>

        <p className="text-xl p-4 text-center text-[#F5F5F5]">
          Choose your pass below and secure your spot at TEDxVSSUT!
        </p>

        {/* Ticket Options */}
        <div className="w-full grid md:grid-cols-3 gap-8">
          {ticketOptions.map((ticket, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#333333] rounded-2xl p-6 shadow-lg border border-[#333333]"
            >
              <div className="text-[#E62B1E] mb-3">{ticket.icon}</div>
              <h2 className="text-2xl text-[#FFFFFF] font-semibold text-center">
                {ticket.title}
              </h2>
              <p className="text-[#BDBDBD] text-center mt-2">
                {ticket.description}
              </p>
              <p className="text-[#BDBDBD] text-sm mt-1">{ticket.audience}</p>
              <p className="text-3xl text-[#E62B1E] font-bold mt-4">
                {ticket.price}
              </p>
              <Link
                href={ticket.link}
                className="mt-5 bg-[#E62B1E] hover:bg-[#B22222] text-[#FFFFFF] px-6 py-2 rounded-lg transition hover:scale-110 transition-all"
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