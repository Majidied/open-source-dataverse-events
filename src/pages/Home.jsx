import Hero from '../components/Home/Hero/Hero';
import AboutUs from '../components/Home/About/About';
import Planning from '../components/Home/Planning/Planning';
import Sponsors from '../components/Home/Sponsors/Sponsors';
import Guest from '../components/Home/Guest/Guest';
import ARsection from '../components/Home/Arsection/Arsection';
import Footer from '../components/Footer/Footer';
import About from '../components/Home/About/About';
import JOHackathon from '../components/Home/JOHackathon/JOHackathon';



export default function Home() {
    return (
      <div>
        <Hero />
        <About />
        <Planning />
        <Sponsors />
        <Guest />
        <JOHackathon />
        <ARsection />
        <Footer />
      </div>
    );
  }
  