'use client'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { GrFormNext, GrFormPrevious, GrClose } from 'react-icons/gr';
import Link from 'next/link';
import Image from "next/image";
import { BoldIcon } from 'lucide-react';

// Mock Data
const speakers = [
  {
    id: 1,
    name: 'Mr. Arjun Roy',
    title: 'AI Researcher and CTO, NextGen Tech',
    imageUrl: '/speaker_image/speaker.webp',
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    title: 'Quantum Physicist, Innovate Labs',
    imageUrl: '/speaker_image/speaker.webp',
    bio: "Building thoughtful web interfaces requires balancing performance, accessibility, and aesthetics to create meaningful user experiences that solve real problems. Designers and developers must prioritize clarity, responsive layouts, efficient loading, and semantic HTML while collaborating on inclusive interactions. Testing across devices, measuring performance metrics, and iterating based on analytics help refine features and reduce friction. Attention to microinteractions, readable typography, and predictable navigation increases trust and retention. Continuous learning, empathetic design, and pragmatic engineering enable teams to deliver products that scale, adapt, and delight users while maintaining maintainable codebases and measurable business value over time with sustainable practices and thoughtful documentation."
  },
  {
    id: 3,
    name: 'Ms. Aisha Khan',
    title: 'Bio-ethicist & Futurist, Helix Institute',
    imageUrl: '/speaker_image/speaker.webp',
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 4,
    name: 'Mr. Ben Carter',
    title: 'Lead UX Designer, Creative Solutions',
    imageUrl: '/speaker_image/speaker.webp',
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 5,
    name: 'Dr. Elena Vance',
    title: 'Climate Scientist, Terra Initiative',
    imageUrl: '/speaker_image/speaker.webp',
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
]

const SpeakersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [direction, setDirection] = useState(0)
  const [activeIndex, setActiveIndex] = useState(1);
  const imageVariants = {
    center: { x: '', zIndex: 5 },
    left: { x: '', zIndex: 2 },
    right: { x: '', zIndex: 1 },
  }

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + speakers.length) % speakers.length);
    setActiveIndex(1);
  }

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % speakers.length);
    setActiveIndex(1);
  }

  const getVisibleSpeakers = () => {
    const total = speakers.length
    const left = currentIndex % total
    const center = (currentIndex + 1) % total
    const right = (currentIndex + 2) % total
    return [speakers[left], speakers[center], speakers[right]]
  }

  const visibleSpeakers = getVisibleSpeakers();

  let activeId = (speakers[activeIndex].id).toString();

  return (
    <section id='speakers' className="bg-black text-white py-8 md:py-10 font-sans overflow-hidden lg:h-screen relative">
      <div className="container mx-auto text-center px-4 relative">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-light uppercase tracking-widest">
          Meet Our <span className="font-bold text-red-600">Speakers</span>
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl md:max-w-4xl mx-auto mt-6 md:mt-10 text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
          Visionaries, innovators, and changemakers—all set to take the stage at
          TEDxVSSUT 2025. Get ready to hear from an inspiring lineup of speakers
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
            {visibleSpeakers.map((speaker, i) => {
              const uid = (speaker.id).toString();
              const getPos =
                i == currentIndex
                  ? 'center'
                  : i > currentIndex
                    ? 'right'
                    : 'left'
              const isActive = activeIndex === i;
              return (
                <motion.div
                  className="min-w-[260px] min-h-[300px] md:min-w-[180px] md:min-h-[220px] lg:min-w-[220px] lg:min-h-[260px] flex-shrink-0"
                  layoutId={`card-${uid}`}
                  key={speaker.id}
                >
                  <motion.div
                    className={`relative order-none min-w-[40%] sm:min-w-[45%] md:min-w-[50%] lg:w-[320px] xl:w-[350px] h-[300px] sm:h-[340px] md:h-[360px] lg:h-[400px] shrink-0 overflow-hidden rounded-xl transform transition-all pointer-events-auto duration-500 ease-in-out hover:border border-gray-300 ${isActive ? 'scale-105' : 'scale-90 opacity-60'
                      }`}
                    initial={{
                      scale: 0.5,
                      opacity: 0,
                    }}
                    onMouseEnter={() => setActiveIndex(i)}
                    variants={imageVariants}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    onClick={() => { setOpen(true) }}
                  >
                    {/* Speaker Image */}
                    <img
                      src={speaker.imageUrl}
                      alt={speaker.name}
                      className={`w-full h-full object-cover transition-all duration-500 hover:scale-125 ${isActive
                        ? ''
                        : getPos === 'right'
                          ? 'filter grayscale '
                          : 'grayscale'
                        }`}
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 sm:h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-2 lg:p-6 flex justify-between md:gap-2 -gap-1  items-end text-white pointer-events-none">
                      <div className="text-left">
                        <motion.h3 layoutId={`heading-${uid}`} className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug">
                          {speaker.name}
                        </motion.h3>
                        <motion.p layoutId={`title-${uid}`} className="text-[10px] sm:text-xs md:text-sm  text-gray-400">
                          {speaker.title}
                        </motion.p>
                      </div>
                      <div
                        className={`h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-9 lg:w-9 rounded-full flex items-center justify-center transition-colors duration-300 pointer-events-auto cursor-pointer ${isActive ? 'bg-red-600' : 'bg-gray-500'
                          }`}
                        onClick={() => setOpen(true)}
                      >
                        <GrFormNext className="text-white text-sm sm:text-base md:text-lg lg:text-xl" />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
        <AnimatePresence>
          {open && (<motion.div className="hidden md:block md:bg-black/40 md:fixed md:inset-0 md:w-screen md:h-screen md:backdrop-blur-[5px] md:z-[140]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.05 } }} onClick={() => setOpen(false)} />)}
        </AnimatePresence>

        <AnimatePresence>
          {open && (
            <motion.div layoutId={`card-${activeId}`} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ type: "spring", stiffness: 250, damping: 30 }} className="max-md:hidden  md:block md:fixed md:inset-0 md:m-auto md:z-[150] md:w-[650px] 2xl:w-[60%] md:h-[92%]  rounded-[10px] border-[0.8px] border-gray-300 drop-shadow-gray-600 cursor-pointer bg-white overflow-hidden">
              <motion.div className="relative w-full h-full overflow-hidden border-2 border-gray-300 outline-2 outline-gray-300 rounded-[10px]">
                <Image fill src={speakers[activeIndex].imageUrl} title={speakers[activeIndex].title} alt={speakers[activeIndex].name} className="object-cover rounded-[10px] hover:scale-125 transition-all duration-300 ease-out" />
              </motion.div>
              <motion.div className="absolute inset-0 flex flex-col justify-end pointer-events-none">
                <motion.div className="h-auto w-auto bg-gradient-to-t from-black via-black/80 to-transparent rounded-bl-[10px] rounded-br-[10px] p-4">
                  <motion.p layoutId={`heading-${activeId}`} className="ml-3 text-3xl text-left text-white  font-bold">
                    {speakers[activeIndex].name}
                  </motion.p>
                  <motion.p layoutId={`title-${activeId}`} className=" ml-3 text-left text-neutral-300 text-lg font-serif">
                    {speakers[activeIndex].title}
                  </motion.p>
                  <SimpleBar style={{ maxHeight: '250px' }} className="ml-3 mt-[5px] h-[60px] pointer-events-auto">
                    <motion.p className="mr-4 wrap-break-word  text-left text-lg  text-neutral-300 mb-[7px]">
                      {speakers[activeIndex].bio}
                    </motion.p>
                  </SimpleBar>
                </motion.div>
              </motion.div>
              <motion.div className="absolute inset-0 flex flex-row justify-end-safe items-start pointer-events-none mr-2 mt-2">
                <motion.button className="rounded-full p-[8px] bg-black/80 backdrop-blur-[14px] cursor-pointer pointer-events-auto" onClick={() => setOpen(false)}><GrClose className="text-white" size={18} /></motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
              <motion.div
                layoutId={`mobile-${speakers[currentIndex].id}`}
                className="min-w-[260px] min-h-[300px] md:min-w-[180px] md:min-h-[220px] lg:min-w-[220px] lg:min-h-[260px] flex-shrink-0"
                key={speakers[currentIndex].id} onClick={() => setOpen(true)}
              >
                <motion.div
                  className={`relative min-w-[40%] sm:min-w-[45%] md:min-w-[50%] lg:w-[320px] xl:w-[350px] h-[300px] sm:h-[340px] md:h-[360px] lg:h-[400px] shrink-0 overflow-hidden rounded-xl transform transition-all duration-500 ease-in-out scale-105 border border-gray-300`}
                  initial={{
                    scale: 0.5,
                    opacity: 0,
                  }}
                  variants={imageVariants}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                >
                  {/* Speaker Image */}
                  <img
                    src={speakers[currentIndex].imageUrl}
                    alt={speakers[currentIndex].name}
                    className={`w-full h-full object-cover transition-all duration-500`}
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 sm:h-1/2 bg-gradient-to-t from-black to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 lg:p-6 flex justify-between md:gap-4 -gap-1 pointer-events-none items-end text-white">
                    <div className="text-left">
                      <motion.h3 layoutId={`mobileHeading-${speakers[currentIndex].id}`} className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug">
                        {speakers[currentIndex].name}
                      </motion.h3>
                      <motion.p layoutId={`mobileTitle-${speakers[currentIndex].id}`} className="text-[10px] sm:text-xs md:text-sm  text-gray-400">
                        {speakers[currentIndex].title}
                      </motion.p>
                    </div>
                    <div
                      className={`h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full flex items-center justify-center transition-colors pointer-events-auto duration-300 bg-red-600`} onClick={() => setOpen(true)}
                    >
                      <GrFormNext className="text-white text-sm sm:text-base md:text-lg lg:text-xl" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {open && (<motion.div className="block md:hidden bg-black/40 fixed inset-0 w-screen h-screen backdrop-blur-[5px] z-[140]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.05 } }} onClick={() => setOpen(false)} />)}
        </AnimatePresence>


        <AnimatePresence>
          {open && (
            <motion.div layoutId={`mobile-${speakers[currentIndex].id}`} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ type: "spring", stiffness: 250, damping: 30 }} className="block  md:hidden fixed inset-0 m-auto z-[150] w-[450px] max-[550px]:w-[350px] max-[450px]:w-[300px] h-[80%]  rounded-[10px] border-[0.8px] border-gray-300 drop-shadow-gray-600 cursor-pointer bg-white overflow-hidden">
              <motion.div className="relative w-full h-full overflow-hidden border-2 border-gray-300 outline-2 outline-gray-300 rounded-[10px]">
                <Image fill src={speakers[currentIndex].imageUrl} title={speakers[currentIndex].title} alt={speakers[currentIndex].name} className="object-cover rounded-[10px]" />
              </motion.div>
              <motion.div className="absolute inset-0 flex flex-col justify-end pointer-events-none">
                <motion.div className="h-auto w-auto bg-gradient-to-t from-black via-black/80 to-transparent rounded-bl-[10px] rounded-br-[10px] p-4">
                  <motion.p layoutId={`mobileHeading-${speakers[currentIndex].id}`} className="ml-[4px] text-[23px] text-left text-white  font-bold">
                    {speakers[currentIndex].name}
                  </motion.p>
                  <motion.p layoutId={`mobileTitle-${speakers[currentIndex].id}`} className=" ml-[4px] text-left text-neutral-300 text-[12px] font-serif">
                    {speakers[currentIndex].title}
                  </motion.p>
                  <SimpleBar style={{ maxHeight: '250px' }} className="ml-[4px] mt-[10px] h-[60px] pointer-events-auto touch-auto">
                    <motion.p className="mr-4 wrap-break-word text-left text-[15px]  text-neutral-300 mb-[7px]">
                      {speakers[currentIndex].bio}
                    </motion.p>
                  </SimpleBar>
                </motion.div>
              </motion.div>
              <motion.div className="absolute inset-0 flex flex-row justify-end-safe items-start pointer-events-none mr-2 mt-2">
                <motion.button className="rounded-full p-[8px] bg-black/80 backdrop-blur-[14px] cursor-pointer pointer-events-auto" onClick={() => setOpen(false)}><GrClose className="text-white" size={15} /></motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-6 md:mt-8 md:hidden">
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

export default SpeakersSection;
