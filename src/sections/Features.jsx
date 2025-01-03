import ourUniverse from "../assets/ourUniverse.webp";
import "../App.css";
import whyChoose from "../assets/WhyChoose2.jpg";

function Features() {
  return (
    <>
      <div className="flex justify-center items-center pt-10 px-5 md:pt-20 md:px-20">
        <h2 className="text-lg md:text-2xl">WELCOME TO SPECTACOM GLOBAL</h2>
      </div>
      <div className="mt-5 text-center px-5">
        <h1 className="text-xl md:text-3xl">
          We Build communities around health and fitness.
        </h1>
      </div>
      <div className="flex flex-col md:flex-row py-5 md:py-10 px-5 md:px-20 gap-5">
        <p className="text-[#4E4D4D] text-[16px] md:text-[20px] leading-[28px] md:leading-[35px] tracking-[0.6px] font-light text-justify">
          At Spectacom Global, we're more than just a company - we're a
          multi-faceted powerhouse of innovation, dedicated to bringing about
          positive transformations.
        </p>
        <p className="text-[#4E4D4D] text-[16px] md:text-[20px] leading-[28px] md:leading-[35px] tracking-[0.6px] font-light text-justify">
          and enhancing lifestyles. Our diverse portfolio of businesses spans
          across the realms of entertainment, technology, and health and
          wellness.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center py-10 px-5 md:px-20 gap-5">
        <div className="w-full md:w-1/2">
          <img src={ourUniverse} alt="Our Universe" className="w-full" />
        </div>
        <div className="w-full md:w-1/2 p-5 md:p-16 bg-[#FAFAFA]">
          <h2 className="text-xl md:text-2xl font-bold">WHAT WE DO</h2>
          <h1 className="text-2xl md:text-4xl font-bold mt-4">Our Universe</h1>
          <h3 className="text-lg md:text-xl mt-4">
            We build engaging platforms that enable consumers to get healthier
            and more active.
          </h3>
          <div className="flex flex-col md:flex-row gap-10 mt-8">
            <div className="w-full md:w-1/2">
              <div className="mb-10">
                <h4 className="font-extrabold text-[16px] tracking-[2px]">
                  OBSTACLE RACE
                </h4>
                <p className="text-[14px] md:text-[16px] leading-[24px] text-[#4E4D4D]">
                  The Devils Circuit is not where you compete physically, but
                  where you break your mental barriers.
                </p>
              </div>
              <div className="mb-10">
                <h4 className="font-extrabold text-[16px] tracking-[2px]">
                  TICKETING PLATFORM
                </h4>
                <p className="text-[14px] md:text-[16px] leading-[24px] text-[#4E4D4D]">
                  The one place to find curated sports & fitness competitions to
                  join in. No clutter, only sport.
                </p>
              </div>
              <div>
                <h4 className="font-extrabold text-[16px] tracking-[2px]">
                  HEALTH & WELLNESS APP
                </h4>
                <p className="text-[14px] md:text-[16px] leading-[24px] text-[#4E4D4D]">
                  Holistic, vernacular, full of data science, ready to hold your
                  hand and take those first crucial steps with you.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="mb-10">
                <h4 className="font-extrabold text-[16px] tracking-[2px]">
                  CORPORATE WELLNESS
                </h4>
                <p className="text-[14px] md:text-[16px] leading-[24px] text-[#4E4D4D]">
                  A curated dashboard that empowers you with insightful data on
                  employee health. Kick that insurance premium down!
                </p>
              </div>
              <div>
                <h4 className="font-extrabold text-[16px] tracking-[2px]">
                  MEDIA PROPERTIES
                </h4>
                <p className="text-[14px] md:text-[16px] leading-[24px] text-[#4E4D4D]">
                  We're storytellers, capturing the essence of adventure,
                  health, and lifestyle through captivating content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center p-5 md:p-28 gap-10 md:gap-20">
        <div>
          <h2 className="font-bold text-lg">OUR APPROACH</h2>
          <div className="text-[36px] md:text-[66px] leading-[40px] md:leading-[70px] mt-7">
            <p>Ideate.</p>
            <p>Create.</p>
            <p>Build.</p>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-[36px] md:text-[50px] font-extrabold text-[#b89840]">
            2 mn+
          </h1>
          <h4 className="text-[14px] md:text-[16px] font-medium tracking-[2px] text-[#212529]">
            COMMUNITY
          </h4>
        </div>
        <div className="text-center">
          <h1 className="text-[36px] md:text-[50px] font-extrabold text-[#b89840]">
            2000+
          </h1>
          <h4 className="text-[14px] md:text-[16px] font-medium tracking-[2px] text-[#212529]">
            CORPORATES
          </h4>
        </div>
        <div className="text-center">
          <h1 className="text-[36px] md:text-[50px] font-extrabold text-[#b89840]">
            1000+
          </h1>
          <h4 className="text-[14px] md:text-[16px] font-medium tracking-[2px] text-[#212529]">
            CITIES
          </h4>
        </div>
      </div>
      <div className="relative h-screen">
        <img
          src={whyChoose}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex items-center justify-center h-full text-white px-4">
          <div className="text-center">
            <h2 className="mb-4 text-xs md:text-sm font-thin">WHY SPECTACOM?</h2>
            <h1 className="text-[28px] md:text-[45px] leading-[28px] md:leading-[40px] mb-10">
              We Build. We Create. We Innovate.
            </h1>
            <div>
              <p className="text-[18px] md:text-[36px] leading-[24px] md:leading-[40px] tracking-[2px] my-4">
                We care about getting India Active.
              </p>
              <p className="text-[14px] md:text-[18px] leading-[24px] md:leading-[30px] text-gray-400 mb-6">
                Our mission is to create interesting concepts in the realm of
                Health & Wellness, that allow you to move forward on your
                wellness journey. Whether you are a newbie, or a gym bod, our
                world has communities that you can be a part of. Inspire, and be
                inspired.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-10 text-[12px] md:text-[14px] font-semibold mt-10 md:mt-20">
              <span>We build Communities.</span>
              <span>We Create Experiences.</span>
              <span>We innovate concepts.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
