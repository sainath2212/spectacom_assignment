import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import caroImage1 from "../assets/caroImage1.webp";
import caroImage2 from "../assets/caroImage2.webp";
import caroImage3 from "../assets/caroImage3.webp";

const CarouselComponent = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel
      swipeable
      draggable
      showDots={false}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={props.deviceType !== "mobile"}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="transform 0.5s ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      deviceType={props.deviceType}
      itemClass="carousel-item-padding-40-px"
    >
      <div className="flex justify-center items-center w-full">
        <img
          src={caroImage1}
          className="max-w-full h-[30rem] object-contain"
          alt="Slide 1"
        />
      </div>
      <div className="flex justify-center items-center w-full">
        <img
          src={caroImage2}
          className="max-w-full h-[30rem] object-contain"
          alt="Slide 2"
        />
      </div>
      <div className="flex justify-center items-center w-full">
        <img
          src={caroImage3}
          className="max-w-full h-[30rem] object-contain"
          alt="Slide 3"
        />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
