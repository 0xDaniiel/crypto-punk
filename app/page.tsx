import About from "@/components/About";
import Featured from "@/components/Featured";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Featured />
      <About />
    </div>
  );
}
