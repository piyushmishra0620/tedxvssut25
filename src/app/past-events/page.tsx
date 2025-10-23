'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function PastEvents() {
  const [selectedYear, setSelectedYear] = useState<'2022' | '2019' | '2018'>('2022');

  // Sample event data with placeholder images
  const events: Record<'2022' | '2019' | '2018', Array<{ id: number; title: string; img: string }>> = {
    '2022': [
      { id: 1, title: 'Opening Ceremony 2022', img: '/images/event_image/2022 5.jpg' },
      { id: 2, title: '', img: '/images/event_image/2022 1.jpg' },
      { id: 3, title: 'Panel Discussion 2022', img: '/images/event_image/2022 2.jpg' },
      { id: 4, title: 'Networking Session 2022', img: '/images/event_image/2022 3.jpg' },
      { id: 5, title: 'Workshop 2022', img: '/images/event_image/2022.jpg' },
      { id: 6, title: 'Closing Event 2022', img: '/images/event_image/2022 4.jpg' },
    ],
    '2019': [
      { id: 7, title: '', img: '/images/event_image/2019 .jpg' },
      { id: 8, title: '', img: '/images/event_image/2019 3.jpg' },
      { id: 9, title: '', img: '/images/event_image/2019 2.jpg' },
      { id: 10, title: '', img: '/images/event_image/2019 6.jpeg' },
      { id: 11, title: '', img: '/images/event_image/2019 7.jpg' },
      { id: 12, title: '', img: '/images/event_image/2019 4.jpg' },
    ],
    '2018': [
      { id: 13, title: 'Community Meetup 2018', img: '/images/event_image/2018 1 (1).jpg' },
      { id: 14, title: 'Grand Finale 2018', img: '/images/event_image/2018 2 (1).jpg' },
      { id: 15, title: 'Tech Showcase 2018', img: '/images/event_image/2018 3 (1).jpg' },
      { id: 16, title: 'Speaker Session 2018', img: '/images/event_image/2018 4.jpg' },
      { id: 17, title: 'Opening Ceremony', img: '/images/event_image/2018 5.jpg' },
      { id: 18, title: 'Hybrid Session', img: '/images/event_image/2018 6.jpg' },
    ],
  };

  const years: Array<'2022' | '2019' | '2018'> = ['2022', '2019', '2018'];

  return (
    <div className="min-h-screen bg-black py-16 px-4 flex flex-col items-center">
      <div className="pt-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl md:text-6xl font-bold text-white mb-4">
            PAST <span className="text-red-500">EVENTS</span>
          </h1>
          <p className="text-gray-300 text-lg">Relive the moments that inspired us</p>
        </motion.div>

        {/* Year Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {years.map((year, index) => (
            <motion.button
              key={year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setSelectedYear(year)}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                selectedYear === year
                  ? 'bg-red-600 text-white shadow-lg shadow-red-500/50 scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              {year}
            </motion.button>
          ))}
        </div>

        {/* Photo Grid */}
        <AnimatePresence mode="wait" >
          <motion.div
            key={selectedYear}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen md:max-w-[60vw]"
          >
            {events[selectedYear].map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-xl shadow-2xl cursor-pointer"
              >
                <div className="relative h-64 w-full ">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}