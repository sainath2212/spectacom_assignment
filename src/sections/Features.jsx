import ourUniverse from "../assets/ourUniverse.webp";
import "../App.css";
import whyChoose from "../assets/WhyChoose2.jpg";

function Features() {
  return (
    <>
      <div className="flex justify-center items-center pt-20 px-20">
        <h2>WELCOME TO SPECTACOM GLOBAL</h2>
      </div>
      <div className="mt-5 text-center">
        <h1>We Build communities around health and fitness.</h1>
      </div>
      <div className="flex py-10 px-20 gap-5">
        <p className="text-[#4E4D4D] w-1/2 text-[20px] leading-[35px] tracking-[0.6px] font-light px-[20px] text-justify">
          At Spectacom Global, we're more than just a company - we're a
          multi-faceted powerhouse of innovation, dedicated to bringing about
          positive transformations
        </p>
        <p className="text-[#4E4D4D] w-1/2 text-[20px] leading-[35px] tracking-[0.6px] font-light px-[20px] text-justify">
          and enhancing lifestyles. Our diverse portfolio of businesses spans
          across the realms of entertainment, technology, and health and
          wellness.
        </p>
      </div>
      <div className="flex">
        <div>
          <img src={ourUniverse} alt="Our Universe"></img>
        </div>
        <div className="w-1/2 p-16 bg-[#FAFAFA] ">
          <h2>WHAT WE DO</h2>
          <h1>Our Universe</h1>
          <h3>
            We build engaging platforms that enable consumers to get healthier,
            and more active.
          </h3>
          <div className="flex gap-10">
            <div>
              <div className="mb-20 mt-10">
                <h4 className="font-extrabold !important my-[10px] text-[16px] tracking-[2px] leading-[0.6]">
                  OBSTACLE RACE
                </h4>
                <p className="text-[16px] leading-[26px] mb-0 tracking-[1px] text-[#4E4D4D]">
                  The Devils Circuit is not where you compete physically, but
                  where you break your mental barriers.
                </p>
              </div>

              <div className="mb-20 mt-10">
                <h4 className="font-extrabold !important my-[10px] text-[16px] tracking-[2px] leading-[0.6]">
                  TICKETING PLATFORM
                </h4>
                <p className="text-[16px] leading-[26px] mb-0 tracking-[1px] text-[#4E4D4D]">
                  The one place to find curated sports & fitness competitions to
                  join in. No clutter, only sport.
                </p>
              </div>

              <div className="mb-20 mt-10">
                <h4 className="font-extrabold !important my-[10px] text-[16px] tracking-[2px] leading-[0.6]">
                  HEALTH & WELLNESS APP
                </h4>
                <p className="text-[16px] leading-[26px] mb-0 tracking-[1px] text-[#4E4D4D]">
                  Holistic, vernacular, full of data science, ready to hold your
                  hand and take those first crucial steps with you.
                </p>
              </div>
            </div>
            <div>
              <div className="mb-20 mt-10">
                <h4 className="font-extrabold !important my-[10px] text-[16px] tracking-[2px] leading-[0.6]">
                  CORPORATE WELLNESS
                </h4>
                <p className="text-[16px] leading-[26px] mb-0 tracking-[1px] text-[#4E4D4D]">
                  A curated dashboard that empowers you with insightful data on
                  employee health. Kick that insurance premium down!
                </p>
              </div>

              <div className="mb-20 mt-10">
                <h4 className="font-extrabold !important my-[10px] text-[16px] tracking-[2px] leading-[0.6]">
                  MEDIA PROPERTIES
                </h4>
                <p className="text-[16px] leading-[26px] mb-0 tracking-[1px] text-[#4E4D4D]">
                  We're storytellers, capturing the essence of adventure,
                  health, and lifestyle through captivating content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-28 gap-20 justify-center items-center">
        <div>
          <h2 className="font-bold">OUR APPROACH</h2>
          <div className="text-[66px] leading-[70px] mb-0 mt-7">
            <p>Ideate.</p>
            <p>Create.</p>
            <p>Build.</p>
          </div>
        </div>
        <div>
          <h1 className="text-[50px] font-extrabold my-[-5px] text-[#b89840]">
            2 mn+
          </h1>
          <h4 className="text-[16px] font-medium tracking-[2px] text-[#212529]">
            COMMUNITY
          </h4>
        </div>
        <div>
          <h1 className="text-[50px] font-extrabold my-[-5px] text-[#b89840]">
            2000+
          </h1>
          <h4 className="text-[16px] font-medium tracking-[2px] text-[#212529]">
            CORPORATES
          </h4>
        </div>
        <div>
          <h1 className="text-[50px] font-extrabold my-[-5px] text-[#b89840]">
            1000+
          </h1>
          <h4 className="text-[16px] font-medium tracking-[2px] text-[#212529]">
            CITIES
          </h4>
        </div>
      </div>
      <div className="relative h-screen">
        <img
          src={whyChoose}
          alt="Background"
          className="absolute inset-0 w-full h-full  object-cover"
        />
        <div className="relative z-10 flex items-center justify-center  h-full text-white px-4">
          <div className="text-center">
            <h2 className="mb-8 font-thin text-sm">WHY SPECTACOM?</h2>
            <h1 className="text-[45px] leading-[40px] mb-10">
              We Build. We Create. We Innovate.
            </h1>
            <div className="mt-48">
              <p className="text-[36px] leading-[40px] tracking-[2px] my-4">
                We care about getting India Active.
              </p>

              <p className="text-[18px] leading-[30px] text-gray-400 mb-6">
                Our mission is to create interesting concepts in the realm of
                Health & Wellness, that allow you to move forward on your
                wellness journey. Whether you are a newbie, or a gym bod, our
                world has communities that you can be a part of. Inspire, and be
                inspired.
              </p>
            </div>

            <div className="flex justify-center space-x-10 text-[14px] font-semibold mt-48">
              <span className="mx-10">We build Communities.</span>
              <span className="mx-10">We Create Experiences.</span>
              <span className="mx-10">We innovate concepts.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
