import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Avatar } from '@mui/material';


const Sponsors = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sponsors, setSponsors] = useState([]);

  const settings = {
    dots: false,
    infinite: true, // Keep infinite scrolling
    speed: 3000, // Speed of scrolling
    slidesToShow: sponsors.length >= 5 ? 5 : sponsors.length, // Show 5 images at a time
    slidesToScroll: 1, // Scroll one image at a time
    autoplay: true, // Autoplay enabled for continuous scrolling
    autoplaySpeed: 0, // Continuous scrolling speed
    cssEase: 'linear', // Smooth scrolling
    arrows: false, // Hide arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: sponsors.length >= 4 ? 4 : sponsors.length,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: sponsors.length >= 3 ? 3 : sponsors.length,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: sponsors.length >= 2 ? 2 : sponsors.length,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };


  // Resize handler to adjust the mobile view
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/logos');
        if (!response.ok) throw new Error('Failed to fetch sponsors');
        const data = await response.json();

        const sponsors = data.map((contributor) => ({
          id: contributor.id,
          name: contributor.name,
          url: `http://localhost:3000${contributor.url}`, // Prepend the backend URL if needed
        }));

        setSponsors(sponsors);
      } catch (error) {
        console.error('Error fetching sponsors:', error);
      }
    };

    fetchSponsors();
  }, []);

  return (
    <section id="sponsors" className="py-0 bg-transparent text-center">
      <h2 className="text-4xl font-bold mb-8">Our Sponsors</h2>
      <p className="text-lg mb-12 text-gray-100">
        We are proud to be supported by our incredible sponsors.
      </p>
      <Slider {...settings}>
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex items-center justify-center p-4"> {/* Added padding for space between circles */}
            <Avatar
              alt={sponsor.name}
              src={sponsor.url}
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
