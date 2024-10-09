import React from 'react';
import Slider from 'react-slick';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import social media icons
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Guest.css'; // Custom CSS

const conferenciers = [
  {
    name: 'Dr. Alice Doe',
    title: 'Expert en Développement Durable',
    image: 'https://via.placeholder.com/300', // Add image paths
    socials: {
      twitter: 'https://twitter.com/alicedoe',
      linkedin: 'https://linkedin.com/in/alicedoe',
      github: 'https://github.com/alicedoe',
    },
  },
  {
    name: 'Prof. Bob Smith',
    title: 'Directeur de la Recherche',
    image: 'phttps://via.placeholder.com/300',
    socials: {
      twitter: 'https://twitter.com/bobsmith',
      linkedin: 'https://linkedin.com/in/bobsmith',
      github: 'https://github.com/bobsmith',
    },
  },
  {
    name: 'M. Charlie Johnson',
    title: 'Spécialiste en Réalité Augmentée',
    image: 'phttps://via.placeholder.com/300',
    socials: {
      twitter: 'https://twitter.com/charliejohnson',
      linkedin: 'https://linkedin.com/in/charliejohnson',
      github: 'https://github.com/charliejohnson',
    },
  },
  {
    name: 'Mme Dana White',
    title: 'Designer UX',
    image: 'https://via.placeholder.com/300',
    socials: {
      twitter: 'https://twitter.com/danawhite',
      linkedin: 'https://linkedin.com/in/danawhite',
      github: 'https://github.com/danawhite',
    },
  },
  {
    name: 'Dr. Eve Black',
    title: 'Scientifique des Données',
    image: 'https://via.placeholder.com/300',
    socials: {
      twitter: 'https://twitter.com/eveblack',
      linkedin: 'https://linkedin.com/in/eveblack',
      github: 'https://github.com/eveblack',
    },
  },
];

const Guest = () => {
  const settings = {
    dots: true, // Enable navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 3, // Show 3 guests at a time
    slidesToScroll: 1, // Scroll one guest at a time
    autoplay: true, // Auto-scroll
    autoplaySpeed: 2000, // Auto-scroll every 1 seconds
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
          infinite: true,
        },
      },
    ],
  };

  return (
    <section id='team' className="py-16  text-center overflow-hidden">
      <h2 className="text-4xl font-bold mb-8">Nos Conférenciers</h2>
      <Slider {...settings} className="guest-slider w-full">
        {conferenciers.map((conferencier, index) => (
          <div key={index} className="guest-item shadow-lg p-6 bg-gray-50 rounded-lg">
            {/* Guest Image */}
            <img
              src={conferencier.image}
              alt={conferencier.name}
              className="w-40 h-40 mx-auto rounded-full mb-4 object-cover"
            />

            {/* Guest Name and Title */}
            <h3 className="text-2xl font-semibold mb-2">{conferencier.name}</h3>
            <p className="mb-4">{conferencier.title}</p>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4">
              <a href={conferencier.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                <FaTwitter size={24} />
              </a>
              <a href={conferencier.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700">
                <FaLinkedin size={24} />
              </a>
              <a href={conferencier.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-800">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Guest;
