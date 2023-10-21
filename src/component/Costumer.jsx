import React, { useState, useEffect } from 'react';

const Costomer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (activeIndex + 1) % 3;
      setActiveIndex(nextIndex);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [activeIndex]);

  const testimonials = [
    {
      name: "Ankit Gupta",
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img:"./Image/vikas negi.jpeg"
      
    },
    {
        name: "Ankit Gupta",
        text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        img:"./Image/vikas negi.jpeg"
        
      },    
    {
      name: "Lincoln Birch",
      text: "Great client to work with, I'd love to work with her again, This job was done fast and for a great price. Excellent work. Thanks!",
      img:"./Image/vikas negi.jpeg"
    },
  ];

  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
              <div className="card mb-3">
                <div className="row g-0 bg text-white">
                  <div className="col-lg-4 d-flex justify-content-center p-4">
                    <img  src={testimonial.img} className="rounded-circle img-fluid" alt="..." />
                  </div>
                  <div className="col-lg-8">
                    <div className="card-body">
                      <h5 className="card-title fs-4">{testimonial.name}</h5>
                      <p className="card-text fs-5">{testimonial.text}</p>
                      <p className="card-text fs-4"><small className="text-body-white">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Costomer;
