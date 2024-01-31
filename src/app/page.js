"use client";
import styles from "./page.module.css";
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
import Script from "next/script";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader/loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <main>
      {isLoading && <Loader />}

      <Navbar />
      <Hero />
      <ImageSwiper />
      <CompareSection />
      <SavingsCalculator />
      <WhySection />
      <HowItWorks />
      <TourGoals />
      <FAQS />
      <Contact />
      <Footer />
    </main>
  );
}
