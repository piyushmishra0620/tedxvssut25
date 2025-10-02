import CrewCard from "@/components/CrewCard";

import Hero from "@/components/Hero";
import SpeakerHome from "@/components/SpeakerHome";
import { SponsorUs } from "@/components/SponsorUs";
import PastEvents from "./past-events/page";

export default function Index() {
  return (<>
    <Hero />
    <h1>TEDxVSSUT</h1>
    <h1>What is ted x</h1>
    <p>reply</p>

    <SpeakerHome/>

    <h1>Venue</h1>
    <p>content</p>

    <CrewCard />

    <SponsorUs />

    <h1>FAQ</h1>
    <p>faqs</p>
  </>)
}