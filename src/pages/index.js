
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import FeaturedAssets from '../components/FeaturedAssets';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <FeaturedAssets />
      <Testimonials />
      <Footer />
    </div>
  );
}
