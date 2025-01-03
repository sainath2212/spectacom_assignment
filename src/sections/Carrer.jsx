import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Carrer() {
  const [deviceType, setDeviceType] = useState("desktop");

  // Detect device type on resize
  useEffect(() => {
    const updateDeviceType = () => {
      if (window.innerWidth >= 1024) {
        setDeviceType("desktop");
      } else if (window.innerWidth >= 464) {
        setDeviceType("tablet");
      } else {
        setDeviceType("mobile");
      }
    };

    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);
    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="py-16 px-10">
      <h1 className="text-center text-[50px] font-semibold leading-[120%] text-[#b89840] font-[Titillium Web, sans-serif] !important">
        Carrer
      </h1>
      <div>
        <h1 className="text-[20px] text-center">We Love Mondays!</h1>
        <p className=" text-[18px] leading-[30px] text-[#757575] tracking-[.6px] font-light font-roboto text-center">
          No seriously, we do. Because we are committed to building the world's
          best health & fitness platform, right here in our Gurgaon offices. In
          true startup mode, we are looking to put together our A-team. Simply
          put, individuals who excel at what they do, but also have the hunger
          to go beyond, to create, to innovate, to move forward, and to keep
          improving. We want those who don’t like to be boxed in, have an
          entrepreneurial spirit and are leaders.
        </p>
      </div>
      <h1 className="text-[20px] text-center">Benefits</h1>

      <div className="h-fit p-10">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="border rounded-lg p-4 w-full h-full border-black bg-white shadow-md ">
            <p className="text-lg font-bold mb-2">Content Creator</p>
            <p className="text-sm text-gray-600 flex items-center mb-3">
              Gurugram
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Are you a fitness influencer? Are you a content creator? Or do you
              simply love making reels? A Video Creator at Devils ...
            </p>
            <a
              href="#"
              className="text-black font-bold text-sm hover:underline flex items-center"
            >
              More Details →
            </a>
          </div>

          <div className="border rounded-lg p-4 w-full bg-white border-black">
            <p className="text-lg font-bold mb-2">
              Director - Alliances & Partnerships
            </p>
            <p className="text-sm text-gray-600 flex items-center mb-3">
              Gurugram
            </p>
            <p className="text-sm text-gray-600 mb-4">
              This role is designed to focus on delivering revenue generation
              via brand collaborations. The candidate would have to...
            </p>
            <a
              href="#"
              className="text-black font-bold text-sm hover:underline flex items-center"
            >
              More Details →
            </a>
          </div>

          <div className="border rounded-lg p-4 w-full border-black bg-white shadow-md m">
            <p className="text-lg font-bold mb-2">
              Performance Marketing Manager
            </p>
            <p className="text-sm text-gray-600 flex items-center mb-3">
              Gurugram
            </p>
            <p className="text-sm text-gray-600 mb-4">
              We are seeking a highly skilled and results-oriented Performance
              Marketer to join our dynamic marketing team. The ideal ...
            </p>
            <a
              href="#"
              className="text-black font-bold text-sm hover:underline flex items-center"
            >
              More Details →
            </a>
          </div>
        </Carousel>
        <p>
          *Please send your CV at{" "}
          <span className="text-[#b89840]"> hr@spectacom.in</span>
        </p>
      </div>
    </div>
  );
}

export default Carrer;
