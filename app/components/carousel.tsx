"use client";

import useEmblaCarousel from "embla-carousel-react";
import * as React from "react";

type Slide = {
  imageMobile: string;
  imageDesktop: string;
  buttonLabel?: string;
  buttonHref?: string;
};

type ImageCarouselProps = {
  slides: Slide[];
  title: string;
  text: string;
};

export function ImageCarousel({ slides, title, text }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative mx-auto w-full">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="relative h-[100dvh] flex-[0_0_100%] overflow-hidden"
            >
              <div className="absolute inset-0">
                <picture>
                  <source
                    srcSet={slide.imageMobile}
                    media="(max-width: 639px)"
                  />
                  <img
                    src={slide.imageDesktop}
                    alt={`${title} - Slide ${i + 1}`}
                    className="h-full w-full object-cover object-center"
                  />
                </picture>
              </div>

              <div className="relative flex h-full items-end px-4 pb-16 sm:px-12 lg:items-center lg:px-32 lg:pb-0">
                <div className="max-w-2xl text-left text-white text-shadow-lg">
                  <h2 className="text-3xl font-bold tracking-wide sm:text-5xl">
                    {title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white md:text-xl">
                    {text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-4 w-4 rounded-full border-2 transition-all ${
              index === selectedIndex
                ? "scale-125 border-white bg-white"
                : "border-white hover:border-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
