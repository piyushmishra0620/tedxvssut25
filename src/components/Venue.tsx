import React from 'react';
import { Calendar, Clock, MapPin, Check } from 'lucide-react';
import Link from 'next/link';

const EventVenue = () => {

  return (
    <div id="venue" className="min-h-screen bg-black text-white px-6 py-12">
      <div className='absolute z-[100] -translate-x-[50%] -translate-y-[12.5%] w-96 h-96 md:w-256 md:h-256 bg-radial from-red-500/30 to-transparent to-80%'></div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light uppercase tracking-widest">
            Event <span className="font-bold text-red-600">Venue</span>
          </h2>
          <p className="text-gray-400 mt-8 text-lg max-w-3xl mx-auto leading-relaxed">
            Experience TEDxVSSUT in a space designed for learning, collaboration,
            and inspiration. Our venue, the E-Learning Centre, combines state-of-the-art facilities with a vibrant atmosphere
          </p>
        </div>

       {/* Main Content Grid */}
        <div className="flex flex-col-reverse md:flex-row gap-12 mb-12 relative z-[105]">
          {/* Left Column */}
          <div className="flex flex-col gap-8 basis-1/2">
            {/* About Venue */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-300">ABOUT VENUE</h2>
              <p className="text-gray-400 leading-relaxed">
                The E-Learning Centre at VSSUT is a hub of innovation and knowledge
                exchange. With its modern infrastructure, immersive environment, and
                focus on technology, it's the ideal space for a TEDx event.
              </p>
            </div>

            {/* Event Details */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-gray-300">EVENT ON</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <Calendar className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-2xl font-bold">November 1, 2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <Clock className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-2xl font-bold">10:00 AM to 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                  <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-md md:text-lg">
                      Biju Patnaik E-Learning Centre, VSSUT Campus, Burla,
                      Sambalpur, Odisha - 768018
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <p className="text-gray-400 mb-6 ">
                Mark your calendars and join us at the E-Learning Centre for a day of innovation
                and inspiration
              </p>
              <div className='flex md:justify-start justify-center'>
                <Link href='/get-tickets' className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 hover:text-white transition-colors">
                  Book Tickets
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 basis-1/2">
            {/* Venue Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="./images/E-Learning.png"
                alt="E-Learning Centre"
                className="w-full h-64 md:h-128 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default EventVenue;
