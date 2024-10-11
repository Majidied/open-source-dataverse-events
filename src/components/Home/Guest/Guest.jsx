import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Guest.css'; // Custom CSS

const conferenciers = [
  { name: 'Dr. Alice Doe', title: 'Expert en Développement Durable' },
  { name: 'Prof. Bob Smith', title: 'Directeur de la Recherche' },
  { name: 'M. Charlie Johnson', title: 'Spécialiste en Réalité Augmentée' },
  { name: 'Mme Dana White', title: 'Designer UX' },
  { name: 'Dr. Eve Black', title: 'Scientifique des Données' },
];

const Guest = () => {
  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 3, // Show 3 guests at a time
    slidesToScroll: 1, // Scroll one guest at a time
    autoplay: true, // Auto-scroll
    autoplaySpeed: 2000, // Auto-scroll every 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 guests on desktop
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 guests on tablet
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 guest on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id='guests' className="py-16 bg-transparent text-center overflow-hidden">
      <h2 className="text-4xl font-bold mb-8">Nos Conférenciers</h2>
      <Slider {...settings} className="guest-slider w-full">
        {conferenciers.map((conferencier, index) => (
          <div key={index} className="guest-item shadow-lg p-6 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">{conferencier.name}</h3>
            <p>{conferencier.title}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Guest;
