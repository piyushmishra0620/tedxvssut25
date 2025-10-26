'use client'

import config from '@/app/config'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { MdOpacity } from 'react-icons/md'

export interface crewMembers {
  id: number
  name: string
  role: string
  imageUrl: string
  quote: string
  social?: {
    facebook?: string
    instagram?: string
    twitter?: string
    linkedin?: string
    github?: string
  }
}
interface Department {
  id: number
  name: string
  members: crewMembers[]
}
export type { Department }
interface CrewCardProps {
  member: crewMembers
}

export const CrewCard: React.FC<CrewCardProps> = ({ member }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [showOverlay, setShowOverlay] = useState(false)

    const isVisible = showOverlay || isHovered
  useEffect(() => {
    if (showOverlay) {
      const timer = setTimeout(() => setShowOverlay(false), 2000) 
      return () => clearTimeout(timer) 
    }
  }, [showOverlay])

  return (
    <motion.div
      key={member.id}
      className="relative w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px]
                 h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px]
                 bg-black rounded-lg overflow-y-hidden flex-shrink-0 hover:border-1 border-gray-300 "
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      initial={{ scale: 0.6, opacity: 0, y: 100 }}
      whileInView={{
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 10,
          mass: 1,
          duration: 0.5,
        },
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <img
        src={member.imageUrl}
        alt={member.name}
        className="w-full h-full object-cover hover:grayscale"
      />

      <motion.div
        className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-4 space-y-3 cursor-pointer rounded-xl"
        onClick={() => setShowOverlay(!showOverlay)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ opacity: isVisible ? 1 : 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <p className="text-white text-[12px] lg:text-sm leading-snug">
          {member.quote}
        </p>

        <div className="flex space-x-4 text-white text-xl mt-2">
          {member?.social?.facebook && (
            <motion.a
              href={member.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 15,
              }}
            >
              <BsFacebook className="hover:text-blue-500 transition-colors" />
            </motion.a>
          )}

          {member?.social?.instagram && (
            <motion.a
              href={member.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 15,
              }}
            >
              <BsInstagram className="hover:text-pink-500 transition-colors" />
            </motion.a>
          )}

          {member?.social?.twitter && (
            <motion.a
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 15,
              }}
            >
              <BsTwitterX className="hover:text-[#1DA1F2] transition-colors" />
            </motion.a>
          )}

          {member?.social?.linkedin && (
            <motion.a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 15,
              }}
            >
              <BsLinkedin className="hover:text-blue-400 transition-colors" />
            </motion.a>
          )}

          {member?.social?.github && (
            <motion.a
              href={member.social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 15,
              }}
            >
              <BsGithub className="hover:text-gray-400 transition-colors" />
            </motion.a>
          )}
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 bg-black/90 text-center py-2">
        <h3 className="text-red-500 font-bold text-sm sm:text-base">
          {member.name}
        </h3>
        <p className="text-white text-xs sm:text-sm">{member.role}</p>
      </div>
    </motion.div>
  )
}

const CrewSection = () => {
  return (
    <section className=" bg-black text-white py-8 md:py-10 font-sans overflow-hidden lg:h-screen relative">
      <Image
        src='/images/background.avif'
        alt=""
        width={1249}
        height={750}
        className='grayscale invert opacity-[75%] absolute top-0 bottom-0 w-screen'
      />
      <div className='absolute left-0 top-0 w-screen h-full bg-radial from-transparent to-black to-80%'></div>
      <div className="container mx-auto text-center px-4 relative">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-light uppercase tracking-widest">
          <span className="6font-bold text-red-600">Crew</span> Members
        </h2>

        <p className="max-w-2xl md:max-w-4xl mx-auto mt-8 md:mt-10 text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
          Behind every remarkable TEDx event is a passionate and dedicated team
          working tirelessly to bring ideas to life. Meet the individuals who
          are making TEDxVSSUT 2025 success.
        </p>

        <div className="w-[80%] max-w-[1400px] mx-auto px-4 sm:px-6 md:px-30 flex justify-center overflow-x-auto mt-10 sm:mt-16 mb-6 sm:mb-8  relative py-5 overflow-y-hidden custom-scrollbar gap-3 sm:gap-4 md:gap-6 lg:gap-8 ">
          {config.crew.organizers.map((crew, i) => (
            <CrewCard key={i} member={crew} />
          ))}
        </div>
        <Link
          href="/crew"
          className="inline-block px-6 py-2 mt-6 rounded-md bg-red-600 text-white font-semibold tracking-wide
             hover:bg-red-700 hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          View All Crew Members
        </Link>
      </div>
    </section>
  )
}

export default CrewSection
