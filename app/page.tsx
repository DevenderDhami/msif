import Testimonials from "./components/Testimonials/index";
import ScrollToTop from "./components/common/ScrollToTop";
import BannerCarousel from "./components/Banner/BannerCarousel";
import OurTeam from "./components/LandingPage/OurTeam";
import NewsAndNotifications from "./components/LandingPage/NewsAndNotifications";
import OurPartnersLogoSlider from "./components/LandingPage/OurPartnersLogoSlider";
import { industryPartnersImages } from "./lib/constants";
import AboutSection from "./components/LandingPage/AboutSection";
import ContactForm from "./components/LandingPage/ContactForm";

export default function Home() {
  return (
    <main>
      <div id="home-section" className="">
        <BannerCarousel />
      </div>

      <div className="py-10 container mx-auto px-4 md:px-8">
        <AboutSection />
      </div>

      <div id="team" className=" py-10 px-4 md:px-8 ">
        <OurTeam />
      </div>

      <div className="py-10 bg-gray-50 px-4 md:px-8" id="industry">
        <OurPartnersLogoSlider
          title={"Industry Partners"}
          images={industryPartnersImages}
        />
      </div>

      <div className="py-10 px-4 md:px-8" id="testimonial">
        <Testimonials />
      </div>

      <div className="bg-gray-100 px-4 md:px-8 py-20" id="news">
        <NewsAndNotifications />
      </div>
      <ScrollToTop />

      <div id="contact" className="contact-us  py-10">
        <ContactForm />
      </div>
    </main>
  );
}
