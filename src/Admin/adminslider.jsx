import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';

function AdminSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        {/*<ExampleCarouselImage text="First slide" />*/}
        <img src='https://images.unsplash.com/photo-1640955014216-75201056c829?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGN8ZW58MHx8MHx8fDA%3D' style={{width:'100%', height:'700px'}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/*<ExampleCarouselImage text="Second slide" />*/}
        <img src='https://images.unsplash.com/photo-1709086034579-fd295466e315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGMlMjBjYXJzfGVufDB8fDB8fHww' style={{width:'100%', height:'700px'}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/*<ExampleCarouselImage text="Third slide" />*/}
        <img src='https://images.unsplash.com/photo-1531986627054-7f294d095acd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGMlMjBjYXJzfGVufDB8fDB8fHww' style={{width:'100%', height:'700px'}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AdminSlider;