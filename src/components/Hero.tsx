"use client";

import React, { useState, useEffect, useRef } from 'react';
import LightRays from './LightRays';
import Image from 'next/image';

function VideoTextMask() {
  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <mask id="text-mask" x="0" y="0" width="100%" height="100%">
            {/* Black background = video hidden */}
            <rect width="100%" height="100%" fill="black" />
            {/* White text = video visible */}
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dy=".35em"
              fontSize="125"
              fontWeight="bold"
              fill="white"
            >
              PARALLAX OF PERSPECTIVE
            </text>
          </mask>
        </defs>

        <foreignObject
          x="0"
          y="0"
          width="100%"
          height="100%"
          mask="url(#text-mask)"
        >
          <video
            src="/video/Teaser.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </foreignObject>
      </svg>
    </div>
  );
}



function AutoPlayVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: [0.5],
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
  <div className='relative bg-black'>
    <video
      ref={videoRef}
      src="/video/TeaserCut.webm"
      muted
      loop
      playsInline
      className="w-screen opacity-50"
    />
    <h1 className='text-9xl font-bold w-screen text-center absolute inset-0 top-[50%] -translate-y-[0%]'>
      <span className='text-red-500'>PARALLAX OF</span> PERSPECTIVE
    </h1>
  </div>
  );
}

const Hero = () => {
  return <div className='relative'>
    <div className='w-full h-screen overflow-y-hidden relative bg-black overflow-x-hidden'>
      <video
        src="/video/TeaserCut.webm"
        autoPlay
        muted
        loop
        playsInline
        className="w-screen opacity-50"
      />
      <Image
          src="/images/X-TED.png"
          width={312}
          height={290}
          alt="X"
          className='absolute z-35 left-[50%] -translate-x-[50%] top-[15%]'
      />
      <h1 className='scale-[30%] md:scale-100 absolute z-35 w-screen text-center top-[60%] -translate-y-[50%] font-bold text-7xl flex justify-center items-center'>
        <span className='text-red-500 opacity-75 pr-7'>PARALLAX OF</span>
        <span className='text-white opacity-75'>PERSPECTIVE</span>
      </h1>
    </div>
    <div className="absolute w-96 h-96 top-15 left-[50%] -translate-x-[50%] bg-black rounded-full blur-3xl"></div>
    <div className="absolute w-288 h-96 top-[60%] -translate-y-[50%] left-[50%] -translate-x-[50%] bg-black rounded-full blur-3xl"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_60%,rgba(0,0,0,0.9)_100%)]"></div>

    <a href="/register" className='absolute bottom-[20%] left-[50%] -translate-x-[50%] bg-white hover:bg-gray-200 hover:scale-110 transition-all text-black text-medium text-lg p-3 px-7 rounded-md z-[100]'>Register Now</a>
  </div>
}

export default Hero;