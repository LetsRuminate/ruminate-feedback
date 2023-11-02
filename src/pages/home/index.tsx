import Hero from "./hero";
import HeroText from "./heroText";
import SectionOne from "./sectionOne";
import SectionTwo from "./sectionTwo";
import SectionThree from "./sectionThree";
import SectionFour from "./sectionFour";

export default function Home() {
  return (
    <div className="text-neutral-50 bg-brand-black">
      <Hero />
      <HeroText />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}
