"use client"
import { Email, Phone, LocationOn } from "@mui/icons-material";
import ContactForm from "./ContactForm";
import PageLinks from "../common/PageLink";

const ContactUsView = () => {
  return (
    <>
      <PageLinks
      
        title="Contact Us"
        imageUrl="/assets/pagelinks/team.webp"
        items={[
          { name: "Home", link: "/" },
          { name: "Contact Us", link: "/contact-us" },
        ]}
      />
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-6 mt-10 px-3 lg:px-10 ">
          <div className=" flex flex-col gap-6 w-full md:w-1/2 align-middle ">
            <div className="contact  border rounded-2xl bg-white shadow-lg ">
              <h3 className="text-2xl font-semibold theme-bg text-white text-center py-2 rounded-t-2xl">
                Headoffice
              </h3>
              <div className="space-y-3 text-sm p-4 ">
                <div className="flex items-center gap-3">
                  <Email className="theme-clr" />
                  <a
                    href="mailto:skillscentres@igcsm.in"
                    className="text-blue-600 hover:theme-clr"
                  >
                    skillscentres@igcsm.in
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="theme-clr" />
                  <a
                    href="tel:+919990617617"
                    className="text-blue-600 hover:theme-clr"
                  >
                    +91-9990-617-617
                  </a>
                  ,
                  <a
                    href="tel:+918860094657"
                    className="text-blue-600 hover:theme-clr"
                  >
                    +91-8860-094-657
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <LocationOn className="theme-clr" />
                  <span>
                    IGCSM, 36B/1, Gali Number 1, near Kalkaji Depot, Govindpuri,
                    New Delhi, Delhi 110019
                  </span>
                </div>
              </div>
            </div>

            <div className="map h-full rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3505.0691578039155!2d77.26317737416439!3d28.537640938385884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390ce3273585d443%3A0xc7a7216cc048015!2sIGCSM%2C%2036B%2F1%2C%20Gali%20Number%201%2C%20near%20Kalkaji%20Depot%2C%20Govindpuri%2C%20New%20Delhi%2C%20Delhi%20110019!3m2!1d28.5373003!2d77.2670435!5e0!3m2!1sen!2sin!4v1740777640338!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className=" w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsView;
