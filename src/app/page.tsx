<<<<<<< HEAD
import { CrewCard } from "@/components/CrewCard";
=======
import CrewSection from "@/components/CrewSection";

import Hero from "@/components/Hero";
import SpeakerHome from "@/components/SpeakerHome";
>>>>>>> a2451ad30066ad2913ce3c9477b249a031d6b759
import { SponsorUs } from "@/components/SponsorUs";
import PastEvents from "./past-events/page";
import InfoSection from "@/components/InfoSection";


export default function Index() {
<<<<<<< HEAD
  return (
    <>
      <h1>TEDxVSSUT</h1>
      <h1>What is ted x</h1>
      <p>reply</p>
      <h1>Venue</h1>
      <p>content</p>
      <SponsorUs />

      <h1>FAQ</h1>
      <p>faqs</p>
    </>
  )
}
=======
  return (<>
    <Hero />
    <InfoSection />

    <SpeakerHome/>

    <h1>Venue</h1>
    <p>content</p>

    <CrewSection />

    <SponsorUs />

    <h1>FAQ</h1>
    <p>faqs</p>
  </>)
}
>>>>>>> a2451ad30066ad2913ce3c9477b249a031d6b759
