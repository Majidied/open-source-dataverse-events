import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const Historique = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <section
      id="historique"
      className="pt-16 mt-12 bg-white text-white text-center"
      style={{ padding: isSmallScreen ? '8px' : '16px' }}
    >
      <h2
        className="font-bold pt-2 "
        style={{
          fontSize: isSmallScreen ? '1.5rem' : '2.5rem',
          backgroundColor: 'white',
          color: 'black',
          padding: isSmallScreen ? '6px' : '10px',
        }}
      >
        Historique of Open Source Versions
      </h2>

      <div>
        <Timeline position={isSmallScreen ? 'right' : 'alternate'} sx={{ bgcolor: 'transparent', padding: 2, boxShadow: 'none' }}>
          {timelineData.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{
                  m: 'auto 0',
                  display: isSmallScreen ? 'none' : 'block',
                  textAlign: isSmallScreen ? 'center' : 'right',
                }}
                variant="body2"
                color="text.secondary"
              />
              <TimelineSeparator>
                {index !== 0 && <TimelineConnector sx={{ bgcolor: 'black' }} />}
                <TimelineDot sx={{ bgcolor: 'red' }}>
                  <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>{item.version}</Typography>
                </TimelineDot>
                {index !== timelineData.length - 1 && <TimelineConnector sx={{ bgcolor: 'black' }} />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography
                  variant="h6"
                  component="span"
                  sx={{
                    color: 'black',
                    fontWeight: 600,
                    fontSize: isSmallScreen ? '1rem' : '1.2rem',
                  }}
                >
                  {item.year}
                </Typography>
                <Typography sx={{ color: 'black', fontSize: isSmallScreen ? '0.875rem' : '1rem' }}>
                  {item.description}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
};


const timelineData = [
  { version: 'V1.0', year: '2013', description: "L'informatique, une révolution technologique: entre nécessité et besoin" },
  { version: 'V2.0', year: '2014', description: "Un facteur de promotion du développement de l'entreprise marocaine Vers un partenariat Université-Entreprise" },
  { version: 'V3.0', year: '2015', description: "Open Innovation, Open Enterprise, Open Society: Open Source is the future" },
  { version: 'V4.0', year: '2016', description: "Big & OPEN DATA: De la valorisation Fexploitation de la donnée ouverte" },
  { version: 'V5.0', year: '2017', description: "Development and launch of a new innovative product for business management." },
  { version: 'V6.0', year: '2018', description: "Innovation et Open Source" },
  { version: 'V7.0', year: '2019', description: "Open Data: Une richesse publique nécessaire au développement de demain." },
  { version: 'V8.0', year: '2020', description: "Intelligence Artificielle: Un nouveau challenge pour la digitalisation des entreprises marocaines." },
  { version: 'V9.0', year: '2021', description: "Covid-19: L'entreprise à l'ère du digital." },
  { version: 'V10.0', year: '2022', description: "A Decade of Open Source: Visualization, Innovation and Dedication Une édition spéciale" },
  { version: 'V11.0', year: '2023', description: "L'informatique entre les tendances technologiques et les exigences économiques" },
  { version: 'V12.0', year: '2024', description: "IA et la vision par ordinateur au service de l'experience utilisateur: tendances et enjeux." },
  { version: 'V13.0', year: '2025', description: "L'intelligence artificielle et DevOps : Transformateurs du développement applicatif moderne" },
];

export default Historique;
