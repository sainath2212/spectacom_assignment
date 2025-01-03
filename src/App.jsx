import CarouselComponent from "./components/Carousel";
import Header from "./components/Header";
import Carrer from "./sections/Carrer";
import Contact from "./sections/Contact";
import Features from "./sections/Features";

function App() {
  return (
    <>
      <Header />
      <CarouselComponent />
      <Features />
      <Carrer />
      <Contact />
    </>
  );
}

export default App;
