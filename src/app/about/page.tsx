import InfoSection from '@/components/InfoSection';
import React from 'react';
export default function AboutPage() {
    return (
        <div>
            <div className="bg-black text-white min-h-screen">
                <div className='h-[70vh]'>
                    {/* TODO: Image gallery carousal in the background as hero */}
                    <div className='absolute top-[35%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col items-center'>
                        <h1 className='text-red-500 font-bold text-[9rem] md:text-[12rem]'>TED</h1>
                        <h1 className='text-2xl md:text-3xl font-light'>Ideas Worth Spreading</h1>
                    </div>
                </div>
                <InfoSection />
            </div>
        </div>
    );

}
