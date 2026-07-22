import { ScrollProgress } from "@/components/ScrollProgress";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Treatments } from "@/components/Treatments";
import { BrandMoment } from "@/components/BrandMoment";
import { Pricing } from "@/components/Pricing";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Reviews } from "@/components/Reviews";
import { Director } from "@/components/Director";
import { Differences } from "@/components/Differences";
import { BookingCTA } from "@/components/BookingCTA";
import { Location } from "@/components/Location";
import { FAQ } from "@/components/FAQ";
import { InstagramGallery } from "@/components/InstagramGallery";
import { Footer } from "@/components/Footer";
import { MobileBookingBar } from "@/components/MobileBookingBar";
import { BRAND_MOMENTS } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="pb-[88px] lg:pb-0">
        <Hero />
        <SocialProof />
        <Treatments />
        <BrandMoment
          image={BRAND_MOMENTS[0].image}
          caption={BRAND_MOMENTS[0].caption}
        />
        <Pricing />
        <BeforeAfter />
        <Director />
        <Reviews />
        <Differences />
        <BookingCTA />
        <Location />
        <FAQ />
        <InstagramGallery />
      </main>
      <Footer />
      <MobileBookingBar />
    </>
  );
}
