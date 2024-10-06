import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='container'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
       <img className='carousel-img d-block w-100' src="https://fotografias.larazon.es/clipping/cmsimages01/2023/05/22/502FAD24-5986-407E-AA3C-D9E7A187F2BE/grandes-companias-videojuegos-experimentan-fondo-inteligencia-artificial_69.jpg?crop=1920,1080,x0,y0&width=1280&height=720&optimize=low&format=webply" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='carousel-img d-block w-100' src="https://fotografias-neox.atresmedia.com/clipping/cmsimages01/2018/11/16/49764E0E-58E4-44F7-8DBF-80623FEF92B9/98.jpg?crop=1600,900,x0,y0&width=1900&height=1069&optimize=high&format=webply" alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img className='carousel-img d-block w-100' src="https://www.valenciaadicciones.es/wp-content/uploads/adiccion-videojuegos-aumenta.jpg" alt="" />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;