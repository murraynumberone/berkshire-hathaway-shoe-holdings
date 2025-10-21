import { ImageCarousel } from "~/components/carousel";
import { slides, heroContent } from "~/data/slides";
import Header from "~/layout/header";
import About from "~/sections/about";
import Brands from "~/sections/brands";
import Contact from "~/sections/contact";
import Retailers from "~/sections/retailers";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Berkshire Hathaway Shoe Holdings" },
    {
      name: "description",
      content: "Over 140 Years of Footwear Industry Experience",
    },
  ];
}

export default function Home() {
  return (
    <main>
      <Header />
      <ImageCarousel
        slides={slides}
        title={heroContent.title}
        text={heroContent.text}
      />
      <Brands />
      <Retailers />
      <About />
      <Contact />
    </main>
  );
}
