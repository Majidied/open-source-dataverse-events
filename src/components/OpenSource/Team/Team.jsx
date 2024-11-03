// Team.jsx
import Slider from 'react-slick';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const Team = () => {
  const team = [
    { name: 'Alice Doe', role: 'Lead Developer' },
    { name: 'Bob Smith', role: 'Project Manager' },
    { name: 'Charlie Johnson', role: 'AR Specialist' },
    { name: 'Dana White', role: 'UX Designer' },
    { name: 'Eve Black', role: 'Data Scientist' },
    { name: 'Frank Brown', role: 'Software Engineer' },
    { name: 'Grace Green', role: 'Web Developer' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: false,
    swipe: false,
    touchMove: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  };

  return (
    <section id='team' className="py-16 bg-white text-center">
      <Typography variant="h2" component="h2" gutterBottom className="text-4xl font-bold text-black">
        Meet Our Team
      </Typography>
      <StyledSlider {...settings}>
        {team.map((member, index) => (
          <div key={index} className="px-2">  
            <StyledCard className={`card ${index === 1 ? 'active' : ''}`}>
              <CardMedia
                component="img"
                alt={member.name}
                height="180"
                image={`https://i.pravatar.cc/150?img=${index + 1}`}
                className={`card-image ${index === 1 ? 'center' : ''}`}
              />
              <CardContent className="card-content">
                <Typography variant="h5" component="div" className="font-medium">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
              </CardContent>
            </StyledCard>
          </div>
        ))}
      </StyledSlider>
    </section>
  );
};

const StyledSlider = styled(Slider)`
  .slick-slide {
    transition: transform 0.5s, opacity 0.5s, filter 0.5s;
    padding: 0 10px; // Added padding for better spacing
  }
  .slick-center .card {
    transform: scale(1.2) rotateY(0deg);
    opacity: 1;
    filter: none;
  }
  .slick-slide:not(.slick-center) .card {
    transform: scale(0.8) rotateY(-15deg);
    opacity: 0.6;
    filter: blur(5px);
  }
  .slick-dots li button:before {
    color: #555;
  }
  .slick-dots .slick-active button:before {
    color: #000;
  }

  @media (max-width: 768px) {
    .slick-slide .card-content {
      font-size: 0.875rem;
    }
    .slick-slide .card-image {
      height: 220px;
    }
    .slick-slide .card {
    width: 90% !important;
    margin: 0 auto;
    }
  }
`;

const StyledCard = styled(Card)`
  transition: transform 0.5s, opacity 0.5s, filter 0.5s;
  border-radius: 16px; // Enhanced border radius for a modern look
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Added shadow for depth
`;

export default Team;
