import Head from 'next/head';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Packages from "@/components/Packages";
import StatsContainer from "@/components/StatsContainer";
import DiscoverBanner from "@/components/DiscoverBanner";
import Destinations from "@/components/Destinations";
import Testimonials from "@/components/Testimonials"; // Fixed typo in import
import SeasonalDeals from "@/components/SeasonalDeals";

export default function Page() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Explore Kashmir | Suwida Tour & travels</title>
        <meta
          name="description"
          content="Discover the beauty of Kashmir with KashmirExplorer. Explore customized tour packages, stunning destinations, and unforgettable experiences in the heart of the Himalayas."
        />
        <meta
          name="keywords"
          content="Kashmir travel, Kashmir tours, Suwida Tour and Travels, customized tour packages, adventure in Kashmir, houseboat stays, cultural experiences, seasonal deals"
        />
        <link rel="canonical" href="https://www.suwidatourandtravels.in/" />
      </Head>

      <Hero />
      <StatsContainer />
      {/* <About /> */}
      <Packages />
      <DiscoverBanner />
      <Destinations />
      <Testimonials />
      <SeasonalDeals />
    </>
  );
}