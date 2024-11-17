import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Guest.css'; // Custom CSS

// Import images
import image1 from './BADER.jpeg';
import image2 from './youssef.png';
import image3 from './omar.png';
import image4 from './houds.jpg';
import image5 from './assya.jpg';
import image6 from './assya.jpg';
import image7 from './bou.jpg';


// Data for conferenciers
const conferenciers = [
  { name: 'Mr. Hadria Bader', title: 'consultant en logiciels', img: image1 },
  { name: 'Mr.Zkim Youssef ', title: ' ingénieur en conception et développement', img: image2 },
  { name: 'Mr. Masoudi Omar', title: ' Co-fondateur, entrepreneur, spécialiste en marketing digital', img: image3 },
  { name: 'Mezouar Houda', title: 'IS Management & Governance Specialist', img: image4 },
  { name: 'Benayada Assya', title: 'Scientifique des Données', img: image5 },
  { name: 'D. Abqar Hamza', title: 'Tech-Lead & Senior software engineer', img: image6 },
  { name: 'Bouihi Bouchra', title: 'Professeur de Enseignement Supérieur', img: image7 },
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
            <button className="message-button">LinkedIn</button>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Guest;