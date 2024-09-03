// app/page.tsx
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { MyWorks } from "@/components/MyWorks";
import { Technologies } from "@/components/Technologies";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <MyWorks />
      <Technologies />
    </>
  );
}
