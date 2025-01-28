import Hero from "@/components/Hero";
import About from "@/components/About";
import Packages from "@/components/Packages";
import StatsContainer from "@/components/StatsContainer";
import DiscoverBanner from "@/components/DiscoverBanner";
import Destinations from "@/components/Destinations";
import Testimonials from "@/components/Testimonails";
import SeasonalDeals from "@/components/SeasonalDeals";
export default function Page() {
  return (
  <>
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
