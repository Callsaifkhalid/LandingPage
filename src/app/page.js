import CompareSection from "./screens/compareSection/page";
import Contact from "./screens/contact/page";
import FAQS from "./screens/faqs/page";
import Footer from "./screens/footer/page";
import Hero from "./screens/hero/page";
import HowItWorks from "./screens/howItWorks/page";
import Navbar from "./screens/navbar/page";
import SavingsCalculator from "./screens/savingsCalculator/page";
import ImageSwiper from "./screens/swiper/swiper";
import TourGoals from "./screens/tourGoals/page";
import WhySection from "./screens/whySection/page";

export default function Home() {
  return (
    <main >
      <Navbar />
      <Hero />
      <ImageSwiper/>
      <CompareSection />
      <SavingsCalculator />
      <WhySection />
      <HowItWorks />
      <TourGoals />
      <FAQS/>
      <Contact />
      <Footer />
    </main>
  );
}
