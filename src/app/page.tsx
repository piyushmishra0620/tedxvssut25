import { CrewCard } from "@/components/CrewSection";
import CrewSection from "@/components/CrewSection";

import Hero from "@/components/Hero";
import SpeakerHome from "@/components/SpeakerHome";
import Sponsorship from "@/components/Sponsorship";
import InfoSection from "@/components/InfoSection";
import Venue from "@/components/Venue";
import FAQ from "@/components/FAQ";

export default function Index() {
  return (
    <>
    <Hero />
    <InfoSection />

    <SpeakerHome />
    
    <Venue />

    <CrewSection />

    <Sponsorship />

    <FAQ />
  </>
  )
}
