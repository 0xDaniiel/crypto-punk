import WebContent from "@/components/Content";
import Faq from "@/components/Faq";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Featured />
      <WebContent />
      <Faq />
      <Footer />
    </div>
  );
}
