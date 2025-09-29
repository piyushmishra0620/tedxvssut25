"use client";

import React, { useState, useEffect, useRef } from 'react';
import LightRays from './LightRays';
import Image from 'next/image';

const Hero = () => {
  return <>
    <div className='w-full h-[80vh] relative bg-black overflow-x-hidden'>
      <LightRays
        raysOrigin="top-center"
        raysColor="#ff5a5a"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.5}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
      />
      <video
        src="/video/EyeVid.webm"
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-20 inset-0 w-[100vw] h-[30vh] left-50 -translate-x-50 pointer-events-none"
      />
      <h1 className='scale-[30%] md:scale-100 absolute z-35 inset-0 w-screen text-center top-[20%] font-bold text-9xl flex justify-center items-center'>
        <span className='text-red-500 opacity-75 pl-35'>TED</span>
        <Image
          src="/images/X-TED.png"
          width={312}
          height={290}
          alt="X"
        />
        <span className='text-white opacity-75'>VSSUT</span>
      </h1>
    </div>
  </>
}

export default Hero;