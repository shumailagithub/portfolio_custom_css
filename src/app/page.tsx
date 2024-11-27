import Header from "./components/header/header";
import HeroSection from "./components/hero-section/heroSection";
import AboutSection from "./components/about-section/aboutSection";
import AboutBottomDiv from "./components/about-section/aboutBottomImagDiv/AboutBottomDiv";
import Portfoilo from "./components/portfoilo/Portfoilo";
import Services from "./components/Services-section/Services";
import Testimonials from "./components/testimonials/Testimonials";
import ContactUs from "./components/contact-us/ContactUs";
import Footer from "./components/footer/Footer";




export default function Home() {
  return (
      <>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <AboutBottomDiv/>
      <Portfoilo/>
      <Services/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
      </>
  );
}
