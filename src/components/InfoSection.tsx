import Image from 'next/image';
import './info-section.css';

const InfoSection = () => {
    return (
    <section className="info-section-container bg-black overflow-hidden">
        <Image
            src='/images/background2.avif'
            alt=""
            width={1026}
            height={750}
            className='absolute top-0 left-0 w-screen z-[0] grayscale opacity-[15%]'
        />
        <div className='absolute top-0 left-0 w-screen h-full bg-linear-to-b from-[#121212] via-transparent to-black'></div>
        <div className="info-grid z-[100]">
            <div className="info-card">
                <h2>What is TED?</h2>
                <p>
                    TED is a global platform dedicated to spreading ideas through short, powerful talks. Founded in 1984, TED started as a conference on Technology, Entertainment, and Design, but its scope now includes science, business, arts, and much more. With its slogan <span className="highlight">'Ideas&nbsp;Worth&nbsp;Spreading,'</span> TED hosts annual conferences featuring world-renowned speakers who captivate audiences with innovative ideas and thought-provoking perspectives.
               </p>
                <a href="https://www.ted.com/talks" className="info-btn">Explore TED Talks</a>
            </div>

            <div className="info-card">
                <h2>What is TEDx?</h2>
                <p>
                    TEDx events are independently organized under a license from TED, designed to bring the spirit of TED to local communities. They are curated by passionate volunteers who celebrate local ideas, and experiences tailored to their audience. TEDx events empower communities to share ideas, foster dialogue, and spark connections.
                </p>
            </div>

            <div className="info-card">
                <h2>About TEDxVSSUT</h2>
                <p>
                    TEDxVSSUT is the official TEDx event hosted by Veer Surendra Sai University of Technology (VSSUT). Our mission is to spotlight the brilliant minds and transformative ideas that emerge from our vibrant university community. TEDxVSSUT brings together students, faculty, alumni, and visionary thinkers to spark conversations that matter. TEDxVSSUT 2025 promises to ignite dialogue, challenge perspectives, and inspire action.
                    <br></br>
                    Be a part of this transformative experience!
                </p>
                <a href="/#venue" className="info-btn">Join Us</a>
            </div>
        </div>
    </section>
    );
}

export default InfoSection;