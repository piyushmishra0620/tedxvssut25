'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SpeakerCard from './SpeakerCard'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'


// Mock Data
const speakers = [
  {
    id: 1,
    name: 'Mr. Arjun Roy',
    title: 'AI Researcher and CTO, NextGen Tech',
    imageUrl: '/speaker_image/speaker.webp',
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    title: 'Quantum Physicist, Innovate Labs',
    imageUrl: '/speaker_image/speaker.webp',
  },
  {
    id: 3,
    name: 'Ms. Aisha Khan',
    title: 'Bio-ethicist & Futurist, Helix Institute',
    imageUrl: '/speaker_image/speaker.webp',
  },
  {
    id: 4,
    name: 'Mr. Ben Carter',
    title: 'Lead UX Designer, Creative Solutions',
    imageUrl: '/speaker_image/speaker.webp',
  },
  {
    id: 5,
    name: 'Dr. Elena Vance',
    title: 'Climate Scientist, Terra Initiative',
    imageUrl: '/speaker_image/speaker.webp',
  },
]

const SpeakersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) 
  const [activeIndex, setActiveIndex] = useState(1)
  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + speakers.length) % speakers.length)
    setActiveIndex(1)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % speakers.length)
    setActiveIndex(1)
  }

  const getVisibleSpeakers = () => {
    const total = speakers.length
    const left = currentIndex % total
    const center = (currentIndex + 1) % total
    const right = (currentIndex + 2) % total
    return [speakers[left], speakers[center], speakers[right]]
  }

  const visibleSpeakers = getVisibleSpeakers()

  return (
    <section className="bg-black text-white py-8 md:py-10 font-sans overflow-hidden lg:h-screen relative">
      {/* Glow Circle */}
      <div className="absolute bg-red-700/70 w-[300px] h-[300px] md:w-[400px] md:h-[400px] -right-[150px] -top-[150px] blur-[200px] mix-blend-screen rounded-full"></div>

      <div className="container mx-auto text-center px-4 relative">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-light uppercase tracking-widest">
          Meet Our <span className="font-bold text-red-600">Speakers</span>
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl md:max-w-4xl mx-auto mt-6 md:mt-10 text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
          Visionaries, innovators, and changemakers—all set to take the stage at
          TEDxVSSUT 2024. Get ready to hear from an inspiring lineup of speakers
          who will share ideas that challenge perspectives and spark
          transformation.
        </p>

        {/* Desktop: 3 cards visible */}
        <div className="hidden md:flex relative mt-10 md:mt-12 justify-center items-center overflow-hidden h-[360px] md:h-[400] lg:h-[440px]">
          <motion.div
            className="flex gap-4 md:gap-4 lg:gap-6"
            key={currentIndex}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {visibleSpeakers.map((speaker, i) => (
              <div
                className="min-w-[260px] min-h-[300px] md:min-w-[180px] md:min-h-[220px] lg:min-w-[220px] lg:min-h-[260px] flex-shrink-0"
                key={speaker.id}
              >
                <SpeakerCard
                  key={i}
                  name={speaker.name}
                  title={speaker.title}
                  imageUrl={speaker.imageUrl}
                  isActive={activeIndex === i} 
                  handleHover={() => setActiveIndex(i)}
                  currentIndex={currentIndex}
                  pos={i}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile: 1 card */}
        <div className="flex md:hidden relative mt-8 sm:mt-10 justify-center items-center h-[320px] sm:h-[360px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex} // ensures a re-render on speaker change
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-full h-full flex justify-center items-center"
            >
              <SpeakerCard
                key={speakers[currentIndex].id}
                name={speakers[currentIndex].name}
                title={speakers[currentIndex].title}
                imageUrl={speakers[currentIndex].imageUrl}
                isActive={true}
                handleHover={() => {}}
                currentIndex={currentIndex}
                pos={currentIndex}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-6 md:mt-8">
          <button
            onClick={handlePrev}
            className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
          >
            <GrFormPrevious className="text-2xl sm:text-3xl" />
          </button>
          <button
            onClick={handleNext}
            className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 border-2 border-gray-400 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
          >
            <GrFormNext className="text-2xl sm:text-3xl" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default SpeakersSection
