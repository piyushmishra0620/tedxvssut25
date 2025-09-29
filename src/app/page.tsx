import { CrewCard } from "@/components/CrewCard";

import Hero from "@/components/Hero";
import SpeakerHome from "@/components/SpeakerHome";
import { SponsorUs } from "@/components/SponsorUs";

export default function Index() {
  return (<>
    <Hero />
    <div className="relative mt-[50vh] bg-red z-[100]">
      <h1>TEDxVSSUT</h1>
      <h1>What is ted x</h1>
      <p>reply</p>

    <SpeakerHome/>

      <h1>Venue</h1>
      <p>content</p>

      {Array(2).map(i =>
        <CrewCard />
      )}

      <SponsorUs />

      <h1>FAQ</h1>
      <p>faqs</p>
    </div>
  </>)
}