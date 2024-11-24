import Footer from "../components/Footer";
import Feature from "../components/landing/section/Feature";
import Hero from "../components/landing/section/Hero";
import Pricing from "../components/landing/section/Pricing";
import Testimonial from "../components/landing/section/Testimonial";
const Home = () => {
  return (
    <div className="min-h-screen min-w-full">
      <section className="py-12 bg-gray-50 sm:py-16 flex gap-5 flex-col items-center">
        <Hero />
        <Feature />
        <Pricing />
        <Testimonial />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
