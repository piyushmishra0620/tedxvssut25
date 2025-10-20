'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Sponsorship from '@/components/Sponsorship';
import Image from 'next/image';

const IIndex = () => {
  const sponsors = [
    { id: 1, name: 'MCL', bg: 'bg-white', imageUrl: '/sponsors_image/MCL.png' },
    { id: 2, name: 'Career Launcher', bg: 'bg-white', imageUrl: '/sponsors_image/Career_Launcher.png' },
    { id: 3, name: 'Devfolio', bg: 'bg-white', imageUrl: '/sponsors_image/Devfolio.png' },
    { id: 4, name: 'FabLabs.in', bg: 'bg-white', imageUrl: '/sponsors_image/FabLabs.in.png' },
    { id: 5, name: 'FASTECH FASHIONS', bg: 'bg-white', imageUrl: '/sponsors_image/FASTECH_FASHIONS.png' },
    { id: 6, name: 'GIRLSCRIPT.TECH', bg: 'bg-white', imageUrl: '/sponsors_image/GIRLSCRIPT.TECH.png' },
    { id: 7, name: 'GitHub', bg: 'bg-white', imageUrl: '/sponsors_image/GitHub.png' },
    { id: 8, name: 'GREEN CHILLYZ', bg: 'bg-white', imageUrl: '/sponsors_image/GREENCHILLYZ.png' },
    { id: 9, name: 'INDIAN EXPRESS', bg: 'bg-white', imageUrl: '/sponsors_image/INDIAN_EXPRESS.png' },
    { id: 10, name: 'JR.Eatery', bg: 'bg-white', imageUrl: '/sponsors_image/JR.Eatery.png' },
    { id: 11, name: 'Lead Angels', bg: 'bg-white', imageUrl: '/sponsors_image/Lead_Angels.png' },
    { id: 12, name: 'LetsUpgrade', bg: 'bg-white', imageUrl: '/sponsors_image/LetsUpgrade.png' },
    { id: 13, name: 'LIC', bg: 'bg-white', imageUrl: '/sponsors_image/LIC.png' },
    { id: 14, name: 'Matic', bg: 'bg-white', imageUrl: '/sponsors_image/Matic.png' },
    { id: 15, name: 'MYCAPTAIN', bg: 'bg-white', imageUrl: '/sponsors_image/MYCAPTAIN.png' },
    { id: 16, name: 'NBT', bg: 'bg-white', imageUrl: '/sponsors_image/NBT.png' },
    { id: 17, name: 'OPGC', bg: 'bg-white', imageUrl: '/sponsors_image/OPGC.png' },
    { id: 18, name: 'POPULAR MOBILE', bg: 'bg-white', imageUrl: '/sponsors_image/POPULAR_MOBILE.png' },
    { id: 19, name: 'Raina', bg: 'bg-white', imageUrl: '/sponsors_image/Raina.png' },
    { id: 20, name: 'Raymond', bg: 'bg-white', imageUrl: '/sponsors_image/Raymond.png' },
    { id: 21, name: 'Reliance footprint', bg: 'bg-white', imageUrl: '/sponsors_image/Reliance_footprint.png' },
    { id: 22, name: 'SAKSHI', bg: 'bg-white', imageUrl: '/sponsors_image/SAKSHI.png' },
    { id: 23, name: 'SAMBAD', bg: 'bg-white', imageUrl: '/sponsors_image/SAMBAD.png' },
    { id: 24, name: 'SBI', bg: 'bg-white', imageUrl: '/sponsors_image/SBI.png' },
    { id: 25, name: 'TEQIP', bg: 'bg-white', imageUrl: '/sponsors_image/TEQIP.png' },
    { id: 26, name: 'The Bottles', bg: 'bg-white', imageUrl: '/sponsors_image/The_Bottles.png' },
    { id: 27, name: 'Townscript', bg: 'bg-white', imageUrl: '/sponsors_image/Townscript.png' },
    { id: 28, name: 'unity', bg: 'bg-white', imageUrl: '/sponsors_image/unity.png' },
    { id: 29, name: 'YOURSTORY', bg: 'bg-white', imageUrl: '/sponsors_image/YOURSTORY.png' },
    { id: 30, name: 'ZEBRONICS', bg: 'bg-white', imageUrl: '/sponsors_image/ZEBRONICS.png' },
    { id: 31, name: 'BELLYFUL RESTAURANT', bg: 'bg-white', imageUrl: '/sponsors_image/BELLYFUL_RESTAURANT.png' },
    { id: 32, name: 'JET_B', bg: 'bg-white', imageUrl: '/sponsors_image/JET_B.png'}
  ];

  // Duplicate sponsors for seamless loop
  const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];
  
  const totalWidth = duplicatedSponsors.length * (112 + 24); // 112px (w-28) + 24px gap

  return (
    <div className="w-full bg-black py-8 overflow-hidden">
      <Sponsorship />
      <div className="relative mt-8">
        <div className="flex flex-col md:flex-row items-center gap-8 px-4">
          {/* Title on the left */}
          <h2 className="text-3xl md:text-5xl font-bold text-white whitespace-nowrap flex-shrink-0">
            PAST <span className="text-gray-400">SPONSORS</span>
          </h2>
          
          {/* Scrolling sponsors */}
          <div 
            className="flex-1 relative"
          >
            <div className="overflow-hidden">
              <motion.div 
                className="flex gap-6 items-center"
                animate={{
                  x: [0, -(totalWidth / 3)],
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {duplicatedSponsors.map((sponsor, index) => (
                  <motion.div
                    key={`${sponsor.id}-${index}`}
                    className={`flex-shrink-0 w-28 h-28 p-2 ${sponsor.bg} rounded-xl flex items-center justify-center cursor-pointer shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                        src={sponsor.imageUrl}
                        alt={sponsor.name}
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IIndex;