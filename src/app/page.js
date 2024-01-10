import Modal from "@/components/Modal/Modal";
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
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
      {/* <script type="text/javascript">
    {(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "kj3s2qcy7x")}
</script> */}
      </Head>
      {/* <Modal/> */}
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
