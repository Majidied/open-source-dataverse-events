import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Guest.css'; // Custom CSS
import { FaLinkedinIn } from 'react-icons/fa';

// Import images
import image1 from './image1.png';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './607441.png';

// Data for conferenciers
const conferenciers = [
  { name: 'Hamza Abqar', title: 'Tech-Lead & Senior software engineer', img: image1 },
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
          infinite: true,
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
            <img src={conferencier.img} alt={conferencier.name} className="user-image" style={{marginLeft : 'auto' , marginRight : ' auto'}} />
            <h3 className="text-2xl text-white font-semibold mb-4 user-name">{conferencier.name}</h3>
            <p className="user-profession">{conferencier.title}</p>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin-button" style={{alignSelf : 'flex-end' }}>
              <FaLinkedinIn />
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Guest;
