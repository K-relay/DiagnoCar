import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image from './../../../assets/images/ad/ad.jpg';
import image1 from './../../../assets/images/ad/ad1.jpg';
import image2 from './../../../assets/images/ad/ad2.jpg';

function Addcenter(param) {
  const carouselStyle = {
    width: '100%', // Responsive width
    height: param.height, // Fixed height
    overflow: 'hidden', // Hides overflow content
  };

  const slideStyle = {
    height: param.height, // Fixed height for each slide
  };

  const imageStyle = {
    width: '100%', // Fill the width of the slide
    height: 'auto', // Maintain aspect ratio
    objectFit: 'contain', // Cover to fit the slide height
    cursor: 'pointer', // Change cursor to pointer on hover
  };

  return (
    <div style={carouselStyle}>
      <Carousel showThumbs={false} autoPlay interval={3000} infiniteLoop>
        <div style={slideStyle}>
            <img src={image} alt="Slide 1" style={imageStyle} />
        </div>
        <div style={slideStyle}>
            <img src={image1} alt="Slide 2" style={imageStyle} />
        </div>
        <div style={slideStyle}>
            <img src={image2} alt="Slide 3" style={imageStyle} />
        </div>
      </Carousel>
    </div>
  );
}

export default Addcenter;
