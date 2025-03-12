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

      <div className="py-10 px-4 md:px-8 ">
        <div className="container mx-auto flex flex-col md:flex-row  gap-3">
          <div className="w-full md:w-3/5">
            <NewsAndNotifications isCol={true} />
          </div>
          <div className="w-full md:w-2/5 my-auto border rounded-lg shadow-2xl">
            {/* <h4 className="theme-clr text-4xl font-bold py-2 ">Contact Us</h4> */}
            <ContactForm />
          </div>
        </div>
      </div>

      {/* <div className="relative w-full md:w-2/5 my-auto">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-xs"
          style={{ backgroundImage: "url('/assets/contact.jpg')" }}
        />
        <div className="relative bg-gray-200 rounded-xl opacity-90">
          <ContactForm />
        </div>
      </div> */}

      <ScrollToTop />
    </main>
  );
}
