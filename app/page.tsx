import WebContent from "@/components/Content";
import Featured from "@/components/Featured";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Featured />
      <WebContent />
    </div>
  );
}
