import React, { useEffect, useState } from 'react';
import './SlideShow.css'; // import the css file for styling
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
const Slideshow = ({images}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=> {
      goToNextSlide();
    }, 3000);
    return ()=> clearInterval(interval);
  }, [currentSlide]
  );

  const goToNextSlide = () => {
    const nextSlide = (currentSlide + 1) % images.length;
    // because if the slide number is 2, 2 + 1 will be 3 which is not possible hence (2+1)%3 = 0
    setCurrentSlide(nextSlide);
  };

  const goToPrevSlide = () => {
    const prevSlide = (currentSlide + images.length - 1) % images.length;
    setCurrentSlide(prevSlide);
  };

  const slideOne = () =>{
    setCurrentSlide(0);
  }
  const slideTwo = () =>{
    setCurrentSlide(1);
  }
  const slideThree = () =>{
    setCurrentSlide(2);
  }

  return (
    <div className="slideshow slideshow-container">
      <img src={images[currentSlide]} style={{width:'99vw'}} alt="Slideshow" className="slide" />

      {/* <button onClick={goToPrevSlide} className="prev">
        &#10094;
      </button>
      <button onClick={goToNextSlide} className="next">
        &#10095;
      </button> */}
      
      <ArrowRightRoundedIcon color="primary" fontSize="large" className="next"/>
      <div style={{textAlign:'center', position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)'}}>
        <span class="dot mx-2" style={{backgroundColor: '#023047', border: "2px solid white" , boxShadow:"0 0 3px #00b4d8",height:'23px', width:'23px'}} onClick={slideOne}></span>
        <span class="dot mx-2" style={{backgroundColor: '#023047', border: "2px solid white" , boxShadow:"0 0 3px #00b4d8",height:'23px', width:'23px'}} onClick={slideTwo}></span>
        <span class="dot mx-2" style={{backgroundColor: '#023047', border: "2px solid white" , boxShadow:"0 0 3px #00b4d8",height:'23px', width:'23px'}} onClick={slideThree}></span>
      </div>
    </div>
  );
};

export default Slideshow;
