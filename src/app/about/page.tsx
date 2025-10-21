import InfoSection from '@/components/InfoSection';
import React from 'react';
import Image from 'next/image';
import './about.css';

const row1 = [
    'Ajay Banga.jpg',
    'Esha Alwani.jpg',
    'Kalika Bali.jpg',
    'Neeraj Agarwal.jpg',
    'Seema Bansal.jpg',
    'Anand Agarwala.jpg',
    'Greg Anderson.jpg', 
    'Karim Abouelnaga.jpg',
    // 'Paige Alexander.jpg',
    // 'Srishti Bakshi.jpg',
]

const row2 = [
    'Anil Ananthaswamy.jpg',
    'Isabel Allende.jpg',
    'Kiran Bedi.jpg',
    'Ravin Agarwal.jpg',
    'Steven Allison.jpg',
    'Barat Ali Batoor.jpg',
    'Javed Akhtar.jpg',
    'Lauran Arledge.jpg',
    // 'Roy Bahat.jpg',
    // 'Tiffani A. Bell.jpg',
]

const row3 = [
    'Christian Benimana.jpg',
    'Jennifer Aaker.jpg',
    'Massimo Banzi.jpg',
    'Sam Altman.jpg',
    'Trevor Aaronson.jpg',
    'Emma Belcher.jpg',
    'Johana Benesty.jpg',
    'Myles Allen.jpg',
    // 'Sandra Aamodt.jpg',
    // 'Wajahat Ali.jpg'
]

const rows = [row1, row2, row3];

export default function AboutPage() {
    return (
        <div>
            <div className="bg-black text-white min-h-screen">
                <div className='h-[70vh] overflow-hidden'>
                    {/* TODO: Image gallery carousal in the background as hero */}
                    <div className='absolute z-[100] top-[35%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col items-center'>
                        <h1 className='text-red-500 font-bold text-[9rem] md:text-[12rem]'>TED</h1>
                        <h1 className='text-2xl md:text-3xl font-light'>Ideas Worth Spreading</h1>
                    </div>
                    <div className="absolute top-0 left-0 w-screen h-full bg-radial from-transparent from-[50%] to-red-500/20"></div>
                    {/* <div className="absolute top-0 left-0 w-screen h-full bg-linear-to-b from-black via-transparent to-black"></div> */}
                    {rows.map((row, i) =>
                        <div className={`flex gap-4 opacity-25 p-4`}>
                        {
                            row.map(img => 
                                <Image
                                    src={`/images/ted-carousal/${img}`}
                                    alt=""
                                    width={254}
                                    height={191}
                                    className={`animate-image ${ i % 2 != 0 ? 'animate-reverse' : '' } ${ i > 0 && (i % 2 == 0) ? '-translate-x-[' + i  * 25 + '%]' : '' } `}
                                />
                            )
                        }
                        {
                            row.map(img => 
                                <Image
                                    src={`/images/ted-carousal/${img}`}
                                    alt=""
                                    width={254}
                                    height={191}
                                    className={`animate-image ${ i % 2 != 0 ? 'animate-reverse' : '' } ${ i > 0 && (i % 2 == 0) ? '-translate-x-[' + i  * 25 + '%]' : '' } `}


                                />
                            )
                        }
                        </div>
                    )}
                </div>
                <InfoSection />
            </div>
        </div>
    );

}
