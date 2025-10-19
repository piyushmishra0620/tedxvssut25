'use client'
import { CrewCard, crewMembers } from '@/components/CrewSection'
import { motion } from 'motion/react'
import config from '@/app/config'



export default function Index() {
  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-40 px-6 ">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl  mb-6 uppercase"
            initial={{ scale: 2, opacity: 0 }}
            animate={{ scale: 1, opacity: 100 }}
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
            }}
          >
            Meet Our <span className="font-bold text-red-600">Crew</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The passionate team behind TEDx, working together to spread ideas
            worth sharing
          </p>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 text-center lg:text-left ">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600">
              Organizers
            </h2>
            <div className="h-1 w-full sm:w-40 mx-auto lg:mx-3 bg-gradient-to-r from-black via-red-500 to-black" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18 justify-items-center">
            {config.crew.organizers.map((member, i) => (
              <CrewCard key={i} member={member} />
            ))}
          </div>
        </div>
      </section>
      {/* Core Team Section */}
      <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 text-center lg:text-left ">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4  text-red-600">
              Tech
            </h2>
            <div className="h-1 w-full sm:w-20 mx-auto lg:mx-0 bg-gradient-to-r from-black via-red-500 to-black" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18 justify-items-center">
            {config.crew.tech.map((member, i) => (
              <CrewCard key={i} member={member} />
            ))}
          </div>
        </div>
      </section>
      {/* Core Team Section */}
      <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 text-center lg:text-left ">
            <h2 className="text-3xl sm:text-4xl  font-bold mb-4 text-red-600">
              Event Management
            </h2>
            <div className="h-1 w-full sm:w-70 mx-auto lg:mx-3 bg-gradient-to-r from-black via-red-500 to-black" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18 justify-items-center">
            {config.crew.event_management.map((member, i) => (
              <CrewCard key={i} member={member} />
            ))}
          </div>
        </div>
      </section>
      {/* Core Team Section */}
      <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 text-center lg:text-left ">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600">
              Marketing
            </h2>
            <div className="h-1 w-full sm:w-40 align-center mx-auto lg:mx-2 bg-gradient-to-r from-black via-red-500 to-black" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18 justify-items-center">
            {config.crew['marketing_&_sponsorship'].map((member, i) => (
              <CrewCard key={i} member={member} />
            ))}
          </div>
        </div>
      </section>
      {/* Core Team Section */}
      {/* <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600">
              Sponsorships
            </h2>
            <div className="h-1 w-32 sm:w-40 mx-auto lg:mx-0 bg-gradient-to-r from-red-600 via-red-500 to-black" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18 justify-items-center">
            {config.crew['marketing_&_sponsorship'].map((member, i) => (
              <CrewCard key={i} member={member} />
            ))}
          </div>
        </div>
      </section> */}
      {/* Core Team Section */}
      <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 text-center lg:text-left ">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600">
              Social Media
            </h2>
            <div className="h-1 w-full sm:w-50 mx-auto lg:mx-3 bg-gradient-to-r from-black via-red-500 to-black" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18 justify-items-center">
            {config.crew.social_media.map((member, i) => (
              <CrewCard key={i} member={member} />
            ))}
          </div>
        </div>
      </section>
      {/* Core Team Section */}
      <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 text-center lg:text-left ">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600">
              Public Relations
            </h2>
            <div className="h-1 w-full sm:w-60 mx-auto lg:mx-3 bg-gradient-to-r from-black via-red-500 to-black" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18 justify-items-center">
            {config.crew.public_relations.map((member, i) => (
              <CrewCard key={i} member={member} />
            ))}
          </div>
        </div>
      </section>
      {/* Core Team Section */}
      <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 text-center lg:text-left ">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600">
              Video Production
            </h2>
            <div className="h-1 w-full sm:w-70 mx-auto lg:mx-3 bg-gradient-to-r from-black via-red-500 to-black" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18 justify-items-center capitalize">
            {config.crew.videography.map((member, i) => (
              <CrewCard key={i} member={member} />
            ))}
          </div>
        </div>
      </section>
      {/* Core Team Section */}
      <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 text-center lg:text-left ">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600">
              Graphics Design
            </h2>
            <div className="h-1 w-full sm:w-65 mx-auto lg:mx-3 bg-gradient-to-r from-black via-red-500 to-black" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18 justify-items-center">
            {config.crew.design.map((member, i) => (
              <CrewCard key={i} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 text-center lg:text-left ">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600">
              Guest Hospitality & Logistics
            </h2>
            <div className="h-1 w-32 sm:w-110 mx-auto lg:mx-3 bg-gradient-to-r from-black via-red-500 to-black" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18 justify-items-center">
            {config.crew['hospitality_&_logistics'].map((member, i) => (
              <CrewCard key={i} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
