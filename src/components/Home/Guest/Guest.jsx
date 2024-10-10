import React from 'react';
import Slider from 'react-slick';
import { FaLinkedin } from 'react-icons/fa'; // Import only LinkedIn icon
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const conferenciers = [
  {
    name: 'Dr. Alice Doe',
    title: 'Expert en Développement Durable',
    image: 'https://via.placeholder.com/300', 
    linkedin: 'https://linkedin.com/in/alicedoe',
  },
  {
    name: 'Prof. Bob Smith',
    title: 'Directeur de la Recherche',
    image: 'https://via.placeholder.com/300',
    linkedin: 'https://linkedin.com/in/bobsmith',
  },
  {
    name: 'M. Charlie Johnson',
    title: 'Spécialiste en Réalité Augmentée',
    image: 'https://via.placeholder.com/300',
    linkedin: 'https://linkedin.com/in/charliejohnson',
  },
  {
    name: 'Mme Dana White',
    title: 'Designer UX',
    image: 'https://via.placeholder.com/300',
    linkedin: 'https://linkedin.com/in/danawhite',
  },
  {
    name: 'Dr. Eve Black',
    title: 'Scientifique des Données',
    image: 'https://via.placeholder.com/300',
    linkedin: 'https://linkedin.com/in/eveblack',
  },
];

const Guest = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section id='team' className="py-16 text-center overflow-hidden bg-transparent">
      <h2 className="text-4xl font-bold mb-8 text-white">Nos Conférenciers</h2>
      <Slider {...settings} className="guest-slider w-full">
        {conferenciers.map((conferencier, index) => (
          <div key={index} className="guest-item shadow-lg p-6 bg-transparent rounded-lg">
            {/* Guest Image */}
            <img
              src={conferencier.image}
              alt={conferencier.name}
              className="w-60 h-60 mx-auto rounded-lg mb-4 object-cover"
            />

            {/* Guest Name and Title */}
            <h3 className="text-2xl font-semibold mb-2 text-white">{conferencier.name}</h3>
            <p className="mb-4 text-white">{conferencier.title}</p>

            {/* LinkedIn Icon */}
            <div className="flex justify-center">
              <a href={conferencier.linkedin} target="_blank" rel="noopener noreferrer" className="text-white">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Guest;
