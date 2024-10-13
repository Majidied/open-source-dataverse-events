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
        className="relative mx-0 w-full -z-10" // Ensure full width for responsiveness
        style={{
          backgroundImage: `url(${bgSvg})`,   // Use the imported SVG file
          backgroundSize: 'cover',            // Cover the entire area
          backgroundPosition: 'center',       // Center the background image
          backgroundRepeat: 'no-repeat',      // Prevent repetition
          backgroundAttachment: 'fixed',      // Make the background fixed, so it doesn't scroll
          minHeight: '100vh',                 // Ensure it covers the entire viewport height
        }}
      >
        {/* Add black overlay to make text more readable */}
        <div className="absolute inset-0 bg-black opacity-10 z-0"></div>

        {/* Content goes here, using a higher z-index */}
        <div className="relative z-10 px-4 sm:px-8"> {/* Add padding for responsive spacing */}
          <Planning />
          <Sponsors />
          <Guest />
          <ARsection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
