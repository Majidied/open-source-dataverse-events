import Hero from '../components/Home/Hero/Hero';
import Planning from '../components/Home/Planning/Planning';
import Sponsors from '../components/Home/Sponsors/Sponsors';
import Guest from '../components/Home/Guest/Guest';
import ARsection from '../components/Home/Arsection/Arsection';
import Footer from '../components/Footer/Footer';

export default function Home() {
    return (
      <div>
        <Hero />
        <Planning />
        <Sponsors />
        <Guest />
        <ARsection />
        <Footer />
      </div>
    );
  }
  