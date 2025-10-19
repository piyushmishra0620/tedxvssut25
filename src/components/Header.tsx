"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Crew", href: "/crew" },
    { name: "Past Events", href: "/past-events" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-[90px] z-[1000] flex items-center justify-center md:mt-4">
      <nav className="w-[90vw] md:w-3/5 flex justify-between items-center border backdrop-blur-[10px] px-10 py-0 md:py-[15px] rounded-[40px] border-solid border-[rgba(255,255,255,0.2)]">
        {/* ---------- LOGO ---------- */}
        <Link
          className="no-underline text-[26px] font-bold text-[white] tracking-[0.5px]"
          href="/"
        >
          <span className="text-[#E62B1E]">TED</span>
          <span className="text-[#E62B1E]">x</span>
          <span className="text-[white] ml-1">VSSUT</span>
        </Link>

        {/* ---------- DESKTOP NAV ---------- */}
        <ul className="hidden md:flex flex-row gap-10 list-none m-0 p-0">
          {navLinks.map((el) => (
            <li key={el.name}>
              <Link
                href={el.href}
                className={`text-[#d1d1d1] no-underline text-base relative transition-[color] duration-[0.3s] ease-[ease] px-0 py-2 hover:text-[white] ${
                  pathname === el.href
                    ? "text-[white] font-bold after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-[#E62B1E] after:rounded-sm after:left-0 after:-bottom-0.5"
                    : ""
                }`}
              >
                {el.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* ---------- DESKTOP CTA ---------- */}
        <Link href="/contact-us" className="hidden md:block no-underline">
          <button className="bg-transparent text-[white] cursor-pointer font-bold px-[22px] py-2.5 rounded-[5px] border-2 border-solid border-[#E62B1E] hover:bg-[#E62B1E] hover:text-[white] transition-all">
            Contact Us
          </button>
        </Link>

        {/* ---------- MOBILE HAMBURGER ---------- */}
        <button
          className="md:hidden text-[white] text-2xl focus:outline-none"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* ---------- MOBILE FULL-SCREEN MENU ---------- */}
      {menuOpen && (
        <div className="fixed inset-0 z-[200] bg-[rgba(0,0,0,1)] flex flex-col items-center justify-center">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-[white] text-2xl focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          {/* Links */}
          <ul className="flex flex-col gap-8 list-none text-center">
            {navLinks.map((el) => (
              <li key={el.name}>
                <Link
                  href={el.href}
                  className={`text-[#d1d1d1] text-xl no-underline hover:text-[white] transition-colors duration-300 ${
                    pathname === el.href ? "text-[white] font-bold" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact CTA */}
          <Link href="/contact-us" onClick={() => setMenuOpen(false)}>
            <button className="mt-12 bg-transparent text-[white] font-bold px-[22px] py-2.5 rounded-[5px] border-2 border-solid border-[#E62B1E] hover:bg-[#E62B1E] hover:text-[white] transition-all">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
