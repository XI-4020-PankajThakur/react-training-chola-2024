import Carousel from 'react-bootstrap/Carousel';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'



function CarouselPart() {
  return (
    
    <Carousel >
      
      <Carousel.Item>
        <img src={img1} alt='img' width={"100%"}  height={"250px"}  />
       
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt='img' width={"100%"} height={"250px"} />
       
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt='img' width={"100%"}height={"250px"}  />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPart;