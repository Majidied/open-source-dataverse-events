import Hero from '../components/Home/Hero/Hero';
import Planning from '../components/Home/Planning/Planning';
import Sponsors from '../components/Home/Sponsors/Sponsors';
import Guest from '../components/Home/Guest/Guest';
import ARsection from '../components/Home/Arsection/Arsection';
import Footer from '../components/Footer/Footer';
import bgSvg from '../assets/bg.svg'; // Import the SVG from the assets folder

export default function Home() {
  return (
    <div>
      <Hero />
      <div 
        className="mx-auto"
        style={{
          backgroundImage: `url(${bgSvg})`,   // Use the imported SVG file
          backgroundSize: 'cover',            // Cover the entire area
          backgroundPosition: 'center',       // Center the background image
          backgroundRepeat: 'no-repeat',      // Prevent repetition
          backgroundAttachment: 'fixed',      // Make the background fixed, so it doesn't scroll
          minHeight: '100vh',                 // Ensure it covers the entire viewport height
          
        }}
      >
        <Planning />
        <Sponsors />
        <Guest />
        <ARsection />
      </div>
      <Footer />
    </div>
  );
}
