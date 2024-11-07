
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import FeaturedAssets from '../components/FeaturedAssets';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import AboutUs from '@/components/AboutUs';
import FAQ from '@/components/FAQs';
import ContactUs from '@/components/Contact';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <HowItWorks />
      <FAQ />
      <FeaturedAssets />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}
