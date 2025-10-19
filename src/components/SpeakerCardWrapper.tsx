"use client";

import { SpeakerCard } from "@/components/SpeakerCard";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';

type SpeakerCardProps = {
    key: number,
    id: string,
    name: string,
    bio: string,
    title: string,
    link?: string,
    children?: React.ReactNode
};

const arr: SpeakerCardProps[] = [
    {
        key: 0,
        id: "card-0",
        children: (
            <Avatar className="w-full h-full rounded-[10px]">
                <AvatarImage
                    src="/profileDemo.jpg"
                    alt="John Doe"
                    className="object-cover rounded-[10px] hover:scale-125 transition-all duration-300 ease-out"
                />
                <AvatarFallback>
                    <Image
                        fill
                        src="/UserImageFallBack.png"
                        alt="John Doe"
                        className="object-cover rounded-[10px] hover:scale-125 transition-all duration-300 ease-out"
                    />
                </AvatarFallback>
            </Avatar>
        ),
        name: "MR. John Doe",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        link: "",
        title: "IBM Senior SDE I",
    },
    {
        key: 1,
        id: "card-1",
        children: (
            <Avatar className="w-full h-full rounded-[10px]">
                <AvatarImage
                    src="/profileDemo.jpg"
                    alt="John Doe"
                    className="object-cover rounded-[10px] hover:scale-125 transition-all duration-300 ease-out"
                />
                <AvatarFallback>
                    <Image
                        fill
                        src="/UserImageFallBack.png"
                        alt="John Doe"
                        className="object-cover rounded-[10px] hover:scale-125 transition-all duration-300 ease-out"
                    />
                </AvatarFallback>
            </Avatar>
        ),
        name: "John Doe",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "",
        title: "IBM Senior SDE I",
    },
    {
        key: 2,
        id: "card-2",
        children: (
            <Avatar className="w-full h-full rounded-[10px]">
                <AvatarImage
                    src="/profileDemo.jpg"
                    alt="John Doe"
                    className="object-cover rounded-[10px] hover:scale-125 transition-all duration-300 ease-out"
                />
                <AvatarFallback>
                    <Image
                        fill
                        src="/UserImageFallBack.png"
                        alt="John Doe"
                        className="object-cover rounded-[10px] hover:scale-125 transition-all duration-300 ease-out"
                    />
                </AvatarFallback>
            </Avatar>
        ),
        name: "John Doe",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "",
        title: "IBM Senior SDE I",
    },
    {
        key: 3,
        id: "card-3",
        children: (
            <Avatar className="w-full h-full rounded-[10px]">
                <AvatarImage
                    src="/profileDemo.jpg"
                    alt="John Doe"
                    className="object-cover rounded-[10px] hover:scale-125 transition-all duration-300 ease-out"
                />
                <AvatarFallback>
                    <Image
                        fill
                        src="/UserImageFallBack.png"
                        alt="John Doe"
                        className="object-cover rounded-[10px] hover:scale-125 transition-all duration-300 ease-out"
                    />
                </AvatarFallback>
            </Avatar>
        ),
        name: "John Doe",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "",
        title: "IBM Senior SDE I",
    },
    {
        key: 4,
        id: "card-4",
        children: (
            <Avatar className="w-full h-full rounded-[10px]">
                <AvatarImage
                    src="/profileDemo.jpg"
                    alt="John Doe"
                    className="object-cover rounded-[10px] hover:scale-125 transition-all duration-300 ease-out"
                />
                <AvatarFallback>
                    <Image
                        fill
                        src="/UserImageFallBack.png"
                        alt="John Doe"
                        className="object-cover rounded-[10px] hover:scale-125 transition-all duration-300 ease-out"
                    />
                </AvatarFallback>
            </Avatar>
        ),
        name: "John Doe",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "",
        title: "IBM Senior SDE I",
    },
    {
        key: 5,
        id: "card-5",
        children: (
            <Avatar className="w-full h-full rounded-[10px]">
                <AvatarImage
                    src="/profileDemo.jpg"
                    alt="John Doe"
                    className="object-cover rounded-[10px] hover:scale-125 transition-all duration-300 ease-out"
                />
                <AvatarFallback>
                    <Image
                        fill
                        src="/UserImageFallBack.png"
                        alt="John Doe"
                        className="object-cover rounded-[10px] hover:scale-125 transition-all duration-300 ease-out"
                    />
                </AvatarFallback>
            </Avatar>
        ),
        name: "John Doe",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "",
        title: "IBM Senior SDE I",
    },
     {
        key: 6,
        id: "card-6",
        children: (
            <Avatar className="w-full h-full rounded-[10px]">
                <AvatarImage
                    src="/profileDemo.jpg"
                    alt="John Doe"
                    className="object-cover rounded-[10px] hover:scale-125 transition-all duration-300 ease-out"
                />
                <AvatarFallback>
                    <Image
                        fill
                        src="/UserImageFallBack.png"
                        alt="John Doe"
                        className="object-cover rounded-[10px] hover:scale-125 transition-all duration-300 ease-out"
                    />
                </AvatarFallback>
            </Avatar>
        ),
        name: "John Doe",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "",
        title: "IBM Senior SDE I",
    },
     {
        key: 7,
        id: "card-7",
        children: (
            <Avatar className="w-full h-full rounded-[10px]">
                <AvatarImage
                    src="/profileDemo.jpg"
                    alt="John Doe"
                    className="object-cover rounded-[10px] hover:scale-125 transition-all duration-300 ease-out"
                />
                <AvatarFallback>
                    <Image
                        fill
                        src="/UserImageFallBack.png"
                        alt="John Doe"
                        className="object-cover rounded-[10px] hover:scale-125 transition-all duration-300 ease-out"
                    />
                </AvatarFallback>
            </Avatar>
        ),
        name: "John Doe",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "",
        title: "IBM Senior SDE I",
    },
     {
        key: 8,
        id: "card-8",
        children: (
            <Avatar className="w-full h-full rounded-[10px]">
                <AvatarImage
                    src="/profileDemo.jpg"
                    alt="John Doe"
                    className="object-cover rounded-[10px] hover:scale-125 transition-all duration-300 ease-out"
                />
                <AvatarFallback>
                    <Image
                        fill
                        src="/UserImageFallBack.png"
                        alt="John Doe"
                        className="object-cover rounded-[10px] hover:scale-125 transition-all duration-300 ease-out"
                    />
                </AvatarFallback>
            </Avatar>
        ),
        name: "John Doe",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "",
        title: "IBM Senior SDE I",
    },
     {
        key: 9,
        id: "card-9",
        children: (
            <Avatar className="w-full h-full rounded-[10px]">
                <AvatarImage
                    src="/profileDemo.jpg"
                    alt="John Doe"
                    className="object-cover rounded-[10px] hover:scale-125 transition-all duration-300 ease-out"
                />
                <AvatarFallback>
                    <Image
                        fill
                        src="/UserImageFallBack.png"
                        alt="John Doe"
                        className="object-cover rounded-[10px] hover:scale-125 transition-all duration-300 ease-out"
                    />
                </AvatarFallback>
            </Avatar>
        ),
        name: "John Doe",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "",
        title: "IBM Senior SDE I",
    },
     {
        key: 10,
        id: "card-10",
        children: (
            <Avatar className="w-full h-full rounded-[10px]">
                <AvatarImage
                    src="/profileDemo.jpg"
                    alt="John Doe"
                    className="object-cover rounded-[10px] hover:scale-125 transition-all duration-300 ease-out"
                />
                <AvatarFallback>
                    <Image
                        fill
                        src="/UserImageFallBack.png"
                        alt="John Doe"
                        className="object-cover rounded-[10px] hover:scale-125 transition-all duration-300 ease-out"
                    />
                </AvatarFallback>
            </Avatar>
        ),
        name: "John Doe",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        link: "",
        title: "IBM Senior SDE I",
    }
];

export const SpeakerCardWrapper = () => {
    return (
        <>
            <motion.div className="w-full h-fit grid grid-flow-row max-[915px]:grid-cols-1 max-[1300px]:grid-cols-2 max-[1600px]:grid-cols-3 max-[2400px]:grid-cols-4 grid-cols-5 gap-9  px-24 py-50 max-md:px-9 z-20">
                {arr.map((card, index) => (
                    <SpeakerCard key={card.key} id={card.id} name={card.name} bio={card.bio} title={card.title} link={card.link}>{card.children}</SpeakerCard>
                ))}
            </motion.div>
        </>
    )
}
