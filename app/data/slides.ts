export type Slide = {
  imageDesktop: string;
  imageMobile: string;
};

export type HeroContent = {
  title: string;
  text: string;
};

export const slides: Slide[] = [
  {
    imageDesktop:
      "https://d3beinwe0ir5tu.cloudfront.net/Story--landingCarousel/SLIDE+1+-+X-gradient.jpg",
    imageMobile:
      "https://d3beinwe0ir5tu.cloudfront.net/Story--landingCarousel/SLIDE+1+-+T-gradient.jpg",
  },
  {
    imageDesktop:
      "https://d3beinwe0ir5tu.cloudfront.net/Story--landingCarousel/SLIDE+2+-+X-gradient.jpg",
    imageMobile:
      "https://d3beinwe0ir5tu.cloudfront.net/Story--landingCarousel/SLIDE+2+-+T-gradient.jpg",
  },
  {
    imageDesktop:
      "https://d3beinwe0ir5tu.cloudfront.net/Story--landingCarousel/SLIDE+3+-+X-gradient.jpg",
    imageMobile:
      "https://d3beinwe0ir5tu.cloudfront.net/Story--landingCarousel/SLIDE+3+-+T-gradient.jpg",
  },
];

export const heroContent: HeroContent = {
  title: "Over 140 Years of Footwear Industry Experience",
  text: "Eighteen diverse brands of shoes, state-of-the-art patented technologies and bright, motivated people are at the core of our longstanding success.",
};
