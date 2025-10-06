import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import RentalForm from "@/components/RentalForm";
import WhyRent from "@/components/WhyRent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <HowItWorks />
      <RentalForm />
      <WhyRent />
      <Footer />
    </div>
  );
}
