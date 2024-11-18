import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Guest.css'; // Custom CSS

// Data for conferenciers
const conferenciers = [
  { name: 'Mr. Hadria Bader', title: 'consultant en logiciels', img: '/BADER.jpeg' },
  { name: 'Mr.Zkim Youssef ', title: ' ingénieur en conception et développement', img: '/youssef.png' },
  { name: 'Mr. Masoudi Omar', title: ' Co-fondateur, entrepreneur, spécialiste en marketing digital', img: '/omar.png' },
  { name: 'Mezouar Houda', title: 'IS Management & Governance Specialist', img: '/houds.jpg' },
  { name: 'Benayada Assya', title: 'Scientifique des Données', img: '/assya.jpg' },
  { name: 'D. Abqar Hamza', title: 'Tech-Lead & Senior software engineer', img: '/Abqar.png' },
  { name: 'Bouihi Bouchra', title: 'Professeur de Enseignement Supérieur', img: '/bou.jpg' },
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
      <h2 className="text-4xl font-bold mb-8">Our Speakers</h2>
      <Slider {...settings} className="guest-slider w-full">
        {conferenciers.map((conferencier, index) => (
          <div key={index} className="guest-item shadow-lg p-6 bg-transparent card-item flex align-center h-full">
            <img src={conferencier.img} alt={conferencier.name} className="user-image" style={{marginLeft : 'auto' , marginRight : ' auto'}} />
            <h3 className="text-2xl text-white font-semibold mb-4 user-name">{conferencier.name}</h3>
            <p className="user-profession">{conferencier.title}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Guest;
