import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import img1 from "../img/capa8.jpg";
import img2 from "../img/capa1.jpg";
import img3 from "../img/capa2.jpg";
import img4 from "../img/capa3.jpg";
import img5 from "../img/capa4.jpg";
import img6 from "../img/capa5.jpg";
import img7 from "../img/capa6.jpg";
import img8 from "../img/capa7.jpg";

function CarroselBrabo() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={img1} alt="" style={{ width: "100%" }} />

      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} alt="" style={{ width: "100%" }} />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} alt="" style={{ width: "100%" }} />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={img4} alt="" style={{ width: "100%" }} />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={img5} alt="" style={{ width: "100%" }} />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={img6} alt="" style={{ width: "100%" }} />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={img7} alt="" style={{ width: "100%" }} />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={img8} alt="" style={{ width: "100%" }} />
      </Carousel.Item>
    </Carousel>
  ); 
}

export default CarroselBrabo;
