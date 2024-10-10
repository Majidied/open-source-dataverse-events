import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Avatar } from '@mui/material';

// Sponsor data
const sponsors = [
  { name: 'Sponsor 1', logo: 'https://mp.afrikayna.com/wp-content/uploads/2018/11/OCP-logo.jpg' },
  { name: 'Sponsor 2', logo: 'https://via.placeholder.com/150' },
  { name: 'Sponsor 3', logo: 'https://via.placeholder.com/150' },
  { name: 'Sponsor 4', logo: 'https://via.placeholder.com/150' },
];

// Slider settings
const settings = {
  dots: false,
  infinite: true,
  speed: 5000, // Slow down speed for smoother scrolling
  slidesToShow: 5, // Reduced to 5 for more balanced display on large screens
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0, // Continuous scroll
  cssEase: 'linear',
  arrows: false, // Disable the arrows
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const Sponsors = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Debounce resize handler to avoid performance issues
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="sponsors" className="py-16 text-center">
      <h2 className="text-4xl font-bold mb-8">Our Sponsors</h2>
      <p className="text-lg mb-12 text-white">
        We are proud to be supported by our incredible sponsors.
      </p>
      <Slider {...settings}>
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex items-center justify-center p-2 md:p-4">
            <Avatar
              alt={sponsor.name}
              src={sponsor.logo}
              sx={isMobile ? { width: 100, height: 100 } : { width: 150, height: 150 }}
              title={sponsor.name}
              className="shadow-md"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Sponsors;
