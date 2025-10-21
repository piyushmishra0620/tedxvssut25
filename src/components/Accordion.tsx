"use client";
import { useState } from "react";

export default function Accordion({ title, answer }: {title: string, answer: string}) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="w-full mb-4 rounded-xl overflow-hidden backdrop-blur-md bg-gradient-to-r from-[#5d5d5d]/30 to-[#7f7f7f]/20 border border-[#ffffff]/20 shadow-lg transition-all duration-300 hover:shadow-xl hover:from-[#5f5f5f]/40 hover:to-[#7f7f7f]/20">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full text-xl md:text-2xl p-4 group"
      >
        <span className="main-font text-white/90 font-light tracking-wide group-hover:text-[#ff0000] transition-colors duration-300">
          {title}
        </span>
        <div className="relative flex items-center justify-center h-8 w-8 rounded-full bg-[#000000] backdrop-blur-sm p-1 ml-4 transition-all duration-300 group-hover:bg-[#000000]/5">
          <span className={`absolute w-4 h-0.5 bg-[#ff0000] rounded-full transition-transform duration-300 ${accordionOpen ? "rotate-0" : "rotate-0"}`}></span>
          <span className={`absolute w-4 h-0.5 bg-[#ff0000] rounded-full transition-transform duration-300 ${accordionOpen ? "rotate-90 opacity-0" : "rotate-90"}`}></span>
        </div>
      </button>
      
      <div
        className={`transition-all duration-500 ease-in-out ${
          accordionOpen
            ? "max-h-96 opacity-100 pb-4"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-2 mx-2 text-white/80 font-light leading-relaxed text-lg border-t border-[#A8E8F9]/10 pt-3">
          {answer}
        </div>
      </div>
    </div>
  );
}