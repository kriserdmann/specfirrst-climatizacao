import { Hero } from "@/components/home/Hero";
import { Brands } from "@/components/home/Brands";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Services />
      <Testimonials />
    </>
  );
}

