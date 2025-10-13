"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();

	return (
	<header className="w-screen h-[90px] fixed z-[100] flex items-center justify-center box-border mx-auto my-[13px]">
        <nav className="w-3/5 flex justify-between items-center border backdrop-blur-[10px] px-10 py-[15px] rounded-[40px] border-solid border-[rgba(255,255,255,0.2)]">
            <div>
                <Link className="no-underline text-[26px] font-bold text-[white] tracking-[0.5px]" href="/">
                    <span className="text-[#E62B1E]">TED</span><span className="text-[#E62B1E]">x</span><span className="text-[white] ml-1">VSSUT</span>
                </Link>
            </div>

            <ul className="flex gap-10 m-0 p-0 list-none">
                { [ 
                    { name: 'Home', href: '/' },
                    { name: 'About', href: '/about' },
                    { name: 'Sponsors', href: '/sponsors' },
                    { name: 'Crew', href: '/crew' },
                    { name: 'Past Events', href: '/past-events' } 

                ].map(el => 
                    <li>
                        <Link 
                            href={el.href} 
                            className={`text-[#d1d1d1] no-underline text-base relative transition-[color] duration-[0.3s] ease-[ease] px-0 py-2 hover:text-[white] ${ (pathname == el.href) ? "text-[white] font-bold after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-[#E62B1E] after:rounded-sm after:left-0 after:-bottom-0.5" : '' }`}>
                            {el.name}
                        </Link> 
                    </li>
                ) }
            </ul>

            <Link href="/contact" className="no-underline">
                <button className="bg-transparent text-[white] cursor-pointer font-bold px-[22px] py-2.5 rounded-[5px] border-2 border-solid border-[#E62B1E] hover:bg-[#E62B1E] hover:text-[white] transition-all">Contact Us</button>
            </Link>
        </nav>
    </header>
	);
}

export default Header;
