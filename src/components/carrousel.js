import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Carrousel = (item) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  let imgCarrousel = item.complete ? "complete" : "";

  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}></h3>
      </div>
      <div>
        <h3 style={contentStyle}></h3>
      </div>
      <div>
        <h3 style={contentStyle}></h3>
      </div>
      <div>
        <h3 style={contentStyle}></h3>
      </div>
    </Carousel>
  );
};

export default Carrousel;
