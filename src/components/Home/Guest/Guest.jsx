import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Guest.css'; // Custom CSS

// Import images
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './607441.png';

// Data for conferenciers
const conferenciers = [
  { name: 'Dr. Alice Doe', title: 'Expert en Développement Durable', img: image1 },
  { name: 'Prof. Bob Smith', title: 'Directeur de la Recherche', img: image2 },
  { name: 'M. Charlie Johnson', title: 'Spécialiste en Réalité Augmentée', img: image3 },
  { name: 'Mme Dana White', title: 'Designer UX', img: image4 },
  { name: 'Dr. Eve Black', title: 'Scientifique des Données', img: image5 },
];

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <i className="fas fa-chevron-left"></i>
    </div>
  );
};

const Guest = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 2000, 
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id='guests' className="py-16 text-center overflow-hidden">
      <h2 className="text-4xl font-bold mb-8">Nos Conférenciers</h2>
      <Slider {...settings} className="guest-slider w-full">
        {conferenciers.map((conferencier, index) => (
          <div key={index} className="guest-item shadow-lg p-6 bg-transparent card-item flex align-center">
            <img src={conferencier.img} alt={conferencier.name} className="user-image" />
            <h3 className="text-2xl font-semibold mb-4 user-name">{conferencier.name}</h3>
            <p className="user-profession">{conferencier.title}</p>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin-button">
              <svg className="linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20.452 20.452h-3.836v-5.573c0-1.327-.027-3.034-1.846-3.034-1.846 0-2.13 1.442-2.13 2.928v5.679h-3.836V9h3.68v1.513h.052c.513-.975 1.765-2 3.633-2 3.884 0 4.6 2.56 4.6 5.906v6.033zm-12.778-12.78c-1.19 0-2.036-.853-2.036-1.914 0-1.067.855-1.916 2.036-1.916 1.179 0 2.034.849 2.034 1.916 0 1.061-.855 1.914-2.034 1.914zm1.917 12.78h-3.834V9h3.834v11.452z" />
              </svg>
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Guest;
