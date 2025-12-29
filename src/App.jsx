import Hero from "./Component/Hero";
import AdmissionForm from "./Component/AdmissionForm";
import About from "./Component/About";
import WhyChooseUs from "./Component/WhyChooseUs";
import AdmissionsInfo from "./Component/AdmissionInfo";
import Testimonial from "./Component/Testimonial";
import Program from "./Component/Program";
import FAQ from "./Component/Faq";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

import './App.css'
import Header from "./Component/Header";
import Gallery from "./Component/Gallery";
import Facilities from "./Component/Facilities";
import Faculty from "./Component/Faculty";

function App() {
  return (
    <div className="font-sans text-gray-800 overflow-hidden ">
      <Header/>
      <Hero />
      <AdmissionForm />

      <About />
      <Gallery/>
      <WhyChooseUs />
      <Facilities/>
      <Faculty/>
     <AdmissionsInfo/>
     <Testimonial/>
     <Program/>
     <FAQ/>
     <Contact/>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
