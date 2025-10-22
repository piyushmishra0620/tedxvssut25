'use client';

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { GrFormNext, GrFormPrevious, GrClose } from 'react-icons/gr';
import Link from 'next/link';
import Image from "next/image";
import { BoldIcon } from 'lucide-react';
import type { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const speakers = [
  {
    id: 1,
    name: 'Mr. Arjun Roy',
    title: 'AI Researcher and CTO, NextGen Tech',
    imageUrl: '/speaker_image/speaker.webp',
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod temport incididunt ui labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud execitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    title: 'Quantum Physicist, Innovate Labs',
    imageUrl: '/speaker_image/speaker.webp',
    bio: "Building thoughtful web interfaces requires balancing performance, accessibility, and aesthetics."
  },
  {
    id: 3,
    name: 'Ms. Aisha Khan',
    title: 'Bio-ethicist & Futurist, Helix Institute',
    imageUrl: '/speaker_image/speaker.webp',
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod temport incididunt ui labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud execitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 4,
    name: 'Mr. Ben Carter',
    title: 'Lead UX Designer, Creative Solutions',
    imageUrl: '/speaker_image/speaker.webp',
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod temport incididunt ui labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud execitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 5,
    name: 'Dr. Elena Vance',
    title: 'Climate Scientist, Terra Initiative',
    imageUrl: '/speaker_image/speaker.webp',
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod temport incididunt ui labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud execitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 6,
    name: "Mr. Lucas Zhang",
    title: "Cybersecurity Expert, SecureNet",
    imageUrl: '/speaker_image/speaker.webp',
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod temport incididunt ui labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud execitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 7,
    name: "Ms. Sofia Martinez",
    title: "Social Entrepreneur, ChangeMakers",
    imageUrl: '/speaker_image/speaker.webp',
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod temport incididunt ui labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud execitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 8,
    name: "Dr. Anil Mehta",
    title: "Neuroscientist, BrainTech Labs",
    imageUrl: '/speaker_image/speaker.webp',
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod temport incididunt ui labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud execitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

const SpeakersSection = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flip, setFlip] = useState<boolean[]>(speakers.map(() => false));
  const [open, setOpen] = useState(false);
  const [mapping, setMapping] = useState(0);
  const [direction, setDirection] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [open]);

  function toggleHandle(index: number) {
    setFlip(() => {
      const arr = [...flip];
      arr[index] = !(arr[index]);
      return arr;
    });
  }

  function cardClickHandler() {
    if (swiperRef.current) {
      if (!(swiperRef.current.autoplay.paused)) {
        swiperRef.current.autoplay.pause();
      } else {
        swiperRef.current.autoplay.resume();
      }
    }
  }

  return (
    <section id='speakers' className="bg-black text-white py-8 md:py-10 font-sans overflow-hidden relative">
      <div className="container z-[110] mx-auto max-xl:pl-[0px] max-xl:pr-[0px] max-[1535px]:pr-[40px] max-[1700px]:pr-[60px] max-[1700px]:pl-[125px] text-center pr-4 relative h-fit">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-light uppercase tracking-widest">
          Meet Our <span className="font-bold text-red-600">Speakers</span>
        </h2>

        {/* Subtitle */}
        <p className="max-w-2xl md:max-w-4xl mx-auto mt-6 md:mt-10 text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
          Visionaries, innovators, and changemakers—all set to take the stage at TEDxVSSUT 2025. Get ready to hear from an inspirign lineup of speakers who will share ideas that challenge perspectives and spark transformation.
        </p>

        {/* Desktop View */}
        <div className="hidden md:flex relative mt-10 md:mt-12 justify-center items-center overflow-hidden h-fit py-4">
          <div className="w-full h-fit grid grid-flow-row max-md:hidden max-lg:grid-cols-2 max-[1700px]:grid-cols-3 grid-cols-4 max-lg:gap-4 max-[1700px]:gap-6 gap-8">
            {speakers.map((speaker, i) => (
              <div
                key={speaker.id}
                className="min-w-[260px] min-h-[300px] md:min-w-[180px] md:min-h-[220px] lg:min-w-[220px] lg:min-h-[260px] flex-shrink-0"
              >
                <div className="group perspective order-none min-w-[40%] sm:min-w-[45%] md:min-w-[50%] lg:w-[320px] xl:w-[350px] h-[300px] sm:h-[340px] md:h-[360px] lg:h-[400px] rounded-xl overflow-hidden">
                  <div
                    className="relative w-full h-full transition-transform  transform-style-preserve-3d group-hover:rotate-y-180 duration-500 ease-out cursor-pointer border-2 border-gray-300 rounded-xl"
                    onMouseEnter={() => setActiveIndex(i)}
                  >
                    {/* FRONT SIDE */}
                    <div className="absolute inset-0 backface-hidden overflow-hidden rounded-xl">
                      <img
                        src={speaker.imageUrl}
                        alt={speaker.name}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 sm:h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-2 lg:p-6 flex justify-between items-end text-white pointer-events-none">
                        <div className="text-left">
                          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug">
                            {speaker.name}
                          </h3>
                          <p className="text-[10px] sm:text-xs md:text-sm font-serif text-gray-400">
                            {speaker.title}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* BACK SIDE */}
                    <div className="absolute inset-0 rotate-y-180 backface-hidden bg-black text-white rounded-xl">
                      <h3 className="text-[25px] mt-8 mb-2 font-bold z-[30]">{speaker.name}</h3>
                      <p className="text-[16px]   text-gray-100 font-serif z-[30]">{speaker.title}</p>
                      <p className="text-[15px]  mt-4 px-4 text-center opacity-90 z-[30]">
                        {speaker.bio}
                      </p>
                      <div className="absolute bottom-0 right-0 w-full h-full flex flex-row justify-end items-end z-[10]">
                        <div className="bg-radial-[at_0%_0%] from-red-600 to-red-700 rounded-full p-[125px] blur-[150px]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Mobile View */}
        <div className="flex md:hidden flex-col items-center justify-center relative mt-8 sm:mt-10 h-fit overflow-visible">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.nextButton',
              prevEl: '.prevButton',
            }}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            onSlideChange={(swiper) => { setMapping(swiper.activeIndex); }}
            slidesPerView={1}
            watchOverflow={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: true
            }}
            className="w-full h-full pb-8 overflow-visible"
          >
            {speakers.map((speaker, index) => {
              return (
                <SwiperSlide key={speaker.id}>
                  <div className="flex justify-center items-center h-full">
                    <div
                      className="relative w-[300px] sm:w-[340px] h-[360px] sm:h-[380px]  overflow-hidden cursor-pointer perspective" onClick={() => cardClickHandler()}
                    >
                      <div className={`absolute inset-0 border-[0.6px] border-gray-300 rounded-xl transform-3d duration-500 ease-out transition-transform ${flip[index] ? "rotate-y-180" : ""}`} onClick={() => toggleHandle(index)}>
                        {/* FRONT SIDE */}
                        <div className={`absolute inset-0 backface-hidden rounded-xl overflow-hidden ${flip[index] ? "rotate-y-180" : "rotate-y-0"}`}>
                          <img
                            src={speaker.imageUrl}
                            alt={speaker.name}
                            className="w-full h-full object-cover rounded-xl"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 text-white flex justify-between items-end" >
                            <div className="text-left">
                              <h3 className="text-lg font-bold">{speaker.name}</h3>
                              <p className="text-xs text-gray-300 font-serif">{speaker.title}</p>
                            </div>
                          </div>
                        </div>

                        {/* BACK SIDE */}
                        <div className="absolute inset-0 rotate-y-180 backface-hidden bg-black  text-white p-4 rounded-xl overflow-hidden">
                          <h3 className="text-[21px]  font-bold mt-5 mb-2 z-[90]">{speaker.name}</h3>
                          <p className="text-[14px] text-gray-100 font-serif z-[90]">{speaker.title}</p>
                          <p className="text-[14px]  mt-2 text-center opacity-90 z-[90]">{speaker.bio}</p>
                          <div className="w-full h-full flex flex-row justify-end items-center z-[10]">
                            <div className="bg-radial-[at_0%_0%] from-red-500 to-red-700 rounded-full p-[150px] blur-[250px]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>

          {/* Swiper Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6 z-50">
            <button
              disabled={mapping === 0 ? true : false}
              className={`prevButton h-10 w-10 rounded-full flex items-center justify-center cursor-pointer bg-transparent ${mapping === 0 ? "cursor-not-allowed opacity-60" : "active:bg-red-600 opacity-100"} border-2 border-white`}
            >
              <GrFormPrevious className="text-white" size={15} />
            </button>
            <button
              disabled={mapping === 7 ? true : false}
              className={`nextButton h-10 w-10 rounded-full flex items-center justify-center cursor-pointer bg-transparent ${mapping === 7 ? "cursor-not-allowed opacity-60" : "active:bg-red-600 opacity-100"} border-2 border-white`}
            >
              <GrFormNext className="text-white" size={15} />
            </button>
          </div>
        </div>
      </div>
      <div className='absolute z-[100] right-0 translate-x-[50%] top-0 w-96 h-96 md:w-196 md:h-196 bg-radial from-white/30 to-transparent to-80%'></div>
    </section>
  );
}

export default SpeakersSection;

