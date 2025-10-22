'use client'
import { CrewCard, crewMembers } from '@/components/CrewSection'
import { motion } from 'motion/react'
import config from '@/app/config'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

export default function Index() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* === Carousel as Background (Visible only on lg+) === */}
        <div className="hidden lg:block absolute z-10">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full h-full"
          >
            <CarouselContent>
                <CarouselItem className="w-full h-full">
                  <img
                    src={config.crew_carousal.images[0]}
                    alt={`crew`}
                    className="w-full h-full object-cover"
                  />
                </CarouselItem>
                <CarouselItem className="w-full h-full">
                  <img
                    src={config.crew_carousal.images[1]}
                    alt={`crew`}
                    className="w-full h-full object-cover"
                  />
                </CarouselItem>
                <CarouselItem className="w-full h-full">
                  <img
                    src={config.crew_carousal.images[2]}
                    alt={`crew`}
                    className="w-full h-full object-cover"
                  />
                </CarouselItem>
            </CarouselContent>
          </Carousel>

          {/* dark overlay for readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* === Foreground Content === */}
        <section className="relative flex flex-col justify-center items-center text-center px-6 pt-32 lg:pt-40 z-12">
          <motion.h1
            className="text-5xl md:text-6xl mb-6 uppercase text-white"
            initial={{ scale: 2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
            }}
          >
            Meet Our <span className="font-bold text-red-600">Crew</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.9,
              duration: 0.5,
            }}
          >
            The passionate team behind TEDx, working together to spread ideas
            worth sharing
          </motion.p>
        </section>

        {/* === Carousel Below for Mobile (Visible only below lg) === */}
        <div className="block lg:hidden mt-10 px-6">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full h-auto rounded-md overflow-hidden"
          >
            <CarouselContent>
                <CarouselItem>
                  <img
                    src={config.crew_carousal.images[0]}
                    alt={`crew`}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src={config.crew_carousal.images[1]}
                    alt={`crew`}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src={config.crew_carousal.images[2]}
                    alt={`crew`}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </CarouselItem>
              
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* Core Team Section */}
      <section className="py-12 px-4 sm:px-6 lg:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 text-center lg:text-left ">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-red-600">
              Organizers
            </h2>
            <div className="h-1 w-full sm:w-40 mx-auto lg:mx-3 bg-gradient-to-r from-black via-red-500 to-black" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18 justify-items-center">
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
              Public Relation and Curation
            </h2>
            <div className="h-1 w-full sm:w-100 mx-auto lg:mx-3 bg-gradient-to-r from-black via-red-500 to-black" />
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
              Marketing & Sponsorship
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
    </div>
  )
}
