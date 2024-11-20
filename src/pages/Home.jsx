import Hero from '../components/Home/Hero/Hero';
import Planning from '../components/Home/Planning/Planning';
import Sponsors from '../components/Home/Sponsors/Sponsors';
import Guest from '../components/Home/Guest/Guest';
import Footer from '../components/Footer/Footer';
import bgSvg from '/bg.jpg'; // Import the background image

export default function Home() {
  return (
    <div 
      className="overflow-hidden bg-gradient-to-r from-blue-900 via-black to-red-900"
    >
      <Hero />
      <div className="mx-auto w-full">
        <Planning />
        <Sponsors />
        <Guest />
      </div>
      <Footer />
    </div>
  );
}
